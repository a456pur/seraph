let sounds = {}
let soundcloud = new AudioContext();
let recent = new Set()

const mobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) 
if (mobile) $('p[mobile]').each(function() { $(this).text($(this).attr('mobile')); $('.nomobile').hide() })

const intros = [
    {name: $('#caption').text(), path: "assets/dont_you_lecture_me.wav" },
    {name: "how you gonna talk behind my back when you deadass built like a", path: "assets/you_deadass_built_like_a.wav" },
    {name: "white people be like", path: "assets/white_people_be_like.wav" }
]

const actions = [
    { shortcut: "t", action: "Set tempo", amount: true, name: "speed", image: "assets/action_speed.png", default: 300, set: [10, 10000], add: [-10000, 10000], multiply: [0.01, 1000, 0.1] },
    { shortcut: "v", action: "Set volume", amount: true, name: "volume", image: "assets/action_volume.png", default: 100, set: [0, 600, 1, "%"], add: [-600, 600, 1, "%"], multiply: [0.01, 1000, 0.1] },
    { shortcut: "p", action: "Pause for duration", amount: true, name: "stop", image: "assets/action_stop.png", default: 4, set: [0, 1000] },
    { shortcut: "m", action: "Transpose", amount: true, name: "transpose", image: "assets/action_transpose.png", default: 1, set: [-60, 60], add: [-60, 60], multiply: [0.01, 100, 0.1]  },
 
    { shortcut: "l", action: "Loop", amount: true, name: "loopmany", image: "assets/action_loopmany.png", default: 4, set: [1, 1000] },
    { shortcut: "r", action: "Loop once", name: "loop", image: "assets/action_loop.png" },
    { shortcut: "s", action: "Set loop start point", name: "looptarget", image: "assets/action_looptarget.png" },
    { shortcut: "c", action: "Combine sounds", name: "combine", image: "assets/action_combine.png" },
    
    { shortcut: "g", action: "Go to target", isTarget: true, name: "jump", image: "assets/action_jump.png", set: [1, 9999] },
    { shortcut: "a", action: "Target", isTarget: true, name: "target", image: "assets/action_target.png", set: [1, 9999] },
    { shortcut: "x", action: "Stop all sounds", name: "cut", stopSounds: true, image: "assets/action_cut.png" },
    { shortcut: "o", action: "Set start position", name: "startpos", image: "assets/action_startpos.png" },

    { shortcut: "d", action: "Add divider", name: "divider", image: "assets/action_divider.png" },
    { shortcut: "f", action: "Flash screen", name: "flash", image: "assets/action_flash.png" },
    { shortcut: "u", action: "Pulse screen", amount: true, twoValues: [[0, 1000], [0.1, 128]], scroll: [0, 1], default: [1, 2], name: "pulse", image: "assets/action_pulse.png" },
    { shortcut: "b", action: "Set background color", amount: true, colorMode: true, twoValues: [["color"], [0, 128]], scroll: [1, 0.25], default: ["X", 1], name: "bg", image: "assets/action_bg.png" }
]
actions.forEach(x => { $('#actions').append(`<div class="action" action="${x.name}" info="${x.action}" key="${x.shortcut.toUpperCase()}"><img action="${x.name}" alt="${x.action}" src="${x.image}">${x.amount ? "<p>+</p>" : ""}</div>`) })

let soundList = []
fetch("./sounds.json").then(x => x.json()).then(list => {
    soundList = list
    $('#iconboxLoading').hide()
    $('#icons').removeClass('loadingIcons')
    list.forEach(x => {
        let imageLink = (!x.emoji && x.id.match(/[a-z0-9]/i)) ? `icons/${x.img || x.id}.png` : `https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${(x.emoji || x.id).codePointAt(0).toString(16)}.svg`
        $('#icons').append(`<div class="sound" soundName="${x.name}" soundOrigin="${x.source || ""}" sound="sounds/${x.id}.wav" str="${x.id}" ${(x.tags || []).map(x => "tag_" + x).join(" ")}><img alt="${x.name}" src="${imageLink}"></div>`)
        lastGroup = x.group

        if (settings.proMode) {
            $('.hotbarTab').first().trigger('click')
            $('#proHotbar').show()
            $('#extraPadding').show()
            buildHotbar()
        }
    })
}).catch((e) => {
    console.error(e)
    $('#icons img').hide()
    $('#icons').addClass('loadingIcons')
    $('#iconboxLoading').show()
    $('#loadingText').text("Something went wrong!")
    $('#errorInfo').text(e.message)
})

