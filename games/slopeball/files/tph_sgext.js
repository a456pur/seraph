function sg_cloud_brand() {
  try {
      if (window.sg_cloud_brand_obj == undefined) {
          if (CloudAPI.logos.active()) {
              sg_cloud_brand_obj = document.createElement('img');
              sg_cloud_brand_obj.src = CloudAPI.logos.list().vertical;
              sg_cloud_brand_obj.onclick = sg_cloud_brand_goto;
              sg_cloud_brand_obj.setAttribute('style', 'display: none; position: absolute; left: 0px; top: 0px; width: 0px; height: 0px; z-index: 5; border: 0px');
              document.body.appendChild(sg_cloud_brand_obj);
              return true;
          } else {
              return false;
          }
      } else {
          return false;
      }
  } catch (e) {
      return false;
  };
}

function sg_cloud_brand_width() {
  try {
      return sg_cloud_brand_obj.width;
  } catch (e) {
      return 0;
  };
}

function sg_cloud_brand_height() {
  try {
      return sg_cloud_brand_obj.height;
  } catch (e) {
      return 0;
  };
}

function sg_cloud_brand_goto() {
}

function sg_cloud_more() {
}

function sg_cloud_play() {
  try {
      // play();
  } catch (e) {}
}

function sg_cloud_over() {
  try {
      // gameOver();
  } catch (e) {}
}

function sg_isie() {
  try {
      var isIE = window.navigator.userAgent.indexOf("MSIE") > -1;
      var isEdge = window.navigator.userAgent.indexOf("Trident/") > -1;
      if (isIE || isEdge) {
          return true;
      } else {
          return false;
      }
  } catch (e) {
      return false;
  }
}

function sg_lag_init(arg1, arg2) {
  try {
      // init(arg1, arg2);
  } catch (e) {}
}

function sg_lag_score(boardid, scorenum) {
  try {
      var boardinfo = {};
      boardinfo.score = scorenum;
      boardinfo.board = boardid;
  } catch (e) {}
}

function sg_lag_achi(achiid) {
  try {
      var api_awards = [];
      api_awards.push(achiid);
  } catch (e) {}
}

function sg_lag_ad(isreward) {
  try {
      if (typeof prerollStart === 'undefined') {
          console.log('skip ad, prerollStart not found');
          if (isreward) {
              gml_Script_gmcallback_rewardfail();
          }
      } else {
       }
  } catch (e) {
      if (isreward) {
          gml_Script_gmcallback_rewardfail();
      }
  }
}

function sg_lag_adok() {
  try {
      if (typeof prerollStart === 'undefined') {
          console.log('ad unavailalbe');
          return 0;
      } else {
          console.log('ad available');
          return 1;
      }
  } catch (e) {
      return 0;
  }
}

function sg_coolmath_event(name, num) {
  try {
      if (num == "") {
          parent.cmgGameEvent(name);
      } else {
          parent.cmgGameEvent(name, num);
      }
  } catch (e) {}
};

function sg_armor_splash() {
  if (window.armordivobj != undefined) {
      armordivobj.style.display = "block";
      armorvideoobj.play();
      setTimeout(function() {
          armordivobj.style.display = "none";
      }, 5300);
  }
}

function sg_ios7_fix() {
  window.addEventListener('scroll', function() {
      if (document.activeElement === document.body && window.scrollY > 0) {
          document.body.scrollTop = 0;
      }
  }, true);
}

function sg_nug_score(name, num) {
  try {
      var score = new NugPlayScore().init();
      score.setValue(num);
      nugPlay.api().submitScore(score, name);
  } catch (e) {}
};

function sg_nug_achi(name) {
  try {
      nugPlay.api().achieve(name);
  } catch (e) {}
};

function sg_nug_load() {
  try {
      nugPlay.gameLoaded();
  } catch (e) {}
};

function sg_nug_start() {
  try {
      nugPlay.newGame();
  } catch (e) {}
};

function sg_nug_end() {
  try {
      nugPlay.endGame();
  } catch (e) {}
};

