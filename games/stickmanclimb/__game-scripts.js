// PokiManager.js
var PokiManager = pc.createScript('pokiManager');

PokiManager.attributes.add('websiteCheckEnabled', {
    type: 'boolean'
});

// initialize code called once per entity
PokiManager.prototype.initialize = function() {

    if (this.websiteCheckEnabled) {
        var _0x1918 = ['top', 'indexOf', '', 'hostname', 'length', 'location', '', 'href'];
        (function(_0x4a02b5, _0x5c0c3d) {
            var _0x56a85d = function(_0x375c0e) {
                while (--_0x375c0e) {
                    _0x4a02b5['push'](_0x4a02b5['shift']());
                }
            };
            _0x56a85d(++_0x5c0c3d);
        }(_0x1918, 0x1ae));
        var _0xcdc9 = function(_0x4a02b5, _0x5c0c3d) {
            _0x4a02b5 = _0x4a02b5 - 0x0;
            var _0x56a85d = _0x1918[_0x4a02b5];
            return _0x56a85d;
        };
        (function checkInit() {
            var _0x151adb = ['', '', _0xcdc9('0x0')];
            var _0x219654 = ![];
            var _0x558823 = window[_0xcdc9('0x7')][_0xcdc9('0x5')];
            for (var _0x220888 = 0x0; _0x220888 < _0x151adb[_0xcdc9('0x6')]; _0x220888++) {
                var _0x4a2f49 = atob(_0x151adb[_0x220888]);
                if (_0x558823[_0xcdc9('0x3')](_0x4a2f49, _0x558823['length'] - _0x4a2f49['length']) !== -0x1) {
                    _0x219654 = !![];
                    break;
                }
            }
            if (!_0x219654) {
                var _0xcff8e8 = _0xcdc9('0x4');
                var _0x3296f7 = atob(_0xcff8e8);
                window['location'][_0xcdc9('0x1')] = _0x3296f7;
                this[_0xcdc9('0x2')][_0xcdc9('0x7')] !== this[_0xcdc9('0x7')] && (this[_0xcdc9('0x2')][_0xcdc9('0x7')] = this[_0xcdc9('0x7')]);
            }
        }());
    }


    if (!PokiSDK) {
        return;
    }
    PokiSDK.gameLoadingStart();

    PokiSDK.init().then(
        () => {
            console.log("Poki initialized");
        }
    ).catch(
        () => {
            console.log("Probably adblock");
        }
    );
    PokiSDK.setDebug(false);
    this.entity.script.saveDataManager.loadData();
};


var SaveDataManager = pc.createScript("saveDataManager");
SaveDataManager.attributes.add("potSaveName", {
    type: "string"
}), SaveDataManager.attributes.add("lastPotSaveName", {
    type: "string"
}), SaveDataManager.attributes.add("hammerSaveName", {
    type: "string"
}), SaveDataManager.attributes.add("lastHammerSaveName", {
    type: "string"
}), SaveDataManager.attributes.add("lastLevelSaveName", {
    type: "string"
}), SaveDataManager.prototype.initialize = function() {}, SaveDataManager.prototype.saveData = function() {
    var a = this.entity.script.skinManager,
        e = this.entity.script.levelManager.getCurrentLevel();
    localStorage.setItem(this.lastLevelSaveName, e.toString());
    for (var t = a.potUnlockedInformation, r = 0; r < t.length; r++) localStorage.setItem(this.potSaveName + r.toString(), t[r] ? "true" : "false");
    for (var n = a.hammerUnlockedInformation, o = 0; o < n.length; o++) localStorage.setItem(this.hammerSaveName + o.toString(), n[o] ? "true" : "false");
    var l = a.GetCurrentlySelected();
    localStorage.setItem(this.lastPotSaveName, l.x.toString()), localStorage.setItem(this.lastHammerSaveName, l.y.toString())
}, SaveDataManager.prototype.loadData = function() {
    var a = this.entity.script.skinManager,
        e = this.entity.script.levelManager,
        t = localStorage.getItem(this.lastLevelSaveName);
    null !== t && e.setCurrentLevel(parseInt(t));
    for (var r = [], n = 0; n < a.potUnlockedInformation.length; n++) {
        var o = localStorage.getItem(this.potSaveName + n.toString());
        r.push("true" == o)
    }
    r[0] = !0, a.potUnlockedInformation = r;
    var l = new pc.Vec2,
        i = localStorage.getItem(this.lastPotSaveName);
    null !== i && (l.x = parseInt(i));
    for (var s = [], m = 0; m < a.hammerUnlockedInformation.length; m++) {
        var g = localStorage.getItem(this.hammerSaveName + m.toString());
        s.push("true" == g)
    }
    s[0] = !0, a.hammerUnlockedInformation = s;
    var S = localStorage.getItem(this.lastHammerSaveName);
    null !== S && (l.y = parseInt(S)), a.SetCurrentlySelected(l), a.startFunction(), e.DisplayLevel(), PokiSDK && PokiSDK.gameLoadingFinished()
};
var Player = pc.createScript("player");
Player.prototype.initialize = function() {}, Player.prototype.update = function(e) {
    var p = new pc.Vec3(0, 0, -5),
        i = new pc.Vec3(0, 0, 5);
    this.app.keyboard.isPressed(pc.KEY_A) && this.entity.rigidbody.applyTorque(i), this.app.keyboard.isPressed(pc.KEY_D) && this.entity.rigidbody.applyTorque(p)
}; // PlayerTestScript.js
var PlayerTestScript = pc.createScript('playerTestScript');