let hotbar = $('#hotbarNotes')
function buildHotbar(filter="sounds") {
    $('#hotbarNotes .placed').removeClass('placed')
    hotbar.html("") // clear hotbar

    if (filter == "recent") {
        let recentNotes = [...recent].slice(-48).reverse()
        recentNotes.forEach(x => {
            if (x.startsWith(".")) hotbar.append($(`#actions div[action=${x.slice(1)}]`).prop('outerHTML') || "") // action
            else hotbar.append($(`#icons div[str=${x}]`).prop('outerHTML') || "") // sound
        })
        return
    }

    // whether to pull from sounds, actions, or both
    let pool = (filter == "actions" ? "#actions div" : ["recent", "favorite"].includes(filter) ? "#icons div, #actions div" : "#icons div")
    
    $(pool).each(function() {
        let x = $(this)
        if (filter == "notes" && !x.is('[tag_note]')) return
        else if (filter == "percussion" && !x.is('[tag_percussion]')) return
        hotbar.append(x.prop('outerHTML'))
    })
}

function updateRecent(id) {
    recent.delete(id); recent.add(id)
}

let defaultBG = "#36393c"
let colorRegex = /^#[a-f0-9]{6}$/i

let cloneSort = false

$('#sequence').sortable({
    tolerance: "pointer",
    helper: "clone",
    containment: "#sequence",
    placeholder: "sortPlaceholder",
    items: "div",
    cursor: "move",
    delay: mobile ? 1500 : 0,
    forcePlaceholderSize: true, forceHelperSize: true,
    start: function(event, ui) {
        cloneSort = shiftHeld || altHeld
        if (cloneSort) ui.item.addClass('shiftPlaceholder')
        ui.placeholder.html(ui.item.html())
    },
    stop: function(event, ui) {
        if (cloneSort) {
            ui.item.clone().insertAfter(ui.item);
            $(this).sortable('cancel');
            ui.item.clone()
        }
        cloneSort = false
        $('.shiftPlaceholder').removeClass('shiftPlaceholder')
        $('.placed').removeClass('placed')
        cancel()
        if ($("#sequence section").length > 1) {
            if (ui.item.attr("action") == "divider") deselectSection()
            syncSections()
        }
    }
})

$(document).on('mouseover', '#icons div', function () {
    let soundCredit = $(this).attr('soundName')
    let soundOrigin = $(this).attr('soundOrigin')
    $('#soundText').hide()
    $('#soundName').text(soundCredit)
    $('#soundOrigin').text(soundOrigin ? ` (${soundOrigin})` : "")
    $('#soundInfo').show()
})

$(document).on('mouseleave', '#icons div', function () {
    $('#soundInfo').hide()
    $('#soundText').show()
})

$(document).on('mouseover', '#actions div', function () {
    $('#actionText').hide()
    $('#actionInfo').show()
    $('#actionName').text($(this).attr('info'))
    if (!mobile && !settings.noActionShortcuts) $('#actionKey').text("(" + $(this).attr('key') + ")").show()
    else $('#actionKey').hide()
})

$(document).on('mouseleave', '#actions div', function () {
    $('#actionInfo').hide()
    $('#actionText').show()
})

$(document).on('mouseover', '#sequence div', function () {
    if (shiftHeld || altHeld) $(this).addClass('holdingShift')
})

$(document).on('mouseleave', '#sequence div', function () {
    $('.holdingShift').removeClass('holdingShift')
})

$(document).on('mouseover', '#sequence section', function () {
    if (ctrlHeld && hasDividers()) $(this).addClass('holdingCtrl')
})

$(document).on('mouseleave', '#sequence section', function () {
    $('.holdingCtrl').removeClass('holdingCtrl')
})

$(document).on('mouseleave', '#sequence .removedDivider', function (e) {
    if (!e.isTrigger) $(this).removeClass('removedDivider')
})

$(document).on('mouseover', '.hotbarTab', function() {
    $('#hotbarText').css('color', 'var(--yellowfont)').text($(this).attr('desc')).show()
    $('#hotbarContext').css('color', 'var(--yellowfont)').text("(" + ($(this).index() + 1) + ")").show()
})

$(document).on('mouseover', '#hotbarNotes div.sound', function() {
    let origin = $(this).attr("soundOrigin")
    $('#hotbarText').css('color', 'var(--greenfont)').text($(this).attr('soundName')).show()
    if (!mobile) $('#hotbarContext').css('color', 'var(--greenfont)').text(origin ? `(${origin})` : "").show()
})

$(document).on('mouseover', '#hotbarNotes div.action', function() {
    $('#hotbarText').css('color', 'var(--bluefont)').text($(this).attr('info')).show()
    if (!mobile && !settings.noActionShortcuts) $('#hotbarContext').css('color', 'var(--bluefont)').text("(" + $(this).attr('key') + ")").show()
})

$(document).on('mouseleave', '#hotbarNotes div, .hotbarTab', function (e) {
    $('#hotbarText, #hotbarContext').text("").hide()
})

// prevents right click menu from showing
$(document).on('click contextmenu', '.iconbox, #proHotbar', function () { return false })

