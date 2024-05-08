var supportsVibrate=0;navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate;if(navigator.vibrate){supportsVibrate=1;}else{supportsVibrate=0;}
function ex_patch_device_vibrate_js(duration)
{if(supportsVibrate){navigator.vibrate(duration);return 1;}else{return 0;}}
function ex_patch_device_vibration_supported_js()
{if(supportsVibrate){return 1;}else{return 0;}}