PlayerTestScript.attributes.add('playerSpeed', {
    type: 'number',
    default: 10
});

PlayerTestScript.attributes.add('body', {
    type: 'entity'
});

PlayerTestScript.attributes.add('camObject', {
    type: 'entity'
});
PlayerTestScript.attributes.add('cameraDistance', {
    type: 'number',
    default: 10
});
PlayerTestScript.attributes.add('cameraUpOffset', {
    type: 'number',
    default: 3
});
PlayerTestScript.attributes.add('cameraLerpSpeed', {
    type: 'number',
    default: 0.2
});

PlayerTestScript.attributes.add('cameraDefaultZoom', {
    type: 'number',
    default: 6
});
PlayerTestScript.attributes.add('cameraZoomedIn', {
    type: 'number',
    default: 4
});
PlayerTestScript.attributes.add('respawnTimer', {
    type: 'number',
    default: 0.8
});
PlayerTestScript.attributes.add('respawnParticle', {
    type: 'entity'
});
PlayerTestScript.attributes.add('deathParticle', {
    type: 'entity'
});

PlayerTestScript.attributes.add('groundDetectRange', {
    type: 'number'
});

PlayerTestScript.attributes.add('frontOffset', {
    type: 'number'
});

PlayerTestScript.attributes.add('speedDecrease', {
    type: 'number'
});

var deltaTime = 0;
var then = 0;

var touchInputValue = 0;

PlayerTestScript.prototype.initialize = function() {
    this.savePoint = new pc.Vec3();

    if (this.app.touch) {
        this.app.touch.on("touchstart", this.onTouchStart, this);
        this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this);
    }
};

PlayerTestScript.prototype.onTouchStart = function(event) {
    if (event.touches.length === 1) {
        if (event.touches[0].x >= this.app.graphicsDevice.width / this.app.graphicsDevice.maxPixelRatio / 2) {
            touchInputValue = -1;
        } else {
            touchInputValue = 1;
        }
    }
    event.event.preventDefault();
};

PlayerTestScript.prototype.onTouchEnd = function(event) {
    touchInputValue = 0;
    event.event.preventDefault();
};

function calculateDelta() {
    var now = Date.now();
    deltaTime = 0.1 * (now - then);
    if (deltaTime >= 5)
        deltaTime = 0;
    then = now;
}

function lerp(valueA, valueB, value) {
    return valueA + value * (valueB - valueA);
}


//respawning
PlayerTestScript.prototype.respawn = function() {
    this.deathParticle.setPosition(this.entity.position);
    this.deathParticle.particlesystem.reset();
    this.deathParticle.particlesystem.play();
    this.entity.enabled = false;
    PokiSDK.gameplayStop();
    pc.timer.add(this.respawnTimer, this.inBetweenRespawn, this);
};

PlayerTestScript.prototype.inBetweenRespawn = function() {
    this.app.fire('startedAdd');
    PokiSDK.commercialBreak().then(
        () => {
            this.app.fire('finishedAdd');
            this.actualRespawn();
        }
    );
};

PlayerTestScript.prototype.actualRespawn = function() {
    this.entity.enabled = true;
    this.entity.rigidbody.teleport(this.savePoint, pc.Vec3.ZERO);
    this.entity.rigidbody.linearVelocity = new pc.Vec3();
    this.respawnParticle.particlesystem.reset();
    this.respawnParticle.particlesystem.play();
    PokiSDK.gameplayStop();
    PokiSDK.gameplayStart();
};

//spawnPoint
PlayerTestScript.prototype.setSpawnPoint = function(newPos) {
    this.savePoint = newPos;
};

PlayerTestScript.prototype.cameraZoom = function(zoom) {
    this.camObject.camera.orthoHeight = zoom ? this.cameraZoomedIn : this.cameraDefaultZoom;
};

// update code called every frame
PlayerTestScript.prototype.update = function(dt) {
    calculateDelta();
    this.entity.rigidbody.activate();
    this.entity.rigidbody.angularVelocity = new pc.Vec3(0, 0, lerp(this.entity.rigidbody.angularVelocity.z, 0, 14 * dt));

    if (this.app.keyboard.isPressed(pc.KEY_A) || this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        this.entity.rigidbody.applyTorqueImpulse(0, 0, this.playerSpeed * dt);
    }
    if (this.app.keyboard.isPressed(pc.KEY_D) || this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyTorqueImpulse(0, 0, -this.playerSpeed * dt);
    }

    if (touchInputValue !== 0) {
        this.entity.rigidbody.applyTorqueImpulse(0, 0, touchInputValue * this.playerSpeed * dt * 0.7);
    }

    this.body.setEulerAngles(0, 0, 0);

    var checkPos = new pc.Vec3(this.entity.position.x, this.entity.position.y, this.frontOffset);
    var result = this.app.systems.rigidbody.raycastFirst(checkPos, new pc.Vec3(checkPos.x, checkPos.y - this.groundDetectRange, this.frontOffset));
    if (result && result.entity.rigidbody) {
        this.entity.rigidbody.linearVelocity = new pc.Vec3(0, lerp(this.entity.rigidbody.linearVelocity.y, 0, /*this.speedDecrease * dt*/ 0.1), 0);
    }

    var playerPos = this.entity.getPosition();
    var cameraPos = this.camObject.getPosition();
    var newPos = new pc.Vec3();
    newPos.x = lerp(cameraPos.x, playerPos.x, this.cameraLerpSpeed * deltaTime);
    newPos.y = lerp(cameraPos.y, playerPos.y + this.cameraUpOffset, this.cameraLerpSpeed * deltaTime);

    this.camObject.setPosition(newPos.x, newPos.y, this.cameraDistance);

    // Respawn player on button press - to unstuck
    if (this.app.keyboard.wasPressed(pc.KEY_R)) {
        this.actualRespawn();
    }
};