$(document).on('click contextmenu', '#icons div, #hotbarNotes div.sound', function (event) {
    cancel()
    let sound = $(this).attr('sound')
    let soundID = $(this).attr('str')
    let added = $(this.outerHTML)
    let pitch = null
    if (event.type == "contextmenu") {
        if (!settings.noAnimations) $(this).runAnimation('placed')
        playSound(sound)
        return false
    }
    if (pitch) added.append(`<p>${pitch >= 0 ? "+" : ""}${pitch}</p>`) // ???
    if (!sound.startsWith("_")) {
        if (!settings.noAnimations) added.runAnimation('placed')
        playSound(sound, { pitch: semitonesToPercent(pitch)} )
    }
    added.removeAttr("soundorigin")
    added.removeAttr("soundname")
    updateRecent(soundID);
    addToSequence(added)
})

$(document).on('click contextmenu', '#actions div, #hotbarNotes div.action', function (event) {
    cancel()
    let actionName = $(this).attr('action')
    let action = actions.find(x => x.name == actionName)
    if (!action) return

    let added = $(this.outerHTML)
    added.removeAttr("info").removeAttr("key")

    if (action.amount) {
        stash = added
        if (event.type == "contextmenu" && action.default) {
            if (action.twoValues) return addAdvancedAction(actionName, action.default)
            else return addAction(actionName, action.default)
        }
        else {
            if (shiftHeld) stash.attr("addToStart", true)
            let actionPopup = $(`#action_${actionName}`)
            actionPopup.css('display', 'flex')

            // action editing - fill values
            if (replaceAction && replaceAction.attr("action") == actionName) {
                if (action.twoValues) {
                    $(actionPopup.find('input').first().val(replaceAction.attr("val1"))).trigger('input')
                    $(actionPopup.find('input').last().val(replaceAction.attr("val2"))).trigger('input')
                }
                else $(actionPopup.find('input').first().val(replaceAction.attr("amount"))).trigger('input')
            }

            return
        }
    }
    else if (action.isTarget) {
        let nextFree = 1
        while ($(`.action[action=jump][amount=${nextFree}]`).length && $(`.action[action=target][amount=${nextFree}]`).length) nextFree++
        added.attr("amount", nextFree).append(`<p>${nextFree}</p>`)
    }
    else if (action.set) {
        if (action.showPlus) added.attr("num", "plus")
        added.attr("amount", action.default).append(`<p>${getPrefix(added.attr("num"), action.default)}${action.default}</p>`)
    }
    if (action.stopSounds) stopSounds()
    if (!settings.noAnimations) added.addClass('placed')
    if (action.name == "divider") {
        if (!shiftHeld && selectedDivider >= 0) selectedDivider++
    }
    
    updateRecent("." + actionName)
    addToSequence(added)
})

function getPrefix(num, amt) {
    return num == "plus" ? (amt >= 0 ? "+" : "") : num == "add" ? "+" : num == "multiply" ? "⨯" : ""
}

function addToSequence(element, noPrepend, copyGroup) {
    let startAttr = element.attr("addToStart")
    if (startAttr) element.removeAttr("addToStart")
    let prependMode = (shiftHeld && !noPrepend) || startAttr
    let container = $(`#sequence section[group="${selectedDivider}"]`)
    if (copyGroup >= 0 && selectedDivider != copyGroup) container = []
    if (!container.length) container = prependMode ? $(`#sequence section`).first() : $(`#sequence section`).last()
    if (!container.length) { // jquery isn't exactly good at 'or', whatever
        $("#sequence").append(`<section group="0"></section>`)
        return addToSequence(element)
    }
    prependMode ? container.prepend(element) : appendToSection(container, element)
    if (element.attr("action") == "divider") syncSections()
}

// add to end, or second last if it ends with a divider
function appendToSection(container, element) {
    let lastChild = container.children().last()
    let hasDivider = (lastChild.attr("action") == "divider")
    if (hasDivider) element.insertBefore(lastChild)
    else container.append(element)
}

function addAction(action, input, num="set", element=stash, dontAppend=false) {
    if (typeof input == "string" && input.startsWith("#")) input = $(input).val()
    if (!element || isNaN(input)) return
    let amount = Number(Number(input).toFixed(3)) // tofixed converts to string lmao
    let foundAction = actions.find(x => x.name == action)
    let actionData = foundAction[num]

    amount = clamp(amount, actionData[0], actionData[1])
    let prefix = getPrefix(num, amount)
    let amountStr = prefix + String(amount) + (actionData[3] || "")
    //element.attr("min", actionData[0]).attr("max", actionData[1])
    if (num != "set") element.attr("num", num)
    if (!isNaN(actionData[2])) element.attr("step", actionData[2])
    if (actionData[3]) element.attr("suffix", actionData[3])
    if (!settings.noAnimations) element.addClass('placed')
    element.attr("amount", amount).find('p').text(amountStr)

    if (replaceAction) editAction(element)
    else if (!dontAppend) addToSequence(element)
    else return element
    updateRecent("." + action)
    if (stash) stash = null
    $('.popup').hide()
}

