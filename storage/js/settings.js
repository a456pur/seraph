// themes
document.addEventListener('DOMContentLoaded', function () {
    applyStoredTheme();
    populateCustomThemeSettings();
});

function applyStoredTheme() {
    const storedTheme = localStorage.getItem('selectedTheme');

    hideCustomThemeSettings();
    if (storedTheme === 'custom') {
        showCustomThemeSettings();
        applyCustomThemeStyles();
    }
    applyTheme();
}

function hideCustomThemeSettings() {
    const customThemeSettings = document.getElementById('custom-theme-settings');
    if (customThemeSettings) {
        customThemeSettings.style.display = 'none';
    }
}

function showCustomThemeSettings() {
    const customThemeSettings = document.getElementById('custom-theme-settings');
    if (customThemeSettings) {
        customThemeSettings.style.display = 'block';
    }
}

function populateCustomThemeSettings() {
    const customTheme = JSON.parse(localStorage.getItem('customTheme')) || {};
    document.getElementById('background-image').value = customTheme['background-image'] || 'https://raw.githubusercontent.com/a456pur/seraph/main/images/backgrounds/seraph/homebg.png';
    document.getElementById('font-family').value = customTheme['font-family'] || 'Ubuntu';
    document.getElementById('text-color').value = customTheme['text-color'] || '#FFFFFF';
    document.getElementById('background-color').value = customTheme['background-color'] || 'black';
    document.getElementById('border-color1').value = customTheme['border-color1'] || '#000000';
    document.getElementById('border-color2').value = customTheme['border-color2'] || '#FFFFFF';
    document.getElementById('hover-color').value = customTheme['hover-color'] || '#1a1818';
    document.getElementById('text-glow').value = customTheme['text-glow'] || '#000000';
}

function applyCustomThemeStyles() {
    const customTheme = JSON.parse(localStorage.getItem('customTheme')) || {};
    const root = document.documentElement;

    let customStyleTag = document.getElementById('custom-theme-style');
    if (!customStyleTag) {
        customStyleTag = document.createElement('style');
        customStyleTag.id = 'custom-theme-style';
        document.head.appendChild(customStyleTag);
    }
    customStyleTag.textContent = `
        :root {
            --background-image: url('${customTheme['background-image'] || ''}');
            --font-family: '${customTheme['font-family'] || ''}', 'Ubuntu', sans-serif;
            --text-color: ${customTheme['text-color'] || '#fff'};
            --background-color: ${customTheme['background-color'] || 'black'};
            --border-color1: ${customTheme['border-color1'] || '#aaaaaa'};
            --border-color2: ${customTheme['border-color2'] || '#ffffff'};
            --hover-color: ${customTheme['hover-color'] || '#1a1818'};
            --text-glow: ${customTheme['text-glow'] || '#000000'};
        }
    `;
}

function removeCustomThemeStyles() {
    const customStyleTag = document.getElementById('custom-theme-style');
    if (customStyleTag) {
        customStyleTag.parentNode.removeChild(customStyleTag);
    }
}

function applyTheme() {
    const selectedTheme = document.getElementById('theme-select');
    if (selectedTheme) {
        const themeValue = selectedTheme.value;
        document.documentElement.className = `theme-${themeValue}`;
        localStorage.setItem('selectedTheme', themeValue);

        if (themeValue === 'custom') {
            applyCustomThemeStyles();
            showCustomThemeSettings();
        } else {
            hideCustomThemeSettings();
            removeCustomThemeStyle();
        }
    }
}

function removeCustomThemeStyle() {
    const customThemeStyle = document.getElementById('custom-theme-style');
    if (customThemeStyle) {
        customThemeStyle.parentNode.removeChild(customThemeStyle);
    }
}

const storedTheme = localStorage.getItem('selectedTheme');
if (storedTheme) {
    const selectElement = document.getElementById('theme-select');
    if (selectElement) {
        selectElement.value = storedTheme;
        applyStoredTheme();
    }
}

