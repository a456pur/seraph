scene('achievements', () => {
  const Z = {
    bg:    0,
    main:  100,
    top:   200,
    black: 300,
  };

  var mainScroll = 0;

  const black = add([
    rect(width(), height()),
    pos(0,0),
    z(Z.black),
    opacity(1),
    color(BLACK),
    fixed(),
  ]);

  for (let f = 0; f < 20; f++) {
    setTimeout(() => {
      black.opacity -= 0.05;
    }, f*15);
  };

  let fadingOut = false;
  function fadeOut() {
    if (!fadingOut) {
      fadingOut = true;
      for (let f = 0; f < 20; f++) {
        setTimeout(() => {
          black.opacity += 0.05;
        }, f * FADE_TIME / 15);
      };
    };
  };

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < [1,6][j]; i++) {
      let border = SCALE*0.01;
      let xOff = Math.sin( (Math.PI * i) /2 ) *border;
      let yOff = Math.cos( (Math.PI * i) /2 ) *border;
      if (i == 0) { xOff = 0; yOff = 0; };

      add([
        text('ACHIEVEMENTS', {
          size: SCALE*0.87,
          align: 'center',
          font: 'burned',
          letterSpacing: SCALE*0.04,
        }),
        pos(width()/2 +xOff, SCALE*0.37 +yOff),
        origin('top'),
        z(Z.top +1),
        color(BLACK),
        rotate(-1.5),
      ]);
    };
  };

  add([
    rect(width(), SCALE*1.6),
    pos(0,0),
    color(rgb(240,240,240)),
    z(Z.top),
  ]);

  for (let i = 0; i < 2; i++) {
    add([
      rect(width(), SCALE*0.1),
      pos(0, SCALE*(1.6 + (i*0.1))),
      color(BLACK),
      opacity((2-i)*0.1),
      z(Z.top),
    ]);
  };

  for (let i = 0; i < 2; i++) {
    add([
      rect(width(), SCALE/15),
      pos(0, SCALE*(0.7*(i+1) -0.3)),
      color(rgb(140,170,245)),
      z(Z.top),
    ])
  };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 2; j++) {
      add([
        sprite('cork'),
        pos(center().add(0, j*SCALE*10)),
        scale(TILE*5),
        origin(['topleft', 'botleft', 'topright', 'botright'][i]),
        z(Z.bg),
        "scrollable",
        {
          startY: center().y + j*SCALE*10,
        }
      ]);
    };
  };

  add([
    sprite('markerHouse'),
    scale(TILE * 2/3),
    pos(SCALE/10, SCALE/10),
    z(Z.top),
    area(),
    rotate(3),
    "menu",
    "navButton",
  ]);


  /*
  EEEEEE
  EEEEEEEEEEE

  Main Content
  (grammar mode enabled)

  EEEEEEEEEEE
  EEEEEE
  */

  let achKeys = Object.keys(ACHIEVEMENTS);
  let achLength = achKeys.length;

  for (let i = 0; i < achLength; i++) {
    let rowMod = 8;
    let sy = SCALE*(2.7 + 1.1*Math.floor(i / rowMod));
    if (STUFF.achievements.includes(achKeys[i])) {
      for (let l = 0; l < 2; l++) {
        if (!(ACHIEVEMENTS[achKeys[i]].icon[1] == -1 && l == 0)) {
          add([
            sprite(['banner', 'achievements'][l], { frame: (ACHIEVEMENTS[achKeys[i]].icon[1-l]) }),
            pos(SCALE*(1.15 + 1.1*(i % rowMod)), sy),
            origin('center'),
            scale(TILE*0.8),
            z(Z.main + l),
            "scrollable",
            {
              startY: sy,
            }
          ]);
        };
      };
    } else {
      add([
        circle(SCALE*0.2),
        pos(SCALE*(1.15 + 1.1*(i % rowMod)), sy),
        origin('center'),
        color(BLACK),
        opacity(0.15),
        z(Z.main),
        "scrollable",
        {
          startY: sy,
        }
      ]);
    };
  };


  



  onClick('menu', (m) => {
    fadeOut();
    setTimeout(() => { go('menu'); }, FADE_TIME);
  });

  let startHold = 0;
  let startScroll = 0;
  let scrollDiff = 0;
  let holdWait = true;

  onUpdate(() => {
    if (isMouseDown()) {
      if (holdWait) {
        holdWait = false;
        startHold = mousePos().y / SCALE;
        scrollDiff = 0;
        startScroll = mainScroll;
      };

      scrollDiff = startHold - mousePos().y / SCALE;
      mainScroll = Math.max(0, Math.min(2, startScroll + scrollDiff));
      
    } else {
      holdWait = true;
    };
    
    every('navButton', (o) => {
      o.scale = o.isHovering() ? vec2(TILE*0.73) : vec2(TILE*2/3);
    });
    every('scrollable', (s) => {
      s.pos.y = s.startY - mainScroll*SCALE;
    });
  });
  
});