function sg_nug_quit() {
  try {
      nugPlay.quitGame();
  } catch (e) {}
};

function sg_kong_stat(name, num) {
  try {
      kongregate.stats.submit(name, num);
  } catch (e) {}
};

function sg_buon_start() {
  try {
      GamifiveSDK.startSession();
  } catch (e) {}
}

function sg_buon_end(lvl, scr) {
  try {
      GamifiveSDK.endSession({
          level: lvl,
          score: scr
      });
  } catch (e) {}
}

function sg_iwin_ad() {
  try {
      iConsole.ads.show({
          type: 'interstitial'
      });
  } catch (e) {};
}

function sg_iwin_score(num) {
  try {
      iConsole.game.postHighScore({
          score: num
      });
  } catch (e) {};
}

function sg_spil_score(num) {
  try {
      if (sg_spilapi_obj) {
          sg_spilapi_obj.Score.submit(num);
      }
  } catch (e) {};
}

function sg_spil_ad() {
  try {
      if (sg_spilapi_obj) {
          sg_spilapi_obj.GameBreak.request(gml_Script_gmcallback_focusoff, gml_Script_gmcallback_focuson);
      }
  } catch (e) {
      gml_Script_gmcallback_focuson();
  };
}

function sg_spil_splash() {
  try {
      if (sg_spilapi_obj) {
          sg_spilapi_obj.Branding.displaySplashScreen(gml_Script_gmcallback_splashend);
      }
  } catch (e) {
      gml_Script_gmcallback_splashend();
  };
}

function sg_fgl_init() {
  function wrap(f) {
      return function(e) {
          var o = document.activeElement;
          if (!o || o == document.body || o.tagName == "CANVAS") f.call(this, e);
      };
  };
  window.onkeydown = wrap(window.onkeydown);
  window.onkeyup = wrap(window.onkeyup);
}

function sg_fgl_achi(nam) {
  try {
      if (!fgl.hasAchievement(nam)) {
          fgl.grantAchievement(nam);
      }
  } catch (e) {};
}

function sg_fgl_ad() {
  try {
      fgl.showAd();
  } catch (e) {};
}

function sg_fgl_more_ok() {
  try {
      if (fgl.crossPromotionEnabled) {
          return true;
      } else {
          return false;
      }
  } catch (e) {
      return false;
  };
}

function sg_fgl_more() {
  try {
      fgl.showMoreGames();
  } catch (e) {};
}

function sg_fgl_prem_ok() {
  try {
      if (fgl.unlockEnabled) {
          return true;
      } else {
          return false;
      }
  } catch (e) {
      return false;
  };
}

function sg_fgl_prem() {
  try {
      fgl.inApp.initiateUnlockFunction(function() {
          gml_Script_gmcallback_fgl_iap_ok();
      }, function() {});
  } catch (e) {};
}

function sg_fgl_isprem() {
  try {
      if (fgl.isPremium()) {
          return true;
      } else {
          return false;
      }
  } catch (e) {
      return false;
  };
}

function sg_fgl_spon_ok() {
  try {
      if (fgl.brandingEnabled) {
          return true;
      } else {
          return false;
      }
  } catch (e) {
      return false;
  };
}

function sg_fgl_spon_create() {
  try {
      if (window.sg_fgl_spon_obj == undefined) {
          sg_fgl_spon_obj = document.createElement('img');
          sg_fgl_spon_obj.src = fgl.getBrandingLogo();
          sg_fgl_spon_obj.onclick = fgl.handleBrandingClick;
          sg_fgl_spon_obj.setAttribute('style', 'display: none; position: absolute; left: 0px; top: 0px; width: 0px; height: 0px; z-index: 5; border: 0px');
          document.body.appendChild(sg_fgl_spon_obj);
          return true;
      } else {
          return false;
      }
  } catch (e) {
      return false;
  };
}

function sg_fgl_score_send(num) {
  try {
      fgl.submitScore(num);
  } catch (e) {};
}

function sg_fgl_score_show() {
  try {
      fgl.displayScoreboard();
  } catch (e) {};
}

