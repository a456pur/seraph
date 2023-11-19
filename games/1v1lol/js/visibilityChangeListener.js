document.addEventListener("visibilitychange", () => {
    if (!gameInstance) {
        return;
    }
    
    var isFocused = document.visibilityState === "visible";
    gameInstance.SendMessage("PersistantObjects", "OnApplicationFocusChange", isFocused ? 1 : 0);
}, false);
