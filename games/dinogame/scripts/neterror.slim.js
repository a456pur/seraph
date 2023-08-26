const HIDDEN_CLASS='hidden';let isSubFrame=false;
function updateIconClass(newClass){const frameSelector=isSubFrame?'#sub-frame-error':'#main-frame-error';const iconEl=document.querySelector(frameSelector+' .icon');if(iconEl.classList.contains(newClass)){return;}
iconEl.className='icon '+newClass;}
function onDocumentLoad(){const iconClass=loadTimeData.valueExists('iconClass')&&loadTimeData.getValue('iconClass');updateIconClass(iconClass);if(!isSubFrame&&iconClass==='icon-offline'){document.documentElement.classList.add('offline');new Runner('.interstitial-wrapper');}}
document.addEventListener('DOMContentLoaded',onDocumentLoad);