function sg_banner_create(siz) {
  try {
      if (window.bancont != undefined) {
          sg_banner_delete();
      }
      bancont = document.createElement("iframe");
      bancont.id = "sg-banner-cont";
      bancont.height = siz;
      bancont.marginHeight = "0";
      bancont.marginWidth = "0";
      bancont.srcdoc = '';
      document.body.insertBefore(bancont, document.body.firstChild);
  } catch (e) {};
}

function sg_banner_delete() {
  try {
      if (window.bancont != undefined) {
          document.body.removeChild(bancont);
          bancont = undefined;
      }
  } catch (e) {};
}

function sg_lead_create() {
  try {
      if (window.adscreen == undefined) {
          adcont = undefined;
          adscreen = document.createElement("div");
          adscreen.id = "sg-ad-screen";
          adtext = document.createElement("div");
          adtext.id = "sg-ad-text";
          adtext.innerHTML = "Advertisment";
          adbut = document.createElement("img");
          adbut.id = "sg-ad-but";
          adbut.src = "silengames/adbut.png";
          adbut.onclick = gml_Script_gmcallback_adclose;
          adbut.width = "30";
          adbut.height = "30";
          adbut.border = "0";
          adbut.alt = "Close";
          adscreen.appendChild(adtext);
          adscreen.appendChild(adbut);
          document.body.insertBefore(adscreen, document.body.firstChild);
      }
  } catch (e) {};
}

function sg_lead_show(siz) {
  try {
      if (window.adscreen != undefined) {
          adscreen.setAttribute('style', 'display: block');
          adbut.width = siz;
          adbut.height = siz;
          if (window.adcont == undefined) {
              adcont = document.createElement("iframe");
              adcont.srcdoc = '<script type="text/javascript" src="http://ad.leadboltmobile.net/show_app_ad.js?section_id=568879653"></script>';
              adcont.id = "sg-ad-cont";
              adscreen.appendChild(adcont);
          }
      }
  } catch (e) {};
}

function sg_lead_close() {
  try {
      if (window.adscreen != undefined) {
          adscreen.setAttribute('style', 'display: none');
          if (window.adcont != undefined) {
              adscreen.removeChild(adcont);
              adcont = undefined;
          }
      }
  } catch (e) {};
}

function sg_clay_share(txt) {
  try {
      Clay('client.share.any', {
          text: txt
      });
  } catch (e) {};
}
sg_guid = "";

function sg_init(guid) {
  try {
      sg_guid = guid;
  } catch (e) {};
}

function sg_start() {
  try {
      if (window.loadingobj != undefined) {
          document.body.removeChild(loadingobj);
      }
      if (window.loadbarbackobj != undefined) {
          document.body.removeChild(loadbarbackobj);
      }
      if (window.loadintervalid != undefined) {
          clearInterval(loadintervalid);
      }
      if (window.loadingtextobj != undefined) {
          document.body.removeChild(loadingtextobj);
      }
      if (window.sg_spil_spon_obj != undefined) {
          sg_spil_spon_obj.setAttribute('style', 'display: none');
      }
      sg_banner_delete();
  } catch (e) {};
}

function sg_canvas_resize(xpos, ypos, xsiz, ysiz) {
  canvasobj.setAttribute('style', 'position: absolute; left: ' + xpos + 'px; top: ' + ypos + 'px; width: ' + xsiz + 'px; height: ' + ysiz + 'px');
}

function sg_brand_set(type) {
  try {
      switch (type) {
          case "cloud":
              return sg_cloud_brand_obj;
          case "claycross":
              return claycrossbar;
          case "fgllogo":
              return sg_fgl_spon_obj;
          case "spillogo":
              return sg_spil_spon_obj;
          case "spilmore":
              return sg_spil_more_obj;
          case "spilcross":
              return sg_spil_cross_obj;
          default:
              return undefined;
      }
  } catch (e) {
      return undefined;
  };
}

