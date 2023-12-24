setTimeout(function() {
    Init();
}, 10);
function Init() {
    var platform = GetPlatform();

    if (platform === "h5") {

        var href = window.location.href.toLowerCase();
        if (href.indexOf("zazgames.com") >= 0) {
            ShowSiteUrl(undefined, 200, isCanClicked = false);
        } else {
            GetAdsDataAndShow();
            ShowSiteUrl(undefined, 200, isCanClicked = true);
        }
        if (href.indexOf("zazgames.com") >= 0) {
        }
    }
}

function Mute(ismute) {}

//#App

function GetPlatform() {
    var portal = window.location.protocol.toLowerCase();
    var useragent = window.navigator.userAgent.toLowerCase();

    if (portal === "file:") {
        if (useragent.indexOf("android") >= 0) {
            return "android";
        }

        if (useragent.indexOf("ipad") >= 0 || useragent.indexOf("iphone") >= 0) {
            return "ios";
        }
    }

    if (portal === "ms-appx-web:") {
        return "uwp";
    }

    return "h5";
}

var adTriggerCount = 0;

/**
 * 通知框架的方法鸡巴
 *
 * @param {*} adtype
 */
//#Google_Analytics_ID

        window.SDK_OPTIONS = {
            gameId: "p119i9rb086uekl7rfh6alonr8o2dyj2",
            onEvent: function(a) {
                switch (a.name) {
                    case "SDK_GAME_PAUSE":
                        // pause game logic / mute audio
                        break;
                    case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio
                        break;
                    case "SDK_READY":
                        // when sdk is ready
                        break;
                }
            }
        };
        (function(a, b, c) {
            var d = a.getElementsByTagName(b)[0];
            a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
        })(document, "script", "gamemonetize-sdk");

    function google_analytics() {
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
        }
    };

    function google_analytics_ID() {
        if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
        }
    };
    setTimeout(function() {
        google_analytics();
    }, 1000);
    setInterval(function() {
        google_analytics_ID();
    }, 65000);

//#endregion

//#region 广告们

function ShowSiteUrl(url = "https://zazgames.com", width = 300, isCanClicked = true) {
    var op = document.createElement("div");
    op.id = "";

    var platform = GetPlatform();

    op.style = "position:fixed; bottom: 0; left: 10px; z-index: 10";

    var bottomImg = document.createElement("img");
    bottomImg.style = "width: " + width + "px; z-index: 1;"
    bottomImg.src = "";

    if (isCanClicked) {
        bottomImg.setAttribute("onclick", "window.open('" + url + "','NewWindow')");
    }

    //添加关闭按钮
    op.appendChild(bottomImg);

    var first = document.body.firstChild;
    document.body.insertBefore(op, first);
}



var changeAdImageTimer = -1;

function GetAdsDataAndShow(packageName, channel = "") {
    var platform = GetPlatform();
    console.log(platform);
    switch (platform) {
        case "h5":
            apiUrl = "favicon.icon";
            apiVersion = "1.0";
            break;

        default:
            break;
    }

    ajax({
        method: 'GET',
        url: apiUrl,
        data: {
            'api-version': apiVersion,
            'packageName': packageName,
            'channel': channel
        },
        success: function(result) {
            if (result && result.error == 0 && result.data && result.data.launchUrlList && result.data.launchUrlList.$values.length > 0) {
                ShowAdsImage();
                AddKeyFrame();

                var values = result.data.launchUrlList.$values;
                var index = randomNum(0, values.length - 1);
                SetAdsImage(values[index].image, values[index].url);

                changeAdImageTimer = setInterval(function() {
                    var values = result.data.launchUrlList.$values;
                    var index = randomNum(0, values.length - 1);
                    SetAdsImage(values[index].image, values[index].url);
                }, 10000);
            }
        }
    })
}