// eh i'm just gonna make a new function for this
function addAdvancedAction(action, inputs, element=stash, dontAppend=false) {
    let foundAction = actions.find(x => x.name == action)
    if (!foundAction || !Array.isArray(inputs)) return
    let cleanInputs = inputs.map((x, y) => {
        let bounds = foundAction.twoValues[y]
        if (bounds == "color") x = x.match(colorRegex) ? x : defaultBG
        else if (Array.isArray(bounds)) x = clamp(x, bounds[0], bounds[1])
        return x
    })

    element.attr("advanced", true).attr("val1", cleanInputs[0]).attr("val2", cleanInputs[1])

    if (foundAction.colorMode) element.find('p').html(`<span style="color: ${cleanInputs[0]}; margin-right: 2.5px">⬤</span> <span>${cleanInputs[1]}<span>`)
    else element.find('p').text(`${cleanInputs[0]}, ${cleanInputs[1]}`)

    if (replaceAction) editAction(element)
    else if (!dontAppend) addToSequence(element)
    else return element
    if (stash) stash = null
    $('.popup').hide()
}

function editAction(element) {
    replaceAction.replaceWith(element)
    replaceAction.runAnimation('placed')
    replaceAction = null
}

function syncSections() {
    let noteGroups = [""]
    let dividerIndex = 0
    let collapsedSections = []
    $('.placed').removeClass('placed')
    $('.selectedDivider').removeClass('selectedDivider')
    $('#sequence div').each(function() {
        let isDivider = $(this).attr("action") == "divider"
        if (isDivider) {
            let oldSection = Number($(this).attr("section"))
            if (oldSection >= 0 && $(this).parent().hasClass("sectionHidden")) collapsedSections.push(dividerIndex)
            $(this).attr("section", dividerIndex)
        }

        noteGroups[dividerIndex] += $(this).prop("outerHTML")

        if (isDivider) {
            dividerIndex++
            noteGroups.push("")
        }
    })
    $('#sequence').html(noteGroups.map((x, y) => `<section class="${y == selectedDivider ? 'selectedDivider' : ''} ${collapsedSections.includes(y) ? "sectionHidden" : ""}" group="${y}">${x}</section>`).join(""))
    if (dividerIndex > 0) $('#sectionSettings').show()
    else $('#sectionSettings').hide()
}

function hasDividers() {
    return $("#sequence section").length > 1
}

function deselectSection() {
    selectedDivider = -1
    if (ctrlHeld) $('.selectedDivider').addClass('removedDivider')
    displaySection()
}

function changeSection(change, scroll) {
    let totalDividers = $('#sequence section').length
    if (totalDividers <= 1) return selectedDivider = -1

    if (selectedDivider == -1 && change < 0) selectedDivider = totalDividers - 1
    else if (selectedDivider == -1 && change > 0) selectedDivider = 0
    else selectedDivider = selectedDivider + change

    if (selectedDivider < 0) selectedDivider = totalDividers - 1
    else if (selectedDivider >= totalDividers) selectedDivider = 0

    displaySection(scroll)
}

function displaySection(scroll) {
    $(".selectedDivider").removeClass("selectedDivider")
    if (selectedDivider >= 0) {
        let foundDivider = $(`#sequence section[group="${selectedDivider}"]`)
        foundDivider.addClass("selectedDivider")
        $('.requiresSelected').removeClass('cantSelect')
        $('#selectedSection').text(selectedDivider + 1)
        if (foundDivider.hasClass("sectionHidden")) { $('#hideSection').hide(); $('#showSection').show() }
        else { $('#hideSection').show(); $('#showSection').hide() }
        if (!active && scroll) $('#everything').stop().animate({ scrollTop: foundDivider.prop("offsetTop") - 150 }, 100)
    }
    else {
        $('.requiresSelected').addClass('cantSelect')
        $('#selectedSection').text("None")
        $('#hideSection').show();
        $('#showSection').hide()
    }
}

function toggleSectionVisibility(section=selectedDivider) {
    if (section < 0) return
    $(`#sequence section[group="${section}"]`).toggleClass('sectionHidden')
    displaySection()
}

$(document).on('click contextmenu', '#sequence section', function (e) {
    if (!ctrlHeld) return
    e.stopPropagation()
    if (!hasDividers()) return
    let dividerGroup = parseInt($(this).attr("group"))
    if (isNaN(dividerGroup)) return

    if (e.type == "contextmenu") {
        toggleSectionVisibility(dividerGroup)
        return false
    }

    if ($(this).hasClass("selectedDivider")) return deselectSection()

    else {
        selectedDivider = dividerGroup
        if (isNaN(selectedDivider)) return selectedDivider = -1
        displaySection()
    }
})

$(document).on('click', '#sequence div', function () {
    if (ctrlHeld) return
    cancel()
    if (shiftHeld || altHeld) {
        let copy = $(this).clone()
        if (!settings.noAnimations) copy.addClass('placed')
        copy.insertAfter($(this))
        playSound($(this).attr("sound"), { pitch: getPitch($(this)), volume: getVolume($(this)), stopPrevious: true })
    }
    else $(this).remove()
    if ($(this).attr("action") == "divider") {
        deselectSection()
        syncSections()
    }
})