const applyButton = document.getElementById('apply-theme');
if (applyButton) {
    applyButton.addEventListener('click', applyTheme);
}

const applyCustomButton = document.getElementById('apply-custom-theme');
if (applyCustomButton) {
    applyCustomButton.addEventListener('click', function () {
        const customTheme = {
            'background-image': document.getElementById('background-image').value,
            'font-family': document.getElementById('font-family').value,
            'text-color': document.getElementById('text-color').value,
            'background-color': document.getElementById('background-color').value,
            'border-color1': document.getElementById('border-color1').value,
            'border-color2': document.getElementById('border-color2').value,
            'hover-color': document.getElementById('hover-color').value,
            'text-glow': document.getElementById('text-glow').value,
        };

        localStorage.setItem('customTheme', JSON.stringify(customTheme));
        applyCustomThemeStyles();

        const selectedTheme = document.getElementById('theme-select');
        if (selectedTheme.value !== 'custom') {
            removeCustomThemeStyles();
        }
    });
}

// cloaking
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
    const presetSelect = document.getElementById("presetSelect");
    const saveButton = document.getElementById("saveButton");
    const resetButton = document.getElementById("resetButton");
    const successMessage = document.getElementById("success");

    const selectedPreset = getCookie("tabCloakPreset");
    if (selectedPreset) {
        presetSelect.value = selectedPreset;
    }

    saveButton.addEventListener("click", function() {
        const selectedValue = presetSelect.value;
        successMessage.textContent = "cloak saved, refreshing page...";
        setCookie("tabCloakPreset", selectedValue, { expires: 365 });

        successMessage.style.display = "block";
        setTimeout(function() {
            window.location.reload();
        }, 1000);
    });

    resetButton.addEventListener("click", function() {
        deleteCookie("tabCloakPreset");
        presetSelect.selectedIndex = 0;
        successMessage.textContent = "cloak removed, refreshing page...";
        successMessage.style.display = "block";
        setTimeout(function() {
            window.location.reload()
        }, 1000);
    });

    function deleteCookie(name) {
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
});


// panic key
const panicSuccessMessage = document.getElementById("success-panic");
let keyCombo = new Set();

document.getElementById('panicKey').addEventListener('focus', function() {
    keyCombo.clear();
    this.value = '';
});

document.addEventListener('keydown', function(event) {
    const panicKeyInput = document.getElementById('panicKey');
    if (document.activeElement === panicKeyInput) {
        event.preventDefault();
        keyCombo.add(event.key);
        panicKeyInput.value = Array.from(keyCombo).join('+');
    }
});

document.addEventListener('keyup', function(event) {
    const panicKeyInput = document.getElementById('panicKey');
    if (document.activeElement === panicKeyInput) {
        keyCombo.delete(event.key);
    }
});

function saveSettings() {
    const panicKey = document.getElementById('panicKey').value || 'Ctrl+Shift+P';
    const panicUrl = document.getElementById('panicUrl').value || 'https://www.desmos.com/scientific';
    
    localStorage.setItem('panicKey', panicKey);
    localStorage.setItem('panicUrl', panicUrl);
    
    panicSuccessMessage.textContent = "panic mode settings saved, refreshing page";
    panicSuccessMessage.style.display = "block";
    setTimeout(function() {
        window.location.reload();
    }, 1000);
}

// open blank
document.addEventListener('DOMContentLoaded', () => {
    function cookie(name, value = null, days = null) {
        if (value !== null) {
            let expires = "";
            if (days) {
                let date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/";
        } else {
            let cookieArr = document.cookie.split(';');
            for (let i = 0; i < cookieArr.length; i++) {
                let cookiePair = cookieArr[i].split('=');
                if (name === cookiePair[0].trim()) {
                    return decodeURIComponent(cookiePair[1]);
                }
            }
            return null;
        }
    }

    let openBlankSetting = cookie('open-blank');
    if (!openBlankSetting) {
        openBlankSetting = 'true';
        cookie('open-blank', openBlankSetting, 365);
    }
    document.querySelector(`input[name="openBlankSetting"][value="${openBlankSetting}"]`).checked = true;

    document.querySelectorAll('input[name="openBlankSetting"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            let selectedValue = event.target.value;
            cookie('open-blank', selectedValue, 365);

            let anchorTags = document.querySelectorAll('a');
            if (selectedValue === 'false') {
                anchorTags.forEach(anchor => {
                    anchor.removeAttribute('target');
                });
            } else {
                anchorTags.forEach(anchor => {
                    anchor.setAttribute('target', '_blank');
                });
            }
        });
    });
});

