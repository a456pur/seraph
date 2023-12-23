function applyStoredTheme() {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        document.documentElement.className = `theme-${storedTheme}`;

        if (storedTheme === 'custom') {
            applyCustomThemeStyles();
        }
    }
}

function applyCustomThemeStyles() {
    const customTheme = JSON.parse(localStorage.getItem('customTheme')) || {};
    const root = document.documentElement;

    const customStyleTag = document.getElementById('custom-theme-style');
    if (!customStyleTag) {
        const styleTag = document.createElement('style');
        styleTag.id = 'custom-theme-style';
        styleTag.textContent = `
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
        document.head.appendChild(styleTag);
    }
}

window.addEventListener('load', applyStoredTheme);
