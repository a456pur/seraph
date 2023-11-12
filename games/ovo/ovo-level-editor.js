(() => {
  globalThis.ovoLevelEditor = {
    init() {
      let old = globalThis.sdk_runtime;
      c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
      let sdk_runtime = globalThis.sdk_runtime;
      globalThis.sdk_runtime = old;

      let setLayout = (name) => {
        if (sdk_runtime.layouts.hasOwnProperty(name)) {
          sdk_runtime.changelayout = sdk_runtime.layouts[name];
          return sdk_runtime.layouts[name];
        }
      };

      let baseLayoutName = "Level Base";
      let baseLayout = sdk_runtime.layouts[baseLayoutName];
      let oldFn = baseLayout.startRunning.bind(baseLayout);
      baseLayout.startRunning = () => {
        console.log("start");
        globalThis.ovoLevelEditor.applySetup();
        oldFn();
        globalThis.ovoLevelEditor.applyCurrentLevel();
      };
      let setLayoutToBase = () => {
        sdk_runtime.changelayout = baseLayout;
      };

      const types = {
        Solid: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "Solid" ||
            (x.plugin instanceof cr.plugins_.TiledBg &&
              x.texture_file &&
              x.texture_file.includes("/solid.png") &&
              x.behs_count === 2)
        ),
        Spike: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "Spike" ||
            (x.plugin instanceof cr.plugins_.Sprite &&
              x.all_frames &&
              x.all_frames[0].texture_file.includes("spike-"))
        ),
        Flag: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "EndFlag" ||
            (x.plugin instanceof cr.plugins_.Sprite &&
              x.all_frames &&
              x.all_frames[0].texture_file.includes("endflag"))
        ),
        JumpThrough: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "JumpThrough" ||
            (x.plugin instanceof cr.plugins_.TiledBg &&
              x.texture_file &&
              x.texture_file.includes("jumpthrough") &&
              x.families.length === 2)
        ),
        GroundPoundSolid: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "GroundPoundSolid" ||
            (x.plugin instanceof cr.plugins_.TiledBg &&
              x.texture_file &&
              x.texture_file.includes("groundpoundsolid") &&
              x.families.length === 2)
        ),
        RocketLauncher: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "RocketLauncher" ||
            (x.plugin instanceof cr.plugins_.Sprite &&
              x.all_frames &&
              x.all_frames[0].texture_file.includes("rocketlauncher"))
        ),
        JumpBoost: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "JumpBoost" ||
            (x.plugin instanceof cr.plugins_.Sprite &&
              x.all_frames &&
              x.all_frames[0].texture_file.includes("jumpboost"))
        ),
        LayoutNameHolder: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "LayoutNameHolder" ||
            (x.plugin instanceof cr.plugins_.Sprite &&
              x.all_frames &&
              x.all_frames[0].texture_file.includes("layoutnameholder"))
        ),
        LayoutNumber: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "LayoutNumber" ||
            (x.plugin instanceof cr.plugins_.SkymenSFPlusPLus &&
              x.texture_file &&
              x.texture_file.includes("layoutnumber"))
        ),
        LayoutSubtitle: sdk_runtime.types_by_index.find(
          (x) =>
            x.name === "LayoutSubtitle" ||
            (x.plugin instanceof cr.plugins_.Sprite &&
              x.all_frames &&
              x.all_frames[0].texture_file.includes("layoutsubtitle"))
        ),
      };

      const layers = {
        "Layer 0": baseLayout.layers.find((x) => x.name === "Layer 0"),
        Background: baseLayout.layers.find((x) => x.name === "Background"),
      };

      let create = (type, layer, { x, y, width, height, angle }) => {
        let inst = sdk_runtime.createInstance(types[type], layers[layer], x, y);
        inst.width = width || inst.width;
        inst.height = height || inst.height;
        inst.angle = angle || inst.angle;
        inst.set_bbox_changed();
        return inst;
      };

      //create("Solid", "Layer 0", {x:100, y:100, angle: 45, height:8, width: 50})
      //create("Spike", "Layer 0", {x:100, y:500})

      globalThis.ovoLevelEditor = {
        startLevel(json) {
          sdk_runtime.types_by_index.find(
            (x) =>
              x.name === "Globals" ||
              (x.plugin instanceof cr.plugins_.Globals &&
                x.instvar_sids.length > 20)
          ).instances[0].instance_vars[3] = 1;
          this.curLevel = json;
          setLayoutToBase();
        },
        wipeAllInstances() {
          Object.values(layers).forEach((layer) => {
            if (!layer) return;
            console.log("wiping " + layer);
            layer.instances
              .filter((x) => Object.values(types).includes(x.type))
              .forEach(sdk_runtime.DestroyInstance.bind(sdk_runtime));
          });
        },
        getPlayer() {
          return sdk_runtime.types_by_index
            .filter(
              (x) =>
                !!x.animations &&
                x.animations[0].frames[0].texture_file.includes("collider")
            )[0]
            .instances.filter(
              (x) => x.instance_vars[17] === "" && x.behavior_insts[0].enabled
            )[0];
        },
        async awaitForPlayer() {
          let player = this.getPlayer();
          while (!player) {
            await new Promise((resolve) => setTimeout(resolve, 20));
            player = this.getPlayer();
          }
          return player;
        },
        async setPlayerPosition(x, y) {
          let player = this.getPlayer();
          while (!player) {
            await new Promise((resolve) => setTimeout(resolve, 20));
            player = this.getPlayer();
          }
          if (x) player.x = x;
          if (y) player.y = y;
          player.set_bbox_changed();
        },
        applySetup() {
          if (!this.curLevel) return;
          if (this.curLevel.layout) {
            if (this.curLevel.layout.width) {
              baseLayout.originalWidth = this.curLevel.layout.width;
              baseLayout.width = this.curLevel.layout.width;
            }
            if (this.curLevel.layout.height) {
              baseLayout.originalHeight = this.curLevel.layout.height;
              baseLayout.height = this.curLevel.layout.height;
            }
          }
        },
        async applyCurrentLevel() {
          if (!this.curLevel) return;
          this.wipeAllInstances();
          await this.awaitForPlayer();
          if (this.curLevel.player) {
            this.setPlayerPosition(
              this.curLevel.player.x,
              this.curLevel.player.y
            );
          }
          Object.keys(this.curLevel.layers).forEach((layer) => {
            if (!layers[layer]) return;
            Object.keys(this.curLevel.layers[layer]).forEach((type) => {
              if (!types[type]) return;
              this.curLevel.layers[layer][type].forEach((inst) => {
                let newInst = create(type, layer, inst);
                sdk_runtime.trigger(
                  newInst.type.plugin.cnds.OnCreated,
                  newInst
                );
              });
            });
          });
          sdk_runtime.trigger(sdk_runtime.system.cnds.OnLayoutStart);
          if (
            this.curLevel.layout.holder &&
            typeof this.curLevel.layout.holder.x === "number"
          ) {
            let text = create(
              "LayoutNumber",
              "Layer 0",
              this.curLevel.layout.holder
            );
            sdk_runtime.trigger(text.type.plugin.cnds.OnCreated, text);
            if (typeof this.curLevel.layout.number === "number")
              text.text = this.curLevel.layout.number.toString();
            else text.text = "1";
          }

          let holder = create("LayoutNameHolder", "Layer 0", {
            x: -500,
            y: -500,
          });
          holder.instance_vars[0] = this.curLevel.layout.name || "";
          holder.instance_vars[2] = !!this.curLevel.layout.useSlope;
          sdk_runtime.trigger(holder.type.plugin.cnds.OnCreated, holder);
        },
        handleDrop(ev) {
          console.log("File(s) dropped");

          // Prevent default behavior (Prevent file from being opened)
          ev.preventDefault();
          let playFile = (file) => {
            console.log(file);
            file.text().then((text) => {
              console.log(text);
              try {
                let json = JSON.parse(text);
                if (globalThis.ovoLevelEditor.startLevel)
                  globalThis.ovoLevelEditor.startLevel(json);
              } catch (error) {
                alert("not a valid level file");
              }
            });
          };
          if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.items.length; i++) {
              // If dropped items aren't files, reject them
              if (ev.dataTransfer.items[i].kind === "file") {
                var file = ev.dataTransfer.items[i].getAsFile();
                playFile(file);
                break;
              }
            }
          } else {
            // Use DataTransfer interface to access the file(s)
            playFile(ev.dataTransfer.files[0]);
          }
        },
      };
      sdk_runtime.canvas.setAttribute("ondragover", "event.preventDefault();");
      sdk_runtime.canvas.setAttribute(
        "ondrop",
        "ovoLevelEditor.handleDrop(event)"
      );
    },
  };

  let messageHandler = (event) => {
    if (!event.data.isLevelEditor || !event.data.messageType) return;
    if (event.data.messageType.toLowerCase() === "isready") {
      event.source.postMessage(
        {
          isReady: !globalThis.ovoLevelEditor.hasOwnProperty("init"),
          isLevelEditor: true,
          messageType: event.data.messageType,
        },
        event.origin
      );
    }
    if (event.data.messageType.toLowerCase() === "startlevel") {
      if (globalThis.ovoLevelEditor.hasOwnProperty("init")) {
        event.source.postMessage(
          {
            levelStarted: false,
            isLevelEditor: true,
            messageType: event.data.messageType,
          },
          event.origin
        );
        return;
      }
      globalThis.ovoLevelEditor.startLevel(event.data.level);
      event.source.postMessage(
        {
          levelStarted: true,
          isLevelEditor: true,
          messageType: event.data.messageType,
        },
        event.origin
      );
    }
  };
  globalThis.window.addEventListener("message", messageHandler);
})();