$(document).on('contextmenu', '#sequence div', function () {
    if (ctrlHeld || active) return false

    let snd = $(this).attr("sound")
    let acn = $(this).attr("action")
    if (shiftHeld || altHeld) { // clone and append to end
        let copy = $(this).clone()
        if (!settings.noAnimations) copy.addClass('placed')
        addToSequence(copy, true, Number($(this).parent().attr("group")))
        playSound(snd, { pitch: getPitch($(this)), volume: getVolume($(this)), stopPrevious: true})
        return false
    }

    else if ($(this).hasClass("action") && acn) {
        let foundAction = actions.find(x => x.name == acn)
        if (!foundAction || !foundAction.amount) return false
        replaceAction = $(this)
        let actionBtn = $(`#actions div[action="${acn}"]`)
        if (!actionBtn.length) return
        actionBtn.trigger("click")
        return false
    }

    else if (!active && snd) {
        if (!settings.noAnimations) $(this).runAnimation('placed')
        playSound(snd, { pitch: getPitch($(this)), volume: getVolume($(this)), stopPrevious: true})
        return false
    }
})

// hotbar tabs
$(document).on('click', '.hotbarTab:not(.selectedTab)', function () {
    $('.selectedTab').removeClass('selectedTab')
    $(this).addClass('selectedTab')
    buildHotbar($(this).attr("tab"))
})

$("#everything").scroll(function(){
    if (settings.dontFadeProBar || mobile) return
    let normal = 30
    let top = 200 / 1.5
    let dist = Math.min(normal, ($(this).scrollTop() - 200) / 1.5)
    let percent = Math.max(0, ((dist + top) / (normal + top)) * 100)

    $("#proHotbar").css("bottom", dist + "px")
    .css("opacity", percent + "%")
    .css("visibility", percent < 2 ? "hidden" : "visible")
});

// no idea what this is for but probably some sorting bug
function whatthefuck(el, index) {
    $('#sequence').sortable('cancel')
    el.remove().insertAfter('#sequence div')[index]
}

let lastY = null
let mobileCooldown = false
$(document).on('wheel touchmove', '#sequence div', function(event) {
    let el = $(this)
    if (event.type == "touchmove") {
        if (mobileCooldown || $('.ui-sortable-helper').length) return
        let clientY = event.originalEvent.touches[0].clientY;
        let sensitivity = 50
        if (clientY > (lastY + sensitivity)) event.arrowDelta = 21
        else if (clientY < (lastY - sensitivity)) event.arrowDelta = -21
        else return

        lastY = clientY;
        mobileCooldown = true
        setTimeout(() => { mobileCooldown = false; $('#sequence div').scrollTop(200) }, 25);
        $('#sequence div').scrollTop(200)
    }
    if (active || $(this).hasClass('ui-sortable-helper')) return
    let isVolume = (ctrlHeld && el.attr("sound"))
    let downward = (event.arrowDelta || event.originalEvent.deltaY) > 0
    let foundAction = actions.find(x => x.name == el.attr("action"))
    let foundText = el.attr("amount") || el.attr("pitch") || el.find("p").text()
    let shift = Number(foundText) || 0
    if (isVolume) {
        shift = Number(el.attr("vol"))
        if (isNaN(shift) || shift < 0) shift = 100
    }

    if (el.attr("sound") && !el.attr("str").startsWith("_")) {
        let shiftChange = ((downward ? -1 : 1) * (shiftHeld ? (isVolume ? 10 : 6) : altHeld ? 0.2 : 1))

        if (!isVolume) {
            shift += shiftChange
            shift = Number(clamp(shift, -60, 60).toFixed(2))
            let prefix = shift > 0 ? "+" : ""
            if (foundText && shift == 0) el.find("p").remove()
            else if (!el.find("p").length) el.append(`<p>${prefix + shift}</p>`)
            else el.find("p").text(prefix + shift)
            el.attr("pitch", shift)
            playSound(el.attr("sound"), { pitch: semitonesToPercent(shift), volume: getVolume(el), stopPrevious: true })
        }

        else {
            if (shiftChange == 1 || shiftChange == -1) shiftChange *= 2
            shift += shiftChange
            shift = Number(clamp(shift, 0, 400).toFixed(2))
            if (shift == 100) el.find("vol").remove()
            else if (!el.find("vol").length) el.append(`<vol>${shift}%</vol>`)
            else el.find("vol").text(shift + "%")
            el.attr("vol", shift)
            playSound(el.attr("sound"), { pitch: getPitch(el), volume: shift / 100 / 2, stopPrevious: true })
        }
    }
    else if (el.attr("action") && el.attr("amount")) {
        let bounds = foundAction[el.attr("num") || "set"]
        let step = bounds[2] || 1
        if (shiftHeld) step *= 10
        else if (altHeld) step /= 10
        shift += downward ? step * -1 : step
        shift = Number(shift.toFixed(4))
        shift = clamp(shift, bounds[0], bounds[1] || 999)
        el.attr("amount", shift)
        el.find("p").text(getPrefix(el.attr("num"), shift) + shift + (bounds[3] || ""))
    }
    else if (foundAction && el.attr("advanced")) {
        let scrollInfo = foundAction.scroll
        let valStr = scrollInfo[0] == 0 ? "val1" : "val2"
        let scrollVal = +el.attr(valStr)
        let twoBounds = foundAction.twoValues[scrollInfo[0]]
        let step = +scrollInfo[1] || 1
        if (shiftHeld) step *= 10
        else if (altHeld) step /= 10
        scrollVal += downward ? step * -1 : step
        scrollVal = clamp(scrollVal.toFixed(4), twoBounds[0], twoBounds[1])
        el.attr(valStr, scrollVal)
        if (foundAction.colorMode) el.find("p").children().last().text(el.attr("val2"))
        else el.find("p").text(`${el.attr("val1")}, ${el.attr("val2")}`)
    }
})