function ShowAdsImage() {
    var op = document.createElement("div");
    op.id = "ads";
	var mousePosition;
var offset = [0,0];
var isDown = false;

op.style.position = "absolute";


op.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        op.offsetLeft - e.clientX,
        op.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {
    
            x : event.clientX,
            y : event.clientY
    
        };
        op.style.left = (mousePosition.x + offset[0]) + 'px';
        op.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
    var platform = GetPlatform();

    var platform = GetPlatform();

    if (platform == "h5") {
        op.style = "z-index: 10; position: fixed; float:right;width: 72px;height: 72px;background-color: transparent;margin-top:10px;right: 30px;top:30px;bottom: 0;";
    } else {
        op.style = "z-index: 10; position: fixed; float:right;width: 60px;height: 60px;background-color: transparent;margin-top:10px;right: 20px;top:20px;bottom: 0;";
    }
    var closead = document.createElement("img");
    closead.style = "z-index: 10; position:absolute;top: 0;left: 0;width: 18px;height: 18px;"
    closead.src = closeImageData;
    closead.setAttribute("onclick", "HideAndOpenMarket();");

    //添加关闭按钮
    // op.appendChild(closead);

    var adimage = document.createElement("img");
    adimage.id = "adimage";
    adimage.style = "border-radius: 50%;position:absolute;top: 0;left: 0;width: 100%;height: 100%;"
    adimage.setAttribute("onclick", "OpenMarket();");

    //添加广告图片
    op.appendChild(adimage);

    var clickimage = document.createElement("img");
    clickimage.id = "clickimage";
    clickimage.style = "position:absolute;top: 0;left: 10px;width: 48px;height: 48px;"
    clickimage.src = clickImageData;
    clickimage.setAttribute("onclick", "OpenMarket();");

    //添加 "点击" 图片
    op.appendChild(clickimage);

    var first = document.body.firstChild;
    document.body.insertBefore(op, first);
}

function SetAdsImage(imageurl, url) {
    var ads = document.getElementById("ads");
    ads.setAttribute("tag", url);

    // console.log(imageurl);
    var image = document.getElementById("adimage");
    image.src = imageurl;
}


function AddKeyFrame() {
    var style = document.createElement('style');
    style.type = 'text/css';
    var keyFrames = '\
  @keyframes light{\
        from{\
            opacity: 1;\
        }\
        to{\
            opacity: 0.2;\
        }\
    }\
    @keyframes shake{\
        0%,0.5%,1%,1.5%,2%,2.5%,3%,3.5%,4%,4.5%,5%,5.5%,6%,100% {\
            opacity: 1;\
            transform: rotate(0);\
        }\
        0.25%,1.25%,2.25%,3.25%,4.25% {\
            opacity: 1;\
            transform: rotate(7deg);\
        }\
        0.75%,1.75%,2.75%,3.75%,4.75% {\
            opacity: 1;\
            transform: rotate(-7deg);\
        }\
    }\
    @keyframes rotateandscale{\
        0%,50%,100% {\
            opacity: 1;\
            transform: rotate(0) scale(1);\
            box-shadow: 0px 0px 10px rgb(50, 21, 177);\
        }\
        25% {\
            opacity: 1;\
            transform: rotate(-15deg) scale(1.3);\
            box-shadow: 0px 0px 25px rgb(50, 21, 177);\
        }\
        75% {\
            transform: rotate(15deg) scale(1.3);\
            box-shadow: 0px 0px 25px rgb(50, 21, 177);\
        }\
    }\
    @keyframes click{\
        0%,100% {\
            transform: translateY(10px);\
        }\
        50% {\
            transform: translateY(30px);\
        }\
    }';


    style.innerHTML = keyFrames;
    document.head.appendChild(style);

    var ads = document.getElementById("adimage");
    // ads.style.animation = "shake 8s ease-in-out 0s infinite normal";
    ads.style.animation = "rotateandscale 4s linear infinite";

    var click = document.getElementById("clickimage");
    click.style.animation = "click 1s linear infinite";
}

function HideAndOpenMarket() {
    OpenMarket();

    var ads = document.getElementById("ads");
    if (ads) {
        ads.remove();
    }

    clearInterval(changeAdImageTimer);
}

function OpenMarket() {
    // console.log("OpenMarket");
    var ads = document.getElementById("ads");
    var url = ads.getAttribute("tag");
    var platform = GetPlatform();

    if (url && url.length > 0) {
        if (platform == "h5") {
            window.open(url);
        } else {
            console.log("uniwebview://openmarket:" + url);
            window.location.href = "uniwebview://openmarket:" + url;
        }
    }
}

