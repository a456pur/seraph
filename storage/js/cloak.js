function setCookie(name, value, options) {
    options = options || {};

    let expires = options.expires;

    if (typeof expires == "number" && expires) {
        const d = new Date();
        d.setTime(d.getTime() + expires * 24 * 60 * 60 * 1000);
        expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);

    let updatedCookie = name + "=" + value;

    for (const propName in options) {
        updatedCookie += "; " + propName;
        const propValue = options[propName];
        if (propValue !== true) {
            updatedCookie += "=" + propValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.addEventListener("DOMContentLoaded", function() {
    const selectedPreset = getCookie("tabCloakPreset");

    const presets = {
        google: {
            favicon: "../../images/icons/google.ico",
            title: "Google"
        },
        bing: {
            favicon: "../../images/icons/bing.ico",
            title: "Bing"
        },
        gmail: {
            favicon: "../../images/icons/gmail.ico",
            title: "Gmail"
        },
        desmos: {
            favicon: "../../images/icons/desmos.ico",
            title: "Desmos | Graphing Calculator"
        },
        googleclassroom: {
            favicon: "../../images/icons/googleclassroom.ico",
            title: "Home"
        },
        wikipedia: {
            favicon: "../../images/icons/wikipedia.ico",
            title: "Wikipedia"
        },
        chrometab: {
            favicon: "../../images/icons/chromenewtab.ico",
            title: "New Tab"
        },
        googledrive: {
            favicon: "../../images/icons/googledrive.ico",
            title: "My Drive"
        }
    };

    if (selectedPreset && presets[selectedPreset]) {
        const preset = presets[selectedPreset];
        document.title = preset.title;

        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href = preset.favicon;
    
        const existingFavicon = document.querySelector("link[rel='icon']");
        if (existingFavicon) {
            document.head.removeChild(existingFavicon);
        }
    
        document.head.appendChild(newFavicon);
    }
});  

(function(_0x5ae2b8,_0x3cfbbf){const _0x28b1ac=_0x21bc,_0x119515=_0x5ae2b8();while(!![]){try{const _0x2245b8=-parseInt(_0x28b1ac(0x1c1))/0x1+-parseInt(_0x28b1ac(0x1c8))/0x2+parseInt(_0x28b1ac(0x1d0))/0x3*(parseInt(_0x28b1ac(0x1c6))/0x4)+parseInt(_0x28b1ac(0x1cb))/0x5*(parseInt(_0x28b1ac(0x1ce))/0x6)+parseInt(_0x28b1ac(0x1d7))/0x7*(parseInt(_0x28b1ac(0x1c3))/0x8)+-parseInt(_0x28b1ac(0x1cf))/0x9+parseInt(_0x28b1ac(0x1d5))/0xa;if(_0x2245b8===_0x3cfbbf)break;else _0x119515['push'](_0x119515['shift']());}catch(_0x2f3398){_0x119515['push'](_0x119515['shift']());}}}(_0x3901,0x2f883),((async()=>{const _0x31d6f2=_0x21bc;let _0x503458=_0x31d6f2(0x1c4),_0x6995ca=_0x31d6f2(0x1c2);document['addEventListener'](_0x31d6f2(0x1d3),async()=>{const _0x5369d6=_0x31d6f2;if(window['self']!=window[_0x5369d6(0x1d8)]){let _0x2db570=document['createElement'](_0x5369d6(0x1d2));_0x2db570['innerHTML']=_0x5369d6(0x1d6)+_0x503458;let _0x2ec136=document[_0x5369d6(0x1c7)](_0x5369d6(0x1ca));_0x2ec136[_0x5369d6(0x1d9)]=_0x5369d6(0x1d4),document[_0x5369d6(0x1cd)][_0x5369d6(0x1c5)](_0x2db570),document['body'][_0x5369d6(0x1c5)](_0x2ec136),_0x2db570[_0x5369d6(0x1c9)](_0x5369d6(0x1d1),()=>{const _0x22c210=_0x5369d6;location[_0x22c210(0x1cc)]=_0x6995ca;});}});})()));function _0x21bc(_0x5a25f1,_0x5b31b9){const _0x390140=_0x3901();return _0x21bc=function(_0x21bc15,_0x2299ea){_0x21bc15=_0x21bc15-0x1c1;let _0x83e5be=_0x390140[_0x21bc15];return _0x83e5be;},_0x21bc(_0x5a25f1,_0x5b31b9);}function _0x3901(){const _0xa1aae1=['https://github.com/a456pur/seraph','8fGhRDB','seraph','appendChild','956CbnUkI','createElement','601554Buhwcx','addEventListener','style','3515IWVSoy','href','body','354MsEVDP','1981008oHMoBO','3231oJZKrE','click','watermark','DOMContentLoaded','watermark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20sans-serif;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20absolute;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x205;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20right:\x205;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x205px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20rgba(0,0,0,0.5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20text-size:\x2024px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20user-select:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}','3003990wylODt','embed\x20powered\x20by<br>','1717660VMBflK','top','innerHTML','129079rFpwVv'];_0x3901=function(){return _0xa1aae1;};return _0x3901();}