// prevent ctrl+zoom
$('.iconbox, #proHotbar').bind('mousewheel DOMMouseScroll', function(e) { if (e.ctrlKey) e.preventDefault(); });

let intro = 0
let lecture = null
let cachedIntros = []
let mainNode = new GainNode(soundcloud)

$('#caption').click(function() {
    intro++
    if (intro >= intros.length) intro = 0
    $('#caption').text(intros[intro].name).runAnimation('placed')
    stopIntro()
    loadIntro()
    cancel()
})

function loadIntro() {
    let introPath = intros[intro].path
    if (cachedIntros[introPath]) lecture = cachedIntros[introPath]
    else {
        fetch(introPath)
        .then(res => res.arrayBuffer())
        .then(buffer => soundcloud.decodeAudioData(buffer))
        .then(data => {
            cachedIntros[introPath] = data
            lecture = data
        })
    }
}
loadIntro()

let activeIntro = null
function playIntro() {
    stopIntro()
    let introSound = new AudioBufferSourceNode(soundcloud, { buffer: lecture })
    mainNode.connect(soundcloud.destination)
    introSound.connect(mainNode)
    introSound.start()
    activeIntro = introSound
    introSound.addEventListener("ended", () => {
        if (introSound.dead) return
        beginSequence()
        stopIntro()
    })
}

function stopIntro() {
    if (!activeIntro) return
    activeIntro.dead = true
    activeIntro.disconnect()
    activeIntro = null
}

document.addEventListener('scroll', function (event) { if ($(event.target).is("#sequence div")) $(event.target).scrollTop(200) }, true);
$('#sequence').on('DOMSubtreeModified', function(event) { $('#sequence div').scrollTop(200) });

// https://stackoverflow.com/a/45036752
$.fn.runAnimation = function(className) {
    if (settings.noAnimations) return
    let el = $(this)[0]
    el.style.animation = "none"
    el.offsetHeight
    el.style.animation = null
    $(this).addClass(className)
}

let stash = null
let replaceAction = null
let defaultTempo = 300
let defaultVolume = 100

let preloaded = null
let active = false
let scrubbing = false
let ctrlHeld = false
let shiftHeld = false
let altHeld = false
let onCooldown = false
let selectedDivider = -1

let volume = 0
updateTempo(defaultTempo)
setVolume(defaultVolume)

function clamp(num, min, max) { return Math.min(Math.max(num , min), max) }
function percentToSemitones(percent) { return Math.log(percent, 2) * 12 }
function semitonesToPercent(semitones) { return Math.pow(2, Number(semitones) / 12) }
function getPitch(element) { return semitonesToPercent(element.find('p').text() || "0") }
function getVolume(element) { return Number(element.find('vol').text().slice(0, -1) || 100) / 200 }

function cancel(cancelOptions={}) {
    if ((!cancelOptions.keepAnimations && active) || cancelOptions.stopSounds) stopSounds()
    active = false
    preloaded = null
    updateTempo(defaultTempo)
    setVolume(100)
    if (!cancelOptions.keepAnimations) {
        $('.bounce').removeClass('bounce')
        $('.pulse').removeClass('pulse')
    }
    $('.playInfo').show()
    $('.stopInfo').hide()
    $('.pinnedHidden').removeClass("pinnedHidden")
    $('#proHotbar').removeClass("playing")
    $('.triggered').removeClass('triggered')
    $('#sequence p[triggeredCountdown]').each(function() { resetAmount($(this)) })
    $('html').removeAttr("style")
    stopIntro()
}

function resetAmount(el) {
    let parent = el.parent()
    el.text(getPrefix(parent.attr('num'), +parent.attr('amount')) + parent.attr('amount') + (parent.attr('suffix') || ""))
    el.removeAttr("triggeredcountdown")
}

