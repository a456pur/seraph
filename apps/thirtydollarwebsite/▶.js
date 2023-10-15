// hi hello this is the code for actually preloading and playing sequences

let MAX_BPM_LIMIT = 20_000      // wow this seems suspiciously easy to redefine 

// convert sequence to json
function getSequenceData() {
    let sequenceData = $('#sequence div').map(function (index) {
        return {
            index,
            element: $(this),
            sound: $(this).attr("sound"),
            pitch: $(this).attr("pitch"),
            volume: $(this).attr("vol"),
            action: $(this).attr("action"),
            icon: $(this).attr("img"),
            group: +$(this).parent().attr("group") || 0,
            amount: $(this).attr("amount"),
            operator: $(this).attr("num"),
            dualVal: [$(this).attr("val1"), $(this).attr("val2")]
        }
    }).toArray()
    return sequenceData
}

function beatLength(bpm) {
    return 60 / bpm * 1000
}

function modifyNumber(num, newNum, operator) {
    switch (operator) {
        case "add": return num + newNum
        case "multiply": return num * newNum
        default: return newNum
    }
}

// fetches any uncached sounds in the sequence to prevent lag spikes 
async function fetchRequiredSounds(sequence=getSequenceData()) {
    // for loops are better for async stuff
    let soundKeys = Object.keys(sounds)
    for (let i=0; i < sequence.length; i++) {
        let x = sequence[i]
        if (x.sound && x.sound != "sounds/_pause.wav" && !soundKeys.includes(x.sound)) {
            await fetchSound(x.sound)
            soundKeys.push(x.sound)
        }
    }
}

