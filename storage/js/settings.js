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
            --font-family: '${customTheme['font-family'] || ''}', sans-serif;
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