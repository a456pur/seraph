
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
		
	var timestep = 1 / 60; // 60 Hz time step
    var accumulator = 0;
  
    requestAnimationFrame(function gameLoop(timestamp) {
        accumulator += (timestamp - lastFrameTimeMs) / 1000;
        while (accumulator > timestep) {
        accumulator -= timestep;
    }
	
    lastFrameTimeMs = timestamp;
    requestAnimationFrame(gameLoop);
  });
  
  	runtime.addEventListener("tick", () => Tick(runtime));
}

var lastFrameTimeMs = 0;

function Tick(runtime)
{
	// Code to run every tick
	getScreenRefreshRate(function(FPS){
	  //console.log(`${FPS} FPS`);
	  runtime.globalVars.ScnRefreshRate = FPS;
      //console.log("FPS = "+runtime.globalVars.ScnRefreshRate);
	  
	});
}

/**
 * Allows to obtain the estimated Hz of the primary monitor in the system.
 * 
 * @param {Function} callback The function triggered after obtaining the estimated Hz of the monitor.
 * @param {Boolean} runIndefinitely If set to true, the callback will be triggered indefinitely (for live counter).
 */
function getScreenRefreshRate(callback, runIndefinitely){
    let requestId = null;
    let callbackTriggered = false;
    runIndefinitely = runIndefinitely || false;

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame;
    }
    
    let DOMHighResTimeStampCollection = [];

    let triggerAnimation = function(DOMHighResTimeStamp){
        DOMHighResTimeStampCollection.unshift(DOMHighResTimeStamp);
        
        if (DOMHighResTimeStampCollection.length > 10) {
            let t0 = DOMHighResTimeStampCollection.pop();
            let fps = Math.floor(1000 * 10 / (DOMHighResTimeStamp - t0));

            if(!callbackTriggered){
                callback.call(undefined, fps, DOMHighResTimeStampCollection);
            }

            if(runIndefinitely){
                callbackTriggered = false;
            }else{
                callbackTriggered = true;
            }
        }
    
        requestId = window.requestAnimationFrame(triggerAnimation);
    };
    
    window.requestAnimationFrame(triggerAnimation);

    // Stop after half second if it shouldn't run indefinitely
    if(!runIndefinitely){
        window.setTimeout(function(){
            window.cancelAnimationFrame(requestId);
            requestId = null;
        }, 500);
    }
}