function preloadSequence(sequence=getSequenceData()) {
    let order = []

    let bpm = defaultTempo
    let volume = defaultVolume
    let loopTarget = 0
    let transposition = 0

    let index = 0
    let timer = 0
    let scrubPos = 0
    let pulseID = 0
    
    let startPositions = sequence.filter(x => x.action == "startpos" && (selectedDivider >= 0 ? x.group == selectedDivider : true))
    if (startPositions.length) scrubPos = startPositions[startPositions.length - 1].index
    else if (selectedDivider >= 0) scrubPos = (sequence.find(x => x.group == selectedDivider) || {}).index || 0

    let scrubbing = scrubPos > 0

    function untrigger(idx, except=[]) {
        let untriggered = []
        sequence.slice(idx + 1).map((x, y) => {
            if (!except.includes(x.action)) {
                if (x.triggered) { x.triggered = false; untriggered.push(idx + 1 + y) }
                if (x.remaining <= 0) { delete x.remaining; untriggered.push(idx + 1 + y) }
            }
            return x;
        })
        return untriggered
    }

    while (index < sequence.length) {
        let x = sequence[index]
        let incrementTimer = false

        if (scrubbing && index == scrubPos) scrubbing = false

        // if the event is a sound...
        if (x.sound) {
            let vol = !isNaN(+x.volume) ? +x.volume : 100 // dead certain theres a browser that wont support ?? 
            // construct the sound data
            let soundObj = {
                index,
                sound: x.sound,
                volume: volume * clamp((vol) / 100, 0, 4),
                pitch: clamp((+x.pitch || 0) + transposition, -72, 72),
                time: timer / 1000,
                element: x.element,
                img: x.element.find("img")
            }

            let nextSound = sequence[index + 1] || {}
            if (nextSound.action != "combine") incrementTimer = true
            if (!scrubbing) order.push(soundObj)
        }

        // if the event is an action...
        else if (x.action) {

            let val = Number(x.amount) || 0

            let actionObj = {
                index,
                action: x.action,
                pulse: true,
                trigger: true,
                scrub: scrubbing,
                time: timer / 1000,
                element: x.element,
                img: x.element.find("img")
            }

            // do something different for each action
            switch (x.action) {

                // ⏩ change BPM
                case "speed":
                    bpm = modifyNumber(bpm, val, x.operator)
                    bpm = Number(clamp(bpm, 5, MAX_BPM_LIMIT).toFixed(4))
                    actionObj.bpm = bpm
                    break;

                // 🔊 change volume
                case "volume":
                    volume = modifyNumber(volume, val, x.operator)
                    volume = Number(clamp(volume, 0, 600).toFixed(4))
                    actionObj.volume = volume
                    break;

                // ⏸ pause for duration
                case "stop":
                    let beatsRemaining = isNaN(x.remaining) ? val : x.remaining // i could have used ?? but i'm sure theres a browser out there that doesnt support it. fuck webdev
                    if (!scrubbing && beatsRemaining > 0) {
                        let timeToRemove = Math.min(1, beatsRemaining)
                        timer += beatLength(bpm) * timeToRemove

                        beatsRemaining -= 1
                        if (beatsRemaining < 0) beatsRemaining = 0

                        actionObj.remaining = beatsRemaining
                        sequence[index].remaining = beatsRemaining
                        index--
                        actionObj.trigger = false
                    }
                    else {
                        actionObj.finished = true
                        actionObj.duration = val
                    }
                    break;

                // 🔁 multiple loops
                case "loopmany":
                    let loopsRemaining = isNaN(x.remaining) ? val : x.remaining
                    if (!scrubbing && loopsRemaining > 0) {
                        loopsRemaining--
                        actionObj.remaining = loopsRemaining
                        sequence[index].remaining = loopsRemaining
                        index = loopTarget - 1
                        if (loopsRemaining < 1) actionObj.pulse = false
                        else actionObj.trigger = false

                        // untrigger: single loops, targets
                        actionObj.untriggered = untrigger(index, ["loopmany"])
                    }
                    else actionObj.skip = true;
                    break;

                // 🔂 single loop
                case "loop":
                    if (!x.triggered) {
                        sequence[index].triggered = true
                        index = loopTarget - 1

                        // untrigger: targets
                        actionObj.untriggered = untrigger(index, ["loop", "loopmany"])
                    }
                    else actionObj.skip = true;
                    break;

                // ◇ loop target
                case "looptarget":
                    loopTarget = index
                    break;

                // ❎ stop sounds
                case "cut":
                    break; // nothing, actually

                // 📍 startpos
                case "startpos":
                    break; // handled earlier 

                // ↔ combine
                case "combine":
                    if (scrubbing) actionObj.skip = true
                    break; // combining is checked for sounds

                // ⏺ go to target
                case "jump":
                    if (!x.triggered) {
                        let foundTarget = sequence.findIndex(e => e.action == "target" && !e.triggered && e.amount == x.amount)
                        if (foundTarget >= 0) {
                            sequence[index].triggered = true
                            // sequence[foundTarget].triggered = true  ???
                            actionObj.target = foundTarget
                            index = foundTarget
                        }

                        actionObj.untriggered = untrigger(index, ["loop", "loopmany", "jump", "target"])
                    }
                    else actionObj.skip = true;
                    break;

                // ⭕ target
                case "target":
                    actionObj.trigger = false
                    actionObj.pulse = false
                    break; // handled by jump action

                // 🔼 raise or lower pitch of all future sounds
                case "transpose":
                    transposition = modifyNumber(transposition, val, x.operator)
                    transposition = Number(clamp(transposition, -60, 60).toFixed(4))
                    break;

                // ⚡ flash
                case "flash":
                    break; // nothing here, go figure

                // ⛶ pulse screen
                case "pulse":
                    if (scrubbing) actionObj.skip = true // disable pulse scrubbing, will fix eventually
                    else {
                    actionObj.count = Math.floor(clamp(+x.dualVal[0], 0, 1000))
                    actionObj.frequency = clamp(Number(x.dualVal[1]).toFixed(4), 0, 1000)
                    actionObj.trigger = false
                    actionObj.pulseID = pulseID
                    if (!actionObj.frequency) actionObj.skip = true

                    if (actionObj.count > 1 && actionObj.frequency > 0) {
                        for (let i=1; i < actionObj.count; i++) {
                            let pulseTime = timer + ((beatLength(bpm) * actionObj.frequency * i))
                            if (!order.find(e => e.action == x.action && e.time == pulseTime)) order.push({
                                index,
                                action: x.action,
                                pulse: true,
                                pulseID,
                                trigger: i == actionObj.count - 1,
                                time: pulseTime / 1000,
                                element: x.element, img: actionObj.img
                            })
                        }
                        pulseID++
                    }
                    else actionObj.trigger = true
                    if (actionObj.count < 1) actionObj.stopPulses = true
                    }
                    break;

                // 🎨 background color
                case "bg":
                    actionObj.bgColor = x.dualVal[0].match(colorRegex) ? x.dualVal[0] : defaultBG
                    actionObj.fadeTime = scrubbing ? 0.1 : clamp(Number(x.dualVal[1]).toFixed(4), 0, 200)
                    break;
            }

            if (!actionObj.skip) order.push(actionObj)

        }

        index++
        if (!scrubbing && incrementTimer) timer += beatLength(bpm)
    }
    return order.sort((a, b) => a.time - b.time)
}

