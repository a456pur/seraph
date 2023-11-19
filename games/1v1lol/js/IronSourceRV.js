window.InitRV = function InitRV(id) {
  $.getScript("https://static.ultra-rv.com/rv-min.js", function () {

    let userId = id === undefined ? "Guest" : id;
    let ironRV = IronRV.getInstance({
      applicationKey: "1-mb5whk",
      applicationUserId: userId,
    });

    ironRV.addListener(IronRV.EVENTS.READY, function () {
      gameInstance.SendMessage("MainMenuManagers", "RvReady");
    });

    ironRV.addListener(IronRV.EVENTS.CLOSE, function () {
      gameInstance.SendMessage("MainMenuManagers", "RvWatchComplete", "false");
    });

    ironRV.addListener(IronRV.EVENTS.COMPLETION, function () {
      gameInstance.SendMessage("MainMenuManagers", "RvWatchComplete", "true");
    });

    ironRV.addListener(IronRV.EVENTS.AD_BLOCK, function () {
      ironRV.showAdBlockMessage();
    });

    ironRV.addListener(IronRV.EVENTS.INIT_ERROR, function () {
    });

    window.showRV = () => {
      ironRV.show();
    };
  });
}