// export/import custom themes
document.getElementById('export-theme').addEventListener('click', function() {
    const blackout = document.createElement('div');
    blackout.id = 'blackout';
    const themePrompt = document.createElement('div');
    themePrompt.id = 'theme-prompt';
    themePrompt.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                    background-color: var(--background-color); border: 3px solid var(--border-color2); border-radius: 16px; color: var(--text-color); z-index: 9999; text-align: center; width: 60%; max-width: 550px; animation: none; margin-bottom: 40px;">
            <h2 style="margin-top: 20.08px;">choose a name</h2>
            <p>type a name for your custom theme! you'll then receive a .theme file which you can then import back into the site when you need</p> 
            <br>
            <input type="text" style="background-color: var(--background-color); color: var(--text-color);padding: 2px; border: 2px solid var(--border-color2);border-radius: 16px; width: 50%; max-width: 450px;font-size: 20px; font-family: var(--font-family); text-align: center; padding-top: 5px; padding-bottom: 5px;" id="theme-name" placeholder="enter a name here">
            <br>
            <button id="save-theme">export</button>
            <button id="cancel-export-theme">cancel</button>
            <br>
            <br>
        </div>
    `;
    document.body.appendChild(blackout);
    document.body.appendChild(themePrompt);

    document.getElementById('blackout').style.display = 'block';
    document.getElementById('theme-prompt').style.display = 'block';

    document.getElementById('save-theme').addEventListener('click', function() {
        let themeName = document.getElementById('theme-name').value;
        if (!themeName) {
            themeName = 'customtheme'
        }

        const theme = {
            backgroundImage: document.getElementById('background-image').value,
            fontFamily: document.getElementById('font-family').value,
            textColor: document.getElementById('text-color').value,
            backgroundColor: document.getElementById('background-color').value,
            borderColor1: document.getElementById('border-color1').value,
            borderColor2: document.getElementById('border-color2').value,
            hoverColor: document.getElementById('hover-color').value,
            textGlow: document.getElementById('text-glow').value
        };

        const themeJson = JSON.stringify(theme, null, 2);
        const blob = new Blob([themeJson], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `seraph-${themeName}.theme`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        document.getElementById('blackout').style.display = 'none';
        document.getElementById('theme-prompt').style.display = 'none';
        document.body.removeChild(blackout);
        document.body.removeChild(themePrompt);
    });

    document.getElementById('cancel-export-theme').addEventListener('click', function() {
        document.getElementById('blackout').style.display = 'none';
        document.getElementById('theme-prompt').style.display = 'none';
        document.body.removeChild(blackout);
        document.body.removeChild(themePrompt);
    });
});

document.getElementById('import-theme').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.theme';
    input.style.display = 'none';
    document.body.appendChild(input);

    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const theme = JSON.parse(e.target.result);
            document.getElementById('background-image').value = theme.backgroundImage || '';
            document.getElementById('font-family').value = theme.fontFamily || '';
            document.getElementById('text-color').value = theme.textColor || '';
            document.getElementById('background-color').value = theme.backgroundColor || '';
            document.getElementById('border-color1').value = theme.borderColor1 || '';
            document.getElementById('border-color2').value = theme.borderColor2 || '';
            document.getElementById('hover-color').value = theme.hoverColor || '';
            document.getElementById('text-glow').value = theme.textGlow || '';

            document.getElementById('apply-custom-theme').click();
            document.body.removeChild(input);
        };
        reader.readAsText(file);
    });

    input.click();
});