// on play button
function startSequence(instant=false) {
    if (onCooldown || active || $('#sequence div').length < 1) return
    onCooldown = true
    setTimeout(() => { onCooldown = false }, 250);
    stopSounds()
    cancel()
    active = true
    $('#sectionSettings.pinnedSettings').addClass("pinnedHidden")
    $('#proHotbar').addClass("playing")
    $('.playInfo').hide()
    $('.stopInfo').show()

    preloaded = preloadSequence()

    if (!instant && selectedDivider < 0) playIntro()
    else beginSequence()
}

// after "don't you lecture me"
function beginSequence() {
    if (!preloaded) return
    $('.placed').removeClass('placed')
    playSequence(preloaded)
}

function updateTempo(BPM) {
    $('#BPM').text(+BPM.toFixed(4))
}

function setVolume(percent) {
    volume = Number(clamp(percent / 200, 0, 3).toFixed(4))
    $('#volume').text(+(volume * 200).toFixed(4))
}

// currently playing sounds are stored here
let activeSounds = []; 

// remove any finished sounds from the active list
function clearPlayedSounds() {
    activeSounds = activeSounds.filter(x => !x.sound.finished)
}

// destroy sound
function killSound(snd, vol, clearList=true) {
    snd.finished = true
    snd.disconnect()
    vol.disconnect()
    if (clearList) clearPlayedSounds()
}

// stop all sounds
function stopSounds() {
    activeSounds.forEach(x => killSound(x.sound, x.gainNode, false))
    nextSoundToQueue = playingSequence.length;
    clearPlayedSounds()
}

// fetches and prepares sound
let currentlyFetching = {} // prevent earrape when trying to load the same sound multiple times
async function fetchSound(name) {
    if (!sounds[name] && name != "sounds/pause.wav") {
        currentlyFetching[name] = true
        let newSound = await fetch(name).then(res => res.arrayBuffer()).then(buffer => soundcloud.decodeAudioData(buffer))
        sounds[name] = newSound
        delete currentlyFetching[name]
    }
}

async function playSound(name, soundSettings={}) {
    if (!name || name == "sounds/_pause.wav") return
    if (currentlyFetching[name] && !soundSettings.playAt) return
    if (!sounds[name]) await fetchSound(name)
    let snd = new AudioBufferSourceNode(soundcloud, { buffer: sounds[name], playbackRate: soundSettings.pitch || 1 })
    let vol = new GainNode(soundcloud, { gain: !isNaN(soundSettings.volume) ? soundSettings.volume : 0.5 })
    vol.connect(soundcloud.destination)
    snd.connect(vol)

    if (soundSettings.stopPrevious) { // clear all sounds with the same name
        let foundSameSounds = activeSounds.filter(x => x.name == name)
        foundSameSounds.forEach(x => killSound(x.sound, x.gainNode, false))
        clearPlayedSounds()
    }
    
    let start = soundSettings.playAt || 0;
    activeSounds.push({sound: snd, gainNode: vol, index: soundSettings.index || 0, name, pitch: soundSettings.pitch || 1, volume, cut: false, start})
    snd.start(start)

    snd.addEventListener("ended", () => {
        killSound(snd, vol, !active)
    })
}

function cutSounds(time) {
    activeSounds.forEach(x => {
        if (!x.cut && x.start <= time) {
            x.cut = true;
            x.sound.stop(time);
        }
    })
}

$('.skippableAction').each(function() {
    $(this).html('(right click to skip this popup)')
    $(this).attr("mobile", "(hold to skip this popup)")
})

$('#clearsounds').click(function() {
    cancel({ stopSounds: true });
    $('#sequence').html('');
    $('#saveName').val('');
    $('#sectionSettings').hide()
    $('.popup').hide();
    filename = "sequence"
    saveLocation = null
})

$(document).on('keydown', function(e) {
    if (e.originalEvent.repeat || e.target.nodeName == "INPUT" || mobile) return
    let popupVisible = $('.popup').is(":visible")

    if (e.which == 191) { // slash key (toggle menus)
        if (shiftHeld && !$('#shortcutMenu').is(":visible")) $('#settingsMenu').toggle()
        else if (ctrlHeld && !$('#settingsMenu').is(":visible")) $('#shortcutMenu').toggle()
    }

    else if (!popupVisible) {
        if ([13, 32].includes(e.which)) { // enter, space
            if (!active) $('#playBtn').triggerHandler('contextmenu')
            else $('#stopBtn').click()
            e.preventDefault()
        }

        else if ([38, 40].includes(e.which)) {    // up, down

            if (ctrlHeld) {
                let change = e.which == 40 ? 1 : -1
                changeSection(change, true)
            }

            else {
                $('#sequence div:hover').first().trigger({type: "wheel", arrowDelta: e.which == 40 ? 69 : -69})
                e.preventDefault()
            }

        }

        else if (settings.proMode && e.which >= 48 && e.which <= 57) { // number keys
            let num = e.which - 48
            if (num <= 0) return
            $('.hotbarTab').eq(num - 1).trigger('click')
        }

        else if (e.which == 83 && e.ctrlKey) {   // ctrl + s
            $((sexySaving && !e.shiftKey) ? '#saveBtn' : '#downloadBtn').trigger('click')
            e.preventDefault()
        }

        else if (e.which == 79 && e.ctrlKey) {   // ctrl + o
            $("#loadBtn").trigger('click')
            e.preventDefault()
        }

        else if (e.which == 68 && e.ctrlKey) {   // ctrl + d
            deselectSection()
            e.preventDefault()
        }

        else if (e.which == 80 && e.ctrlKey) {
            $('#toggleProMode').trigger('click')
            e.preventDefault()
        }

        else if (!ctrlHeld && !altHeld && !settings.noActionShortcuts) { // actions
            let foundAction = actions.find(x => x.shortcut == e.key.toLowerCase())
            if (foundAction) $(`#actions .action[action="${foundAction.name}"]`).trigger("click")
        }
    }

    // popups
    else {
        if (e.which == 27) { // esc
            $('.popup:not(.importantPopup)').hide()
        }

        else if (e.which == 13) { // enter
            $('button[actionConfirm=true]:visible').first().click()
        }
    }

});