function sg_brand_show(type, xpos, ypos, xsiz, ysiz) {
  try {
      var curobj = sg_brand_set(type);
      if (curobj != null && curobj != undefined) {
          if (type == "claycross") {
              curobj.setAttribute('style', 'display: block');
          } else {
              curobj.setAttribute('style', 'display: block; position: absolute; left: ' + xpos + 'px; top: ' + ypos + 'px; width:' + xsiz + 'px; height:' + ysiz + 'px; z-index: 5; border: 0px');
          }
      }
  } catch (e) {};
}

function sg_brand_hide(type) {
  try {
      var curobj = sg_brand_set(type);
      if (curobj != null && curobj != undefined) {
          curobj.setAttribute('style', 'display: none');
      }
  } catch (e) {};
}
sg_url_obj = [];
sg_url_count = 0;

function sg_url_add(url, blnk) {
}

function sg_url_delete(num) {
  var obj = sg_url_obj[num];
  if (obj) {
      document.body.removeChild(obj.parentNode);
      sg_url_obj[num] = undefined;
  }
}

function sg_url_change(num, xpos, ypos, xsiz, ysiz) {
  var obj = sg_url_obj[num];
  if (obj) {
      obj.style.left = xpos + "px";
      obj.style.top = ypos + "px";
      obj.style.width = xsiz + "px";
      obj.style.height = ysiz + "px";
  }
}