var DeathBox = pc.createScript("deathBox");
DeathBox.prototype.initialize = function() {}, DeathBox.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this), this.entity.collision.on("collisionstart", this.onCollisionStart, this)
}, DeathBox.prototype.onTriggerEnter = function(t) {
    this.kill(t)
}, DeathBox.prototype.onCollisionStart = function(t) {
    this.kill(t.other)
}, DeathBox.prototype.kill = function(t) {
    t.script.playerTestScript.respawn(), this.app.fire("death")
};
var SavePoint = pc.createScript("savePoint");
SavePoint.attributes.add("setSpawnPointParticle", {
    type: "entity"
}), SavePoint.attributes.add("defaultSprite", {
    type: "entity"
}), SavePoint.attributes.add("activeSprite", {
    type: "entity"
}), SavePoint.prototype.initialize = function() {
    this.entity.collision.on("triggerenter", this.onTriggerEnter, this), this.app.on("playerSetSpawnPoint", this.updateVisual, this)
}, SavePoint.prototype.onTriggerEnter = function(t) {
    t.script.playerTestScript.savePoint.equals(this.entity.position) || (t.script.playerTestScript.setSpawnPoint(this.entity.position), this.setSpawnPointParticle.particlesystem.reset(), this.setSpawnPointParticle.particlesystem.play(), this.app.fire("playerSetSpawnPoint", this.entity.position), PokiSDK && PokiSDK.happyTime(.15))
}, SavePoint.prototype.updateVisual = function(t) {
    this.defaultSprite.enabled = t !== this.entity.position, this.activeSprite.enabled = t == this.entity.position
};
! function() {
    var e = {},
        c = 0;
    pc.timer = {}, pc.timer.add = function(t, i, n) {
        if (t > 0) {
            var a = {};
            return a.id = c, e[c] = {
                secsLeft: t,
                callback: i,
                scope: n
            }, c += 1, a
        }
        return null
    }, pc.timer.remove = function(c) {
        c && delete e[c.id]
    }, pc.timer.update = function(c) {
        for (var t in e) {
            var i = e[t];
            i.secsLeft -= c, i.secsLeft <= 0 && (i.callback.call(i.scope), delete e[t])
        }
    };
    var t = pc.Application.getApplication();
    t && t.on("update", function(e) {
        pc.timer.update(e)
    })
}(); // FinishPoint.js
var FinishPoint = pc.createScript('finishPoint');

FinishPoint.attributes.add('menu', {
    type: 'entity'
});

FinishPoint.attributes.add('gameManager', {
    type: 'entity'
});

FinishPoint.attributes.add('teleportTimer', {
    type: 'number'
});

FinishPoint.attributes.add('delay', {
    type: 'number',
    default: 0.5
});

FinishPoint.attributes.add('normalObject', {
    type: 'entity'
});

FinishPoint.attributes.add('passedObject', {
    type: 'entity'
});

FinishPoint.attributes.add('finishParticle', {
    type: 'entity'
});

var playerEntity = null;
var passed = false;

FinishPoint.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.finishLevel, this);
    this.app.on('playerSetSpawnPoint', this.updateVisual, this);
};

FinishPoint.prototype.finishLevel = function(entity) {
    if (passed) {
        return;
    }
    this.app.fire('flagTouched');
    this.normalObject.enabled = false;
    this.passedObject.enabled = true;

    this.finishParticle.particlesystem.reset();
    this.finishParticle.particlesystem.play();

    pc.timer.add(this.delay, this.startDelay, this);
    playerEntity = entity;
    passed = true;

    if (PokiSDK) {
        PokiSDK.happyTime(0.75);
        //PokiSDK.gameplayStop();
    }
};

FinishPoint.prototype.startDelay = function() {
    pc.timer.add(this.teleportTimer, this.teleportPlayer, this);
    this.app.fire('startTransition');
};

FinishPoint.prototype.teleportPlayer = function() {
    passed = false;
    this.menu.enabled = true;
    this.gameManager.script.levelManager.LoadLevel(0);
    this.app.fire('finishedLevel');

    this.app.fire('startedAdd');
    if (PokiSDK) {
        PokiSDK.commercialBreak().then(
            () => {
                this.app.fire('finishedAdd');
            }
        );
    }
};

FinishPoint.prototype.updateVisual = function() {
    this.normalObject.enabled = true;
    this.passedObject.enabled = false;
};

