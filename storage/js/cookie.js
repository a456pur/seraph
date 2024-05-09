// --- Config --- //
var purecookieTitle = "cookies"; // Title
var purecookieDesc = ""; // Description
var purecookieLink = 'we use cookies on this website to save game progress/store settings. seraph is also powered by google analytics. none of this data is linked towards you.'; // Cookiepolicy link
var purecookieButton = "understood"; // Button text
// ---        --- //


function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .05) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};

function pureFadeOut(elem) {
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (val > 0) {
      el.style.opacity = val - .05;
      requestAnimationFrame(fade);
    } else {
      el.style.display = "none"; 
    }
  })();
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function cookieConsent() {
    if (!getCookie('purecookieDismiss')) {
      var contentSide = document.querySelector('.content-side');
      if (contentSide) {
        var cookieConsentContainer = document.createElement('div');
        cookieConsentContainer.classList.add('cookieConsentContainer');
        cookieConsentContainer.id = 'cookieConsentContainer';
  
        // CSS styles for the cookie consent container
        var style = document.createElement('style');
        style.textContent = `
          .cookieConsentContainer {
            font-family: var(--font-family);
            z-index: 999;
            width: 350px;
            min-height: 20px;
            box-sizing: border-box;
            border: 3px solid var(--border-color2);
            border-radius: 16px;
            padding: 30px 30px 30px 30px;
            box-shadow: 0px 0px 10px 0px var(--background-color);
            overflow: hidden;
            position: fixed;
            bottom: 30px;
            right: 30px;
            display: none;

            text-align: center;

            background: var(--background-color);
          }
          .cookieConsentContainer .cookieTitle a {
            color: #ffffff;
            font-size: 22px;
            line-height: 20px;
            display: block;
          }
          .cookieConsentContainer .cookieDesc p {
            margin: 0;
            padding: 0;
            color: #ffffff;
            font-size: 16px;
            line-height: 20px;
            display: block;
            margin-top: 10px;
          }
          .cookieConsentContainer .cookieDesc a {
            color: #ffffff;
            text-decoration: underline;
          }
          .cookieConsentContainer .cookieButton a {
            display: inline-block;
            color: #ffffff;
            font-size: 16px;
            font-weight: bold;
            margin-top: 14px;
            backdrop-filter: blur(10px);
            border: 3px solid var(--border-color2);
            border-radius: 16px;
            box-sizing: border-box;
            padding: 15px 24px;
            text-align: center;
            text-decoration: none;
            transition: background 0.3s;
          }
          .cookieConsentContainer .cookieButton a:hover {
            cursor: pointer;
            filter: brightness(0.9);
          }
          @media (max-width: 980px) {
            .cookieConsentContainer {
              bottom: 10px !important;
              left: 0px !important;
              width: 70% !important;
              margin: auto;
            }
          }
          
        `;
        document.head.appendChild(style);
        cookieConsentContainer.innerHTML = '<div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + ' ' + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + '</a></div>';
        contentSide.appendChild(cookieConsentContainer);
        pureFadeIn("cookieConsentContainer");
      }
    }
  }
  
  

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function() { cookieConsent(); };
