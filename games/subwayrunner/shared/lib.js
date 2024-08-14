window.BrowserDetector=(function(){function detect(){var ua=navigator.userAgent;var tem;var M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+\.\d+)/i)||[];if(/trident/i.test(M[1])){tem=/\brv[ :]+(\d+\.\d+)/g.exec(ua)||[];return{name:'Internet Explorer',version:(tem[1]||'')};}
if(/(coc_coc_browser|edge(?=\/))\/?\s*(\d+\.\d+)/i.test(ua)){tem=ua.match(/(coc_coc_browser|edge(?=\/))\/?\s*(\d+)\.\d+/i);if(tem!=null){return{name:(tem[1]=='Edge'?tem[1]:'CocCoc'),version:tem[2]};}}
if(M[1]==='Chrome'){tem=ua.match(/\bOPR\/(\d+\.\d+)/);if(tem!=null){return{name:'Opera',version:tem[1]};}}
M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,'-?'];if((tem=ua.match(/version\/(\d+\.\d+)/i))!=null){M.splice(1,1,tem[1]);}
if(M[0]=='MSIE'){M[0]='Internet Explorer';}
return{name:M[0],version:M[1]};}
var detect=detect();return{name:detect.name,version:detect.version,msie:(detect.name=='Internet Explorer'),msedge:(detect.name=='Edge'),coccoc:(detect.name=='CocCoc'),firefox:(detect.name=='Firefox'),safari:(detect.name=='Safari'),chrome:(detect.name=='Chrome'),opera:(detect.name=='Opera'),};})();function enableSound(){return;}
!function(){if(window.UnityLoader){if(window.UnityLoader.compatibilityCheck){window.UnityLoader.compatibilityCheck=function(element,callback,errCallback){callback();}}}
if(!(BrowserDetector.chrome&&BrowserDetector.version>=66)){return;}
function buildSoundOverlay(){const overlay=document.createElement('div');overlay.classList.add('sound-overlay');overlay.setAttribute('id','sound-overlay');return overlay;}
function buildSoundText(){const textNode=document.createTextNode('');const textSpan=document.createElement('span');textSpan.classList.add('sound-text');textSpan.appendChild(textNode);return textSpan;}
const soundOverlay=buildSoundOverlay();soundOverlay.appendChild(buildSoundText());document.addEventListener('DOMContentLoaded',function(){var root=document.getElementsByClassName('webgl-content')[0];if(!root){root=document.getElementsByClassName('template-wrap')[0];}
root.appendChild(soundOverlay);});'click removeSoundOverlay'.split(' ').forEach(e=>document.addEventListener(e,function(){soundOverlay.style.display='none';},false));}();