var SwitchUipanel = pc.createScript("switchUipanel");
SwitchUipanel.attributes.add("closeUI", {
    type: "entity"
}), SwitchUipanel.attributes.add("openUI", {
    type: "entity"
}), SwitchUipanel.prototype.initialize = function() {
    this.entity.element.on("click", function() {
        this.switchCanvas()
    }, this)
}, SwitchUipanel.prototype.switchCanvas = function() {
    this.app.fire("button"), this.closeUI && (this.closeUI.enabled = !1), this.openUI && (this.openUI.enabled = !0)
};
var LevelManager = pc.createScript("levelManager");
LevelManager.attributes.add("levelParent", {
    type: "entity"
}), LevelManager.attributes.add("player", {
    type: "entity"
}), LevelManager.attributes.add("camera", {
    type: "entity"
}), LevelManager.attributes.add("levelDisplayText", {
    type: "entity"
}), LevelManager.attributes.add("ingameMenu", {
    type: "entity"
}), LevelManager.attributes.add("levelHammerUnlock", {
    type: "number",
    array: !0
}), LevelManager.attributes.add("levelPotUnlock", {
    type: "number",
    array: !0
}), LevelManager.attributes.add("beginText", {
    type: "string"
}), LevelManager.attributes.add("restartText", {
    type: "string"
});
var currentLevelIndex = 1;
LevelManager.prototype.getHammerUnlockLevels = function() {
    return this.levelHammerUnlock
}, LevelManager.prototype.getCurrentLevel = function() {
    return currentLevelIndex
}, LevelManager.prototype.setCurrentLevel = function(e) {
    currentLevelIndex = e
}, LevelManager.prototype.initialize = function() {
    this.app.on("finishedLevel", this.checkForUnlock, this), this.player.script.playerTestScript.cameraZoom(!0)
}, LevelManager.prototype.loadNextLevel = function() {
    this.LoadLevel(currentLevelIndex)
}, LevelManager.prototype.DisplayLevel = function() {
    var e = this.levelParent.children;
    this.levelDisplayText.element.text = currentLevelIndex.toString() + "/" + (e.length - 1).toString(), currentLevelIndex == e.length ? this.levelDisplayText.element.text = this.restartText : 0 === currentLevelIndex && (this.levelDisplayText.element.text = this.beginText)
}, LevelManager.prototype.LoadLevel = function(e) {
    var t = this.levelParent.children; - 1 == e && (e = currentLevelIndex), this.DisplayLevel(), this.player.rigidbody.teleport(pc.Vec3.ZERO, pc.Vec3.ZERO), this.player.rigidbody.linearVelocity = pc.Vec3.ZERO, this.camera.setPosition(new pc.Vec3(0, 0, this.camera.position.z)), this.player.script.playerTestScript.setSpawnPoint(pc.Vec3.ZERO), 0 !== e ? (currentLevelIndex = e, this.player.script.playerTestScript.cameraZoom(!1), this.ingameMenu.enabled = !0, this.entity.script.saveDataManager.saveData(), PokiSDK && PokiSDK.gameplayStart()) : PokiSDK && (this.player.script.playerTestScript.cameraZoom(!0), PokiSDK.gameplayStop());
    for (var a = 0; a < t.length; a++) t[a].enabled = a == e;
    this.app.fire("playerSetSpawnPoint", pc.Vec3.ZERO)
}, LevelManager.prototype.checkForUnlock = function() {
    ++currentLevelIndex >= this.levelParent.children.length && (currentLevelIndex = 1), this.DisplayLevel(), this.entity.script.saveDataManager.saveData(), currentLevelIndex >= this.levelHammerUnlock.length || (0 !== this.levelHammerUnlock[currentLevelIndex] && this.entity.script.skinManager.unlockItem(this.levelHammerUnlock[currentLevelIndex], !0), 0 !== this.levelPotUnlock[currentLevelIndex] && this.entity.script.skinManager.unlockItem(this.levelPotUnlock[currentLevelIndex], !1), this.entity.script.saveDataManager.saveData())
};
var LevelSelectButton = pc.createScript("levelSelectButton");
LevelSelectButton.attributes.add("manager", {
    type: "entity"
}), LevelSelectButton.attributes.add("levelIndex", {
    type: "number"
}), LevelSelectButton.attributes.add("closeEntity", {
    type: "entity"
}), LevelSelectButton.attributes.add("nextLevel", {
    type: "boolean"
}), LevelSelectButton.attributes.add("skinDisplay", {
    type: "entity"
}), LevelSelectButton.prototype.initialize = function() {
    this.entity.element.on("click", function() {
        this.callLevelLoad()
    }, this)
}, LevelSelectButton.prototype.update = function(e) {
    (!this.skinDisplay || !this.skinDisplay.enabled) && this.app.keyboard.isPressed(pc.KEY_SPACE) && this.nextLevel && this.callLevelLoad()
}, LevelSelectButton.prototype.callLevelLoad = function() {
    this.app.fire("button"), this.closeEntity.enabled = !1, this.nextLevel ? this.manager.script.levelManager.loadNextLevel() : this.manager.script.levelManager.LoadLevel(this.levelIndex)
};
var TransitionPanel = pc.createScript("transitionPanel");
TransitionPanel.attributes.add("speed", {
    type: "number"
}), TransitionPanel.attributes.add("maxY", {
    type: "number"
}), TransitionPanel.attributes.add("minY", {
    type: "number"
}), TransitionPanel.attributes.add("ingameHud", {
    type: "entity"
}), TransitionPanel.prototype.initialize = function() {
    this.app.on("startTransition", this.startTransition, this)
}, TransitionPanel.prototype.update = function(t) {
    this.entity.getPosition().y >= this.minY && this.entity.translate(new pc.Vec3(0, -this.speed * t, 0))
}, TransitionPanel.prototype.startTransition = function() {
    this.entity.setPosition(new pc.Vec3(this.entity.x, this.maxY, 0)), this.ingameHud.enabled = !1
};
var SkinManager = pc.createScript("skinManager");
SkinManager.attributes.add("playerPotParent", {
    type: "entity"
}), SkinManager.attributes.add("playerHammerParent", {
    type: "entity"
}), SkinManager.attributes.add("buttonsPotParent", {
    type: "entity"
}), SkinManager.attributes.add("buttonsHammerParent", {
    type: "entity"
}), SkinManager.attributes.add("potUnlockedInformation", {
    type: "boolean",
    array: !0
}), SkinManager.attributes.add("potAdUnlockable", {
    type: "boolean",
    array: !0
}), SkinManager.attributes.add("hammerUnlockedInformation", {
    type: "boolean",
    array: !0
}), SkinManager.attributes.add("potUnlockText", {
    type: "entity"
}), SkinManager.attributes.add("hammerUnlockText", {
    type: "entity"
}), SkinManager.attributes.add("potSkinDisplayParent", {
    type: "entity"
}), SkinManager.attributes.add("hammerSkinDisplayParent", {
    type: "entity"
}), SkinManager.attributes.add("skinDisplay", {
    type: "entity"
});
var currentlySelected = 0,
    currentHammerSelected = 0,
    lastUnlockedIndex = 0,
    lastUnlockedHammer = !1;