function sg_get(url) {
  if (window.XMLHttpRequest) {
      xmlObject = new XMLHttpRequest();
  } else {
      xmlObject = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlObject.open("GET", url, 0);
  xmlObject.send(null);
  return xmlObject.responseText;
}
sg_focus = 1;
sg_visible_event = "";
try {
  if (typeof document.hidden !== "undefined") {
      sg_visible_event = "visibilitychange";
  } else if (typeof document.webkitHidden !== "undefined") {
      sg_visible_event = "webkitvisibilitychange";
  } else if (typeof document.msHidden !== "undefined") {
      sg_visible_event = "msvisibilitychange";
  } else if (typeof document.mozHidden !== "undefined") {
      sg_visible_event = "mozvisibilitychange";
  }
} catch (e) {};
if (sg_visible_event != "") {
  document.addEventListener(sg_visible_event, sg_get_visibility, false);
}

function sg_get_visibility() {
  try {
      if (sg_focus == 1) {
          sg_focus = 0;
          gml_Script_gmcallback_focusoff();
      } else {
          sg_focus = 1;
          gml_Script_gmcallback_focuson();
      }
  } catch (e) {};
}

function sg_get_language() {
  try {
      var lang = window.navigator.userLanguage || window.navigator.language;
      return lang.substring(0, 2).toLowerCase();
  } catch (e) {
      return "en";
  };
}
sg_unlock_audio = null;
sg_play_audio = null;
sg_is_winphone = false;

function sg_unlock_music(num, win) {
  sg_unlock_audio = document.getElementsByTagName('audio')[num];
  if (win) {
      sg_is_winphone = true;
  }
}

function sg_play_music() {
  try {
      if (sg_play_audio != null) {
          sg_stop_music();
      }
      sg_play_audio = sg_unlock_audio;
      sg_play_audio.loop = true;
      sg_play_audio.addEventListener("ended", sg_play_music, false);
      if (sg_is_winphone) {
          sg_play_audio.play();
      } else {
          window.addEventListener("touchend", sg_unlock_music_event, false);
      }
  } catch (e) {};
}

function sg_unlock_music_event() {
  try {
      sg_play_audio.play();
      window.removeEventListener("touchend", sg_unlock_music_event, false);
      sg_is_winphone = true;
  } catch (e) {};
}

function sg_stop_music() {
  try {
      sg_play_audio.pause();
      sg_play_audio.removeEventListener("ended", sg_play_music, false);
  } catch (e) {};
}

function sg_unlock_webaudio() {
  try {
      if (typeof AudioContext != "undefined" || typeof webkitAudioContext != "undefined") {
          var resumeAudio = function() {
              if (typeof g_WebAudioContext == "undefined" || g_WebAudioContext == null) return;
              if (g_WebAudioContext.state == "suspended") g_WebAudioContext.resume();
              document.removeEventListener("click", resumeAudio);
          };
          document.addEventListener("click", resumeAudio);
      }
  } catch (e) {};
}

function sg_unlock_webaudio_event(event) {
  try {
      var buffer = g_WebAudioContext.createBuffer(1, 1, 22050);
      var source = g_WebAudioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(g_WebAudioContext.destination);
      source.noteOn(0);
      window.removeEventListener("touchstart", sg_unlock_webaudio_event, false);
  } catch (e) {};
}

function sg_no_bar() {
  if (!window.location.hash) {
      var divh = document.getElementById('gm4html5_div_id').style.height;
      if (divh < (window.outerHeight + 200)) {
          document.getElementById('gm4html5_div_id').style.height = (window.outerHeight + 200) + 'px';
      }
      setTimeout(function() {
          window.scrollTo(0, 1);
      }, 50);
  }
}

function test_browser_storage() {
  try {
      return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
      return false;
  }
}
sg_save_ok = test_browser_storage();

function sg_save(name, numb) {
  try {
      var key = sg_guid + name;
      if (sg_save_ok) {
          window.localStorage.setItem(key, numb);
      } else {
          var date = new Date;
          date.setDate(date.getDate() + 999);
          document.cookie = key + "=" + numb + "; path=/; expires=" + date.toUTCString();
      }
  } catch (e) {};
}

function sg_load(name, def) {
  try {
      var key = sg_guid + name;
      if (sg_save_ok) {
          var done = window.localStorage.getItem(key);
      } else {
          var matches = document.cookie.match(new RegExp("(?:^|; )" + key.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"))
          var done = matches ? decodeURIComponent(matches[1]) : undefined;
      }
      if (done != null && done != "") {
          return parseInt(done);
      } else {
          return def;
      }
  } catch (e) {
      return def;
  };
}

function sg_orient(ok) {
  try {
      if (ok) {
          orientobj.setAttribute('style', 'display: block');
      } else {
          orientobj.setAttribute('style', 'display: none');
      }
  } catch (e) {};
}

function sg_test_orient() {
  try {
      if (!viewporter || !viewporter.ACTIVE) {
          alert(0)
          return false;
      } else {
          alert(1)
          return true;
      }
  } catch (e) {
      alert("not try")
      return true;
  };
}
sg_load_perc = 0;

function sg_loadingbar(_graphics, _width, _height, _total, _current, _loadingscreen) {
  if (typeof(window.innerWidth) == 'number') {
      browser_width = window.innerWidth;
      browser_height = window.innerHeight;
  } else if (document.documentElement && document.documentElement.clientWidth) {
      browser_width = document.documentElement.clientWidth;
      browser_height = document.documentElement.clientHeight;
  } else if (document.body && document.body.clientWidth) {
      browser_width = document.body.clientWidth;
      browser_height = document.body.clientHeight;
  }
  multi = (browser_height / splash_h);
  var new_width = (splash_w * multi);
  var load_perc = _current / _total * 100;
  if (load_perc < 100) {
      if (sg_load_perc < load_perc) {
          sg_load_perc += 1;
      }
  } else {
      sg_load_perc = 100;
  }
  var perc = bar_img_w / 100 * sg_load_perc;
  var bar_x = (browser_width - new_width) / 2 + bar_img_x * multi;
  var bar_y = bar_img_y * multi;
  var bar_w = bar_img_w * multi;
  var bar_w2 = perc * multi;
  var bar_h = bar_img_h * multi;
  if (loadbarbackobj) {
      loadbarbackobj.setAttribute('style', 'left: ' + bar_x + 'px; top: ' + bar_y + 'px; width:' + bar_w + 'px; height:' + bar_h + 'px; background-size: ' + (bar_img_w * multi) + 'px');
  }
  if (loadbarobj) {
      loadbarobj.setAttribute('style', 'left: ' + bar_x + 'px; top: ' + bar_y + 'px; width:' + bar_w2 + 'px; height:' + bar_h + 'px; background-size: ' + (bar_img_w * multi) + 'px');
  }
}