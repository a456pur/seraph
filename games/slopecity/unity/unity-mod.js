function UnityOpen(url) {
	url= "#"+ url;
	console.log("--fx--UnityOpen--", url);	
	return url;
}

function UnityUrlFix(url) {
	// FIND: http.open("GET", "patch/json/null.json?"+ _url,true);
	// REPL: http.open(_method,UnityUrlFix(_url),true);
	console.log("--fx--UnityUrlFix--", url);
	if(url.indexOf("unity3d.com")>0 || url.indexOf("appspot.com")>0 || url.indexOf("herocraft.com")>0){
		url= "json/null.json?"+ url;
	}
	
	return url;
}

function fixGameView() {
	console.log("--fixGameView--");
  const gameView= document.getElementsByClassName("webgl-content");
  if (gameView) {
  	console.log("--fixGameView--", gameView);
  	if (gameView.clientHeight> gameView.clientWidth) {
      gameView.style.height= Math.floor(gameView.clientWidth)+ "px";
  	}
  }
}
window.addEventListener("resize", fixGameView);