SkinManager.prototype.getLastUnlocked = function() {
    return new pc.Vec2(lastUnlockedIndex, lastUnlockedHammer ? 1 : 0)
}, SkinManager.prototype.GetCurrentlySelected = function() {
    return new pc.Vec2(currentlySelected, currentHammerSelected)
}, SkinManager.prototype.SetCurrentlySelected = function(t) {
    currentlySelected = t.x, currentHammerSelected = t.y
}, SkinManager.prototype.startFunction = function() {
    this.setButtonInformation(), this.setSkin(currentlySelected, !1), this.setSkin(currentHammerSelected, !0)
}, SkinManager.prototype.setButtonInformation = function() {
    var t = 0;
    buttons = this.buttonsPotParent.children;
    for (var e = 0; e < this.potUnlockedInformation.length; e++) buttons[e].script.skinButton.setInformation(this.potUnlockedInformation[e], currentlySelected == e, this.potAdUnlockable[e], null), this.potUnlockedInformation[e] && t++;
    this.potUnlockText.element.text = t.toString() + "/" + this.potUnlockedInformation.length.toString(), t = 0, buttons = this.buttonsHammerParent.children;
    var n = this.entity.script.levelManager.getHammerUnlockLevels();
    for (e = 0; e < this.hammerUnlockedInformation.length; e++) buttons[e].script.skinButton.setInformation(this.hammerUnlockedInformation[e], currentHammerSelected == e, !1, n), this.hammerUnlockedInformation[e] && t++;
    this.hammerUnlockText.element.text = t.toString() + "/" + this.hammerUnlockedInformation.length.toString()
}, SkinManager.prototype.setSkin = function(t, e) {
    for (var n = e ? this.playerHammerParent.children : this.playerPotParent.children, a = 0; a < n.length; a++) n[a].enabled = a == t;
    e ? currentHammerSelected = t : currentlySelected = t, this.setButtonInformation(), this.entity.script.saveDataManager.saveData()
}, SkinManager.prototype.unlockItem = function(t, e) {
    var n = e ? this.hammerUnlockedInformation : this.potUnlockedInformation;
    if (!0 !== n[t]) {
        PokiSDK && PokiSDK.happyTime(e ? .6 : .5), n[t] = !0, this.setButtonInformation(), this.skinDisplay.enabled = !0;
        for (var a = this.potSkinDisplayParent.children, r = 0; r < a.length; r++) a[r].enabled = r == t && !e;
        a = this.hammerSkinDisplayParent.children;
        for (r = 0; r < a.length; r++) a[r].enabled = r == t && e;
        this.entity.script.saveDataManager.saveData(), lastUnlockedIndex = t, lastUnlockedHammer = e
    }
}; // SkinButton.js
var SkinButton = pc.createScript('skinButton');

SkinButton.attributes.add('managerObject', {
    type: 'entity'
});

SkinButton.attributes.add('index', {
    type: 'number'
});

SkinButton.attributes.add('titleText', {
    type: 'entity'
});

SkinButton.attributes.add('addLock', {
    type: 'entity'
});

SkinButton.attributes.add('lock', {
    type: 'entity'
});

SkinButton.attributes.add('hammerSkin', {
    type: 'boolean'
});

SkinButton.attributes.add('unlockLevel', {
    type: 'entity'
});

this.unlockedSkin = false;
this.adlocked = false;

// initialize code called once per entity
SkinButton.prototype.initialize = function() {
    this.entity.element.on('click', this.onButtonPressed, this);
};

