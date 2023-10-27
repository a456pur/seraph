function applyStoredTheme() {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        document.documentElement.className = `theme-${storedTheme}`;
    }
}

window.addEventListener('load', applyStoredTheme);