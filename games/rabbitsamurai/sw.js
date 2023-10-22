"use strict";const OFFLINE_DATA_FILE="offline.js";const CACHE_NAME_PREFIX="c2offline";const BROADCASTCHANNEL_NAME="offline";const CONSOLE_PREFIX="[SW] ";const broadcastChannel=(typeof BroadcastChannel==="undefined"?null:new BroadcastChannel(BROADCASTCHANNEL_NAME));function PostBroadcastMessage(o)
{if(!broadcastChannel)
return;setTimeout(()=>broadcastChannel.postMessage(o),3000);};function Broadcast(type)
{PostBroadcastMessage({"type":type});};function BroadcastDownloadingUpdate(version)
{PostBroadcastMessage({"type":"downloading-update","version":version});}
function BroadcastUpdateReady(version)
{PostBroadcastMessage({"type":"update-ready","version":version});}
function GetCacheBaseName()
{return CACHE_NAME_PREFIX+"-"+self.registration.scope;};function GetCacheVersionName(version)
{return GetCacheBaseName()+"-v"+version;};function GetAvailableCacheNames()
{return caches.keys().then(cacheNames=>{const cacheBaseName=GetCacheBaseName();return cacheNames.filter(n=>n.startsWith(cacheBaseName));});};function IsUpdatePending()
{return GetAvailableCacheNames().then(availableCacheNames=>availableCacheNames.length>=2);};function GetMainPageUrl()
{return clients.matchAll({includeUncontrolled:true,type:"window"}).then(clients=>{for(let c of clients)
{let url=c.url;if(url.startsWith(self.registration.scope))
url=url.substring(self.registration.scope.length);if(url&&url!=="/")
{if(url.startsWith("?"))
url="/"+url;return url;}}
return "";});};function fetchWithBypass(request,bypassCache)
{if(typeof request==="string")
request=new Request(request);if(bypassCache)
{const url=new URL(request.url);url.search+=Math.floor(Math.random()*1000000);return fetch(url,{headers:request.headers,mode:request.mode,credentials:request.credentials,redirect:request.redirect,cache:"no-store"});}
else
{return fetch(request);}};function CreateCacheFromFileList(cacheName,fileList,bypassCache)
{return Promise.all(fileList.map(url=>fetchWithBypass(url,bypassCache))).then(responses=>{let allOk=true;for(let response of responses)
{if(!response.ok)
{allOk=false;console.error(CONSOLE_PREFIX+"Error fetching '"+originalUrl+"' ("+response.status+" "+response.statusText+")");}}
if(!allOk)
throw new Error("not all resources were fetched successfully");return caches.open(cacheName).then(cache=>{return Promise.all(responses.map((response,i)=>cache.put(fileList[i],response)));}).catch(err=>{console.error(CONSOLE_PREFIX+"Error writing cache entries: ",err);caches.delete(cacheName);throw err;});});};function UpdateCheck(isFirst)
{return fetchWithBypass(OFFLINE_DATA_FILE,true).then(r=>r.json()).then(data=>{const version=data.version;let fileList=data.fileList;const currentCacheName=GetCacheVersionName(version);return caches.has(currentCacheName).then(cacheExists=>{if(cacheExists)
{return IsUpdatePending().then(isUpdatePending=>{if(isUpdatePending)
{console.log(CONSOLE_PREFIX+"Update pending");Broadcast("update-pending");}
else
{console.log(CONSOLE_PREFIX+"Up to date");Broadcast("up-to-date");}});}
return GetMainPageUrl().then(mainPageUrl=>{fileList.unshift("./");if(mainPageUrl&&fileList.indexOf(mainPageUrl)===-1)
fileList.unshift(mainPageUrl);console.log(CONSOLE_PREFIX+"Caching "+fileList.length+" files for offline use");if(isFirst)
Broadcast("downloading");else
BroadcastDownloadingUpdate(version);return CreateCacheFromFileList(currentCacheName,fileList,!isFirst).then(IsUpdatePending).then(isUpdatePending=>{if(isUpdatePending)
{console.log(CONSOLE_PREFIX+"All resources saved, update ready");BroadcastUpdateReady(version);}
else
{console.log(CONSOLE_PREFIX+"All resources saved, offline support ready");Broadcast("offline-ready");}});});});}).catch(err=>{console.warn(CONSOLE_PREFIX+"Update check failed: ",err);});};self.addEventListener('install',event=>{event.waitUntil(UpdateCheck(true).catch(()=>null));});self.addEventListener('fetch',event=>{const isNavigateRequest=(event.request.mode==="navigate");let responsePromise=GetAvailableCacheNames().then(availableCacheNames=>{if(!availableCacheNames.length)
return fetch(event.request);return Promise.resolve().then(()=>{if(availableCacheNames.length===1||!isNavigateRequest)
return availableCacheNames[0];return clients.matchAll().then(clients=>{if(clients.length>1)
return availableCacheNames[0];let latestCacheName=availableCacheNames[availableCacheNames.length-1];console.log(CONSOLE_PREFIX+"Updating to new version");return Promise.all(availableCacheNames.slice(0,-1).map(c=>caches.delete(c))).then(()=>latestCacheName);});}).then(useCacheName=>{return caches.open(useCacheName).then(c=>c.match(event.request)).then(response=>response||fetch(event.request));});});if(isNavigateRequest)
{event.waitUntil(responsePromise.then(()=>UpdateCheck(false)));}
event.respondWith(responsePromise);});