function ajax(opt) {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = opt.url || '';
    opt.async = opt.async || true;
    opt.data = opt.data || null;
    opt.success = opt.success || function() {};
    var xmlHttp = null;
    if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    } else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    var params = [];
    for (var key in opt.data) {
        params.push(key + '=' + opt.data[key]);
    }
    var postData = params.join('&');
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
    } else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            opt.success(JSON.parse(xmlHttp.responseText)); //如果不是json数据可以去掉json转换
        }
    };
}

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}

var clickImageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFF0lEQVRoQ+2abcieYxjHf/8UZd6zwoj4pHl/qW18sMRmMZYsGTFkxRRqXudlH0aN5tOGZVmmDVMbG7OlrNCWwpQt8hLlnTIjReqv4+m81ulyX/d9Xfd93ev54Pj23Nd5HufxP4/343zEgGR7EjAdOB44EPgK+B5YKenzAdn33K6eKyoW2D4TuA+YUbHkd+A54H5JP/d7Tq99fQGwfQ3wbC/m6ftuYJqkd2qub7SsMQDbDwEPlk75DfgG+AU4EjgK2Le0ZryknY2kq7G4EQDbFwPrS3znSFqW/2b7BODRknntAC6Q9F0NuWovaQrgFeCSgrukkf22pwGXJYE/BtZKWmz7IuC1TJoFkkKDrVFtALYvBDZlJz8maZ7te4GFHSRaLulG208BN6Xv3wInSgq/aIWaALgHeLgQRNI424uAeV0kWQBsBnIHniopv4iBgDQB8CZwXjptvaTptl8HpqTf1gBLk4MX69ZJmmE7nPyAtK5VM+oXwIgQtn8FDkqCzZa0ohSldkk61HYOflQA2CRpqm1n+p8saUs5zIajjxYN3A08kgTeLengOgCAc0o+MEVS+EUr1MSEzgDey0NoTQDhyEXi+0JS5IjWqDaAFO+XA9cDhQ/UNaEXUwB4QNKTrUkPNAJQPriOBopk16bQOa//AfSKQinR/QD82GYC2+OLg6i2jgmV+C+VdEvypwnAl5Ki+embhm5CHST7CRib/R7V7TJJG/pBsbcARCk9voeAMyVFOdKIegKwfQpwKjAO+Bp4v2hMaprQJElbbX9UA8QHqSE6ArhD0uO90HQFYDvi9xUlJlESR2Oysw6ArGfI66FgOQeYCFzXRcgXJF3ZDUQlgArhc16XAi/3ikIVALZImpycOU+GnWRdJOmuKhAdASSz+bC0KUriGJsUFJOGw1sGEGVHNEChnaL82CHppKYAQq3PZJtOl7Td9lvAuRXMKqvRdNO5CVVpoChR/jU46JbNqzRwA/B0EvRvYIykv5IgMayKIVaZRhWAs4F3MwlH+t8E4CzgbWC/EoJRBWAMENOFo5OQYe9hRhFGYwpxG1AOcSMA0vfVQESPmyU9sddNKB0YNx5Ne0ELJc0v/ugw4BrbbYRo++rUMweLABZjx7iMPAq14wOJcUzWtsXNJ6Gj/50gKTQzQrYjUnwi6fmqKJH/bjuSIZJiilfwyAGMZONObWkV/16J7FpgRbZ5iaS5dYStu8b2nUDE+U8lRYEXFzNYFCrdWsxwYqhV0ERJoZmhUdsAYmz4aibtKkmzhiZ92xpIKl0JhBMWFOPyjcMC0aoGEoDIC1uBfZLQGyWFZoZCrQNIIBYDt2cSz5K0ahgIhgXg2BRWo1YP2iYpyuHWaSgAkhby6Vz8NFfSkrYRlKfejYu5KoFs75+0cHJaE0ktklskudbI9kvA5YnhZknFBPw/Z/RsKcs7bOeVanyeL6nTA0dfgGyfBkTpfUhi0JV/YwDJlN4Azk8H7AKikNvel8SlTbbXpueq4kvXYXC/AOJhO28n1wERlf4YBITteBiJ2y9otaSruvHsC0DSQpTTUVYXFHniVkl7JthNwdiOFjXmRgUdJyle/itpEABho3FbYbM5xZNrgIiD/6w6uegdyt9tHxbaBCJZftbrEvoGkLRwTOqdC3/odV7+fY2kmU02dFo7EIAEIkJrmFPxlFpbpjZG7wMDKKRN//wRIEIbdV5hVkiaXRttxcLWAOT8bcfwttssNF4vWwm7/wDhm5xPpgjJqgAAAABJRU5ErkJggg==";

