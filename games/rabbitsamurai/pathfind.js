"use strict";(function(){var PF_CLEAR=0;var PF_OBSTACLE=32767;function node()
{this.parent=null;this.x=0;this.y=0;this.f=0;this.g=0;this.h=0;};var nodeCache=[];function allocNode()
{var ret;if(nodeCache.length)
ret=nodeCache.pop();else
ret=new node();ret.parent=null;ret.x=0;ret.y=0;ret.f=0;ret.g=0;ret.h=0;return ret;};function freeNode(n)
{if(nodeCache.length<64000)
nodeCache.push(n);};function resultNode(x_,y_)
{this.x=x_||0;this.y=y_||0;};var resultNodeCache=[];function allocResultNode()
{if(resultNodeCache.length)
return resultNodeCache.pop();else
return new resultNode(0,0);};function freeResultNode(n)
{if(resultNodeCache.length<10000)
resultNodeCache.push(n);};var workersSupported=(typeof Worker!=="undefined");var isInWebWorker=(typeof document==="undefined");var myInstance=null;if(isInWebWorker)
{self.addEventListener("message",function(e)
{var d=e.data;if(!d)
return;if(d.cmd==="init")
{if(!myInstance)
myInstance=new pathfinder();myInstance.init(d.hcells,d.vcells,d.data,d.diagonals);}
else if(d.cmd==="find")
{myInstance.pathEnd.parent=null;myInstance.targetX=d.endX;myInstance.targetY=d.endY;if(myInstance.doLongFindPath(d.startX,d.startY))
{self.postMessage({cmd:"result",pathList:myInstance.pathList});}
else
{self.postMessage({cmd:"result",pathList:null});}}
else if(d.cmd==="region")
{myInstance.writeCells(d.offx,d.offy,d.lenx,d.leny,d.data);}
else if(d.cmd==="setdiag")
{if(myInstance)
myInstance.diagonalsEnabled=d.diagonals;}},false);}
function createWorker(url,callback)
{try{var worker=new Worker(url);callback(worker);}
catch(err)
{var errorFunc=function(err){console.error("Error creating worker: ",err);};var path=window["cordova"]["file"]["applicationDirectory"]+"www/"+url;window["resolveLocalFileSystemURL"](path,function(entry)
{entry["file"](function(file)
{var reader=new FileReader();reader.onerror=errorFunc;reader.onload=function(e)
{var arrayBuffer=e.target.result;var blob=new Blob([arrayBuffer],{type:"application/javascript"});var worker=new Worker(URL.createObjectURL(blob));callback(worker);};reader.readAsArrayBuffer(file);},errorFunc);},errorFunc);}}
function pathfinder()
{this.hcells=0;this.vcells=0;this.pathEnd=allocNode();this.cells=null;this.openList=[];this.closedList=[];this.closedCache={};this.pathList=[];this.currentNode=null;this.targetX=0;this.targetY=0;this.diagonalsEnabled=true;this.worker=null;this.workerQueue=[];this.workerRecycle=[];this.sendMessageQueue=[];var self=this;var i,len;if(workersSupported&&!isInWebWorker)
{createWorker("pathfind.js",function(worker)
{self.worker=worker;self.worker.addEventListener("message",function(e){if(!e||!e.data)
return;if(e.data.cmd==="result")
{if(e.data.pathList)
{for(i=0,len=self.pathList.length;i<len;i++)
freeResultNode(self.pathList[i]);self.pathList=e.data.pathList;self.workerQueue[0].success();}
else
self.workerQueue[0].fail();self.workerRecycle.push(self.workerQueue.shift());}},false);self.worker.addEventListener("error",function(e){console.error(e);},false);self.worker.postMessage(null);for(var i=0,len=self.sendMessageQueue.length;i<len;++i)
self.worker.postMessage(self.sendMessageQueue[i]);self.sendMessageQueue.length=0;});}};pathfinder.prototype.postToWorker=function(data)
{if(this.worker)
{this.worker.postMessage(data);}
else
{this.sendMessageQueue.push(data);}};pathfinder.prototype.init=function(hcells_,vcells_,data_,diagonals_)
{this.hcells=hcells_;this.vcells=vcells_;this.cells=data_;this.diagonalsEnabled=diagonals_;if(workersSupported&&!isInWebWorker)
{this.postToWorker({cmd:"init",hcells:hcells_,vcells:vcells_,diagonals:diagonals_,data:data_});}};pathfinder.prototype.updateRegion=function(cx1_,cy1_,lenx_,leny_,data_)
{this.writeCells(cx1_,cy1_,lenx_,leny_,data_);if(workersSupported&&!isInWebWorker)
{this.postToWorker({cmd:"region",offx:cx1_,offy:cy1_,lenx:lenx_,leny:leny_,data:data_});}};pathfinder.prototype.writeCells=function(cx1,cy1,lenx,leny,data_)
{var x,y;for(x=0;x<lenx;++x)
{for(y=0;y<leny;++y)
{this.cells[cx1+x][cy1+y]=data_[x][y];}}};pathfinder.prototype.unsetReady=function()
{this.cells=null;};pathfinder.prototype.isReady=function()
{return!!this.cells;};pathfinder.prototype.setDiagonals=function(d)
{if(this.diagonalsEnabled===d)
return;this.diagonalsEnabled=d;if(workersSupported&&!isInWebWorker)
{this.postToWorker({cmd:"setdiag",diagonals:d,});}};pathfinder.prototype.at=function(x_,y_)
{if(x_<0||y_<0||x_>=this.hcells||y_>=this.vcells)
return PF_OBSTACLE;return this.cells[x_][y_];};pathfinder.prototype.findPath=function(startX,startY,endX,endY,successCallback,failCallback)
{if(!this.cells)
{failCallback();return;}
startX=Math.floor(startX);startY=Math.floor(startY);endX=Math.floor(endX);endY=Math.floor(endY);this.targetX=endX;this.targetY=endY;this.pathEnd.parent=null;var minX=Math.min(startX,endX);var maxX=Math.max(startX,endX);var minY=Math.min(startY,endY);var maxY=Math.max(startY,endY);if(minX<0||minY<0||maxX>=this.hcells||maxY>=this.vcells)
{failCallback();return;}
var x,y,i,len,c,h,n;if(this.diagonalsEnabled)
{var canMoveDirect=true;for(x=minX;x<=maxX;x++)
{for(y=minY;y<=maxY;y++)
{if(this.cells[x][y]!==0)
{canMoveDirect=false;x=maxX+1;break;}}}
if(canMoveDirect)
{for(i=0,len=this.pathList.length;i<len;i++)
freeResultNode(this.pathList[i]);this.pathList.length=0;this.pathEnd.x=endX;this.pathEnd.y=endY;this.pathEnd.parent=null;n=allocResultNode();n.x=endX;n.y=endY;this.pathList.push(n);successCallback();return;}}
if(workersSupported)
{if(this.workerRecycle.length)
h=this.workerRecycle.pop();else
h={};h.success=successCallback;h.fail=failCallback;this.workerQueue.push(h);this.postToWorker({cmd:"find",startX:startX,startY:startY,endX:endX,endY:endY});}
else
{if(this.doLongFindPath(startX,startY))
successCallback();else
failCallback();}};pathfinder.prototype.doLongFindPath=function(startX,startY)
{var i,len,c,n,p,lastDir=8,curDir=-1,addNode;for(i=0,len=this.openList.length;i<len;i++)
freeNode(this.openList[i]);for(i=0,len=this.closedList.length;i<len;i++)
freeNode(this.closedList[i]);for(i=0,len=this.pathList.length;i<len;i++)
freeResultNode(this.pathList[i]);this.openList.length=0;this.closedList.length=0;this.closedCache={};this.pathList.length=0;var startNode=allocNode();startNode.x=startX;startNode.y=startY;this.openList.push(startNode);var obsLeft=false,obsTop=false,obsRight=false,obsBottom=false;var diagonals=this.diagonalsEnabled;while(this.openList.length)
{c=this.openList.shift();this.closedList.unshift(c);this.closedCache[((c.x<<16)+c.y).toString()]=true;if(c.x===this.targetX&&c.y===this.targetY)
{this.pathEnd.parent=c.parent;this.pathEnd.x=c.x;this.pathEnd.y=c.y;p=this.pathEnd;while(p)
{if(this.pathList.length===0)
{addNode=true;if(p.parent)
{lastDir=this.nodeDirection(p,p.parent);curDir=lastDir;}}
else if(!p.parent)
addNode=false;else
{curDir=this.nodeDirection(p,p.parent);addNode=(curDir!==lastDir);}
if(addNode)
{n=allocResultNode();n.x=p.x;n.y=p.y;this.pathList.unshift(n);lastDir=curDir;}
p=p.parent;}
return true;}
this.currentNode=c;var x=c.x;var y=c.y;var obsLeft=(this.at(x-1,y)===PF_OBSTACLE);var obsTop=(this.at(x,y-1)===PF_OBSTACLE);var obsRight=(this.at(x+1,y)===PF_OBSTACLE);var obsBottom=(this.at(x,y+1)===PF_OBSTACLE);if(!obsLeft)
this.addCellToOpenList(x-1,y,10);if(diagonals&&!obsLeft&&!obsTop&&(this.at(x-1,y-1)!==PF_OBSTACLE))
this.addCellToOpenList(x-1,y-1,14);if(!obsTop)
this.addCellToOpenList(x,y-1,10);if(diagonals&&!obsTop&&!obsRight&&(this.at(x+1,y-1)!==PF_OBSTACLE))
this.addCellToOpenList(x+1,y-1,14);if(!obsRight)
this.addCellToOpenList(x+1,y,10);if(diagonals&&!obsRight&&!obsBottom&&(this.at(x+1,y+1)!==PF_OBSTACLE))
this.addCellToOpenList(x+1,y+1,14);if(!obsBottom)
this.addCellToOpenList(x,y+1,10);if(diagonals&&!obsBottom&&!obsLeft&&(this.at(x-1,y+1)!==PF_OBSTACLE))
this.addCellToOpenList(x-1,y+1,14);}
return false;};pathfinder.prototype.insertToOpenList=function(c)
{var i,len;if(c.f>=this.openList[this.openList.length-1].f)
{this.openList.push(c);}
else
{for(i=0,len=this.openList.length;i<len;i++)
{if(c.f<this.openList[i].f)
{this.openList.splice(i,0,c);break;}}}};pathfinder.prototype.addCellToOpenList=function(x_,y_,g_)
{if(this.closedCache.hasOwnProperty(((x_<<16)+y_).toString()))
return;var i,len,c;var curCellCost=this.at(x_,y_);for(i=0,len=this.openList.length;i<len;i++)
{c=this.openList[i];if(x_===c.x&&y_===c.y)
{if(this.currentNode.g+g_+curCellCost<c.g)
{c.parent=this.currentNode;c.g=this.currentNode.g+g_+curCellCost;c.h=this.estimateH(c.x,c.y);c.f=c.g+c.h;if(this.openList.length===1)
{return;}
this.openList.splice(i,1);this.insertToOpenList(c);}
return;}}
c=allocNode();c.x=x_;c.y=y_;c.h=this.estimateH(x_,y_);c.g=this.currentNode.g+g_+curCellCost;c.f=c.h+c.g;c.parent=this.currentNode;if(!this.openList.length)
{this.openList.push(c);return;}
this.insertToOpenList(c);};function quickAbs(x)
{return x<0?-x:x;};pathfinder.prototype.estimateH=function(x_,y_)
{var dx=quickAbs(x_-this.targetX);var dy=quickAbs(y_-this.targetY);return dx*10+dy*10;};pathfinder.prototype.nodeDirection=function(a,b)
{var ax=a.x;var ay=a.y;var bx=b.x;var by=b.y;if(ax===bx)
{if(by>ay)return 6;if(by<ay)return 2;if(ay==by)return 8;}
else if(ay===by)
{if(bx>ax)return 4;if(by<ax)return 0;}
else
{if(bx<ax&&by<ay)return 1;if(bx>ax&&by<ay)return 3;if(bx<ax&&by>ay)return 7;if(bx>ax&&by>ay)return 5;}
return 8;};if(!isInWebWorker)
{window.PF_CLEAR=PF_CLEAR;window.PF_OBSTACLE=PF_OBSTACLE;window.Pathfinder=pathfinder;window.ResultNode=resultNode;window.allocResultNode=allocResultNode;window.freeResultNode=freeResultNode;}})();