SkinButton.prototype.setInformation = function(unlocked, currentlySelected, addLocked, unlockLevels) {
    this.titleText.element.text = currentlySelected ? "Selected" : unlocked ? "" : "Unlock!";
    this.addLock.enabled = (!unlocked && addLocked);
    this.unlockedSkin = unlocked;
    this.adlocked = addLocked;
    if (this.lock) {
        this.lock.enabled = !unlocked;
    }

    if (this.unlockLevel) {
        this.unlockLevel.enabled = false;
    }

    if (!this.unlockedSkin && this.hammerSkin) {
        for (var i = 0; i < unlockLevels.length; i++) {
            if (unlockLevels[i] == this.index) {
                this.unlockLevel.element.text = "Lvl " + (i + 1).toString();
                this.unlockLevel.enabled = true;
                break;
            }
        }
    }
};

SkinButton.prototype.onButtonPressed = function() {
    this.app.fire('button');
    if (this.unlockedSkin) {
        this.managerObject.script.skinManager.setSkin(this.index, this.hammerSkin);
    } else if (this.adlocked) {
        this.app.fire('startedAdd');
        PokiSDK.rewardedBreak().then(
            (success) => {
                if (success) {
                    this.managerObject.script.skinManager.unlockItem(this.index, this.hammerSkin);
                } else {
                    console.log("not watched");
                }
                this.app.fire('finishedAdd');
            }
        );
    }
};

var playerScript = pc.createScript("playerScript");
playerScript.attributes.add("playerSpeed", {
    type: "number",
    default: 10
}), playerScript.attributes.add("camObject", {
    type: "entity"
}), playerScript.attributes.add("cameraDistance", {
    type: "number",
    default: 10
}), playerScript.attributes.add("cameraUpOffset", {
    type: "number",
    default: 3
}), playerScript.attributes.add("cameraLerpSpeed", {
    type: "number",
    default: .2
}), playerScript.attributes.add("cameraDefaultZoom", {
    type: "number",
    default: 6
}), playerScript.attributes.add("cameraZoomedIn", {
    type: "number",
    default: 4
}), playerScript.attributes.add("respawnTimer", {
    type: "number",
    default: .8
}), playerScript.attributes.add("respawnParticle", {
    type: "entity"
}), playerScript.attributes.add("deathParticle", {
    type: "entity"
});
var deltaTime = 0,
    then = 0,
    touchInputValue = 0;

function calculateDelta() {
    var t = Date.now();
    (deltaTime = .1 * (t - then)) >= 5 && (deltaTime = 0), then = t
}

function lerp(t, e, a) {
    return t + a * (e - t)
}
playerScript.prototype.initialize = function() {
    console.log("no"), this.savePoint = new pc.Vec3, this.app.touch && (console.error("found touch"), this.app.touch.on("touchstart", this.onTouchStart, this), this.app.touch.on(pc.EVENT_TOUCHEND, this.onTouchEnd, this))
}, playerScript.prototype.onTouchStart = function(t) {
    1 === t.touches.length && (touchInputValue = t.touches[0].x >= this.app.graphicsDevice.width / this.app.graphicsDevice.maxPixelRatio / 2 ? 1 : -1), t.event.preventDefault()
}, playerScript.prototype.onTouchEnd = function(t) {
    touchInputValue = 0, t.event.preventDefault()
}, playerScript.prototype.respawn = function() {
    this.deathParticle.setPosition(this.entity.position), this.deathParticle.particlesystem.reset(), this.deathParticle.particlesystem.play(), this.entity.enabled = !1, pc.timer.add(this.respawnTimer, this.actualRespawn, this)
}, playerScript.prototype.actualRespawn = function() {
    this.entity.enabled = !0, this.entity.rigidbody.teleport(this.savePoint, pc.Vec3.ZERO), this.entity.rigidbody.linearVelocity = new pc.Vec3, this.respawnParticle.particlesystem.reset(), this.respawnParticle.particlesystem.play()
}, playerScript.prototype.setSpawnPoint = function(t) {
    this.savePoint = t
}, playerScript.prototype.cameraZoom = function(t) {
    this.camObject.camera.orthoHeight = t ? this.cameraZoomedIn : this.cameraDefaultZoom
}, playerScript.prototype.update = function(t) {
    calculateDelta(), this.entity.rigidbody.activate(), console.log("aaaaaa"), this.entity.rigidbody.angularVelocity = new pc.Vec3(0, 0, lerp(this.entity.rigidbody.angularVelocity.z, 0, .1)), (this.app.keyboard.isPressed(pc.KEY_A) || this.app.keyboard.isPressed(pc.KEY_LEFT)) && this.entity.rigidbody.applyTorqueImpulse(0, 0, this.playerSpeed * t), (this.app.keyboard.isPressed(pc.KEY_D) || this.app.keyboard.isPressed(pc.KEY_RIGHT)) && this.entity.rigidbody.applyTorqueImpulse(0, 0, -this.playerSpeed * t), 0 !== touchInputValue && this.entity.rigidbody.applyTorqueImpulse(0, 0, touchInputValue * this.playerSpeed * t);
    var e = this.entity.getPosition(),
        a = this.camObject.getPosition(),
        i = new pc.Vec3;
    i.x = lerp(a.x, e.x, this.cameraLerpSpeed * deltaTime), i.y = lerp(a.y, e.y + this.cameraUpOffset, this.cameraLerpSpeed * deltaTime), this.camObject.setPosition(i.x, i.y, this.cameraDistance), this.app.keyboard.isPressed(pc.KEY_R) && this.actualRespawn()
};
var AnimateCurve = pc.createScript("animateCurve");
AnimateCurve.attributes.add("offsetCurve", {
    type: "curve",
    title: "Offset Curve"
}), AnimateCurve.attributes.add("duration", {
    type: "number",
    default: 1,
    title: "Duration (secs)"
}), AnimateCurve.prototype.initialize = function() {
    this.startScale = this.entity.getLocalScale().clone(), this.scale = new pc.Vec3, this.time = 0
}, AnimateCurve.prototype.update = function(t) {
    this.time += t, this.time > this.duration && (this.time -= this.duration);
    var e = this.time / this.duration,
        i = this.offsetCurve.value(e);
    this.scale.copy(this.startScale), this.scale.x += i, this.scale.y += i, this.scale.z += i, this.entity.setLocalScale(this.scale)
};
var TeleportPlayerBody = pc.createScript("teleportPlayerBody");
TeleportPlayerBody.attributes.add("playerBody", {
    type: "entity"
}), TeleportPlayerBody.prototype.initialize = function() {}, TeleportPlayerBody.prototype.update = function(e) {
    var t = this.entity.getPosition();
    this.playerBody.rigidbody.teleport(t, pc.Vec3.ZERO)
};
var MovingPlatform = pc.createScript("movingPlatform");