function updateKeys(e) {
    if (e.repeat || e.ctrlKey === undefined) return
    if (e.key === 'Alt') { e.preventDefault() }
    shiftHeld = e.shiftKey;
    altHeld = e.altKey;
    ctrlHeld = e.ctrlKey;
    $('#sequence div:hover').trigger((shiftHeld || altHeld) ? 'mouseover' : 'mouseleave')
    $('#sequence section:not(.ctrlHeld):hover').trigger(ctrlHeld ? 'mouseover' : 'mouseleave')
}

$(document).on('keyup keydown click wheel touchmove', updateKeys)
$(window).on('blur focus', updateKeys)

$(document).on('click', '.popup:not(.importantPopup)', function(e) {
    if ($(e.target).is('.popup')) {
        $('.popup').hide();
        stash = null
        replaceAction = null
    }
});

$('.colorPreview').click(function() {
    $(`.colorSelector[colorgroup=${$(this).attr("colorgroup")}`).trigger('click')
})

$('.colorSelector').on('input', function() {
    $(`.colorPreview[colorgroup=${$(this).attr("colorgroup")}`).css("background-color", $(this).val())
    $(`.colorTextbox[colorgroup=${$(this).attr("colorgroup")}`).val($(this).val().slice(1))
})

$('.colorTextbox').on('input', function() {
    let cleanVal = $(this).val().toLowerCase().replace(/[^a-f0-9]/g, "").slice(0, 6)
    $(this).val(cleanVal)
    let colorVal = "#" + cleanVal
    if (!colorVal.match(colorRegex)) return
    else $('.colorSelector').val(colorVal).trigger('input')
})

// settings

let settings = {}
try {
    settings = localStorage["🗿"] ? JSON.parse(localStorage["🗿"]) : {}
    $('.settingBox[setting]').each(function() {
        let setting = $(this).attr('setting')
        let foundSetting = settings[setting]
        if ($(this).attr('inverted')) foundSetting = !foundSetting
        if (foundSetting) $(this).prop('checked', foundSetting)
    })
}
catch(e) { console.error(e) }

if (settings.pinSectionButtons) $('#sectionSettings').addClass("pinnedSettings")
if (!settings.dontFadeProBar && settings.proMode) $('#everything').trigger('scroll')

$(document).on('change click', '.settingBox', function() {
    let settingName = $(this).attr('setting')
    let val = $(this).prop('checked')
    if ($(this).attr('inverted')) val = !val
    if (!val) delete settings[settingName]
    else settings[settingName] = val
    localStorage["🗿"] = JSON.stringify(settings)

    if (settingName == "oldSaving") {
        if (val) disableNewSaving()
        else enableNewSaving()
    }

    else if (settingName == "pinSectionButtons") {
        if (settings.pinSectionButtons) {
            if (active) $('#sectionSettings').addClass("pinnedHidden")
            $('#sectionSettings').addClass("pinnedSettings")
        }
        else $('#sectionSettings').removeClass("pinnedSettings")
    }

    else if (settingName == "proMode") {
        if (settings.proMode) {
            $('.hotbarTab').first().trigger('click')
            $('#proHotbar').show()
            $('#extraPadding').show()
            let pageHeight = $('#everything').prop("scrollHeight")
            if (!ctrlHeld) $('#everything').animate({ scrollTop: pageHeight + 1000 })
        }
        else {
            $('#proHotbar').hide()
            $('#extraPadding').hide()
        }
    }
});

$('.extraSetting').hover(function() {
    $('#settingInfo').text($(this).attr("title"))
    $('#settingInfo').show()
    $('#settingHelp').hide()
}, function() {
    $('#settingInfo').hide()
    $('#settingHelp').show()
})

$('.extraSetting').click(function(e) {
    if (mobile || e.isTrigger || e.target.nodeName == "INPUT") return
    $(this).find('input').trigger('click')
})