let lastPos = -200 // last scroll position
let lastPulse = 0 // last pulse action
let startTime = 0 // time when sequence started

let playingSequence = [];
let nextSoundToQueue = 0;
let nextAction = 0;

function playSequence(sequence) {
    updateTempo(defaultTempo)
    setVolume(defaultVolume)
    lastPulse = 0
    startTime = soundcloud.currentTime

    playingSequence = sequence;
    nextSoundToQueue = 0;
    nextAction = 0;
    queueSounds();
    checkActions();
}

// how many seconds of sound to queue ahead.
const queueAhead = 5;

function queueSounds() {
    for ("tempooptimizer wtf is this for loop -colon"; nextSoundToQueue < playingSequence.length; nextSoundToQueue++) {
        let x = playingSequence[nextSoundToQueue];
        if (startTime + x.time > soundcloud.currentTime + queueAhead) break;
        
        // this is either a sound or a cut
        if (x.action === "cut") cutSounds(startTime + x.time);
        else if (x.sound !== undefined) {
            let pitch = semitonesToPercent(clamp(x.pitch, -72, 72))
            playSound(x.sound, { pitch, playAt: startTime + x.time, index: x.index, volume: x.volume / 200 })
        }
    }
    if (nextSoundToQueue < playingSequence.length) {
        // use setTimeout for background playback, requestAnimationFrame for less lag spikes -TempoOptimizer
        // works for me -Colon
        setTimeout(queueSounds, 1000);
    }
}

function checkActions() {
    if (!active) return;

    // run for each action where time > current time
    for ("ksdjfsdf8sdkfjsdkfjak"; nextAction < playingSequence.length; nextAction++) {
        let x = playingSequence[nextAction];
        if (startTime + x.time > soundcloud.currentTime) break; // stops the loop
        if (x.triggered) continue; // does not stop the loop

        x.triggered = true
        let icon = x.element
        let img = x.img
        
        // sounds just bounce!
        if (x.sound) {
            icon.runAnimation('bounce')
        }

        else if (x.action && !settings.noAnimations) {

            if (x.pulse) icon.runAnimation('pulse');
            if (x.trigger) img.runAnimation('triggered');

            if (x.untriggered && x.untriggered.length) {
                x.untriggered.forEach(n => {
                    let foundUntrigger = $('#sequence div').eq(n)
                    foundUntrigger.find('img').removeClass('triggered')
                })
            }

            // here we go again!
            switch (x.action) {

                case "speed":
                    updateTempo(x.bpm)
                    break;

                case "volume":
                    setVolume(x.volume);
                    break;

                case "stop":
                    let beatsLeft = icon.find('p')
                    beatsLeft.attr("triggeredCountdown", true)
                    if (x.finished) beatsLeft.text(x.duration)
                    else beatsLeft.text(x.remaining + 1)
                    break;

                case "loopmany":
                    let loopsLeft = icon.find('p')
                    loopsLeft.attr("triggeredCountdown", true)
                    if (x.remaining <= 0) loopsLeft.text("")
                    else loopsLeft.text(x.remaining)
                    break;

                case "jump":
                    let jumpTarget = $('#sequence div').eq(x.target)
                    jumpTarget.runAnimation('pulse')
                    jumpTarget.find('img').runAnimation('triggered')
                    break;

                case "flash":
                    if (!x.scrub) $('#everything').runAnimation('screenflash');
                    break;

                case "pulse":
                    if (x.pulseID > lastPulse) lastPulse = x.pulseID
                    if (!x.scrub && !x.stopPulses && (lastPulse == x.pulseID)) $('body').runAnimation('screenpulse');
                    break;

                case "bg":
                    if (!x.ignore) $('html').css('transition-duration', x.fadeTime + "s").css('background-color', x.bgColor)
            }

        }
        
        if (settings.autoScroll) {
            let pixelsBeforeScroll = 600
            let newPos = icon.prop("offsetTop") - 150
            if (Math.abs(newPos - lastPos) > pixelsBeforeScroll) {
                $('#everything').stop().animate({ scrollTop: newPos }, 350)
                lastPos = newPos
            }
            if (x.action == "divider") lastPos = -1000 // dividers always trigger autoscroll
        }
    }

    if (nextAction < playingSequence.length) {
        requestAnimationFrame(checkActions);
    } else {
        cancel({ keepAnimations: true });
    }
}