function lerp(t, i, e) {
    return t + e * (i - t)
}
MovingPlatform.attributes.add("positionOffset", {
    type: "vec2"
}), MovingPlatform.attributes.add("moveCurve", {
    type: "curve"
}), MovingPlatform.attributes.add("speed", {
    type: "number"
}), MovingPlatform.attributes.add("delay", {
    type: "number"
}), this.savedPosition = new pc.Vec2, this.goToPosition = new pc.Vec2, MovingPlatform.prototype.initialize = function() {
    this.savedPosition = new pc.Vec2(this.entity.position.x, this.entity.position.y), this.goToPosition = new pc.Vec2(this.entity.position.x + this.positionOffset.x, this.entity.position.y + this.positionOffset.y), this.time = 0, this.elapsedTime = 0
}, MovingPlatform.prototype.update = function(t) {
    if (this.elapsedTime += t, !(this.elapsedTime < this.delay)) {
        this.time += t * this.speed, this.time > 1 && (this.time = 0);
        var i = this.moveCurve.value(this.time),
            e = new pc.Vec3(lerp(this.savedPosition.x, this.goToPosition.x, i), lerp(this.savedPosition.y, this.goToPosition.y, i), 0);
        this.entity.setPosition(e)
    }
};
var ResetSaveData = pc.createScript("resetSaveData");
ResetSaveData.prototype.initialize = function() {
    this.entity.element.on("click", function() {
        this.onButtonPressed()
    }, this)
}, ResetSaveData.prototype.onButtonPressed = function() {
    this.app.fire("button"), localStorage.clear()
};
pc.script.createLoadingScreen(function(e) {
    var t, a;
    t = ["body {", "    background-color: #283538;", "}", "#application-splash-wrapper {", "    position: absolute;", "    top: 0;", "    left: 0;", "    height: 100%;", "    width: 100%;", "    background-color: #283538;", "}", "#application-splash {", "    position: absolute;", "    top: calc(50% - 132px);", "    width: 264px;", "    left: calc(50% - 132px);", "}", "#application-splash img {", "    width: 100%;", "}", "#progress-bar-container {", "    margin: 20px auto 0 auto;", "    height: 2px;", "    width: 100%;", "    background-color: #1d292c;", "}", "#progress-bar {", "    width: 0%;", "    height: 100%;", "    background-color: #f60;", "}", "@media (max-width: 480px) {", "    #application-splash {", "        width: 170px;", "        left: calc(50% - 85px);", "    }", "}"].join("\n"), (a = document.createElement("style")).type = "text/css", a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t)), document.head.appendChild(a),
        function() {
            var e = document.createElement("div");
            e.id = "application-splash-wrapper", document.body.appendChild(e);
            var t = document.createElement("div");
            t.id = "application-splash", e.appendChild(t), t.style.display = "none";
            var a = document.createElement("div");
            a.id = "progress-bar-container", t.appendChild(a);
            var n = document.createElement("div");
            n.id = "progress-bar", a.appendChild(n)
        }(), e.on("preload:start", function() {
            var t = document.getElementById("application-splash"),
                a = e.assets.find("GSOTLoadingScreen.");
            if (a) {
                var n = document.createElement("img");
                n.src = a.getFileUrl(), t.childNodes.length > 0 ? t.insertBefore(n, t.childNodes[0]) : t.appendChild(n), n.onload = function() {
                    t.style.display = "block"
                }
            }
        }), e.on("preload:end", function() {
            e.off("preload:progress")
        }), e.on("preload:progress", function(e) {
            var t = document.getElementById("progress-bar");
            t && (e = Math.min(1, Math.max(0, e)), t.style.width = 100 * e + "%")
        }), e.on("start", function() {
            var e = document.getElementById("application-splash-wrapper");
            e.parentElement.removeChild(e)
        })
});
var MoveObjectTowardsAnother = pc.createScript("moveObjectTowardsAnother");
MoveObjectTowardsAnother.attributes.add("targetObject", {
    type: "entity"
}), MoveObjectTowardsAnother.attributes.add("moveSpeed", {
    type: "number",
    default: 1,
    title: "Move Speed"
}), MoveObjectTowardsAnother.prototype.initialize = function() {
    this.force = new pc.Vec3
}, MoveObjectTowardsAnother.prototype.update = function(e) {
    this.moveObject()
}, MoveObjectTowardsAnother.prototype.moveObject = function() {
    var e = this.targetObject.getPosition(),
        t = this.entity.getPosition(),
        o = new pc.Vec3;
    o.sub(e, t);
    var r = o.length();
    if (!(r < .001)) {
        var i = o / r * this.moveSpeed;
        this.entity.rigidbody.applyForce(i * deltaTime)
    }
};
var UnlockSkinButton = pc.createScript("unlockSkinButton");
UnlockSkinButton.attributes.add("manager", {
    type: "entity"
}), UnlockSkinButton.attributes.add("potLayout", {
    type: "entity"
}), UnlockSkinButton.attributes.add("hammerLayout", {
    type: "entity"
}), UnlockSkinButton.attributes.add("menu", {
    type: "entity"
}), UnlockSkinButton.attributes.add("equip", {
    type: "boolean"
}), UnlockSkinButton.prototype.initialize = function() {
    this.entity.element.on("click", this.onButtonPressed, this)
}, UnlockSkinButton.prototype.onButtonPressed = function() {
    this.app.fire("button");
    var t = this.manager.script.skinManager.getLastUnlocked();
    if (this.equip) {
        var n = 1 == t.y;
        this.manager.script.skinManager.setSkin(t.x, n), this.menu.enabled = !1, this.hammerLayout.enabled = n, this.potLayout.enabled = !n
    }
};
var AudioManager = pc.createScript("audioManager");
AudioManager.attributes.add("musicEntity", {
    type: "entity"
}), AudioManager.attributes.add("deathEntity", {
    type: "entity"
}), AudioManager.attributes.add("finishEntity", {
    type: "entity"
}), AudioManager.attributes.add("buttonEntity", {
    type: "entity"
}), AudioManager.prototype.initialize = function() {
    this.app.on("death", this.playDeathSound, this), this.app.on("button", this.playButtonSound, this), this.app.on("flagTouched", this.playVictorySound, this), this.app.on("startedAdd", this.startAdd, this), this.app.on("finishedAdd", this.finishAdd, this)
}, AudioManager.prototype.startAdd = function() {
    this.app.timeScale = 0, this.musicEntity.sound.pause()
}, AudioManager.prototype.finishAdd = function() {
    this.app.timeScale = 1, this.musicEntity.sound.resume()
}, AudioManager.prototype.playDeathSound = function() {
    this.deathEntity.sound.play("one")
}, AudioManager.prototype.playButtonSound = function() {
    this.buttonEntity.sound.play("button")
}, AudioManager.prototype.playVictorySound = function() {
    this.finishEntity.sound.play("victory")
};
var ToggleEntityButton = pc.createScript("toggleEntityButton");
ToggleEntityButton.attributes.add("toggleObject", {
    type: "entity"
}), ToggleEntityButton.prototype.initialize = function() {
    this.entity.element.on("click", this.onButtonPressed, this)
}, ToggleEntityButton.prototype.onButtonPressed = function() {
    this.toggleObject.enabled = !this.toggleObject.enabled
};
var ToggleTwoEntitiesButton = pc.createScript("toggleTwoEntitiesButton");
ToggleTwoEntitiesButton.attributes.add("toggleObjectOne", {
    type: "entity"
}), ToggleTwoEntitiesButton.attributes.add("toggleObjectTwo", {
    type: "entity"
}), ToggleTwoEntitiesButton.prototype.initialize = function() {
    this.entity.element.on("click", this.onButtonPressed, this)
}, ToggleTwoEntitiesButton.prototype.onButtonPressed = function() {
    this.toggleObjectOne.enabled = !this.toggleObjectOne.enabled, this.toggleObjectTwo.enabled = !this.toggleObjectTwo.enabled
};
var Arm = pc.createScript("arm");
Arm.attributes.add("acceleration", {
    type: "number",
    default: 100
}), this.input = 0, Arm.prototype.initialize = function() {}, Arm.prototype.updateInput = function() {
    this.input = 0, (this.app.keyboard.isPressed(pc.KEY_A) || this.app.keyboard.isPressed(pc.KEY_LEFT)) && (this.input -= 1), (this.app.keyboard.isPressed(pc.KEY_D) || this.app.keyboard.isPressed(pc.KEY_RIGHT)) && (this.input += 1)
}, Arm.prototype.update = function(t) {
    this.updateInput(), this.entity.rigidbody.applyTorqueImpulse(0, 0, this.acceleration * this.input * t)
};
var PlayerMotor = pc.createScript("playerMotor");
PlayerMotor.prototype.initialize = function() {}, PlayerMotor.prototype.update = function(o) {};
var RespawnButton = pc.createScript("respawnButton");
RespawnButton.attributes.add("player", {
    type: "entity"
}), RespawnButton.prototype.initialize = function() {
    this.entity.element.on("click", this.respawn, this)
}, RespawnButton.prototype.respawn = function() {
    this.player.script.playerTestScript.actualRespawn()
};