var closeImageData = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF+mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTIzVDE1OjE1OjAxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0yM1QxNToxODowMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0yM1QxNToxODowMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NzAyZGFhZi02ZjAxLTMxNGItOWJiMi1mNjY0ODBlNzc5OTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiOWUzY2MwNy0xM2QyLWE5NGEtODZhMi02MDBlNzhjZGQ5ZTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkY2EzZDZjNS02YjI3LWZlNGQtOGMzOS1lNWQxOWZiYmRiYmYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmRjYTNkNmM1LTZiMjctZmU0ZC04YzM5LWU1ZDE5ZmJiZGJiZiIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0yM1QxNToxNTowMSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NzAyZGFhZi02ZjAxLTMxNGItOWJiMi1mNjY0ODBlNzc5OTEiIHN0RXZ0OndoZW49IjIwMjAtMDMtMjNUMTU6MTg6MDErMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6c41JzAAAXx0lEQVR4nO1de2xU153+fmfm3usXtmMD0wTKY7pxWGLeJg2KQtho1bJJnW5FICEopRBpcRQl2WYdrFjqY7sSKWClq9CkRquQRYhtBEW7DUnUpqsuNYucEkggGC8BYgIhKcPDsY0fM3Pnnt/+cWeMY899zHuM/Umjkea8fnO/7zzuefwOMTPGMXYhcm3AOHKLcQGMcYwLYIzDO/wHIsqFHWkFM5cCqAYwJ/pdDaAIQHH0e+hHB9AHoH/Y9ycA2gGcBNBORJ9m9U9kCMPHfDTih1EoAGaeDWApgG8BWARgWgaK6YMpiD8B+G8ArUTUk4FyMoqbQgDM7AfwNwCWAFgG4Bs5MuVdAK0wxfD7HNmQEEatAJi5DMBDAL4b/VZya9EItAH4LYA3iehwro2xwqgTADM/AJPwhwDcmmNz3OIAgDcB7CGiz3Nsy1cwagTAzKsArAfw7VzbkgIuA9gBYAcRncm1McAoEAAz/wAm8ffm1JD0ohc3hHA8l4akJIBLGTHJhI/5UQD1MEfx6YGuI3z8OPQDBwAA8uxZ8LVr4O5u8PXrX4kqpk4FVVaCyspAkyZB3HEHtDvvhJgxAxBpmy6RAF4FsCVA9Fm6Mh2Or9mE5Z0AfMwLAGwE8Ggq+ciODvRv345ISws4HJaRQCCCvj5GMAgYBsEwMHzVg5nj/l8iAjwehqIAhYUQFRXCU1Gh0IQJUJ9+GoXLlwNKSmPQz2CK4JepZGKFUSEAH3MRTOKfhzkhkxg6O9G3Ywf0fftgdHbq8tIlxsAA2DDAUqbRUhMkhPlsNI1RXk7KtGmqd+lSFG3YAOH3J5vtHwBsDRD9IY2m5r8AfMz3A2gCsCChhFKif9cuhJubEfniizBfvswcDlMmCHcCCQHyeoHyclb8fk1ZsQLFzz6bbMuwNUC0MV225bUAfMxPAfgFEnmP7+xEz4YNiLS3R4zz5w0EgyQNIw3WpAckBEhVmSZPJu9tt6lF27ZBralJNJv9AJ4LEJ1N1Z68FICPWYFJ/FOuE0WJ19vadHnunGRdz0ltTwTC6wUqK1mZOVPTGhtRWFubSPKzAH4YIHorFRvyTgA+5jkA/hXA/a4S6Dp6HntsVBE/HMLrBUpLoVRVqWpdHYrWrk0k+cYA0dZky84rAfiYawG8AuDrbuL3NTVB37fP0I8di+Sqf08nhMdjtgh+v1a6e3ciA8bmANGTyZSZNwLwMa+DOQHiiIH9+xHatAl6e3uIe3tHPfHDIVQVwu8n9b77lAmvvup2buF3AaK/S7SsvBCAj/kfYfb59pASPY88glBraxiBAGQkkkApowskBKiggJW5c7UEBoqnAkR/nUg5OReAj/mnAH7iFE92dKBnzRroJ0+GuK/vpqv1VhCKAu+cOV519WpRXF/vJkkwQFToNv+cCsBnzuW/7hSvf+dOhJuboX/wQUiGw/mxApVFCCGAW2+FtmSJWrp3r5skZwJEVW4i5kwAPuaVAPY4RENvQwOCb7wR5osXIcdIrY8HEgJUWsrKrFlaeWurmyR7AkSPOEVKRABpW+VwS/71ujoEf/MbXY5x8gGApYTs6iK9vT3UtWSJmySrfMxN6bQhLQJwS37PypXQDx405Kef8ljp791A9vTcEIHzc/knH/PP0lV2ygLwMX8D5ry+LbqWLIG8eNGInDpljJM/ErKnh/QTJ0Jd99wDdHY6Rf+Rj3lNOspNRwvwMzjswu1ZuRIAEHrvvXHybSD7+kj/8MNQ14MPuhHBZp+5GzolpCQAH/OTAB6zi9Pb0AB58SLChw+HUylrrECGQjdEoOt2UacA2JxqeUkLIDq/b9sX9e/ciUhLC8KHD4fHa757yFCI9GPHQl1LlzqNCb6T6ngglRbgZwAmWgWGjxwx3/PHyU8KMhgkva0t1L18uVPUH/mYH0q2nKQE4GNeD+DvLSNIif6nn4Z+9GhorL/qpQLu76dwW1u4f+dOp6hJbyZJWAA+5olOBXYvXw79o49CUtfH3AxfOsFSApcvI9zc7DQovMfHnJQIkmkBngdwh1VgX1MTwh99FOZgcJz8NEAaBvRjx8xBoT2e9zFb8mKFhATgY74HNrVfdnQg/OtfS75yJSMbM8cqZChEekdHqK/JdrrFsWWOh0RbANsCetasQaStTR8nP81gBq5eJX3fPqeuYL2P+TuJZO1aAMz8bZjn8+JiYP9+6OfOhcf7/cxASum2K1ifSL6JtAC2GYc2bQKuXjXVOo6MgMNh0s+dc3or+B6b2+5dwZUAmPleAKuswnsbGqC3t4fyaav2zQiWErh61XwrsO9mXbcCblsA6wylNI9j9faON/1ZgDQM6CdOhHpfeMEu2hpmvttNfo4CYOZFAH5gFd77wgvQT5wIZXrgJ7xeiAkTWJSXs9A0pvQd2EwZJASEprG45RYWxcUsUjs36AgeGKBIS0taWgE3T/F7liGx2j8wkNHar919t6rU1Khlf/yjNumTTzSttlbzVFWR8HgyWawrCI8Hnqoq0mprtUlnz2qVH32kKYsWqdrdd6uZKpOldNMKrGJmR4cabgTwXauAbNT+WG0qb201d9FWVKB0714UbdmiKIsXe3MpAuHxQFm82Fu0ZYtSuncvUFEB4fcjtr1LeEc4YUsbXLQCMZc6trAVQNQ9S7VVeDZqP1SVS3fvHvFzYW0ttMZGoSxe7MmFCKLke7TGRhHv+FfRtm1AYWHGXolirUD/rl120VITgF0G4SNHoJ86lfG+H4oCUV4eNygqAk+2RTCEfI/V2T/V7wcy2AIAAAYGKNzcbBfjAWa2rMCAjQCGeOWKX3ZjI5CNkf/AAHo2bLAMLqythVpX5/HOm5eV7kB4PPDOm+dV6+osyQdg2tzfn1FbpJTQz58PO8wOWnbhgH0LsBxWXrmkhPH551mZ8mVdJ72tTR/Yv98yTtHatdCeeUZ4583zigy+HQgh4J03z6s984ywO+w5sH8/9LY2nbMxK9rZyb2bbTcG2U4N2z0tSydN/bt2wTh/XmZFAFJCnjnDoU2bpBsReKqrMyICIQQ81dWuyA9t2iTlmTNZ2fnMum4OBq1xNzPPsApMSgD67t1AFpd7pWFAf//9SGjTJsNJBAXPPSc8s2enVQRCCHhmz/YWPPecG/IN/f33I9maFWUpoZ8+7dQNLLMKiPuUooqZa5VIXrsms33RRFQERmjTJsNuLrxo7VoU1NcLz6xZnnSIQAgBz6xZnoL6elvy+3fujJFvZH1KvL+f+20qBkw/ynFh9YSWWWbV2YnIhQs5WfIdFMHLL0snEWjr1nk8s2ZRKiKIkk/aunUeR/JfflnmhHwA0HWntwHL1tzq6dxnlaB//36gt9elZemHNAxEjh+POImguL4e2rp1iqiqSkoEQgiIqirS1q1T7E7wxsiPHD+etWZ/OKKtsV3hf2U1DrB6Moutcgo3NwM5Ps0rDQORY8ciwZdechRBwRNPKKKqihJZO6Ao+QVPPOFIfvCll2Tk2LGckQ9ExwHnzkUcxgFxObV6Knfa5ZQPO32llDDa2iLBpiZXIvD4/a5EQELA4/e7I7+pSRptbZF8eB7o6kK4o8MuRlxORzwRdjhuFAkE8uaEj5QSRnt7JLhli2G3X664vh4FGzYoYsYMWxGQEBAzZlDBhg225Pc1NSG4ZYthtLfnB/kAYBgUc4lrgbi8xnsa1rVf18Hd3Xm15UdKCePUKSP0+uu6owgeflgR06cjnghICIjp01Hw8MOO5Idef103Tp0y8oZ8mN2A8ec/20VJXQDys8+AYDBB0zKPqAg4+NprtiIo2bwZBStXqsNFMEj+ypVqic2sWl9TE4KvvaYbp05xPpEfg7x40S7YXRcAC6UAQPDgQSBPN31KKSFPn3YvgmnTTA8dQkBMm+aafHn6dF6Sz1JC9vTYjkTjde/xlqumWGZw5QqQx/v+pJTg06c5uH27DsCyKY8SrfLly18CAE2efIsj+du360ZHR147tjCuXTMA2K2ITYF58dUg4gnA0nM3X7kywuV6voGlhNHRwQO/+pXOV64oVsRGf7/FKb/ehgbTpc1o8Gqi6070FA//IV4XMCJSDNzdnahJOQFLCfnppxzcuzfc29CQdD69DQ0I7t0bHhXkA0Ak4rRPcETljicA6xbg2rUkrMoNWErI8+eRrAgGyT9/fvQcc5PSqYtOrQVwGGXmHQZFsGdPQiLobWhAcM+e0UU+YApg2FU4w5CaAEYjWErICxcQG/C5SnP58pfywoXRRT7gxsOYqy5gHELk+1g3bYgngL6sW5FBxN7zafJkxxH/YJqJEyucpo3zEs72jtikmJAAxNSpCVqUWwzO8K1aZTvJMxwlmzej8MknFU+SS8k5gxDAhAl2MUZwG28ewHIrK1VWJmFVbuB2etcK0UkkJbRzp0Q+LfrYQQjAfmf0CAEk1AJQWVkSVmUfg6t6SZIfQ3F9PQrq64V3/vycnkByDa/XqRtw1QVYtwCTJiEvFwKGILaeX/jkk5azgIC5gbNryRJcKSuzddQc222c62NorqAoTvS4agEsb7umSZOcmpicQggBT1WV43r+4PU0R46E5fXrpJ865SwC8xiamsnzfqnCU1npRM4IbuMJoD3ObwCAgnvvBRQlL1+RhMttXOEjR26QH4kAzJDd3Y4iKKytRdG2bVBqavJSBCQERGmprQCIaAS38QRw0ioD8fWvAwUFSZiXWcR277ohv//pp2+QHwMzuKeH9I8/thWBWlNzQwQZ9gGQDBze0uLympAAoCigsrK8GgbE9u077d61JD8KlhLc3U36xx+Hur/1Lct81JoalO7eDWXRIlWoGXMBkDBICHi++U27KHFb9hECiNdMDIXX58ubfz14YmfjRk8q5McQE0H46NGwnQiE32+KYOFCVahqfnSJHg8ry5bZxXAngCisWwFELzzKMWJn9ZxO7AySf/SoLfkxsJTgri64EUH5229DWbhQE5qWexGUlJBqfyml6y4AAN6zykVZsQLwenP6h4XHA+/8+Y5n9b5Cvr3v/a9gUAQffBCOXXYRFxUVpggWLNBEQUHOngkJAeX22z2oqLCLFpdTKwFY3mdfvH49UFKSgHnpRex8vtMpXdnRccNjeQLkx8BSgr/8EqEDB0KOImhpgTJ/viaKinIiguigzO4N4P+I6LN4AVYCOGSZVUUFvDNmKLlYKBn0zOGC/J41a2I1P+lBK0sJ7uykUEuLvQgUxRTB3Lm5EYGisLJihV0Mywodl0UiugjgiGWiykphd79gJjDULUsC5KdcLksJvnqVQgcPOovg0CFTBCUl2RVBcTEVr7f1Cve/VgF21figVYCyZg2QxT4v5o3LzicPkH7yY2ApwVeuUOjgQfsxgRCmCKqrNVFampXnQ0JAqapSHfp/y1sp7QRgmajo8cfhmT5dZKMbICEgbr+drLxxxTBI/gcfJNXnOyEqAoQOHgxfr6uzjigEyltbocyenZW3A1IU9i61PP4PAK3RFj0u7Bh8F8Bf4qcS8EyZkpVxACkKK9XVih356Oy8QX4GTy7HRBB88017EQAof/ttiJkzM19JKiqoxH6/49t2gZbWEVE3gDetwgs3bQKy0dcVFqJ0+3br8M5OdD34YNYuoWYpwYGAswgqKqBUVyuUwcUzIQSU6dOdmv/f2ubhUIalANSaGiizZmkZV7iuQ3Z1xQ/LMvkxDIrgrbdsRSAvXszsSarCQlbtW6J3iKjNLoIte0T0DgDLDLxLl4Iy6A0TABAOU8+aOLekxsj/8MOcXD/PUoL/8hcE33kn7pbzvqYm6GfPZuzWNBICypw5WtHjj9tFs6zAMbipvpZNSMmLL0KZMyejrUBsQNe1ZAnCR44Auo7ehoYb5IdCOVucYinBn3+OgV27wsPti17vkjHbqLDQHPxZP3vbLnwwn+Hevoa/30fdxVvOCfQ2NGDglVdCsq8vo0QIr9f0vev1AgMD4HCY8mnfvlAU89U4C/aREFDvukstP3TITgD/RkT/MPzH4Xw7Vl0iOgrg363Cs9EKAICMRCCvXyf55Zckg8G8Ih8wW6ps2eei9gPADjd5uWXNOjMhzLFAtme/xiiExwNlzhyt5MUX7aLtJiLLBb2v5OcmEhEdBLDHKrxk82Zz4iOP9wveDCAhgIkTodbVpaX2A4kdDbPNVGtsBCZOBLK8RjCWQKrKysyZqt1aCID/JKI/us3TtQCI6PewmxiqrYUyc6Yq8nTT6GiHEALK/Pla+du2E3tAArUfSPxw6Ba7wNLdu+Gtrs7JUvFNDSJg4kRzydd+1m9HgOitRLJOiKkA0SHYiED4/VBXrxY0aVJcV2zjSA5C01jx+zW7fY8ArsKhgsbNOwl7tgL42CqwuL4e6ty5KuVwi9TNBOHxuG36twaILHmxzD/RBAEiR6WV/e535saI8fFASiAhgMmTzVG/fdN/KECUcO0HknQQESDaAeC/rHMV5gGKRYvGXw1TAJWUsFpd7TTqB5Jo+mNIpaP+Mcx+Jy7UmhpojY1QFi9W82Eb+WiDKC1lZfZsrezdd52i/kuAyHHO3wpJH3ILEJ3wMf8YwKtWcQpra8GmC3M1fPhwON+mb/MVMfJjF1Da4K0A0Y9TKiuVxAGiXwH4D7s4RWvXwjNvHtS77sqbE0X5DFFQ4Jb8zwEk7wQxVl6qGcDsCi7YRZgQvc5EXbjQO/56aA2haazMn6+V298CFkNDwOEYn6syU80gQPQJXCixvLUVorJSeBK8vWOsQGgaKwsWmK97ziePfx4gGnmfbjLlpiOTANEbAJ5xilf27rvmPrkpU8YnioZAFBXdIN/+dQ8A3ggQ2V4bnlDZ6cooQLQNwD87xSvduxcFDzyg0pQpeXHINJcgISDKy1mZO1crP3TIDfnvBYhWp9UGpx1BQ3HJRYY+5p8C+IlTvP6dOxFubs76hs58gRACuPVWaEuWqKV797pJcilAFP8q32H4mk3YCL7TLQDAvQgGD3OcPBnivr682+WTKQhFgXfOHK+6erVwmN+PoTdAZOsAcChyLgAA8DE/BIc96QAAKdHzyCMItbaGEQjAzRn+0QoSAlRQwMrcuVrRtm1Qa2rcJGsJEFne4xgPeSEAAPAxLwPwP27iDnruam8PcW/vTdcaCFWF8PtJve8+ZcKrr7px6woALweInk20rLwRAAD4mO8CsAtAlZv4fU1N0PftM/RjxyL5tvM3GQiPB6isZMXv10p374aw9+IxFD9PdrSfVwIAAB/znQBeBnC/qwS6jp7HHoPe1qbLc+ck6/qoE4LweoHSUihVVapaVwcXCzpDsTFAtDXZsvNOAADgY1YA/ALAU64TdXaiZ8OGUSUE4fWaNX7mTE1rbITtodaROAvgh4nu6hmOvBRADD7mp2AKwb2jvagQIu3tEeP8eQPBIOXyrt7hICFAqso0eTJ5b7tNTWCANxT7ATwXIDqbqj15LQAA8DHfD6AJwIKEEkqJ/l27EG5uRuSLL8J8+TLnapxAQoC8XqC8nBW/X1NWrEDxs8+6mcaNh60Boo3psi3vBQAAPuYiABsBPA+bi6os0dmJvh07oO/bB6OrS5eXLkn094MjkYwIInbJJDSNqbKSvLfdpnqXLkXRhg2JDOyG4w8wybf04ZMMRoUAYvAxL4AphEdTyUd2dKB/+3ZEWlrA4bCMBAIR9PUxgkHAMAiGMeLOQ2aO+3+JCPB4GIoCFBZCVFQIT0WFIqZOhfL976PwwQfdvsZZ4TMAWwJEv0wlEyuMKgHE4GN+FEA9gEVpy1TXET5+HLFbteXZs+Br18Dd3eBht2uJqVNBlZWgsjLQpEkQd9wB7c47IWbMSJXsoZAwN9BsCVi4bUsHMiaAbICZfwBgPYB7c2pIetEL88DGDiI6nktD8l4AMTDzKphC+HaubUkBl3GD+DO5NgYYRQKIgZkfAPBQ9ONqNSwPcADmMbo9RGR5AUcuMOoEEAMzl8EUwXej3/nmsL8N5uLXm0R0ONfGWGHUCmAomNkP4G9hjhPuBTA9R6YcjH5aoodn8x43hQCGg5nnA1gG4D4ACwFMy0AxfTB97h8C8CcAB4ioKwPlZBQ3pQCGg5lLAVQDmBP9roY52VQc/R760WGS2z/s+xOYhJ8E0E5En2b1T2QIjgIYx9jC2N6VOY5xAYx1jAtgjOP/AenslB/pIIsXAAAAAElFTkSuQmCC";


//#By Zazgames developer : Tabouzigt.