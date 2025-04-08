( () => {
    var e = {
        19: function(e, t, i) {
            var a, n;
            n = void 0 === i.g ? "undefined" == typeof window ? this : window : i.g,
            a = function() {
                return function(e) {
                    "use strict";
                    if (void 0 === e && void 0 === e.document)
                        return !1;
                    var t, i, a, n, o, r = "\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation", s = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif', l = "Success", c = "Failure", d = "Warning", p = "Info", u = {
                        wrapID: "NotiflixNotifyWrap",
                        overlayID: "NotiflixNotifyOverlay",
                        width: "280px",
                        position: "right-top",
                        distance: "10px",
                        opacity: 1,
                        borderRadius: "5px",
                        rtl: !1,
                        timeout: 3e3,
                        messageMaxLength: 110,
                        backOverlay: !1,
                        backOverlayColor: "rgba(0,0,0,0.5)",
                        plainText: !0,
                        showOnlyTheLastOne: !1,
                        clickToClose: !1,
                        pauseOnHover: !0,
                        ID: "NotiflixNotify",
                        className: "notiflix-notify",
                        zindex: 4001,
                        fontFamily: "Quicksand",
                        fontSize: "13px",
                        cssAnimation: !0,
                        cssAnimationDuration: 400,
                        cssAnimationStyle: "fade",
                        closeButton: !1,
                        useIcon: !0,
                        useFontAwesome: !1,
                        fontAwesomeIconStyle: "basic",
                        fontAwesomeIconSize: "34px",
                        success: {
                            background: "#32c682",
                            textColor: "#fff",
                            childClassName: "notiflix-notify-success",
                            notiflixIconColor: "rgba(0,0,0,0.2)",
                            fontAwesomeClassName: "fas fa-check-circle",
                            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                            backOverlayColor: "rgba(50,198,130,0.2)"
                        },
                        failure: {
                            background: "#ff5549",
                            textColor: "#fff",
                            childClassName: "notiflix-notify-failure",
                            notiflixIconColor: "rgba(0,0,0,0.2)",
                            fontAwesomeClassName: "fas fa-times-circle",
                            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                            backOverlayColor: "rgba(255,85,73,0.2)"
                        },
                        warning: {
                            background: "#eebf31",
                            textColor: "#fff",
                            childClassName: "notiflix-notify-warning",
                            notiflixIconColor: "rgba(0,0,0,0.2)",
                            fontAwesomeClassName: "fas fa-exclamation-circle",
                            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                            backOverlayColor: "rgba(238,191,49,0.2)"
                        },
                        info: {
                            background: "#26c0d3",
                            textColor: "#fff",
                            childClassName: "notiflix-notify-info",
                            notiflixIconColor: "rgba(0,0,0,0.2)",
                            fontAwesomeClassName: "fas fa-info-circle",
                            fontAwesomeIconColor: "rgba(0,0,0,0.2)",
                            backOverlayColor: "rgba(38,192,211,0.2)"
                        }
                    }, f = "Success", h = "Failure", m = "Warning", g = "Info", y = {
                        ID: "NotiflixReportWrap",
                        className: "notiflix-report",
                        width: "320px",
                        backgroundColor: "#f8f8f8",
                        borderRadius: "25px",
                        rtl: !1,
                        zindex: 4002,
                        backOverlay: !0,
                        backOverlayColor: "rgba(0,0,0,0.5)",
                        backOverlayClickToClose: !1,
                        fontFamily: "Quicksand",
                        svgSize: "110px",
                        plainText: !0,
                        titleFontSize: "16px",
                        titleMaxLength: 34,
                        messageFontSize: "13px",
                        messageMaxLength: 400,
                        buttonFontSize: "14px",
                        buttonMaxLength: 34,
                        cssAnimation: !0,
                        cssAnimationDuration: 360,
                        cssAnimationStyle: "fade",
                        success: {
                            svgColor: "#32c682",
                            titleColor: "#1e1e1e",
                            messageColor: "#242424",
                            buttonBackground: "#32c682",
                            buttonColor: "#fff",
                            backOverlayColor: "rgba(50,198,130,0.2)"
                        },
                        failure: {
                            svgColor: "#ff5549",
                            titleColor: "#1e1e1e",
                            messageColor: "#242424",
                            buttonBackground: "#ff5549",
                            buttonColor: "#fff",
                            backOverlayColor: "rgba(255,85,73,0.2)"
                        },
                        warning: {
                            svgColor: "#eebf31",
                            titleColor: "#1e1e1e",
                            messageColor: "#242424",
                            buttonBackground: "#eebf31",
                            buttonColor: "#fff",
                            backOverlayColor: "rgba(238,191,49,0.2)"
                        },
                        info: {
                            svgColor: "#26c0d3",
                            titleColor: "#1e1e1e",
                            messageColor: "#242424",
                            buttonBackground: "#26c0d3",
                            buttonColor: "#fff",
                            backOverlayColor: "rgba(38,192,211,0.2)"
                        }
                    }, x = "Show", b = "Ask", v = "Prompt", w = {
                        ID: "NotiflixConfirmWrap",
                        className: "notiflix-confirm",
                        width: "300px",
                        zindex: 4003,
                        position: "center",
                        distance: "10px",
                        backgroundColor: "#f8f8f8",
                        borderRadius: "25px",
                        backOverlay: !0,
                        backOverlayColor: "rgba(0,0,0,0.5)",
                        rtl: !1,
                        fontFamily: "Quicksand",
                        cssAnimation: !0,
                        cssAnimationDuration: 300,
                        cssAnimationStyle: "fade",
                        plainText: !0,
                        titleColor: "#32c682",
                        titleFontSize: "16px",
                        titleMaxLength: 34,
                        messageColor: "#1e1e1e",
                        messageFontSize: "14px",
                        messageMaxLength: 110,
                        buttonsFontSize: "15px",
                        buttonsMaxLength: 34,
                        okButtonColor: "#f8f8f8",
                        okButtonBackground: "#32c682",
                        cancelButtonColor: "#f8f8f8",
                        cancelButtonBackground: "#a9a9a9"
                    }, k = "Standard", C = "Hourglass", _ = "Circle", T = "Arrows", L = "Dots", E = "Pulse", I = "Custom", A = "Notiflix", $ = {
                        ID: "NotiflixLoadingWrap",
                        className: "notiflix-loading",
                        zindex: 4e3,
                        backgroundColor: "rgba(0,0,0,0.8)",
                        rtl: !1,
                        fontFamily: "Quicksand",
                        cssAnimation: !0,
                        cssAnimationDuration: 400,
                        clickToClose: !1,
                        customSvgUrl: null,
                        customSvgCode: null,
                        svgSize: "80px",
                        svgColor: "#32c682",
                        messageID: "NotiflixLoadingMessage",
                        messageFontSize: "15px",
                        messageMaxLength: 34,
                        messageColor: "#dcdcdc"
                    }, N = "Standard", S = "Hourglass", O = "Circle", R = "Arrows", M = "Dots", D = "Pulse", F = {
                        ID: "NotiflixBlockWrap",
                        querySelectorLimit: 200,
                        className: "notiflix-block",
                        position: "absolute",
                        zindex: 1e3,
                        backgroundColor: "rgba(255,255,255,0.9)",
                        rtl: !1,
                        fontFamily: "Quicksand",
                        cssAnimation: !0,
                        cssAnimationDuration: 300,
                        svgSize: "45px",
                        svgColor: "#383838",
                        messageFontSize: "14px",
                        messageMaxLength: 34,
                        messageColor: "#383838"
                    }, B = function(e) {
                        return console.error("%c Notiflix Error ", "padding:2px;border-radius:20px;color:#fff;background:#ff5549", "\n" + e + r)
                    }, z = function(e) {
                        return console.log("%c Notiflix Info ", "padding:2px;border-radius:20px;color:#fff;background:#26c0d3", "\n" + e + r)
                    }, P = function(t) {
                        return t || (t = "head"),
                        null !== e.document[t] || (B('\nNotiflix needs to be appended to the "<' + t + '>" element, but you called it before the "<' + t + '>" element has been created.'),
                        !1)
                    }, U = function(t, i) {
                        if (!P("head"))
                            return !1;
                        if (null !== t() && !e.document.getElementById(i)) {
                            var a = e.document.createElement("style");
                            a.id = i,
                            a.innerHTML = t(),
                            e.document.head.appendChild(a)
                        }
                    }, W = function() {
                        var e = {}
                          , t = !1
                          , i = 0;
                        "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0],
                        i++);
                        for (var a = function(i) {
                            for (var a in i)
                                Object.prototype.hasOwnProperty.call(i, a) && (e[a] = t && "[object Object]" === Object.prototype.toString.call(i[a]) ? W(e[a], i[a]) : i[a])
                        }; i < arguments.length; i++)
                            a(arguments[i]);
                        return e
                    }, H = function(t) {
                        var i = e.document.createElement("div");
                        return i.innerHTML = t,
                        i.textContent || i.innerText || ""
                    }, j = function(e, t) {
                        return e || (e = "60px"),
                        t || (t = "#32c682"),
                        '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + t + '" width="' + e + '" height="' + e + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'
                    }, V = function(e, t) {
                        return e || (e = "60px"),
                        t || (t = "#32c682"),
                        '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + t + '" width="' + e + '" height="' + e + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'
                    }, G = function(e, t) {
                        return e || (e = "60px"),
                        t || (t = "#32c682"),
                        '<svg xmlns="http://www.w3.org/2000/svg" width="' + e + '" height="' + e + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + e + ";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:" + e + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + t + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'
                    }, X = function(e, t) {
                        return e || (e = "60px"),
                        t || (t = "#32c682"),
                        '<svg xmlns="http://www.w3.org/2000/svg" fill="' + t + '" width="' + e + '" height="' + e + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'
                    }, q = function(e, t) {
                        return e || (e = "60px"),
                        t || (t = "#32c682"),
                        '<svg xmlns="http://www.w3.org/2000/svg" fill="' + t + '" width="' + e + '" height="' + e + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'
                    }, Y = function(e, t) {
                        return e || (e = "60px"),
                        t || (t = "#32c682"),
                        '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + t + '" width="' + e + '" height="' + e + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'
                    }, K = function() {
                        return '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'
                    }, Z = 0, Q = function(i, a, n, o) {
                        if (!P("body"))
                            return !1;
                        t || ce.Notify.init({});
                        var r = W(!0, t, {});
                        if ("object" == typeof n && !Array.isArray(n) || "object" == typeof o && !Array.isArray(o)) {
                            var f = {};
                            "object" == typeof n ? f = n : "object" == typeof o && (f = o),
                            t = W(!0, t, f)
                        }
                        var h = t[i.toLocaleLowerCase("en")];
                        Z++,
                        "string" != typeof a && (a = "Notiflix " + i),
                        t.plainText && (a = H(a)),
                        !t.plainText && a.length > t.messageMaxLength && (t = W(!0, t, {
                            closeButton: !0,
                            messageMaxLength: 150
                        }),
                        a = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),
                        a.length > t.messageMaxLength && (a = a.substring(0, t.messageMaxLength) + "..."),
                        "shadow" === t.fontAwesomeIconStyle && (h.fontAwesomeIconColor = h.background),
                        t.cssAnimation || (t.cssAnimationDuration = 0);
                        var m = e.document.getElementById(u.wrapID) || e.document.createElement("div");
                        if (m.id = u.wrapID,
                        m.style.width = t.width,
                        m.style.zIndex = t.zindex,
                        m.style.opacity = t.opacity,
                        "center-center" === t.position ? (m.style.left = t.distance,
                        m.style.top = t.distance,
                        m.style.right = t.distance,
                        m.style.bottom = t.distance,
                        m.style.margin = "auto",
                        m.classList.add("nx-flex-center-center"),
                        m.style.maxHeight = "calc((100vh - " + t.distance + ") - " + t.distance + ")",
                        m.style.display = "flex",
                        m.style.flexWrap = "wrap",
                        m.style.flexDirection = "column",
                        m.style.justifyContent = "center",
                        m.style.alignItems = "center",
                        m.style.pointerEvents = "none") : "center-top" === t.position ? (m.style.left = t.distance,
                        m.style.right = t.distance,
                        m.style.top = t.distance,
                        m.style.bottom = "auto",
                        m.style.margin = "auto") : "center-bottom" === t.position ? (m.style.left = t.distance,
                        m.style.right = t.distance,
                        m.style.bottom = t.distance,
                        m.style.top = "auto",
                        m.style.margin = "auto") : "right-bottom" === t.position ? (m.style.right = t.distance,
                        m.style.bottom = t.distance,
                        m.style.top = "auto",
                        m.style.left = "auto") : "left-top" === t.position ? (m.style.left = t.distance,
                        m.style.top = t.distance,
                        m.style.right = "auto",
                        m.style.bottom = "auto") : "left-bottom" === t.position ? (m.style.left = t.distance,
                        m.style.bottom = t.distance,
                        m.style.top = "auto",
                        m.style.right = "auto") : (m.style.right = t.distance,
                        m.style.top = t.distance,
                        m.style.left = "auto",
                        m.style.bottom = "auto"),
                        t.backOverlay) {
                            var g = e.document.getElementById(u.overlayID) || e.document.createElement("div");
                            g.id = u.overlayID,
                            g.style.width = "100%",
                            g.style.height = "100%",
                            g.style.position = "fixed",
                            g.style.zIndex = t.zindex - 1,
                            g.style.left = 0,
                            g.style.top = 0,
                            g.style.right = 0,
                            g.style.bottom = 0,
                            g.style.background = h.backOverlayColor || t.backOverlayColor,
                            g.className = t.cssAnimation ? "nx-with-animation" : "",
                            g.style.animationDuration = t.cssAnimation ? t.cssAnimationDuration + "ms" : "",
                            e.document.getElementById(u.overlayID) || e.document.body.appendChild(g)
                        }
                        e.document.getElementById(u.wrapID) || e.document.body.appendChild(m);
                        var y = e.document.createElement("div");
                        y.id = t.ID + "-" + Z,
                        y.className = t.className + " " + h.childClassName + " " + (t.cssAnimation ? "nx-with-animation" : "") + " " + (t.useIcon ? "nx-with-icon" : "") + " nx-" + t.cssAnimationStyle + " " + (t.closeButton && "function" != typeof n ? "nx-with-close-button" : "") + " " + ("function" == typeof n ? "nx-with-callback" : "") + " " + (t.clickToClose ? "nx-notify-click-to-close" : ""),
                        y.style.fontSize = t.fontSize,
                        y.style.color = h.textColor,
                        y.style.background = h.background,
                        y.style.borderRadius = t.borderRadius,
                        y.style.pointerEvents = "all",
                        t.rtl && (y.setAttribute("dir", "rtl"),
                        y.classList.add("nx-rtl-on")),
                        y.style.fontFamily = '"' + t.fontFamily + '", ' + s,
                        t.cssAnimation && (y.style.animationDuration = t.cssAnimationDuration + "ms");
                        var x = "";
                        if (t.closeButton && "function" != typeof n && (x = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + h.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),
                        t.useIcon)
                            if (t.useFontAwesome)
                                y.innerHTML = '<i style="color:' + h.fontAwesomeIconColor + "; font-size:" + t.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + h.fontAwesomeClassName + " " + ("shadow" === t.fontAwesomeIconStyle ? "nx-message-icon-fa-shadow" : "nx-message-icon-fa-basic") + '"></i><span class="nx-message nx-with-icon">' + a + "</span>" + (t.closeButton ? x : "");
                            else {
                                var b = "";
                                i === l ? b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + h.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>' : i === c ? b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + h.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>' : i === d ? b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + h.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>' : i === p && (b = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + h.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),
                                y.innerHTML = b + '<span class="nx-message nx-with-icon">' + a + "</span>" + (t.closeButton ? x : "")
                            }
                        else
                            y.innerHTML = '<span class="nx-message">' + a + "</span>" + (t.closeButton ? x : "");
                        if ("left-bottom" === t.position || "right-bottom" === t.position) {
                            var v = e.document.getElementById(u.wrapID);
                            v.insertBefore(y, v.firstChild)
                        } else
                            e.document.getElementById(u.wrapID).appendChild(y);
                        var w = e.document.getElementById(y.id);
                        if (w) {
                            var k, C, _ = function() {
                                w.classList.add("nx-remove");
                                var t = e.document.getElementById(u.overlayID);
                                t && 0 >= m.childElementCount && t.classList.add("nx-remove"),
                                clearTimeout(k)
                            }, T = function() {
                                if (w && null !== w.parentNode && w.parentNode.removeChild(w),
                                0 >= m.childElementCount && null !== m.parentNode) {
                                    m.parentNode.removeChild(m);
                                    var t = e.document.getElementById(u.overlayID);
                                    t && null !== t.parentNode && t.parentNode.removeChild(t)
                                }
                                clearTimeout(C)
                            };
                            if (t.closeButton && "function" != typeof n && e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click", (function() {
                                _();
                                var e = setTimeout((function() {
                                    T(),
                                    clearTimeout(e)
                                }
                                ), t.cssAnimationDuration)
                            }
                            )),
                            ("function" == typeof n || t.clickToClose) && w.addEventListener("click", (function() {
                                "function" == typeof n && n(),
                                _();
                                var e = setTimeout((function() {
                                    T(),
                                    clearTimeout(e)
                                }
                                ), t.cssAnimationDuration)
                            }
                            )),
                            !t.closeButton && "function" != typeof n) {
                                var L = function() {
                                    k = setTimeout((function() {
                                        _()
                                    }
                                    ), t.timeout),
                                    C = setTimeout((function() {
                                        T()
                                    }
                                    ), t.timeout + t.cssAnimationDuration)
                                };
                                L(),
                                t.pauseOnHover && (w.addEventListener("mouseenter", (function() {
                                    w.classList.add("nx-paused"),
                                    clearTimeout(k),
                                    clearTimeout(C)
                                }
                                )),
                                w.addEventListener("mouseleave", (function() {
                                    w.classList.remove("nx-paused"),
                                    L()
                                }
                                )))
                            }
                        }
                        if (t.showOnlyTheLastOne && 0 < Z)
                            for (var E, I = e.document.querySelectorAll("[id^=" + t.ID + "-]:not([id=" + t.ID + "-" + Z + "])"), A = 0; A < I.length; A++)
                                null !== (E = I[A]).parentNode && E.parentNode.removeChild(E);
                        t = W(!0, t, r)
                    }, J = function() {
                        return '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'
                    }, ee = function(t, a, n, o, r, l) {
                        if (!P("body"))
                            return !1;
                        i || ce.Report.init({});
                        var c = {};
                        if ("object" == typeof r && !Array.isArray(r) || "object" == typeof l && !Array.isArray(l)) {
                            var d = {};
                            "object" == typeof r ? d = r : "object" == typeof l && (d = l),
                            c = W(!0, i, {}),
                            i = W(!0, i, d)
                        }
                        var p = i[t.toLocaleLowerCase("en")];
                        "string" != typeof a && (a = "Notiflix " + t),
                        "string" != typeof n && (t === f ? n = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein' : t === h ? n = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford' : t === m ? n = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk' : t === g && (n = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),
                        "string" != typeof o && (o = "Okay"),
                        i.plainText && (a = H(a),
                        n = H(n),
                        o = H(o)),
                        i.plainText || (a.length > i.titleMaxLength && (a = "Possible HTML Tags Error",
                        n = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',
                        o = "Okay"),
                        n.length > i.messageMaxLength && (a = "Possible HTML Tags Error",
                        n = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',
                        o = "Okay"),
                        o.length > i.buttonMaxLength && (a = "Possible HTML Tags Error",
                        n = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',
                        o = "Okay")),
                        a.length > i.titleMaxLength && (a = a.substring(0, i.titleMaxLength) + "..."),
                        n.length > i.messageMaxLength && (n = n.substring(0, i.messageMaxLength) + "..."),
                        o.length > i.buttonMaxLength && (o = o.substring(0, i.buttonMaxLength) + "..."),
                        i.cssAnimation || (i.cssAnimationDuration = 0);
                        var u = e.document.createElement("div");
                        u.id = y.ID,
                        u.className = i.className,
                        u.style.zIndex = i.zindex,
                        u.style.borderRadius = i.borderRadius,
                        u.style.fontFamily = '"' + i.fontFamily + '", ' + s,
                        i.rtl && (u.setAttribute("dir", "rtl"),
                        u.classList.add("nx-rtl-on")),
                        u.style.display = "flex",
                        u.style.flexWrap = "wrap",
                        u.style.flexDirection = "column",
                        u.style.alignItems = "center",
                        u.style.justifyContent = "center";
                        var x = ""
                          , b = !0 === i.backOverlayClickToClose;
                        i.backOverlay && (x = '<div class="' + i.className + "-overlay" + (i.cssAnimation ? " nx-with-animation" : "") + (b ? " nx-report-click-to-close" : "") + '" style="background:' + (p.backOverlayColor || i.backOverlayColor) + ";animation-duration:" + i.cssAnimationDuration + 'ms;"></div>');
                        var v = "";
                        if (t === f ? v = function(e, t) {
                            return e || (e = "110px"),
                            t || (t = "#32c682"),
                            '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + e + '" height="' + e + '" fill="' + t + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'
                        }(i.svgSize, p.svgColor) : t === h ? v = function(e, t) {
                            return e || (e = "110px"),
                            t || (t = "#ff5549"),
                            '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + e + '" height="' + e + '" fill="' + t + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'
                        }(i.svgSize, p.svgColor) : t === m ? v = function(e, t) {
                            return e || (e = "110px"),
                            t || (t = "#eebf31"),
                            '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + e + '" height="' + e + '" fill="' + t + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'
                        }(i.svgSize, p.svgColor) : t === g && (v = function(e, t) {
                            return e || (e = "110px"),
                            t || (t = "#26c0d3"),
                            '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + e + '" height="' + e + '" fill="' + t + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'
                        }(i.svgSize, p.svgColor)),
                        u.innerHTML = x + '<div class="' + i.className + "-content" + (i.cssAnimation ? " nx-with-animation " : "") + " nx-" + i.cssAnimationStyle + '" style="width:' + i.width + "; background:" + i.backgroundColor + "; animation-duration:" + i.cssAnimationDuration + 'ms;"><div style="width:' + i.svgSize + "; height:" + i.svgSize + ';" class="' + i.className + '-icon">' + v + '</div><h5 class="' + i.className + '-title" style="font-weight:500; font-size:' + i.titleFontSize + "; color:" + p.titleColor + ';">' + a + '</h5><p class="' + i.className + '-message" style="font-size:' + i.messageFontSize + "; color:" + p.messageColor + ';">' + n + '</p><a id="NXReportButton" class="' + i.className + '-button" style="font-weight:500; font-size:' + i.buttonFontSize + "; background:" + p.buttonBackground + "; color:" + p.buttonColor + ';">' + o + "</a></div>",
                        !e.document.getElementById(u.id)) {
                            e.document.body.appendChild(u);
                            var w = function() {
                                var t = e.document.getElementById(u.id);
                                t.classList.add("nx-remove");
                                var a = setTimeout((function() {
                                    null !== t.parentNode && t.parentNode.removeChild(t),
                                    clearTimeout(a)
                                }
                                ), i.cssAnimationDuration)
                            };
                            e.document.getElementById("NXReportButton").addEventListener("click", (function() {
                                "function" == typeof r && r(),
                                w()
                            }
                            )),
                            x && b && e.document.querySelector(".nx-report-click-to-close").addEventListener("click", (function() {
                                w()
                            }
                            ))
                        }
                        i = W(!0, i, c)
                    }, te = function() {
                        return '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'
                    }, ie = function(t, i, n, o, r, l, c, d, p) {
                        if (!P("body"))
                            return !1;
                        a || ce.Confirm.init({});
                        var u = W(!0, a, {});
                        "object" != typeof p || Array.isArray(p) || (a = W(!0, a, p)),
                        "string" != typeof i && (i = "Notiflix Confirm"),
                        "string" != typeof n && (n = "Do you agree with me?"),
                        "string" != typeof r && (r = "Yes"),
                        "string" != typeof l && (l = "No"),
                        "function" != typeof c && (c = void 0),
                        "function" != typeof d && (d = void 0),
                        a.plainText && (i = H(i),
                        n = H(n),
                        r = H(r),
                        l = H(l)),
                        a.plainText || (i.length > a.titleMaxLength && (i = "Possible HTML Tags Error",
                        n = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',
                        r = "Okay",
                        l = "..."),
                        n.length > a.messageMaxLength && (i = "Possible HTML Tags Error",
                        n = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',
                        r = "Okay",
                        l = "..."),
                        (r.length || l.length) > a.buttonsMaxLength && (i = "Possible HTML Tags Error",
                        n = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',
                        r = "Okay",
                        l = "...")),
                        i.length > a.titleMaxLength && (i = i.substring(0, a.titleMaxLength) + "..."),
                        n.length > a.messageMaxLength && (n = n.substring(0, a.messageMaxLength) + "..."),
                        r.length > a.buttonsMaxLength && (r = r.substring(0, a.buttonsMaxLength) + "..."),
                        l.length > a.buttonsMaxLength && (l = l.substring(0, a.buttonsMaxLength) + "..."),
                        a.cssAnimation || (a.cssAnimationDuration = 0);
                        var f = e.document.createElement("div");
                        f.id = w.ID,
                        f.className = a.className + (a.cssAnimation ? " nx-with-animation nx-" + a.cssAnimationStyle : ""),
                        f.style.zIndex = a.zindex,
                        f.style.padding = a.distance,
                        a.rtl && (f.setAttribute("dir", "rtl"),
                        f.classList.add("nx-rtl-on"));
                        var h = "string" == typeof a.position ? a.position.trim() : "center";
                        f.classList.add("nx-position-" + h),
                        f.style.fontFamily = '"' + a.fontFamily + '", ' + s;
                        var m = "";
                        a.backOverlay && (m = '<div class="' + a.className + "-overlay" + (a.cssAnimation ? " nx-with-animation" : "") + '" style="background:' + a.backOverlayColor + ";animation-duration:" + a.cssAnimationDuration + 'ms;"></div>');
                        var g = "";
                        "function" == typeof c && (g = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + a.cancelButtonColor + ";background:" + a.cancelButtonBackground + ";font-size:" + a.buttonsFontSize + ';">' + l + "</a>");
                        var y = ""
                          , x = null
                          , k = void 0;
                        if (t === b || t === v) {
                            x = o || "";
                            var C = t === b || 200 < x.length ? Math.ceil(1.5 * x.length) : 250;
                            y = '<div><input id="NXConfirmValidationInput" type="text" ' + (t === v ? 'value="' + x + '"' : "") + ' maxlength="' + C + '" style="font-size:' + a.messageFontSize + ";border-radius: " + a.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'
                        }
                        if (f.innerHTML = m + '<div class="' + a.className + '-content" style="width:' + a.width + "; background:" + a.backgroundColor + "; animation-duration:" + a.cssAnimationDuration + "ms; border-radius: " + a.borderRadius + ';"><div class="' + a.className + '-head"><h5 style="color:' + a.titleColor + ";font-size:" + a.titleFontSize + ';">' + i + '</h5><div style="color:' + a.messageColor + ";font-size:" + a.messageFontSize + ';">' + n + y + '</div></div><div class="' + a.className + '-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + ("function" == typeof c ? "" : " nx-full") + '" style="color:' + a.okButtonColor + ";background:" + a.okButtonBackground + ";font-size:" + a.buttonsFontSize + ';">' + r + "</a>" + g + "</div></div>",
                        !e.document.getElementById(f.id)) {
                            e.document.body.appendChild(f);
                            var _ = e.document.getElementById(f.id)
                              , T = e.document.getElementById("NXConfirmButtonOk")
                              , L = e.document.getElementById("NXConfirmValidationInput");
                            L && (L.focus(),
                            L.setSelectionRange(0, (L.value || "").length),
                            L.addEventListener("keyup", (function(e) {
                                var i = e.target.value;
                                t === b && i !== x ? (e.preventDefault(),
                                L.classList.add("nx-validation-failure"),
                                L.classList.remove("nx-validation-success")) : (t === b && (L.classList.remove("nx-validation-failure"),
                                L.classList.add("nx-validation-success")),
                                ("enter" === (e.key || "").toLocaleLowerCase("en") || 13 === e.keyCode) && T.dispatchEvent(new Event("click")))
                            }
                            ))),
                            T.addEventListener("click", (function(e) {
                                if (t === b && x && L) {
                                    if ((L.value || "").toString() !== x)
                                        return L.focus(),
                                        L.classList.add("nx-validation-failure"),
                                        e.stopPropagation(),
                                        e.preventDefault(),
                                        e.returnValue = !1,
                                        e.cancelBubble = !0,
                                        !1;
                                    L.classList.remove("nx-validation-failure")
                                }
                                "function" == typeof c && (t === v && L && (k = L.value || ""),
                                c(k)),
                                _.classList.add("nx-remove");
                                var i = setTimeout((function() {
                                    null !== _.parentNode && (_.parentNode.removeChild(_),
                                    clearTimeout(i))
                                }
                                ), a.cssAnimationDuration)
                            }
                            )),
                            "function" == typeof c && e.document.getElementById("NXConfirmButtonCancel").addEventListener("click", (function() {
                                "function" == typeof d && (t === v && L && (k = L.value || ""),
                                d(k)),
                                _.classList.add("nx-remove");
                                var e = setTimeout((function() {
                                    null !== _.parentNode && (_.parentNode.removeChild(_),
                                    clearTimeout(e))
                                }
                                ), a.cssAnimationDuration)
                            }
                            ))
                        }
                        a = W(!0, a, u)
                    }, ae = function() {
                        return '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'
                    }, ne = function(t, i, a, o, r) {
                        if (!P("body"))
                            return !1;
                        n || ce.Loading.init({});
                        var l = W(!0, n, {});
                        if ("object" == typeof i && !Array.isArray(i) || "object" == typeof a && !Array.isArray(a)) {
                            var c = {};
                            "object" == typeof i ? c = i : "object" == typeof a && (c = a),
                            n = W(!0, n, c)
                        }
                        var d = "";
                        if ("string" == typeof i && 0 < i.length && (d = i),
                        o) {
                            var p = "";
                            0 < (d = d.length > n.messageMaxLength ? H(d).toString().substring(0, n.messageMaxLength) + "..." : H(d).toString()).length && (p = '<p id="' + n.messageID + '" class="nx-loading-message" style="color:' + n.messageColor + ";font-size:" + n.messageFontSize + ';">' + d + "</p>"),
                            n.cssAnimation || (n.cssAnimationDuration = 0);
                            var u = "";
                            if (t === k)
                                u = j(n.svgSize, n.svgColor);
                            else if (t === C)
                                u = V(n.svgSize, n.svgColor);
                            else if (t === _)
                                u = G(n.svgSize, n.svgColor);
                            else if (t === T)
                                u = X(n.svgSize, n.svgColor);
                            else if (t === L)
                                u = q(n.svgSize, n.svgColor);
                            else if (t === E)
                                u = Y(n.svgSize, n.svgColor);
                            else if (t === I && null !== n.customSvgCode && null === n.customSvgUrl)
                                u = n.customSvgCode || "";
                            else if (t === I && null !== n.customSvgUrl && null === n.customSvgCode)
                                u = '<img class="nx-custom-loading-icon" width="' + n.svgSize + '" height="' + n.svgSize + '" src="' + n.customSvgUrl + '" alt="Notiflix">';
                            else {
                                if (t === I && (null === n.customSvgUrl || null === n.customSvgCode))
                                    return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),
                                    !1;
                                u = function(e, t, i) {
                                    return e || (e = "60px"),
                                    t || (t = "#f8f8f8"),
                                    i || (i = "#32c682"),
                                    '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + e + '" height="' + e + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + t + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + i + '" stroke="' + i + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'
                                }(n.svgSize, "#f8f8f8", "#32c682")
                            }
                            var f = parseInt((n.svgSize || "").replace(/[^0-9]/g, ""))
                              , h = e.innerWidth
                              , m = f >= h ? h - 40 + "px" : f + "px"
                              , g = '<div style="width:' + m + "; height:" + m + ';" class="' + n.className + "-icon" + (0 < d.length ? " nx-with-message" : "") + '">' + u + "</div>"
                              , y = e.document.createElement("div");
                            y.id = $.ID,
                            y.className = n.className + (n.cssAnimation ? " nx-with-animation" : "") + (n.clickToClose ? " nx-loading-click-to-close" : ""),
                            y.style.zIndex = n.zindex,
                            y.style.background = n.backgroundColor,
                            y.style.animationDuration = n.cssAnimationDuration + "ms",
                            y.style.fontFamily = '"' + n.fontFamily + '", ' + s,
                            y.style.display = "flex",
                            y.style.flexWrap = "wrap",
                            y.style.flexDirection = "column",
                            y.style.alignItems = "center",
                            y.style.justifyContent = "center",
                            n.rtl && (y.setAttribute("dir", "rtl"),
                            y.classList.add("nx-rtl-on")),
                            y.innerHTML = g + p,
                            !e.document.getElementById(y.id) && (e.document.body.appendChild(y),
                            n.clickToClose) && e.document.getElementById(y.id).addEventListener("click", (function() {
                                y.classList.add("nx-remove");
                                var e = setTimeout((function() {
                                    null !== y.parentNode && (y.parentNode.removeChild(y),
                                    clearTimeout(e))
                                }
                                ), n.cssAnimationDuration)
                            }
                            ))
                        } else if (e.document.getElementById($.ID))
                            var x = e.document.getElementById($.ID)
                              , b = setTimeout((function() {
                                x.classList.add("nx-remove");
                                var e = setTimeout((function() {
                                    null !== x.parentNode && (x.parentNode.removeChild(x),
                                    clearTimeout(e))
                                }
                                ), n.cssAnimationDuration);
                                clearTimeout(b)
                            }
                            ), r);
                        n = W(!0, n, l)
                    }, oe = function(t) {
                        "string" != typeof t && (t = "");
                        var i = e.document.getElementById($.ID);
                        if (i)
                            if (0 < t.length) {
                                t = t.length > n.messageMaxLength ? H(t).substring(0, n.messageMaxLength) + "..." : H(t);
                                var a = i.getElementsByTagName("p")[0];
                                if (a)
                                    a.innerHTML = t;
                                else {
                                    var o = e.document.createElement("p");
                                    o.id = n.messageID,
                                    o.className = "nx-loading-message nx-loading-message-new",
                                    o.style.color = n.messageColor,
                                    o.style.fontSize = n.messageFontSize,
                                    o.innerHTML = t,
                                    i.appendChild(o)
                                }
                            } else
                                B("Where is the new message?")
                    }, re = function() {
                        return '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'
                    }, se = 0, le = function(t, i, a, n, r, l) {
                        var c;
                        if (Array.isArray(a)) {
                            if (1 > a.length)
                                return B("Array of HTMLElements should contains at least one HTMLElement."),
                                !1;
                            c = a
                        } else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, a)) {
                            if (1 > a.length)
                                return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),
                                !1;
                            c = Array.prototype.slice.call(a)
                        } else {
                            if ("string" != typeof a || 1 > (a || "").length || 1 === (a || "").length && ("#" === (a || "")[0] || "." === (a || "")[0]))
                                return B("The selector parameter must be a string and matches a specified CSS selector(s)."),
                                !1;
                            var d = e.document.querySelectorAll(a);
                            if (1 > d.length)
                                return B('You called the "Notiflix.Block..." function with "' + a + '" selector, but there is no such element(s) in the document.'),
                                !1;
                            c = d
                        }
                        o || ce.Block.init({});
                        var p = W(!0, o, {});
                        if ("object" == typeof n && !Array.isArray(n) || "object" == typeof r && !Array.isArray(r)) {
                            var u = {};
                            "object" == typeof n ? u = n : "object" == typeof r && (u = r),
                            o = W(!0, o, u)
                        }
                        var f = "";
                        "string" == typeof n && 0 < n.length && (f = n),
                        o.cssAnimation || (o.cssAnimationDuration = 0);
                        var h = F.className;
                        "string" == typeof o.className && (h = o.className.trim());
                        var m = "number" == typeof o.querySelectorLimit ? o.querySelectorLimit : 200
                          , g = (c || []).length >= m ? m : c.length
                          , y = "nx-block-temporary-position";
                        if (t) {
                            for (var x, b = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr", "html", "head", "title", "script", "style", "iframe"], v = 0; v < g; v++)
                                if (x = c[v]) {
                                    if (-1 < b.indexOf(x.tagName.toLocaleLowerCase("en")))
                                        break;
                                    var w = x.querySelectorAll("[id^=" + F.ID + "]");
                                    if (1 > w.length) {
                                        var k = "";
                                        i && (k = i === S ? V(o.svgSize, o.svgColor) : i === O ? G(o.svgSize, o.svgColor) : i === R ? X(o.svgSize, o.svgColor) : i === M ? q(o.svgSize, o.svgColor) : i === D ? Y(o.svgSize, o.svgColor) : j(o.svgSize, o.svgColor));
                                        var C = '<span class="' + h + '-icon" style="width:' + o.svgSize + ";height:" + o.svgSize + ';">' + k + "</span>"
                                          , _ = "";
                                        0 < f.length && (f = f.length > o.messageMaxLength ? H(f).substring(0, o.messageMaxLength) + "..." : H(f),
                                        _ = '<span style="font-size:' + o.messageFontSize + ";color:" + o.messageColor + ';" class="' + h + '-message">' + f + "</span>"),
                                        se++;
                                        var T = e.document.createElement("div");
                                        T.id = F.ID + "-" + se,
                                        T.className = h + (o.cssAnimation ? " nx-with-animation" : ""),
                                        T.style.position = o.position,
                                        T.style.zIndex = o.zindex,
                                        T.style.background = o.backgroundColor,
                                        T.style.animationDuration = o.cssAnimationDuration + "ms",
                                        T.style.fontFamily = '"' + o.fontFamily + '", ' + s,
                                        T.style.display = "flex",
                                        T.style.flexWrap = "wrap",
                                        T.style.flexDirection = "column",
                                        T.style.alignItems = "center",
                                        T.style.justifyContent = "center",
                                        o.rtl && (T.setAttribute("dir", "rtl"),
                                        T.classList.add("nx-rtl-on")),
                                        T.innerHTML = C + _;
                                        var L = e.getComputedStyle(x).getPropertyValue("position")
                                          , E = "string" == typeof L ? L.toLocaleLowerCase("en") : "relative"
                                          , I = Math.round(1.25 * parseInt(o.svgSize)) + 40
                                          , A = "";
                                        I > (x.offsetHeight || 0) && (A = "min-height:" + I + "px;");
                                        var $;
                                        $ = x.getAttribute("id") ? "#" + x.getAttribute("id") : x.classList[0] ? "." + x.classList[0] : (x.tagName || "").toLocaleLowerCase("en");
                                        var N = ""
                                          , U = -1 >= ["absolute", "relative", "fixed", "sticky"].indexOf(E);
                                        if (U || 0 < A.length) {
                                            if (!P("head"))
                                                return !1;
                                            U && (N = "position:relative!important;");
                                            var K = '<style id="Style-' + F.ID + "-" + se + '">' + $ + "." + y + "{" + N + A + "}</style>"
                                              , Z = e.document.createRange();
                                            Z.selectNode(e.document.head);
                                            var Q = Z.createContextualFragment(K);
                                            e.document.head.appendChild(Q),
                                            x.classList.add(y)
                                        }
                                        x.appendChild(T)
                                    }
                                }
                        } else
                            var J = function(t) {
                                var i = setTimeout((function() {
                                    null !== t.parentNode && t.parentNode.removeChild(t);
                                    var a = t.getAttribute("id")
                                      , n = e.document.getElementById("Style-" + a);
                                    n && null !== n.parentNode && n.parentNode.removeChild(n),
                                    clearTimeout(i)
                                }
                                ), o.cssAnimationDuration)
                            }
                              , ee = function(e) {
                                if (e && 0 < e.length)
                                    for (var t, i = 0; i < e.length; i++)
                                        (t = e[i]) && (t.classList.add("nx-remove"),
                                        J(t));
                                else
                                    z("string" == typeof a ? '"Notiflix.Block.remove();" function called with "' + a + '" selector, but this selector does not have a "Block" element to remove.' : '"Notiflix.Block.remove();" function called with "' + a + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')
                            }
                              , te = function(e) {
                                var t = setTimeout((function() {
                                    e.classList.remove(y),
                                    clearTimeout(t)
                                }
                                ), o.cssAnimationDuration + 300)
                            }
                              , ie = setTimeout((function() {
                                for (var e, t = 0; t < g; t++)
                                    (e = c[t]) && (te(e),
                                    w = e.querySelectorAll("[id^=" + F.ID + "]"),
                                    ee(w));
                                clearTimeout(ie)
                            }
                            ), l);
                        o = W(!0, o, p)
                    }, ce = {
                        Notify: {
                            init: function(e) {
                                t = W(!0, u, e),
                                U(K, "NotiflixNotifyInternalCSS")
                            },
                            merge: function(e) {
                                return t ? void (t = W(!0, t, e)) : (B("You have to initialize the Notify module before call Merge function."),
                                !1)
                            },
                            success: function(e, t, i) {
                                Q(l, e, t, i)
                            },
                            failure: function(e, t, i) {
                                Q(c, e, t, i)
                            },
                            warning: function(e, t, i) {
                                Q(d, e, t, i)
                            },
                            info: function(e, t, i) {
                                Q(p, e, t, i)
                            }
                        },
                        Report: {
                            init: function(e) {
                                i = W(!0, y, e),
                                U(J, "NotiflixReportInternalCSS")
                            },
                            merge: function(e) {
                                return i ? void (i = W(!0, i, e)) : (B("You have to initialize the Report module before call Merge function."),
                                !1)
                            },
                            success: function(e, t, i, a, n) {
                                ee(f, e, t, i, a, n)
                            },
                            failure: function(e, t, i, a, n) {
                                ee(h, e, t, i, a, n)
                            },
                            warning: function(e, t, i, a, n) {
                                ee(m, e, t, i, a, n)
                            },
                            info: function(e, t, i, a, n) {
                                ee(g, e, t, i, a, n)
                            }
                        },
                        Confirm: {
                            init: function(e) {
                                a = W(!0, w, e),
                                U(te, "NotiflixConfirmInternalCSS")
                            },
                            merge: function(e) {
                                return a ? void (a = W(!0, a, e)) : (B("You have to initialize the Confirm module before call Merge function."),
                                !1)
                            },
                            show: function(e, t, i, a, n, o, r) {
                                ie(x, e, t, null, i, a, n, o, r)
                            },
                            ask: function(e, t, i, a, n, o, r, s) {
                                ie(b, e, t, i, a, n, o, r, s)
                            },
                            prompt: function(e, t, i, a, n, o, r, s) {
                                ie(v, e, t, i, a, n, o, r, s)
                            }
                        },
                        Loading: {
                            init: function(e) {
                                n = W(!0, $, e),
                                U(ae, "NotiflixLoadingInternalCSS")
                            },
                            merge: function(e) {
                                return n ? void (n = W(!0, n, e)) : (B("You have to initialize the Loading module before call Merge function."),
                                !1)
                            },
                            standard: function(e, t) {
                                ne(k, e, t, !0, 0)
                            },
                            hourglass: function(e, t) {
                                ne(C, e, t, !0, 0)
                            },
                            circle: function(e, t) {
                                ne(_, e, t, !0, 0)
                            },
                            arrows: function(e, t) {
                                ne(T, e, t, !0, 0)
                            },
                            dots: function(e, t) {
                                ne(L, e, t, !0, 0)
                            },
                            pulse: function(e, t) {
                                ne(E, e, t, !0, 0)
                            },
                            custom: function(e, t) {
                                ne(I, e, t, !0, 0)
                            },
                            notiflix: function(e, t) {
                                ne(A, e, t, !0, 0)
                            },
                            remove: function(e) {
                                "number" != typeof e && (e = 0),
                                ne(null, null, null, !1, e)
                            },
                            change: function(e) {
                                oe(e)
                            }
                        },
                        Block: {
                            init: function(e) {
                                o = W(!0, F, e),
                                U(re, "NotiflixBlockInternalCSS")
                            },
                            merge: function(e) {
                                return o ? void (o = W(!0, o, e)) : (B('You have to initialize the "Notiflix.Block" module before call Merge function.'),
                                !1)
                            },
                            standard: function(e, t, i) {
                                le(!0, N, e, t, i)
                            },
                            hourglass: function(e, t, i) {
                                le(!0, S, e, t, i)
                            },
                            circle: function(e, t, i) {
                                le(!0, O, e, t, i)
                            },
                            arrows: function(e, t, i) {
                                le(!0, R, e, t, i)
                            },
                            dots: function(e, t, i) {
                                le(!0, M, e, t, i)
                            },
                            pulse: function(e, t, i) {
                                le(!0, D, e, t, i)
                            },
                            remove: function(e, t) {
                                "number" != typeof t && (t = 0),
                                le(!1, null, e, null, null, t)
                            }
                        }
                    };
                    return "object" == typeof e.Notiflix ? W(!0, e.Notiflix, {
                        Notify: ce.Notify,
                        Report: ce.Report,
                        Confirm: ce.Confirm,
                        Loading: ce.Loading,
                        Block: ce.Block
                    }) : {
                        Notify: ce.Notify,
                        Report: ce.Report,
                        Confirm: ce.Confirm,
                        Loading: ce.Loading,
                        Block: ce.Block
                    }
                }(n)
            }
            .apply(t, []),
            void 0 === a || (e.exports = a)
        }
    }
      , t = {};
    function i(a) {
        var n = t[a];
        if (void 0 !== n)
            return n.exports;
        var o = t[a] = {
            exports: {}
        };
        return e[a].call(o.exports, o, o.exports, i),
        o.exports
    }
    i.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    ( () => {
        "use strict";
        const e = "message-overlay"
          , t = "message-container"
          , a = "dialog-box-main"
          , n = "dialog-box-overlay"
          , o = "dialog-box-back"
          , r = "dialog-box-cancel"
          , s = "dialog-box-content"
          , l = "dialog-box-ok"
          , c = "dialog-box-back"
          , d = "dialog-box-title"
          , p = "dialog-box-subtitle"
          , u = "dialog-box-footer";
        class f {
            _uiInstance;
            constructor() {
                this.createDialogUiInstance()
            }
            createDialogUiInstance() {
                const e = $("<div>").addClass(a)
                  , t = $("<header>").appendTo(e)
                  , i = $("<div>").addClass("left").appendTo(t);
                $("<div>").addClass(c).addClass("button-colour blue").hide().appendTo(i);
                const n = $("<div>").addClass("middle").appendTo(t);
                $("<h2>").addClass(d).appendTo(n),
                $("<h6>").addClass(p).appendTo(n);
                const o = $("<div>").addClass("right").appendTo(t);
                $("<div>").addClass("dialog-box-cancel").addClass("button-colour red").appendTo(o).on("click", ( () => y())),
                $("<div>").addClass("body").appendTo(e),
                $("<footer>").addClass(u).appendTo(e),
                this._uiInstance = e
            }
            addButton(e, t, i) {
                const a = this._uiInstance.find(`.${u}`);
                return $("<div>").addClass("dialog-box-ok").addClass(`button-colour ${t}`).text(e).on("click", ( () => i())).appendTo(a),
                this
            }
            close() {
                this._uiInstance.remove(),
                m?.remove(),
                m = void 0
            }
            setBackButtonFunction(e) {
                const t = this._uiInstance.find(`.${c}`);
                return t.off().hide(),
                void 0 !== e && t.show().on("click", ( () => e())),
                this
            }
            setContent(e) {
                const t = this._uiInstance.find(".body");
                return !1 === e.hasClass(s) ? $("<div>").addClass(s).appendTo(t).append(e) : e.appendTo(t),
                this
            }
            setContentId(e) {
                return void 0 === e && (e = "dc-yesno-default"),
                !1 === e.startsWith("#") && (e = `#${e}`),
                this.setContent($(e).clone()),
                this
            }
            setMode(e) {
                return this._uiInstance.removeClass("small large tiny").addClass(e.toLowerCase()),
                this
            }
            setSubtitle(e) {
                return this._uiInstance.find(`.${p}`).text(e),
                this
            }
            setTitle(e) {
                return this._uiInstance.find(`.${d}`).text(e),
                this
            }
            show() {
                return void 0 === m && (m = $("<div>").addClass(n).appendTo($("body")),
                this._uiInstance.appendTo(m)),
                this
            }
        }
        class h extends f {
            constructor(e) {
                super(),
                this.addButton("Yes", "green", ( () => e(!0))),
                this.addButton("No", "red", ( () => e(!1)))
            }
        }
        let m;
        var g;
        function y() {
            void 0 !== m && m.remove(),
            m = void 0
        }
        function x(e, t, i, c, d, p) {
            var u;
            void 0 === m && function() {
                const e = $("<div>").addClass(n).appendTo($("body"))
                  , t = $("<div>").addClass(a).appendTo(e)
                  , i = $("<header>").appendTo(t)
                  , s = $("<div>").addClass("left").appendTo(i);
                $("<div>").attr("id", o).addClass("button-colour blue").appendTo(s);
                const c = $("<div>").addClass("middle").appendTo(i);
                $("<h2>").appendTo(c),
                $("<h6>").appendTo(c);
                const d = $("<div>").addClass("right").appendTo(i);
                $("<div>").attr("id", r).addClass("button-colour red").appendTo(d).on("click", ( () => y())),
                $("<div>").addClass("body").appendTo(t);
                const p = $("<footer>").appendTo(t);
                $("<div>").attr("id", l).addClass("button-colour green").text("OK").appendTo(p),
                m = e
            }(),
            function(e) {
                if (void 0 === m)
                    return;
                const t = m.find(`.${a}`);
                t.removeClass("tiny"),
                e === g.SMALL ? t.removeClass("large") : e === g.LARGE && t.addClass("large")
            }(e),
            function(e, t) {
                if (void 0 === m)
                    return;
                const i = m.find(`.${a} > header > .middle`);
                i.children("h2").text(e),
                i.children("h6").text(t)
            }(t, i),
            function(e) {
                if (void 0 === m)
                    return;
                if (!1 === e.hasClass(s))
                    throw new Error(`Content must be wrapped within a container that has the "${s}" class.`);
                const t = m.find("div.body")
                  , i = t.children(`.${s}`);
                i.filter("[id]").detach(),
                i.filter(":not([id])").remove(),
                e.appendTo(t).show()
            }(c),
            u = d,
            void 0 !== m && $(`#${l}`).text(u.text || "OK").off().on("click", ( () => u.okFunction())),
            function(e) {
                void 0 !== m && ($(`#${o}`).off().hide(),
                void 0 !== e && $(`#${o}`).show().on("click", ( () => e())))
            }(p)
        }
        function b() {
            return $("<div>").addClass(s)
        }
        function v() {
            return $("<section>")
        }
        function w(e) {
            return $("<h3>").text(e)
        }
        function k(e) {
            return $("<p>").addClass("no-data").text(e || "No data")
        }
        function C(i, n) {
            void 0 !== m && function(i, a, n) {
                const o = $("<div>").addClass(e).appendTo(i)
                  , r = $("<div>").addClass(t).appendTo(o);
                $("<h2>").text(a).appendTo(r),
                Array.isArray(n) ? n.forEach((e => {
                    $("<p>").text(e).appendTo(r)
                }
                )) : $("<p>").text(n).appendTo(r),
                $("<div>").addClass("button-colour").text("OK").appendTo(r).on("click", (function(e) {
                    e.stopPropagation(),
                    o.remove()
                }
                ))
            }(m.find(`div.${a}`), i, n)
        }
        function _() {
            void 0 !== m && m.find(`.${a}`).addClass("tiny")
        }
        function T(e) {
            void 0 === e.staticContentId && (e.staticContentId = "dc-confirm-default"),
            !1 === e.staticContentId.startsWith("#") && (e.staticContentId = `#${e.staticContentId}`);
            const t = b()
              , i = $(e.staticContentId).clone().appendTo(t);
            void 0 !== e.contextContent && i.prepend(e.contextContent),
            x(g.SMALL, "Are you sure?", "Please confirm", t, {
                text: e.okButtonOptions.text,
                okFunction: () => {
                    e.okButtonOptions.okFunction(),
                    y()
                }
            }),
            !0 === e.tinyMode && _()
        }
        let L;
        !function(e) {
            e[e.SMALL = 0] = "SMALL",
            e[e.LARGE = 1] = "LARGE"
        }(g || (g = {}));
        let E = 72e5;
        const I = 18e4;
        let A = !1;
        async function N() {
            await ee().postNoResponse("KeepAlive"),
            O()
        }
        function S() {
            const e = document.getElementById("logout");
            if (null === e)
                throw new Error("SessionManager: Logout button was not found.");
            e.click()
        }
        function O() {
            if (!1 === A)
                throw new Error("SessionManager: Not initialised.");
            void 0 !== L && clearTimeout(L);
            const e = E - I
              , t = I - 6e4;
            L = window.setTimeout(( () => {
                !function(e, t, i) {
                    const a = b();
                    let n = i
                      , o = setTimeout((function e() {
                        const t = `Your activity is low. We'll automatically log you out in ${n / 1e3} seconds.`;
                        a.empty(),
                        $("<p>").text(t).appendTo(a),
                        n -= 1e3,
                        n > 0 && (o = setTimeout(e, 1e3))
                    }
                    ), 0);
                    const s = setTimeout(( () => {
                        t()
                    }
                    ), i);
                    x(g.SMALL, "Your activity is low", "Please take action", a, {
                        text: "Please keep me logged in!",
                        okFunction: () => {
                            clearTimeout(s),
                            clearTimeout(o),
                            e(),
                            y()
                        }
                    }),
                    _(),
                    $(`#${r}`).one("click", ( () => {
                        clearTimeout(s),
                        clearTimeout(o),
                        t()
                    }
                    ))
                }(N, S, t)
            }
            ), e)
        }
        const R = "body"
          , M = "status-overlay"
          , D = "status-box"
          , F = "body";
        let B, z;
        function P() {
            void 0 !== B && B.remove()
        }
        class U {
            static White = new U(255,255,255,1);
            static Transparent = new U(255,255,255,0);
            _r;
            _g;
            _b;
            _a;
            constructor(e, t, i, a=1) {
                a < 0 && (a = 0),
                a > 1 && (a = 1),
                this._r = Math.round(e),
                this._g = Math.round(t),
                this._b = Math.round(i),
                this._a = a
            }
            get r() {
                return this._r
            }
            get g() {
                return this._g
            }
            get b() {
                return this._b
            }
            get a() {
                return this._a
            }
            add(e) {
                return new U((1 - e._a) * this._r + e._a * e._r,(1 - e._a) * this._g + e._a * e._g,(1 - e._a) * this._b + e._a * e._b)
            }
            asHex() {
                return `#${this._r.toString(16).padStart(2, "0")}${this._g.toString(16).padStart(2, "0")}${this._b.toString(16).padStart(2, "0")}`
            }
            asHsl() {
                const e = this._r / 255
                  , t = this._g / 255
                  , i = this._b / 255
                  , a = Math.max(e, t, i)
                  , n = Math.min(e, t, i);
                let o = (a + n) / 2
                  , r = (a + n) / 2;
                const s = (a + n) / 2;
                if (a === n)
                    o = r = 0;
                else {
                    const l = a - n;
                    switch (r = s > .5 ? l / (2 - a - n) : l / (a + n),
                    a) {
                    case e:
                        o = (t - i) / l + (t < i ? 6 : 0);
                        break;
                    case t:
                        o = (i - e) / l + 2;
                        break;
                    case i:
                        o = (e - t) / l + 4
                    }
                    o /= 6
                }
                return {
                    h: o,
                    s: r,
                    l: s
                }
            }
            asRgb() {
                return `rgb(${this._r},${this._g},${this._b})`
            }
            asRgba() {
                return `rgba(${this._r},${this._g},${this._b},${this._a})`
            }
            bestContrastingFontColour() {
                return (299 * this._r + 587 * this._g + 114 * this._b) / 1e3 >= 128 ? new U(0,0,0) : new U(255,255,255)
            }
            interpolateUsingHSL(e, t=.5) {
                const i = this.asHsl()
                  , a = e.asHsl()
                  , n = i.h + t * (a.h - i.h)
                  , o = i.s + t * (a.s - i.s)
                  , r = i.l + t * (a.l - i.l);
                return U.fromHSL({
                    h: n,
                    s: o,
                    l: r
                })
            }
            interpolateUsingRgb(e, t=.5) {
                const i = Math.round(this._r + t * (e._r - this._r))
                  , a = Math.round(this._g + t * (e._g - this._g))
                  , n = Math.round(this._b + t * (e._b - this._b));
                return new U(i,a,n)
            }
            static fromHex(e, t=1) {
                if (!e || null === e)
                    return U.White;
                e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, ( (e, t, i, a) => t + t + i + i + a + a));
                const i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return null === i ? U.White : new U(parseInt(i[1], 16),parseInt(i[2], 16),parseInt(i[3], 16),null === t ? 1 : t)
            }
            static fromHSL(e) {
                function t(e, t, i) {
                    return i < 0 && (i += 1),
                    i > 1 && (i -= 1),
                    i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
                }
                let i = e.l;
                if (0 === e.s)
                    return i = Math.round(255),
                    new U(i,i,i);
                {
                    const a = e.s
                      , n = i < .5 ? i * (1 + a) : i + a - i * a
                      , o = 2 * i - n
                      , r = t(o, n, e.h + 1 / 3)
                      , s = t(o, n, e.h)
                      , l = t(o, n, e.h - 1 / 3);
                    return new U(Math.round(255 * r),Math.round(255 * s),Math.round(255 * l))
                }
            }
        }
        function W() {
            const e = $("body");
            $("<div>").addClass("v-loader").appendTo(e)
        }
        function H(e) {
            const t = new google.maps.LatLngBounds;
            return e.getPaths().forEach((e => {
                e.forEach((e => {
                    t.extend(e)
                }
                ))
            }
            )),
            t
        }
        function j(e) {
            let t = new google.maps.LatLngBounds;
            return e.forEach((e => {
                e.forEach((e => {
                    e.forEach((e => {
                        t.extend(new google.maps.LatLng(e.y,e.x))
                    }
                    ))
                }
                ))
            }
            )),
            t
        }
        function V(e, t) {
            const i = -Math.abs(75)
              , a = -Math.abs(e * (t + 4) / 2);
            return new google.maps.Size(i,a)
        }
        function G(e) {
            const t = e.flat(1);
            return new google.maps.MVCArray(t.map((e => (e.pop(),
            new google.maps.MVCArray(e.map((e => {
                let t, i;
                return function(e) {
                    return void 0 !== e.x && void 0 !== e.y
                }(e) ? (t = e.y,
                i = e.x) : (t = e.lat,
                i = e.lon),
                new google.maps.LatLng(t,i)
            }
            )))))))
        }
        function X(e, t) {
            return [e, t].filter((e => null != e && "" !== e.trim())).join(" | ")
        }
        function q(e) {
            const t = new U(0,0,220)
              , i = new U(255,255,255)
              , a = new U(150,0,0)
              , n = [];
            if (0 === e)
                throw new Error("Unable to generate a palette of 0 colours.");
            if (1 === e)
                return n.push(a.asHex()),
                n;
            const o = 1 + (e - 1) / 2;
            for (let r = 0; r < e; r++) {
                let e = 0 + 1 / (o - 1);
                r < o - 1 ? (e *= r,
                n.push(t.interpolateUsingRgb(i, e).asHex())) : r === o - 1 ? n.push(i.asHex()) : r > o - 1 && (e *= r + 1 - o,
                n.push(i.interpolateUsingRgb(a, e).asHex()))
            }
            return n
        }
        function Y(e, t=!0) {
            if (null == e || "" === e)
                return "";
            {
                const i = new Date(e);
                return !0 === t ? i.toISOString().split("T")[0] : i.toISOString()
            }
        }
        function K(e) {
            const t = e.getDate()
              , i = e.getMonth()
              , a = e.getFullYear();
            return `${t.toString().padStart(2, "0")} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]} ${a.toString().substr(2, 2)}`
        }
        function Z() {
            $("body > .v-loader").remove()
        }
        function Q(e, t, i=",") {
            let a = e;
            for (; t > 1; )
                a += `${i}${e}`,
                t--;
            return a
        }
        function J(e) {
            !function(e) {
                !function(e, t, i) {
                    void 0 !== B && P();
                    const a = $("<div>").addClass(M).appendTo(R)
                      , n = $("<div>").addClass(`${D} ${e}`).appendTo(a)
                      , o = $("<header>").appendTo(n);
                    $("<h2>").text(t).appendTo(o);
                    const r = $("<div>").addClass(F).appendTo(n)
                      , s = (e, t) => {
                        void 0 !== t && $("<h5>").text(`(${t})`).appendTo(r),
                        $("<p>").text(e).appendTo(r)
                    }
                    ;
                    Array.isArray(i) ? 1 === i.length ? s(i[0]) : i.forEach(( (e, t) => {
                        s(e, t + 1)
                    }
                    )) : s(i),
                    $("<footer>").text("Click to close").on("click", ( () => P())).appendTo(n),
                    B = a
                }("error", "Error!", e || "We're very sorry, but an error has occurred. If the problem persists, please contact support.")
            }(e)
        }
        function ee() {
            if (void 0 === z)
                throw new Error("Comms: No connection available.");
            return z
        }
        class te {
            _controllerPrefix;
            constructor(e) {
                this._controllerPrefix = e
            }
            getUrlPrefix() {
                return void 0 === this._controllerPrefix || null === this._controllerPrefix || "" === this._controllerPrefix ? "" : `${this._controllerPrefix}/`
            }
            postNoResponse(e, t) {
                return new Promise(( (i, a) => {
                    const n = new XMLHttpRequest;
                    n.open("POST", `${this.getUrlPrefix()}${e}?_${Date.now()}`, !0),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.setRequestHeader("Content-type", "application/json"),
                    n.onload = () => {
                        200 === n.status ? i() : a(Error(`Error ${n.statusText}. URL: ${e}.`))
                    }
                    ,
                    n.onerror = () => {
                        a(Error(`Network error (${e}).`))
                    }
                    ,
                    void 0 === t ? n.send() : n.send(JSON.stringify(t))
                }
                )).then(( () => {
                    O()
                }
                ), (e => {
                    throw console.log(e.message),
                    J(e.message),
                    e
                }
                ))
            }
            download(e, t) {
                return new Promise(( (i, a) => {
                    const n = new XMLHttpRequest
                      , o = JSON.stringify(t);
                    n.open("POST", `${this.getUrlPrefix()}${e}`),
                    n.responseType = "blob",
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.setRequestHeader("Content-type", "application/json"),
                    n.onload = () => {
                        if (200 === n.status) {
                            const e = new Blob([n.response],{
                                type: "text/csv"
                            })
                              , t = "Vision export.csv"
                              , a = document.createElement("a");
                            a.style.display = "none",
                            document.body.appendChild(a);
                            const o = window.URL.createObjectURL(e);
                            a.href = o,
                            a.download = t,
                            a.click(),
                            window.URL.revokeObjectURL(o),
                            a.remove(),
                            i()
                        } else
                            a(Error(`Error ${n.statusText}. URL: ${e}.`))
                    }
                    ,
                    n.onerror = () => {
                        a(Error(`Network error (${e}).`))
                    }
                    ,
                    n.send(o)
                }
                )).then(( () => {
                    O(),
                    Z()
                }
                ), (e => {
                    throw console.log(e.message),
                    Z(),
                    e
                }
                )).catch((e => {
                    J(e.message)
                }
                ))
            }
            get(e, t) {
                return new Promise(( (i, a) => {
                    const n = new XMLHttpRequest;
                    n.open("GET", `${this.getUrlPrefix()}${e}?${function(e) {
                        if (void 0 === e)
                            return "";
                        {
                            const t = [];
                            for (const i in e)
                                null == e[i] || null == e[i] ? t.push(`${i}=`) : t.push(`${i}=${encodeURIComponent(e[i])}`);
                            return t.push(`_${Date.now()}`),
                            t.join("&")
                        }
                    }(t)}`, !0),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    n.onload = () => {
                        if (200 === n.status) {
                            const e = JSON.parse(n.response);
                            !0 === e.isSuccess ? i(e) : a(e.errors)
                        } else if (403 === n.status) {
                            const e = JSON.parse(n.response.responseText);
                            window.location.replace(e.LogOnUrl)
                        } else
                            a(Error(`Error ${n.statusText}. URL: ${e}.`))
                    }
                    ,
                    n.onerror = () => {
                        a(Error(`Network error (${e}).`))
                    }
                    ,
                    n.send()
                }
                )).then((e => (O(),
                e.responseData)), (e => {
                    throw J(e),
                    Z(),
                    Error(`Server Error(s): ${e.join("\n")}`)
                }
                ))
            }
            post(e, t) {
                return new Promise(( (i, a) => {
                    const n = new XMLHttpRequest;
                    n.open("POST", `${this.getUrlPrefix()}${e}?_${Date.now()}`, !0),
                    n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    n.setRequestHeader("Content-type", "application/json"),
                    n.onload = () => {
                        if (200 === n.status) {
                            const e = JSON.parse(n.response);
                            !0 === e.isSuccess ? i(e) : a(e.errors)
                        } else if (403 === n.status) {
                            const e = JSON.parse(n.response.responseText);
                            window.location.replace(e.LogOnUrl)
                        } else
                            a(Error(`Error ${n.statusText}. URL: ${e}.`))
                    }
                    ,
                    n.onerror = () => {
                        a(Error(`Network error (${e}).`))
                    }
                    ,
                    null == t ? n.send() : n.send(JSON.stringify(t))
                }
                )).then((e => (O(),
                e.responseData)), (e => {
                    throw J(e),
                    Z(),
                    Error(`Server Error(s): ${e.join("\n")}`)
                }
                ))
            }
        }
        var ie, ae, ne;
        function oe(e, t, i) {
            if (null == e)
                return 0;
            if (0 === e)
                return e;
            if (t === i)
                return e;
            switch (!0) {
            case 1 === t && 2 === i:
                return e / 1e3;
            case 1 === t && 3 === i:
                return e / 1609.344;
            case 2 === t && 1 === i:
                return 1e3 * e;
            case 2 === t && 3 === i:
                return e / 1.609344;
            case 3 === t && 1 === i:
                return 1609.344 * e;
            case 3 === t && 2 === i:
                return 1.609344 * e;
            default:
                return e
            }
        }
        function re(e, t=!1) {
            switch (e) {
            case 1:
                return !0 === t ? "m" : "Metres";
            case 2:
                return !0 === t ? "km" : "Kilometres";
            case 3:
                return !0 === t ? "mi" : "Miles"
            }
        }
        !function(e) {
            e[e.TEXT = 0] = "TEXT",
            e[e.NUMBER = 1] = "NUMBER",
            e[e.BOOL = 2] = "BOOL",
            e[e.DATE = 3] = "DATE",
            e[e.FYN_RETURN_VALUE = 8] = "FYN_RETURN_VALUE",
            e[e.SYSTEM_LINK = 9] = "SYSTEM_LINK"
        }(ie || (ie = {})),
        function(e) {
            e[e.BASE_LAYER = 0] = "BASE_LAYER",
            e[e.BASE_LAYER_ON_HIERARCHY = 1] = "BASE_LAYER_ON_HIERARCHY",
            e[e.AGGREGATED = 10] = "AGGREGATED",
            e[e.CUSTOM_AREA = 11] = "CUSTOM_AREA",
            e[e.RADIAL = 12] = "RADIAL",
            e[e.LOCATIONS = 20] = "LOCATIONS",
            e[e.GEOCODING = 90] = "GEOCODING"
        }(ae || (ae = {})),
        function(e) {
            e[e.COMPLETE = 0] = "COMPLETE",
            e[e.LAZY = 1] = "LAZY"
        }(ne || (ne = {}));
        var se = i(19);
        const le = "Completed successfully!";
        function ce(e) {
            return e && e.stack && e.message && "string" == typeof e.stack && "string" == typeof e.message
        }
        function de(e) {
            se.Notify.success(ce(e) ? e.message : e ?? le)
        }
        function pe(e) {
            se.Notify.warning(ce(e) ? e.message : e)
        }
        class ue {
            _id;
            _name;
            _layer;
            _colour;
            constructor(e, t) {
                this._id = t?.id ?? null,
                this._name = t?.name ?? "No classification",
                this._layer = e
            }
            get colour() {
                return this._colour
            }
            get id() {
                return this._id
            }
            get layer() {
                return this._layer
            }
            get name() {
                return this._name
            }
        }
        const fe = {
            path: "M 0 0 Q -20 -30 0 -30 Q 20 -30 0 0",
            dimensions: {
                x: -20,
                y: -30,
                size: {
                    height: 30,
                    width: 40
                }
            },
            defaultFormat: {
                fillColour: "#fff",
                strokeColour: "#000",
                strokeWidth: 2
            },
            labelPosition: {
                x: 0,
                y: -20
            }
        }
          , he = {
            path: "M -20 0 A 20 20 0 0 0 20 0 A 20 20 0 0 0 -20 0 M -24 3 C -24 13 -13 24 -3 24 L -3 30 C -17 30 -30 17 -30 3 L -24 3 M -24 -3 C -24 -13 -13 -24 -3 -24 L -3 -30 C -17 -30 -30 -17 -30 -3 L -24 -3 M 3 -24 C 13 -24 24 -13 24 -3 L 30 -3 C 30 -17 17 -30 3 -30 L 3 -24 M 24 3 C 24 13 13 24 3 24 L 3 30 C 17 30 30 17 30 3 L 24 3",
            dimensions: {
                x: -30,
                y: -30,
                size: {
                    height: 60,
                    width: 60
                }
            },
            defaultFormat: {
                fillColour: "#333",
                strokeColour: "#fff",
                strokeWidth: 1
            },
            labelPosition: {
                x: 0,
                y: 0
            }
        }
          , me = {
            path: "M15 26-15 26-30 0-15-26 15-26 30 0Z",
            dimensions: {
                x: -30,
                y: -26,
                size: {
                    height: 52,
                    width: 60
                }
            },
            defaultFormat: {
                fillColour: "transparent",
                strokeColour: "#000",
                strokeWidth: 2
            },
            labelPosition: {
                x: 0,
                y: 0
            }
        };
        function ge(e, t) {
            const i = xe(e)
              , a = function(e, t) {
                let i = void 0 !== t?.height
                  , a = !1 === i && void 0 !== t?.width;
                !1 === i && !1 === a && e.dimensions.size.height >= e.dimensions.size.width ? i = !0 : a = !0;
                const n = !0 === i ? e.dimensions.size.height : e.dimensions.size.width;
                return ((!0 === i ? t?.height ?? e.dimensions.size.height : t?.width ?? e.dimensions.size.width) - e.defaultFormat.strokeWidth) / n
            }(i, t);
            return {
                path: i.path,
                fillOpacity: 1,
                fillColor: t?.colour ?? i.defaultFormat.fillColour,
                strokeColor: i.defaultFormat.strokeColour,
                strokeWeight: i.defaultFormat.strokeWidth,
                scale: a,
                labelOrigin: new google.maps.Point(i.labelPosition.x,i.labelPosition.y)
            }
        }
        function ye(e, t, i) {
            const a = xe(e)
              , n = document.createElementNS("http://www.w3.org/2000/svg", "svg")
              , o = document.createElementNS("http://www.w3.org/2000/svg", "path");
            if (n.setAttribute("viewBox", `${a.dimensions.x} ${a.dimensions.y} ${a.dimensions.size.width} ${a.dimensions.size.height}`),
            n.setAttribute("height", `${t.height}px`),
            n.setAttribute("width", `${t.width}px`),
            n.setAttribute("version", "1.1"),
            o.setAttribute("d", a.path),
            o.setAttribute("stroke", i?.lineColour ?? a.defaultFormat.strokeColour),
            o.setAttribute("stroke-width", a.defaultFormat.strokeWidth.toString()),
            o.setAttribute("fill", i?.fillColour ?? a.defaultFormat.fillColour),
            n.appendChild(o),
            void 0 !== i?.text) {
                const e = document.createElementNS("http://www.w3.org/2000/svg", "text");
                e.setAttribute("x", a.labelPosition.x.toString()),
                e.setAttribute("y", a.labelPosition.y.toString()),
                e.setAttribute("text-anchor", "middle"),
                e.setAttribute("dominant-baseline", "middle"),
                e.style.fill = i?.textColour ?? "#000",
                e.style.fontWeight = "700",
                e.style.fontSize = "12px",
                e.textContent = i.text,
                n.appendChild(e)
            }
            return n
        }
        function xe(e) {
            switch (e) {
            case 0:
                return fe;
            case 2:
                return he;
            case 1:
                return me;
            default:
                throw new Error("Unexpected Icon Type.")
            }
        }
        class be extends ue {
            constructor(e, t) {
                super(e, t),
                this._colour = void 0 === t?.overrideColour ? U.Transparent : U.fromHex(t?.overrideColour, t?.overrideOpacity)
            }
            getIconAsSVG() {
                return ye(1, {
                    height: 25,
                    width: 25
                }, {
                    fillColour: this.colour.asRgba(),
                    lineColour: this.layer.formatting.colour().asHex()
                })
            }
            get opacity() {
                return this.colour.a
            }
            get polygonOptions() {
                return {
                    fillColor: this.colour.asRgb(),
                    fillOpacity: this.opacity
                }
            }
        }
        class ve {
            _template;
            constructor(e) {
                this._template = document.createElement("div"),
                this._template.style.textShadow = Q(`0px 0px 8px ${e.labelBackColour.asHex()}`, 5),
                this._template.style.fontSize = `${e.labelFontSize}px`,
                this._template.style.color = e.labelColour.asHex(),
                this._template.style.fontWeight = "900",
                this._template.style.textAlign = "center",
                this._template.style.width = "150px",
                this._template.style.whiteSpace = "nowrap",
                this._template.style.lineHeight = "16px"
            }
            getLabelTemplate() {
                return this._template.cloneNode(!1)
            }
        }
        class we {
        }
        class ke extends we {
            _lineWidth;
            _lineColour;
            _lineAltColour;
            _labelColour;
            _labelBackColour;
            _labelFontSize;
            _labelTemplate;
            constructor(e) {
                super(),
                this._lineWidth = e?.lineWidth ?? ke.DefaultLineWidth,
                this._lineColour = U.fromHex(e?.lineColour ?? ke.DefaultLineColour),
                this._lineAltColour = U.fromHex(e?.lineAltColour ?? ke.DefaultLineAltColour),
                this._labelColour = U.fromHex(e?.labelColour ?? ke.DefaultLabelColour),
                this._labelBackColour = U.fromHex(e?.labelBackColour ?? ke.DefaultLabelBackColour),
                this._labelFontSize = e?.labelFontSize ?? ke.DefaultFontSize,
                this._labelTemplate = new ve(this)
            }
            get labelBackColour() {
                return this._labelBackColour
            }
            get labelColour() {
                return this._labelColour
            }
            get labelFontSize() {
                return this._labelFontSize
            }
            get lineAltColour() {
                return this._lineAltColour
            }
            get lineColour() {
                return this._lineColour
            }
            get lineWidth() {
                return this._lineWidth
            }
            colour() {
                switch (yo().getMapTypeId()) {
                case google.maps.MapTypeId.HYBRID:
                case google.maps.MapTypeId.SATELLITE:
                    return this._lineAltColour;
                default:
                    return this._lineColour
                }
            }
            getLabelTemplate() {
                return this._labelTemplate.getLabelTemplate()
            }
            static DefaultLineWidth = 3;
            static DefaultLineColour = "#000000";
            static DefaultLineAltColour = "#FFFFFF";
            static DefaultLabelColour = "#000000";
            static DefaultLabelBackColour = "#FFFFFF";
            static DefaultFontSize = 14
        }
        class Ce {
            _classification;
            _id;
            _layer;
            _isFilteredOff = !1;
            constructor(e, t, i) {
                this._id = e,
                this._layer = t,
                this._classification = i
            }
            get classification() {
                return this._classification
            }
            get id() {
                return this._id
            }
            get isFilteredOff() {
                return this._isFilteredOff
            }
            get layer() {
                return this._layer
            }
            equals(e) {
                return this._id === e.id && this._layer.equals(e.layer)
            }
            setClassification(e) {
                this._classification = e
            }
            setFiltered(e) {
                this._isFilteredOff = !e
            }
        }
        const _e = "<td>"
          , Te = "<th>";
        class Le {
            static TableTag = "<table>";
            static TableHeadTag = "<thead>";
            static TableBodyTag = "<tbody>";
            static TableFootTag = "<tfoot>";
            static TableRowTag = "<tr>";
            _rows = [];
            _table;
            _head;
            _body;
            _foot;
            _columnCount;
            constructor(e) {
                this._table = $(Le.TableTag),
                this._head = $(Le.TableHeadTag).appendTo(this._table),
                this._body = $(Le.TableBodyTag).appendTo(this._table),
                this._foot = $(Le.TableFootTag).appendTo(this._table),
                this._columnCount = e
            }
            addClasses(...e) {
                e.forEach((e => this._table.addClass(e)))
            }
            addData(...e) {
                const t = this.buildRow(_e, ...e);
                return t.appendTo(this._body),
                t
            }
            addDataSummaryRow(...e) {
                const t = this.addData(...e);
                return t.addClass("summary-row"),
                t
            }
            addHeaders(...e) {
                const t = this.buildRow(Te, ...e);
                return t.appendTo(this._head),
                t
            }
            allowOverflow() {
                this.addClasses("overflow-wrap")
            }
            buildRow(e, ...t) {
                if (e !== Te && e !== _e)
                    throw new Error(`(${e}) is an invalid element type for a table cell.`);
                if (!1 === this.checkColumnCount(...t))
                    throw new Error(`${t.length} columns provided but table specifies ${this._columnCount} columns.`);
                const i = $(Le.TableRowTag);
                return t.forEach((t => {
                    const a = $(e).appendTo(i);
                    "string" == typeof t ? a.text(t) : (t.text ? a.text(t.text) : t.html ? a.html(t.html) : t.jquery && t.jquery.appendTo(a),
                    t.css && a.css(t.css),
                    t.classes && a.addClass(t.classes),
                    t.attr && a.attr(t.attr))
                }
                )),
                i
            }
            checkColumnCount(...e) {
                let t = 0;
                return e.forEach((e => {
                    if ("string" == typeof e)
                        t++;
                    else {
                        let i = e.attr?.colspan ?? void 0;
                        void 0 === i ? t++ : t += parseFloat(i)
                    }
                }
                )),
                t === this._columnCount
            }
            get table() {
                return this._table
            }
            setAlign(e) {
                this._table.removeClass("all-left first-left"),
                e && this._table.addClass(e)
            }
        }
        var Ee;
        function Ie(e, t) {
            return ee().download(e, t)
        }
        function Ae(e, t) {
            return ee().get(e, t)
        }
        function $e(e, t) {
            return ee().post(e, t)
        }
        function Ne(e) {
            return ee().postNoResponse("TrackUserAction", e)
        }
        !function(e) {
            e[e.HELP_CENTRE = 2] = "HELP_CENTRE",
            e[e.AREA_LAYER_ON = 104] = "AREA_LAYER_ON",
            e[e.AREA_LAYER_OFF = 105] = "AREA_LAYER_OFF",
            e[e.LABELS_ON = 106] = "LABELS_ON",
            e[e.LABELS_OFF = 107] = "LABELS_OFF",
            e[e.SEARCH_PIN_TO_MAP = 201] = "SEARCH_PIN_TO_MAP"
        }(Ee || (Ee = {}));
        const Se = 150;
        async function Oe(e) {
            await Promise.resolve($(go().getMapContainer()).animate({
                left: `${e}px`
            }, Se).promise())
        }
        async function Re(e) {
            await Promise.resolve($(go().getMapContainer()).animate({
                right: `${e}px`
            }, Se).promise())
        }
        var Me;
        !function(e) {
            e[e.Left = 0] = "Left",
            e[e.Right = 1] = "Right"
        }(Me || (Me = {}));
        let De = "#left-pane"
          , Fe = "#left-pane-ext"
          , Be = "#right-pane"
          , ze = "#right-pane-ext";
        async function Pe(e) {
            let t = "";
            if (e === Me.Left)
                t = De;
            else {
                if (e !== Me.Right)
                    return Promise.reject("Unknown pane on clear.");
                t = Be
            }
            await Promise.resolve($(t).find("div.side-pane-content").hide().promise())
        }
        async function Ue(e) {
            let t = "";
            if (e === Me.Left)
                t = Fe;
            else {
                if (e !== Me.Right)
                    return Promise.reject("Unknown extension pane on clear.");
                t = ze
            }
            await Promise.resolve($(t).find("div.side-pane-ext-content").hide().promise())
        }
        async function We(e) {
            let t = ""
              , i = "";
            if (e === Me.Left)
                t = De,
                i = "left";
            else {
                if (e !== Me.Right)
                    return Promise.reject("Unknown pane on close.");
                t = Be,
                i = "right"
            }
            await Promise.resolve($(t).hide("slide", {
                direction: i
            }, Se).promise()),
            Pe(e)
        }
        async function He(e) {
            let t = ""
              , i = "";
            if (e === Me.Left)
                t = Fe,
                i = "left";
            else {
                if (e !== Me.Right)
                    return Promise.reject("Unknown extension pane on close.");
                t = ze,
                i = "right"
            }
            await Promise.resolve($(t).hide("slide", {
                direction: i
            }, Se).promise()),
            Ue(e)
        }
        async function je(e) {
            let t = ""
              , i = "";
            if (e === Me.Left)
                t = De,
                i = "left";
            else {
                if (e !== Me.Right)
                    return Promise.reject("Unknown pane on display.");
                t = Be,
                i = "right"
            }
            await Promise.resolve($(t).show("slide", {
                direction: i
            }, Se).promise())
        }
        async function Ve(e) {
            let t = ""
              , i = "";
            if (e === Me.Left)
                t = Fe,
                i = "left";
            else {
                if (e !== Me.Right)
                    return Promise.reject("Unknown extension pane on display.");
                t = ze,
                i = "right"
            }
            await Promise.resolve($(t).show("slide", {
                direction: i
            }, Se).promise())
        }
        async function Ge() {
            await He(Me.Left),
            await Promise.all([Oe(0), We(Me.Left)])
        }
        async function Xe() {
            await He(Me.Right),
            await Promise.all([Re(0), We(Me.Right)])
        }
        async function qe() {
            await He(Me.Right)
        }
        async function Ye(e) {
            await Pe(Me.Left),
            await (async () => Promise.resolve($(e).showFlex().promise()))(),
            await Promise.all([Oe(350), je(Me.Left)])
        }
        async function Ke(e) {
            await Ue(Me.Left),
            await (async () => Promise.resolve($(e).showFlex().promise()))(),
            await Ve(Me.Left)
        }
        async function Ze(e) {
            await Pe(Me.Right),
            await (async () => Promise.resolve($(e).showFlex().promise()))(),
            await Promise.all([Re(350), je(Me.Right)])
        }
        async function Qe(e) {
            await Ue(Me.Right),
            await (async () => Promise.resolve($(e).showFlex().promise()))(),
            await Ve(Me.Right)
        }
        class Je {
            _classifications;
            _address;
            _demographics;
            _customFields;
            constructor(e) {
                this._classifications = e.classifications,
                this._address = e.address,
                this._demographics = e.demographics,
                this._customFields = e.customFields
            }
            areClassificationsSuppressed() {
                return this._classifications
            }
            areAddressSuppressed() {
                return this._address
            }
            areCustomFieldsSuppressed() {
                return this._customFields
            }
            areDemographicsSuppressed() {
                return this._demographics
            }
        }
        var et;
        let tt;
        !function(e) {
            e.AREA_EDITOR = "Area Editor",
            e.LOCATION_EDITOR = "Location Editor",
            e.NOTIFICATIONS = "Notifications",
            e.INFO_WINDOW = "Information Window",
            e.TERRITORY_CHECKS = "Territory Checks"
        }(et || (et = {}));
        let it = new Map;
        function at() {
            tt = void 0
        }
        function nt(e, t) {
            !1 === it.has(e) && it.set(e, t)
        }
        async function ot(e) {
            if (!1 === it.has(e))
                throw new Error(`ModuleManager: Module not registered (${e}).`);
            if (void 0 === tt)
                tt = e;
            else {
                let t = it.get(tt);
                if (!1 === t.allows.includes(e))
                    throw new Error(`The ${e} cannot be opened while the ${tt} is active.`);
                tt !== e && (await t.closeFunction(),
                tt = e)
            }
        }
        class rt {
            x;
            y;
            constructor(e, t) {
                this.x = e,
                this.y = t
            }
        }
        class st extends rt {
            constructor(e, t) {
                if (e < -90 || e > 90)
                    throw new Error(`${e} is an invalid latitude value.`);
                if (t < -180 || t > 180)
                    throw new Error(`${t} is an invalid longitude value.`);
                super(t, e)
            }
            get lat() {
                return this.y
            }
            get lon() {
                return this.x
            }
            asGoogleMapsLatLng() {
                return new google.maps.LatLng(this.y,this.x)
            }
            static clone(e) {
                return new st(e.lat,e.lon)
            }
        }
        class lt extends Ce {
            _name;
            _position;
            constructor(e, t, i, a, n, o) {
                super(e, i, a),
                this._name = t,
                this._position = new st(o,n)
            }
            centerOnMap() {
                yo().panTo(this.latLng.asGoogleMapsLatLng())
            }
            get latLng() {
                return this._position
            }
            set latLng(e) {
                e instanceof google.maps.LatLng ? this._position = new st(e.lat(),e.lng()) : this._position = e
            }
            get name() {
                return this._name
            }
        }
        var ct, dt;
        !function(e) {
            e[e.VIEW_CLASSIFICATIONS = 0] = "VIEW_CLASSIFICATIONS",
            e[e.VIEW_ADDRESS = 1] = "VIEW_ADDRESS",
            e[e.VIEW_DEMOGRAPHICS = 2] = "VIEW_DEMOGRAPHICS",
            e[e.VIEW_CUSTOMFIELDS = 3] = "VIEW_CUSTOMFIELDS",
            e[e.EDIT_DATA = 10] = "EDIT_DATA",
            e[e.EDIT_LOCATIONS = 11] = "EDIT_LOCATIONS",
            e[e.EDIT_BOUNDARIES = 12] = "EDIT_BOUNDARIES",
            e[e.CAN_REPORT = 20] = "CAN_REPORT",
            e[e.CAN_EXPORT = 21] = "CAN_EXPORT"
        }(ct || (ct = {}));
        class pt {
            viewClassifications;
            viewAddress;
            viewDemographics;
            viewCustomFields;
            editData;
            editLocations;
            editBoundaries;
            canReport;
            canExport;
            currentUserIsAdmin;
            constructor(e) {
                this.viewClassifications = e.viewClassifications,
                this.viewAddress = e.viewAddress,
                this.viewDemographics = e.viewDemographics,
                this.viewCustomFields = e.viewCustomFields,
                this.editData = e.editData,
                this.editLocations = e.editLocations,
                this.editBoundaries = e.editBoundaries,
                this.canReport = e.canReport,
                this.canExport = e.canExport,
                this.currentUserIsAdmin = e.isOrganisationAdmin
            }
        }
        function ut(e, t, i=!1) {
            const a = $("<div>").addClass(`button-colour ${e}`).text(t);
            return !0 === i && a.addClass("disabled"),
            a
        }
        function ft(e) {
            let t = $("<div>").addClass("button-group");
            return e && $("<h4>").text(e).appendTo(t),
            t
        }
        function ht(e) {
            return !0 === e.hasClass("button-group") && e.children(".button-colour").length > 0
        }
        !function(e) {
            e.BLUE = "blue",
            e.GREEN = "green",
            e.RED = "red"
        }(dt || (dt = {}));
        class mt {
            static instance;
            constructor() {}
            static get Instance() {
                return this.instance || (this.instance = new mt),
                this.instance
            }
            _legend = "#legend";
            _clearLegend() {
                $(this._legend).find("div.list-item-group").hide().find("div.list-item").remove()
            }
            _setLegendPaneSubHeader(e) {
                $(this._legend).children("header").find("h2").text(`Showing ${e} displayed layer${1 === e ? "" : "s"}`)
            }
            close() {
                return Ge()
            }
            refreshData() {
                this._clearLegend();
                let e = Bn();
                e.sort(( (e, t) => t.zIndex - e.zIndex)).forEach((e => {
                    let t = $(this._legend).find(`div.body > div.list-item-group[data-id=${e.countryId}]`);
                    (function(e) {
                        let t = $("<div>").addClass("list-item").attr("data-id", e.textId)
                          , i = $("<header>").appendTo(t);
                        $("<h6>").css({
                            color: e.organisation.colour.asRgb()
                        }).text(e.organisation.name).appendTo(i),
                        $("<h5>").text(e.name).appendTo(i);
                        const a = $("<footer>").appendTo(t);
                        return e.classifications.forEach((e => {
                            const t = $("<div>").appendTo(a);
                            t[0].appendChild(e.getIconAsSVG()),
                            $("<p>").text(e.name).appendTo(t)
                        }
                        )),
                        t
                    }
                    )(e).appendTo(t),
                    t.show()
                }
                )),
                this._setLegendPaneSubHeader(e.length)
            }
            async show() {
                this.refreshData(),
                await Ye(this._legend),
                $(this._legend).find("div.body").scrollTop(0)
            }
        }
        const gt = "/images/search-marker.png"
          , yt = "#searchPane"
          , xt = "#search-results-google"
          , bt = "#search-results-database"
          , vt = "#search-results-pinned"
          , wt = "#search-clear-pinned";
        let kt, Ct, _t = [];
        function Tt() {
            It().forEach((e => e.hideMarker())),
            _t = At(),
            $(`${xt},${bt}`).children("div.list-item").remove()
        }
        async function Lt() {
            await Ge(),
            Tt(),
            Ct = void 0
        }
        async function Et(e) {
            if (e.length < 3)
                pe("A search requires at least 3 characters.");
            else {
                e.length > 50 && pe("Search phrase more than 50 characters. Showing Google results only."),
                Tt();
                try {
                    let i = async function(e) {
                        if (void 0 === kt)
                            throw new Error("The Google Maps Geocoder is unavailable.");
                        return new Promise(( (t, i) => {
                            kt.geocode({
                                address: e
                            }, ( (a, n) => {
                                if (n == google.maps.GeocoderStatus.OK) {
                                    let i = 5
                                      , n = 0;
                                    for (; n < i && n < a.length; ) {
                                        let t = a[n]
                                          , i = {
                                            text: t.formatted_address,
                                            x: t.geometry.location.lng(),
                                            y: t.geometry.location.lat(),
                                            viewBounds: t.geometry.viewport
                                        }
                                          , o = Rt.createGoogleResult(i, e);
                                        _t.push(o),
                                        o.setCreateButton(Ct),
                                        n++
                                    }
                                    t(a.length)
                                } else
                                    n == google.maps.GeocoderStatus.ZERO_RESULTS ? t(0) : i("The Google Geocoder produced an error.")
                            }
                            ))
                        }
                        ))
                    }(e)
                      , a = e.length > 50 ? 0 : async function(e) {
                        if (void 0 !== Ct)
                            return Promise.resolve(0);
                        let t = {
                            searchPhrase: e
                        };
                        var i, a;
                        return (a = await (i = t,
                        Ae("GetSearchResults", i))).forEach((t => {
                            let i = Rt.createDatabaseResult(t, e);
                            i.setCreateButton(Ct),
                            _t.push(i)
                        }
                        )),
                        a.length
                    }(e);
                    0 === await i + await a && (t = "There were no results for your search term.",
                    se.Notify.info(ce(t) ? t.message : t)),
                    $t()
                } catch (e) {
                    se.Notify.failure(e)
                }
                var t
            }
        }
        function It() {
            return _t.filter((e => !1 === e.isPinned))
        }
        function At() {
            return _t.filter((e => !0 === e.isPinned))
        }
        function $t() {
            let e = $(`${yt} > header > h2`)
              , t = It().length;
            t < 1 ? e.text("") : e.text(`Displaying ${t} results`)
        }
        async function Nt(e) {
            if (void 0 !== e && e.layerType !== ae.LOCATIONS && e.layerType !== ae.RADIAL)
                throw new Error("Unable to load search. Inappropriate target layer.");
            Ct = e,
            Tt(),
            $t(),
            Ot(),
            _t.forEach((e => {
                e.setCreateButton(Ct)
            }
            )),
            await Ye(yt),
            $("#search-phrase").focus()
        }
        function St() {
            _t = _t.filter((e => !1 === e.isRemoved)),
            Ot(),
            $t()
        }
        function Ot() {
            let e = $(wt)
              , t = At().length;
            t > 0 ? (e.text(`Clear all pinned results (${t})`).show(),
            $(vt).show()) : (e.text("").hide(),
            $(vt).hide())
        }
        class Rt {
            type;
            marker;
            displayText;
            layer;
            bounds;
            _pinned = !1;
            _markedForRemove = !1;
            _uiInstance = $();
            constructor(e, t, i, a, n, o, r) {
                this.type = e,
                this.marker = new google.maps.Marker({
                    position: new google.maps.LatLng(i,t),
                    icon: {
                        url: gt,
                        scaledSize: new google.maps.Size(36,36)
                    },
                    map: yo(),
                    draggable: !1,
                    zIndex: uo,
                    visible: !1
                }),
                this.displayText = a,
                this.bounds = n,
                1 === this.type && (this.layer = r),
                this.createUiInstance(o)
            }
            createUiInstance(e) {
                let t = $("<div>").addClass("list-item").on({
                    mouseenter: () => {
                        this.showMarker()
                    }
                    ,
                    mouseleave: () => {
                        this.hideMarker()
                    }
                })
                  , i = $("<header>").appendTo(t)
                  , a = $("<h6>").appendTo(i);
                switch (this.type) {
                case 1:
                    this.layer && a.text(this.layer.name);
                    break;
                case 0:
                    a.text("Google result")
                }
                $("<h5>").text(this.displayText).wrapTextInBold({
                    tag: "strong",
                    words: [e]
                }).appendTo(i);
                let n = $("<footer>").appendTo(t);
                switch ($("<div>").addClass("button-colour btn-small search-result-center white").addSmallTooltip("#search-center").appendTo(n).on("click", ( () => {
                    this.panTo()
                }
                )),
                $("<div>").addClass("button-colour btn-small search-result-zoom white").addSmallTooltip("#search-zoom").appendTo(n).on("click", ( () => {
                    this.zoomTo()
                }
                )),
                $("<div>").addClass("button-colour btn-small search-result-pin white").addSmallTooltip("#search-pin").appendTo(n).on("click", ( () => {
                    t.insertAfter($("#search-results-pinned > h2")),
                    this._pinned = !0,
                    St()
                }
                )),
                $("<div>").addClass("button-colour btn-small search-result-remove red").addSmallTooltip("#search-remove").appendTo(n).on("click", ( () => {
                    this.remove(),
                    t.remove(),
                    St()
                }
                )),
                this.type) {
                case 1:
                    t.appendTo($(bt));
                    break;
                case 0:
                    t.appendTo($(xt))
                }
                return this._uiInstance = t,
                t
            }
            hideMarker() {
                this.marker.setIcon({
                    url: gt,
                    scaledSize: new google.maps.Size(36,36)
                }),
                !0 !== this._pinned && this.marker.setVisible(!1)
            }
            get isPinned() {
                return this._pinned
            }
            get isRemoved() {
                return this._markedForRemove
            }
            panTo() {
                yo().panTo(this.marker.getPosition())
            }
            remove() {
                this._markedForRemove = !0,
                this.marker.setMap(null)
            }
            setCreateButton(e) {
                let t = this._uiInstance.children("footer");
                if (t.children("div.search-result-create").off().remove(),
                !e)
                    return;
                if (e.layerType === ae.LOCATIONS && 1 === this.type && void 0 !== this.layer)
                    return;
                if (e.layerType === ae.RADIAL && 1 === this.type && this.layer instanceof Sa)
                    return;
                let i = "";
                e instanceof Ki ? i = "location" : e.layerType === ae.RADIAL && (i = "radial area"),
                $("<div>").addClass("button-colour btn-small search-result-create green").on("click", (async () => {
                    let t = {
                        location: this.marker.getPosition(),
                        name: this.displayText
                    };
                    e instanceof Ki ? await async function(e, t) {
                        ti();
                        try {
                            await ot(et.LOCATION_EDITOR),
                            Qt(e.location),
                            ai(t),
                            qt = e.name.substring(0, 100),
                            Jt(),
                            oi()
                        } catch (e) {
                            pe(e)
                        }
                    }(t, e) : e instanceof Sa && e.layerType === ae.RADIAL && await ga(e, {
                        x: this.marker.getPosition().lng(),
                        y: this.marker.getPosition().lat(),
                        name: this.displayText
                    }),
                    await Ft(),
                    this.hideMarker()
                }
                )).appendTo(t).addSmallTooltipWithContent(`<div><h3>Create new ${i}</h3><p>Use this search result to create a new ${i} in the ${e.name} layer.</p></div>`, !0)
            }
            showMarker() {
                this.marker.setIcon({
                    url: gt,
                    scaledSize: new google.maps.Size(48,48)
                }),
                this.marker.setVisible(!0)
            }
            zoomTo() {
                this.layer instanceof Sa ? yo().fitBounds(this.bounds) : (this.panTo(),
                yo().getZoom() < 16 && yo().setZoom(16))
            }
            static createDatabaseResult(e, t) {
                let i;
                null !== e.layerId && null !== e.organisationId && (i = zn(e.layerId, e.organisationId) || void 0);
                let a = new google.maps.LatLngBounds;
                return e.bounds.forEach((e => a.extend(new google.maps.LatLng(e.y,e.x)))),
                new Rt(1,e.x,e.y,X(e.name, e.code),a,t,i)
            }
            static createGoogleResult(e, t) {
                return new Rt(0,e.x,e.y,e.text,e.viewBounds,t)
            }
        }
        let Mt = "#top-bar";
        function Dt() {
            $(Mt).find("div.left > span.top-bar-item").removeClass("toggled")
        }
        function Ft() {
            return Dt(),
            $("#mnu-layer-control").addClass("toggled"),
            qn()
        }
        function Bt(e) {
            Nt(e),
            Dt(),
            $("#mnu-search").addClass("toggled")
        }
        function zt(e) {
            let t = $(Mt).find("div.left > span.top-bar-item");
            !0 === e ? t.show() : t.hide()
        }
        function Pt(e) {
            let t = $(Mt).find("div.right > span.top-bar-item");
            !0 === e ? t.show() : t.hide()
        }
        let Ut, Wt, Ht, jt, Vt = "#locationeditor", Gt = "#locationeditor-save", Xt = "#locationeditor-cancel", qt = "", Yt = !1, Kt = !1;
        async function Zt() {
            let e = Ut;
            await Xe(),
            Ut = void 0,
            Wt = void 0,
            Ht && Ht.setMap(null),
            Ht = void 0,
            qt = "",
            jt = void 0,
            Yt = !1,
            at(),
            Pt(!0),
            e && Ni(e)
        }
        function Qt(e) {
            void 0 === Ht && (Ht = new google.maps.Marker({
                map: yo(),
                position: e,
                zIndex: 7e3,
                visible: !0,
                draggable: !0,
                title: "Drag me to fine-tune the position"
            }),
            yo().panTo(e),
            yo().setZoom(16))
        }
        function Jt() {
            let e = $(Vt).children("div.body");
            e.empty(),
            void 0 === Ut && void 0 === Ut && void 0 !== jt && ($("<h5>").text("Give the new location a name").appendTo(e),
            $("<input>").attr({
                type: "text",
                maxlength: "100",
                pattern: ".*\\S+.*"
            }).prop({
                required: !0
            }).val(qt).on("input", (e => {
                let t = $(e.target);
                qt = t.val(),
                !0 === t.is(":invalid") ? $(Gt).hide() : $(Gt).show()
            }
            )).appendTo(e),
            $("<h5>").text("Choose a classification").appendTo(e),
            jt.classifications.forEach((t => {
                (t => {
                    let i = {
                        "background-color": "transparent",
                        color: "#000",
                        "font-weight": "normal"
                    }
                      , a = {
                        "background-color": t.colour.asRgb(),
                        color: t.colour.bestContrastingFontColour().asRgb(),
                        "font-weight": "700"
                    }
                      , n = $("<div>").addClass("classification");
                    n[0].appendChild(ye(0, {
                        height: 30,
                        width: 30
                    }, {
                        fillColour: t.colour.asRgb(),
                        text: t.iconText,
                        textColour: t.iconTextColour
                    }));
                    let o = $("<p>").text(t.name).appendTo(n);
                    return n.on({
                        mouseenter: () => {
                            o.css(a)
                        }
                        ,
                        mouseleave: () => {
                            Wt.id !== t.id && o.css(i)
                        }
                        ,
                        click: () => {
                            Wt.id !== t.id && (e.find("div.classification > p").css(i),
                            o.css(a),
                            ni(t))
                        }
                    }),
                    t.id === Wt.id && o.css(a),
                    n
                }
                )(t).appendTo(e)
            }
            ))),
            ( () => {
                if (void 0 === jt)
                    throw new Error("LocationEditor: Stage2: No target layer set.");
                let e = $(Vt).children("header");
                void 0 === Ut ? e.children("h1").text("Create new location") : e.children("h1").text(`Edit ${qt}`),
                e.children("h2").text(jt.name)
            }
            )(),
            void 0 !== Ut && "" === qt ? $(Gt).hide() : $(Gt).show()
        }
        function ei() {
            if (void 0 === jt)
                throw new Error("LocationEditor: No target layer set.");
            return jt
        }
        function ti() {
            !0 !== Kt && (nt(et.LOCATION_EDITOR, {
                allows: [],
                closeFunction: Zt
            }),
            $(Gt).on("click", ( () => {
                !async function() {
                    if (void 0 === Wt)
                        throw new Error("LocationEditor: Save: No classification set.");
                    if (void 0 === Ht)
                        throw new Error("LocationEditor: Save: No marker set.");
                    const e = Ht.getPosition();
                    let t = async t => {
                        if (await Un(),
                        void 0 !== Ut && (Ut.latLng = e),
                        void 0 !== t) {
                            const e = ei().getRecord(t);
                            e instanceof lt && (Ut = e)
                        }
                        await Zt(),
                        de()
                    }
                    ;
                    const i = {
                        layerId: ei().id,
                        organisationId: ei().organisation.id,
                        latitudeY: e.lat(),
                        longitudeX: e.lng()
                    };
                    if (void 0 === Ut) {
                        i.classificationId = Wt.id,
                        i.name = qt;
                        let e = await Ae("CreateLocation", i);
                        await t(e.mapItemId)
                    } else
                        i.recordId = Ut.id,
                        await Ae("UpdateLocation", i),
                        await t()
                }()
            }
            )),
            $(Xt).on("click", ( () => Zt())),
            Kt = !0)
        }
        function ii() {
            return Yt
        }
        function ai(e) {
            jt = e;
            let t = jt.getClassification(null);
            if (null === t)
                throw new Error("LocationEditor: Target Layer has no classifications.");
            ni(t)
        }
        function ni(e) {
            if (void 0 !== Ht) {
                let t = 1.25;
                Ht.setIcon(ge(0, {
                    height: 30 * t,
                    colour: e.colour.asRgb()
                })),
                void 0 !== e.iconText ? Ht.setLabel({
                    text: e.iconText,
                    fontSize: 10 * t + "px",
                    fontWeight: "700",
                    color: e.iconTextColour
                }) : Ht.setLabel(null)
            }
            Wt = e
        }
        function oi() {
            return ti(),
            Pt(!1),
            Ze(Vt)
        }
        class ri {
            _currentValue;
            _startValue;
            constructor(e) {
                this._startValue = e,
                this._currentValue = this.getStartValue()
            }
            changeCount() {
                let e = 0;
                const t = (i, a) => {
                    for (const [n,o] of Object.entries(i))
                        void 0 === o ? void 0 !== a[n] && e++ : null === o ? null !== a[n] && e++ : Array.isArray(o) ? o.forEach(( (e, i) => {
                            t(e, a[n][i])
                        }
                        )) : "object" == typeof o ? t(o, a[n]) : a[n] !== o && e++
                }
                ;
                return t(this._startValue, this._currentValue),
                e
            }
            hasChanges() {
                return JSON.stringify(this._startValue) !== JSON.stringify(this._currentValue)
            }
            get currentValue() {
                return this._currentValue
            }
            getStartValue() {
                const e = Array.isArray(this._startValue) ? [] : {};
                return $.extend(!0, e, this._startValue)
            }
        }
        let si = []
          , li = 0;
        function ci(e) {
            return si.filter((t => t.selected === e))
        }
        function di(e) {
            let t = $("div.layer-data-item:not(.selected)");
            !0 === e ? t.removeClass("disabled") : t.addClass("disabled")
        }
        async function pi(e, t) {
            await async function(e) {
                si = [],
                li = si.length,
                (await Ae("GetAvailableColumnsForFiltering", e.identifier)).forEach(( (e, t) => si.push(new ui(e,t))))
            }(e.layer),
            void 0 !== e.selected && e.selected.forEach(( (e, t) => {
                let i = si.findIndex(( ({type: t, id: i}) => t === e.type && i === e.id));
                -1 !== i && si.splice(i, 1)
            }
            )),
            li = (e.maxSelected || si.length) - (e.selected || []).length;
            let i = function() {
                let e = b()
                  , t = si.filter((e => e.type >= 0 && e.type < 20))
                  , i = si.filter((e => 20 == e.type))
                  , a = si.filter((e => 30 == e.type))
                  , n = si.filter((e => e.type >= 41 && e.type < 50))
                  , o = si.filter((e => e.type >= 50 && e.type < 60))
                  , r = si.filter((e => e.type >= 60 && e.type < 70))
                  , s = si.filter((e => 70 == e.type))
                  , l = (t, i) => {
                    if (0 === i.length)
                        return;
                    let a = v().appendTo(e);
                    w(t).appendTo(a);
                    let n = $("<div>").addClass("layer-data-grid").appendTo(a);
                    i.forEach((e => function(e) {
                        let t = $("<div>").addClass("layer-data-item");
                        return $("<p>").text(e.title).appendTo(t),
                        t.on("click", ( () => {
                            !0 === e.selected ? (t.removeClass("selected"),
                            e.selected = !1,
                            di(!0)) : ci(!0).length < li ? (t.addClass("selected"),
                            e.selected = !0,
                            ci(!0).length === li && di(!1)) : C("Limit reached!", `You've reached the maximum of ${li} options.`)
                        }
                        )),
                        t
                    }(e).appendTo(n)))
                }
                ;
                return l("Record", t),
                l("Demographics", i),
                l("Custom Fields", a),
                l("Address", n),
                l("Dependent Layers", o),
                l("Find Your Nearest", r),
                l("Sharing", s),
                e
            }();
            x(g.LARGE, "Select data to add", `You may select up to ${li} item${li > 1 ? "s" : ""}`, i, {
                text: "OK",
                okFunction: () => t((e.selected || []).concat(ci(!0)))
            })
        }
        class ui {
            _title;
            _type;
            _id;
            _order;
            _filter = null;
            _removeable = !0;
            _isExportable;
            _subType = void 0;
            _isSelected = !1;
            userPrefix = "";
            constructor(e, t) {
                switch (this._title = e.name,
                this._type = e.colType,
                this._id = e.id,
                this._order = t,
                this._isExportable = e.isExportable,
                e.colType) {
                case 0:
                case 1:
                case 2:
                    this._removeable = !1;
                    break;
                case 30:
                    this._subType = e.type
                }
            }
            asServerLabel() {
                return {
                    type: this._type,
                    id: this._id,
                    order: this._order
                }
            }
            asServerFilter() {
                return {
                    type: this._type,
                    id: this._id,
                    order: this._order,
                    filter: null === this._filter ? null : this._filter.asServerObject()
                }
            }
            asServerObject() {
                return {
                    type: this._type,
                    id: this._id,
                    order: this._order,
                    filter: null === this._filter ? null : this._filter.asServerObject()
                }
            }
            get filter() {
                return this._filter
            }
            set filter(e) {
                this._filter = e
            }
            get id() {
                return this._id
            }
            get isExportable() {
                return this._isExportable
            }
            get order() {
                return this._order
            }
            set order(e) {
                this._order = e
            }
            get removeable() {
                return this._removeable
            }
            get selected() {
                return this._isSelected
            }
            set selected(e) {
                this._isSelected = e
            }
            get subType() {
                return this._subType
            }
            get title() {
                return this._title
            }
            get type() {
                return this._type
            }
            clone() {
                let e = new ui({
                    colType: this._type,
                    id: this._id,
                    isExportable: this._isExportable,
                    name: this._title,
                    type: this._subType
                },this._order);
                return e._filter = this._filter,
                e._isSelected = this._isSelected,
                e._removeable = this._removeable,
                e.userPrefix = this.userPrefix,
                e
            }
        }
        var fi, hi;
        !function(e) {
            e[e.TEXT = 0] = "TEXT",
            e[e.NUMBER = 1] = "NUMBER",
            e[e.BOOL = 2] = "BOOL",
            e[e.DATE = 3] = "DATE",
            e[e.FYN_RETURN_VALUE = 8] = "FYN_RETURN_VALUE"
        }(fi || (fi = {})),
        function(e) {
            e[e.TXT_EQUAL = 1] = "TXT_EQUAL",
            e[e.TXT_CONTAINS = 2] = "TXT_CONTAINS",
            e[e.TXT_STARTS_WITH = 3] = "TXT_STARTS_WITH",
            e[e.TXT_ENDS_WITH = 4] = "TXT_ENDS_WITH",
            e[e.NUM_GREATER_OR_EQUAL = 11] = "NUM_GREATER_OR_EQUAL",
            e[e.NUM_LESS_OR_EQUAL = 12] = "NUM_LESS_OR_EQUAL",
            e[e.NUM_BETWEEN = 13] = "NUM_BETWEEN",
            e[e.NUM_EQUAL = 14] = "NUM_EQUAL",
            e[e.NUM_NOT_EQUAL = 15] = "NUM_NOT_EQUAL",
            e[e.BOOL_YES = 21] = "BOOL_YES",
            e[e.BOOL_NO = 22] = "BOOL_NO"
        }(hi || (hi = {}));
        class mi {
            _rule;
            _val = [];
            constructor(e, t) {
                this._rule = e,
                this._val = t
            }
            asServerObject() {
                return {
                    rule: this._rule,
                    values: this._val
                }
            }
            get rule() {
                return this._rule
            }
            get val() {
                return this._val
            }
        }
        class gi {
            static instance;
            constructor() {}
            static get Instance() {
                return this.instance || (this.instance = new gi),
                this.instance
            }
            _currentLayer = null;
            _isOn = !1;
            _paging = {
                currentPage: 1,
                rowsPerPage: 500,
                totalRowsAvailable: 0,
                pagesAvailable: () => 0 === this._paging.totalRowsAvailable ? 1 : Math.ceil(this._paging.totalRowsAvailable / this._paging.rowsPerPage)
            };
            _allFilteredRecordIds = [];
            async applyToMap() {
                null !== this._currentLayer && (this._currentLayer.applyFiltering(this._allFilteredRecordIds),
                this._currentLayer.loadMethod !== ne.COMPLETE && Wn(),
                await async function() {
                    await He(Me.Left)
                }(),
                this.close())
            }
            buildTableData(e) {
                if (null === this._currentLayer)
                    throw new Error("No layer set for filtering.");
                let t = $("#filter-pane-tabledata").find("table");
                t.find("tr").remove();
                let i = t.find("thead")
                  , a = $("<tr>").addClass("filter-tabledata-removes").appendTo(i);
                this._currentLayer.filterColumns.forEach((e => {
                    let t = $("<th>");
                    !0 === e.removeable && t.addClass("button-colour red").text("Remove column").on("click", ( () => {
                        this._removeColumn(e)
                    }
                    )),
                    t.appendTo(a)
                }
                ));
                let n = $("<tr>").addClass("filter-tabledata-headers").appendTo(i);
                if (this._currentLayer.filterColumns.forEach((e => {
                    let t = $("<th>");
                    !1 === e.isExportable ? t.html(e.title + "<span class='no-export'>Not exportable</span>") : t.html(e.title),
                    t.appendTo(n)
                }
                )),
                $("<th>").attr("id", "filter-add-col").addClass("button-colour green").text("Add column").appendTo(n).on("click", ( () => {
                    this._showColumnSelect()
                }
                )),
                this._currentLayer.organisation.featurePackLevel > 1) {
                    let e = $("<tr>").addClass("filter-tabledata-filters").appendTo(i);
                    this._currentLayer.filterColumns.forEach((t => {
                        $("<th>").addClass("button-colour blue").text(null === t.filter ? "Filter" : "Filtered").on("click", ( () => {
                            this.createEditFilter(t)
                        }
                        )).appendTo(e)
                    }
                    )),
                    $("<th>").appendTo(e)
                }
                let o = t.find("tbody");
                e.data.forEach((e => {
                    let t = $("<tr>");
                    e.forEach((e => {
                        $("<td>").text(e).appendTo(t)
                    }
                    )),
                    $("<td>").appendTo(t),
                    t.appendTo(o)
                }
                )),
                this._allFilteredRecordIds = e.recordIds;
                let r = e.data.length;
                r < e.totalRecords ? $("#filter-pane-tabledata-footer > p").text(`Displaying the first ${r} of ${e.totalRecords} records.`) : $("#filter-pane-tabledata-footer > p").text(`Displaying ${e.totalRecords} records.`)
            }
            buildUiFilter(e) {
                if (null === e.filter)
                    return $();
                let t = $("<div>").addClass("filter btn wbtn")
                  , i = $("<div>").addClass("filter-text").appendTo(t);
                return $("<p>").addClass("filter-column-title oneLine").text(e.title).appendTo(i),
                $("<p>").addClass("filter-column-detail").text(( () => {
                    let t = "";
                    if (2 === e.type) {
                        t += "Includes: ";
                        let i = [];
                        e.filter.val.forEach((e => {
                            let t = null;
                            "null" !== e && (t = parseInt(e)),
                            i.push(this._currentLayer.getClassification(t).name)
                        }
                        )),
                        t += i.join(", ")
                    } else {
                        let i = e.filter.val[0]
                          , a = e.filter.val.length > 1 ? e.filter.val[1] : "";
                        switch (e.subType === fi.DATE && (i = K(new Date(i)),
                        a && (a = K(new Date(a)))),
                        e.filter.rule) {
                        case hi.TXT_EQUAL:
                            t = `Equals: ${i}`;
                            break;
                        case hi.TXT_CONTAINS:
                            t += `Contains: ${i}`;
                            break;
                        case hi.TXT_STARTS_WITH:
                            t += `Starts with: ${i}`;
                            break;
                        case hi.TXT_ENDS_WITH:
                            t += `Ends with: ${i}`;
                            break;
                        case hi.NUM_GREATER_OR_EQUAL:
                            t += `Greater than or equal to: ${i}`;
                            break;
                        case hi.NUM_LESS_OR_EQUAL:
                            t += `Less than or equal to: ${i}`;
                            break;
                        case hi.NUM_BETWEEN:
                            t += `Between: ${i} and ${a}`;
                            break;
                        case hi.NUM_EQUAL:
                            t += `Equals: ${i}`;
                            break;
                        case hi.NUM_NOT_EQUAL:
                            t += `Does not equal: ${i}`;
                            break;
                        case hi.BOOL_YES:
                            t += "Yes";
                            break;
                        case hi.BOOL_NO:
                            t += "No"
                        }
                    }
                    return t
                }
                )()).appendTo(i),
                $("<div>").addClass("clear-filter button-colour red").appendTo(t).on("click", (t => {
                    this.clearFilter(e),
                    t.stopPropagation()
                }
                )),
                t.on("click", ( () => {
                    this.createEditFilter(e)
                }
                )),
                t
            }
            clearAllCurrentFilters() {
                null !== this._currentLayer && (this._currentLayer.filterColumns.forEach((e => {
                    e.filter = null
                }
                )),
                this._showCurrentFilters())
            }
            clearFilter(e) {
                null !== this._currentLayer && (e.filter = null,
                this._showCurrentFilters())
            }
            async close() {
                this._allFilteredRecordIds = [],
                this._isOn = !1,
                await Yn(this._currentLayer.id, this._currentLayer.organisation.id),
                zt(!0),
                !1 === Ea() && !1 === ii() && Pt(!0)
            }
            async closeExportContent() {
                await this._displayDefault(),
                this._resetExportOptionTable()
            }
            createEditFilter(e) {
                $("#create-edit-filters-page > div.body").find("div.body-content").hide();
                let t = $("#filter-pane-set-filter");
                t.off();
                let i = $("#create-edit-filter-rulmode")
                  , a = $("#create-edit-filter-selmode");
                i.hide(),
                a.hide();
                let n = $("#create-edit-filter-rule")
                  , o = $("#create-edit-filter-rulmode-val1")
                  , r = $("#create-edit-filter-rulmode-val2");
                o.show(),
                r.show(),
                n.find("option").show(),
                n.children().prop("selected", !1).prop("disabled", !1),
                n.next(".nice-select").off().remove();
                let s = e => {
                    n.children().filter("[value=" + e + "]").prop("selected", !0)
                }
                  , l = () => {
                    i.show(),
                    n.find("option:not(.txt-rule)").prop("disabled", !0),
                    i.find("input").prop("type", "text"),
                    o.val(""),
                    r.val(""),
                    r.hide(),
                    null === e.filter || null === e.filter.rule ? s(hi.TXT_EQUAL) : (s(e.filter.rule),
                    o.val(e.filter.val[0] || "")),
                    n.niceSelect(),
                    t.on("click", ( () => {
                        let i = parseInt(n.val())
                          , a = o.val();
                        "" !== a || i === hi.TXT_EQUAL ? (e.filter = new mi(i,[a]),
                        this._showCurrentFilters(),
                        t.off()) : pe("The selected rule requires a value.")
                    }
                    ))
                }
                  , c = () => {
                    i.show(),
                    n.find("option:not(.num-rule)").prop("disabled", !0),
                    i.find("input").prop("type", "number"),
                    o.val("0"),
                    null === e.filter || null === e.filter.rule ? s(hi.NUM_GREATER_OR_EQUAL) : (s(e.filter.rule),
                    o.val(e.filter.val[0] || "0")),
                    parseInt(n.val()) === hi.NUM_BETWEEN ? (r.show(),
                    null === e.filter || null === e.filter.rule ? r.val("0") : r.val(e.filter.val[1] || "0")) : r.val("0").hide(),
                    n.niceSelect(),
                    t.on("click", ( () => {
                        let i = parseInt(n.val())
                          , a = parseFloat(o.val())
                          , s = parseFloat(r.val());
                        if (!0 === Number.isNaN(a) || i === hi.NUM_BETWEEN && !0 === Number.isNaN(s))
                            return void pe("You must enter numerical value(s) for the selected rule.");
                        if (!1 === Number.isNaN(a) && (a < -9999999999999 || a > 9999999999999) || !1 === Number.isNaN(s) && (s < -9999999999999 || s > 9999999999999))
                            return void pe("Values must be between -9,999,999,999,999 and 9,999,999,999,999");
                        let l = [a.toString()];
                        if (i === hi.NUM_BETWEEN) {
                            if (s <= a)
                                return void pe("Unable to apply filter. The second value must be greater than the first.");
                            l.push(s.toString())
                        }
                        e.filter = new mi(i,l),
                        this._showCurrentFilters(),
                        t.off()
                    }
                    ))
                }
                  , d = () => {
                    i.show(),
                    n.find("option:not(.bool-rule)").prop("disabled", !0),
                    o.val("").hide(),
                    r.val("").hide(),
                    null === e.filter || null === e.filter.rule ? s(hi.BOOL_YES) : s(e.filter.rule),
                    n.niceSelect(),
                    t.one("click", ( () => {
                        let i = parseInt(n.val());
                        e.filter = new mi(i,[]),
                        this._showCurrentFilters(),
                        t.off()
                    }
                    ))
                }
                  , p = () => {
                    i.show(),
                    n.find("option:not(.num-rule)").prop("disabled", !0),
                    i.find("input").prop("type", "date"),
                    o.val(""),
                    null === e.filter || null === e.filter.rule ? s(hi.NUM_GREATER_OR_EQUAL) : (s(e.filter.rule),
                    o.val(Y(e.filter.val[0]))),
                    parseInt(n.val()) === hi.NUM_BETWEEN ? (r.show(),
                    null === e.filter || null === e.filter.rule ? r.val("") : r.val(Y(e.filter.val[1]))) : r.val("").hide(),
                    n.niceSelect(),
                    t.on("click", ( () => {
                        let i = parseInt(n.val())
                          , a = o.val()
                          , s = r.val();
                        if ("" === a)
                            return void pe("A date must be supplied.");
                        let l = [a];
                        if (i === hi.NUM_BETWEEN) {
                            if ("" === s)
                                return void pe("A date must be supplied.");
                            if (new Date(s).setHours(0, 0, 0, 0) <= new Date(a).setHours(0, 0, 0, 0))
                                return void pe("Unable to apply filter. The second value must be greater than the first.");
                            l.push(s)
                        }
                        e.filter = new mi(i,l),
                        this._showCurrentFilters(),
                        t.off()
                    }
                    ))
                }
                  , u = () => {
                    a.empty().show(),
                    t.on("click", ( () => {
                        let i = [];
                        a.find("div.selected").each(( (e, t) => {
                            let a = $(t).data("id");
                            null === a ? i.push("null") : i.push(a.toString())
                        }
                        )),
                        0 !== i.length ? (i.length === a.children().length ? e.filter = null : e.filter = new mi(null,i),
                        this._showCurrentFilters(),
                        t.off()) : pe("You must select at least one option.")
                    }
                    ))
                }
                  , f = () => {
                    u();
                    let t = [];
                    null !== e.filter && e.filter.val.forEach((e => {
                        "null" === e ? t.push(null) : t.push(parseInt(e))
                    }
                    )),
                    this._currentLayer.classifications.forEach((i => {
                        let n = $("<div>").data("id", i.id).addClass("filter-classification btn");
                        n[0].appendChild(i.getIconAsSVG()),
                        this._currentLayer instanceof Sa ? n.addClass("area-layer") : this._currentLayer instanceof Ki && n.addClass("location-layer"),
                        $("<p>").addClass("std").text(i.name).appendTo(n),
                        !0 !== t.includes(i.id) && null !== e.filter || n.addClass("selected"),
                        n.appendTo(a)
                    }
                    ))
                }
                ;
                switch (e.type) {
                case 0:
                case 1:
                case 50:
                case 51:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                    l();
                    break;
                case 20:
                case 61:
                    c();
                    break;
                case 30:
                    switch (e.subType) {
                    case fi.TEXT:
                    case fi.FYN_RETURN_VALUE:
                        l();
                        break;
                    case fi.NUMBER:
                        c();
                        break;
                    case fi.DATE:
                        p();
                        break;
                    case fi.BOOL:
                        d();
                        break;
                    default:
                        throw new Error("Unrecognised custom field type.")
                    }
                    break;
                case 2:
                    f();
                    break;
                case 60:
                    d();
                    break;
                default:
                    throw new Error("Unexpected column type for creating filter.")
                }
                !1 === $("#create-edit-filters-page").is(":visible") && ($("#create-edit-filters-page").children("header").children("h1").text(this._currentLayer.name),
                Ye("#create-edit-filters-page"))
            }
            cancelCreateEditFilter() {
                null !== this._currentLayer && ($("#filter-pane-set-filter").off(),
                Ye("#current-filters-page"))
            }
            async _displayDefault() {
                this._isOn = !0,
                await Ye("#current-filters-page"),
                await Ke("#filter-pane-tableview"),
                zt(!1)
            }
            async generateExport() {
                if (null === this._currentLayer)
                    throw new Error("No layer set for generating the export.");
                if (this._currentLayer.protectionLevel === ji.FULL || !1 === this._currentLayer.getPermissionForUser(ct.CAN_EXPORT))
                    throw new Error("User does not have permission to export this layer.");
                let e = {
                    layerId: this._currentLayer.id,
                    organisationId: this._currentLayer.organisation.id,
                    columns: null,
                    exportOptions: null
                };
                0 === parseInt($("#filter-export-option").val()) ? e.columns = this._currentLayer.filterColumns.map((e => e.asServerObject())) : e.exportOptions = {
                    address: $("#filter-export-option-address").find("div.export-option-yes").hasClass("toggled"),
                    aggregatedLayers: $("#filter-export-option-depareas").find("div.export-option-yes").hasClass("toggled"),
                    classification: $("#filter-export-option-class").find("div.export-option-yes").hasClass("toggled"),
                    coordinates: $("#filter-export-option-coords").find("div.export-option-yes").hasClass("toggled"),
                    customFields: $("#filter-export-option-cusfields").find("div.export-option-yes").hasClass("toggled"),
                    demographics: $("#filter-export-option-demos").find("div.export-option-yes").hasClass("toggled"),
                    fyn: $("#filter-export-option-fyn").find("div.export-option-yes").hasClass("toggled")
                },
                await function(e) {
                    return Ie("GetExport", e)
                }(e),
                this.closeExportContent()
            }
            _getTableData(e) {
                if (void 0 === e) {
                    if (null === this._currentLayer)
                        throw new Error("No layer available for table data.");
                    e = this._currentLayer
                }
                return $e("GetLayerTableData", {
                    layerId: e.id,
                    organisationId: e.organisation.id,
                    columns: e.filterColumns.map((e => e.asServerObject()))
                })
            }
            open(e) {
                this._currentLayer = e,
                Pt(!1),
                this._showCurrentFilters()
            }
            _removeColumn(e) {
                if (null === this._currentLayer)
                    throw new Error("No layer set for filtering.");
                if (!1 === e.removeable)
                    throw new Error("Unable to remove a non-removeable column.");
                let t = this._currentLayer.filterColumns;
                t = t.filter((t => !(t.type === e.type && t.id === e.id))),
                this._currentLayer.filterColumns = t,
                this._showCurrentFilters()
            }
            _resetExportOptionTable() {
                let e = $("#filter-pane-export-option-page > div.body > table");
                e.find("tr").removeClass("disabled"),
                e.find("div.export-option-yes").removeClass("toggled"),
                e.find("div.export-option-no").addClass("toggled")
            }
            selectColumns() {
                if (null === this._currentLayer)
                    throw new Error("No layer set for filtering.");
                let e = $("#filter-pane-column-select > div.body")
                  , t = this._currentLayer.filterColumns;
                e.find(".filter-column-select-option.selected").each(( (e, i) => {
                    let a = $(i).data("colData")
                      , n = new ui(a,t.length);
                    t.push(n)
                }
                )),
                this._currentLayer.filterColumns = t,
                this._showCurrentFilters()
            }
            setPaneHeaders() {
                if (null === this._currentLayer)
                    throw new Error("No layer set for filtering.");
                let e = $("#current-filters-header > p");
                $(e[0]).text(this._currentLayer.organisation.name).css("color", this._currentLayer.organisation.colour.asHex()),
                $(e[2]).text(this._currentLayer.name)
            }
            async _showColumnSelect() {
                if (null === this._currentLayer)
                    throw new Error("No layer set for filtering.");
                let e = (e, t) => {
                    let i = $("<div>").addClass("filter-column-select-group")
                      , a = $("<h2>").appendTo(i)
                      , n = $("<div>").addClass("filter-column-select-options").appendTo(i);
                    switch (t.filter((t => 41 === e ? [41, 42, 43, 44, 45, 46, 47].includes(t.colType) : 50 === e ? 50 === t.colType || 51 === t.colType : 60 === e ? 60 === t.colType || 61 === t.colType : t.colType === e)).forEach((e => {
                        0 === this._currentLayer.filterColumns.filter((t => t.type === e.colType && t.id === e.id)).length && $("<div>").addClass("filter-column-select-option btn").text(e.name).data("colData", e).appendTo(n)
                    }
                    )),
                    e) {
                    case 20:
                        a.text("Demographics").addClass("dg"),
                        n.children().addClass("dg");
                        break;
                    case 30:
                        a.text("Custom Fields").addClass("df"),
                        n.children().addClass("df");
                        break;
                    case 50:
                        a.text("Dependent Layers").addClass("re"),
                        n.children().addClass("re");
                        break;
                    case 41:
                        a.text("Address").addClass("ad"),
                        n.children().addClass("ad");
                        break;
                    case 60:
                        a.text("Find Your Nearest").addClass("fyn"),
                        n.children().addClass("fyn");
                        break;
                    default:
                        return $()
                    }
                    return 0 === n.children().length ? $() : i
                }
                  , t = await (i = this._currentLayer.identifier,
                Ae("GetAvailableColumnsForFiltering", i));
                var i;
                if (0 === t.length)
                    pe("There are no available columns for this layer.");
                else {
                    let i = $("#filter-pane-column-select > div.body");
                    i.empty(),
                    [41, 20, 30, 50, 60].forEach((a => {
                        e(a, t).appendTo(i)
                    }
                    )),
                    0 === i.children().length ? pe("There are no further columns available for this layer.") : ($("#filter-pane-select-columns-page").find("header").find("h1").text(this._currentLayer.name),
                    await Ye("#filter-pane-select-columns-page"),
                    await Ke("#filter-pane-column-select"),
                    i.scrollTop(0))
                }
            }
            async _showCurrentFilters() {
                if (null !== this._currentLayer) {
                    let e = $("#current-filters-page > div.body");
                    e.find("div.filter").remove();
                    let t = 0;
                    this._currentLayer.filterColumns.filter((e => null !== e.filter)).forEach((i => {
                        0 === t ? this.buildUiFilter(i).insertAfter($("#current-filters-clearfilters")) : this.buildUiFilter(i).insertAfter(e.find("div.filter:last-of-type")),
                        t++
                    }
                    ));
                    let i = Pn(this._currentLayer).find("footer > div.filter-status")
                      , a = $("#filter-pane-apply");
                    0 === t ? ($("#current-filters-clearfilters").text("Clear all filters").hide(),
                    i.hide(),
                    a.text("Return to map")) : ($("#current-filters-clearfilters").text(`Clear all filters (${t})`).show(),
                    i.show(),
                    a.text("Apply filters and return to map"));
                    let n = await this._getTableData();
                    this.buildTableData(n);
                    let o = $("#current-filters-page").children("header").children();
                    $(o[0]).text(this._currentLayer.name),
                    this._displayDefault()
                }
                !1 === $("#current-filters-page").is(":visible") && Ye("#current-filters-page"),
                this._showHideExportButton()
            }
            _showHideExportButton() {
                null !== this._currentLayer && (this._currentLayer.protectionLevel !== ji.FULL && !0 === this._currentLayer.getPermissionForUser(ct.CAN_EXPORT) ? $("#filter-pane-export").show() : $("#filter-pane-export").hide())
            }
            showExportContent() {
                if (null === this._currentLayer)
                    throw new Error("No layer set for exporting.");
                if (this._currentLayer.protectionLevel === ji.FULL || !1 === this._currentLayer.getPermissionForUser(ct.CAN_EXPORT))
                    throw new Error("User does not have permission to export this layer.");
                $("#filter-export-option").children().prop("selected", !1).filter("[value=0]").prop("selected", !0),
                $("#filter-export-option").niceSelect("update"),
                this._resetExportOptionTable(),
                this._currentLayer instanceof Sa ? ($("#filter-export-option-address, #filter-export-option-coords").addClass("disabled"),
                !0 === this._currentLayer.isBaseLayer && $("#filter-export-option-class, #filter-export-option-relrecords, #filter-export-option-cusfields, #filter-export-option-fyn").addClass("disabled")) : this._currentLayer instanceof Ki && ($("#filter-export-option-depareas, #filter-export-option-demos").addClass("disabled"),
                !1 === this._currentLayer.isPrivate && $("#filter-export-option-coords").addClass("disabled")),
                !1 === this._currentLayer.isPrivate && $("#filter-export-option-relrecords, #filter-export-option-fyn").addClass("disabled"),
                $("#filter-pane-export-page").find("header").find("h1").text(this._currentLayer.name),
                Ye("#filter-pane-export-page")
            }
            setExportMode(e) {
                0 === e ? Ke("#filter-pane-tableview") : 1 === e && Ke("#filter-pane-export-option-page")
            }
            async updateFilteredContentOnDataChange(e, t) {
                if (0 === e.filterColumns.filter((e => null !== e.filter)).length)
                    return;
                if (0 === e.filterColumns.filter((e => !0 === t.includes(e.type) && null !== e.filter)).length)
                    return;
                let i = await this._getTableData(e);
                e.applyFiltering(i.recordIds),
                e instanceof Ki && await Un()
            }
        }
        let yi;
        function xi() {
            if (void 0 === yi)
                throw new Error("The user preferences are not set.");
            return yi
        }
        var bi, vi;
        let wi;
        !function(e) {
            e[e.ALLOCATION = 0] = "ALLOCATION",
            e[e.NEAREST = 1] = "NEAREST"
        }(bi || (bi = {})),
        function(e) {
            e[e.DEMOGRAPHIC = 0] = "DEMOGRAPHIC",
            e[e.CUSTOM_FIELD = 1] = "CUSTOM_FIELD"
        }(vi || (vi = {}));
        let ki = !1;
        function Ci() {
            wi = void 0,
            Bi.clearFynBoundaryPreview()
        }
        async function _i() {
            let e = wi;
            return Ci(),
            await Xe(),
            at(),
            e
        }
        function Ti(e) {
            return wi && (e instanceof Ce && !0 === wi.equals(e) || e instanceof Xi && wi.layer === e) ? _i() : Promise.resolve()
        }
        function Li(e) {
            return $("<h3>").text(e)
        }
        function Ei(e) {
            return $("<h5>").text(e)
        }
        function Ii() {
            !0 !== ki && (nt(et.INFO_WINDOW, {
                allows: [et.AREA_EDITOR, et.INFO_WINDOW, et.LOCATION_EDITOR, et.NOTIFICATIONS, et.TERRITORY_CHECKS],
                closeFunction: _i
            }),
            Si.initialise(),
            Oi.intilialise(),
            Mi.initialise(),
            Di.initialise(),
            Fi.initialise(),
            Bi.initialise(),
            zi.initialise(),
            Pi.initialise(),
            Ui.initialise(),
            Wi.initialise(),
            ki = !0)
        }
        function Ai(e, t) {
            $(e).children("header").children("h1").text(t)
        }
        function $i(e) {
            Pi.removeOptionsWithinLayer(e)
        }
        async function Ni(e) {
            Ii();
            try {
                if (await ot(et.INFO_WINDOW),
                wi && !0 === wi.equals(e))
                    return void (wi instanceof Na ? yo().fitBounds(wi.getBounds()) : wi instanceof lt && wi.centerOnMap());
                Ci(),
                wi = e,
                await zi.show()
            } catch (e) {
                await pe(`The information window could not be loaded: ${e}`)
            }
        }
        var Si, Oi, Ri, Mi, Di, Fi, Bi, zi, Pi, Ui, Wi, Hi, ji, Vi, Gi;
        !function(e) {
            let t = "#iw-action-menu";
            function i() {
                if (!wi)
                    throw new Error("No record is set. Unable to create record action menu.");
                let e = $(t).children("div.body");
                e.empty();
                let a = () => {
                    let e = "";
                    wi instanceof Na ? e = "area boundary" : wi instanceof lt && (e = "location position"),
                    ut(dt.BLUE, `Edit ${e}`).appendTo(c).on("click", (async () => {
                        const e = await _i();
                        e instanceof Na ? ga(e) : e instanceof lt && async function(e) {
                            ti();
                            try {
                                await ot(et.LOCATION_EDITOR),
                                Ut = e,
                                ai(e.layer);
                                let t = {
                                    recordId: e.id
                                }
                                  , i = await Ae("GetLocationData", t);
                                Qt(new google.maps.LatLng(i.y,i.x)),
                                qt = i.name;
                                let a = e.layer.getClassification(i.micId);
                                null !== a && ni(a),
                                Jt(),
                                oi()
                            } catch (e) {
                                pe(e)
                            }
                        }(e)
                    }
                    ))
                }
                  , n = () => {
                    let e = "";
                    wi instanceof Na ? e = "area" : wi instanceof lt && (e = "location"),
                    ut(dt.RED, `Delete ${e}`).appendTo(c).on("click", ( () => {
                        T({
                            staticContentId: "dc-record-delete",
                            contextContent: $("<p>").text(`You're about to delete ${zi.getCurrentRecordHeader()} from the ${wi.layer.name} layer.`),
                            tinyMode: !0,
                            okButtonOptions: {
                                text: "Delete it",
                                okFunction: () => {
                                    wi instanceof Na ? async function(e) {
                                        W();
                                        let t = {
                                            recordId: e.id,
                                            layerId: e.layer.id,
                                            organisationId: e.layer.organisation.id,
                                            layerSettings: Fn()
                                        }
                                          , i = await $e("DeleteArea", t);
                                        if (await Ia(i),
                                        ea.Instance.reapplyAnalysis(e.layer),
                                        e.layer instanceof Sa && null !== e.layer.baseLayerId) {
                                            let t = zn(e.layer.baseLayerId, e.layer.organisation.id);
                                            t instanceof Sa && ea.Instance.reapplyAnalysis(t)
                                        }
                                        await _i(),
                                        Z(),
                                        de()
                                    }(wi) : wi instanceof lt && async function(e) {
                                        let t = {
                                            recordId: e.id,
                                            layerId: e.layer.id,
                                            organisationId: e.layer.organisation.id
                                        };
                                        await Ae("DeleteLocation", t),
                                        e.layer.removeRecord(e.id),
                                        await _i(),
                                        await Un(),
                                        de()
                                    }(wi)
                                }
                            }
                        })
                    }
                    ))
                }
                  , o = ft().appendTo(e);
                ( () => {
                    let e = "";
                    e = !0 === wi.layer.getPermissionForUser(ct.EDIT_DATA) ? "View/Edit information" : "View information",
                    ut(dt.BLUE, e).appendTo(o).on("click", ( () => {
                        Oi.show()
                    }
                    ))
                }
                )(),
                !0 === wi.layer.getPermissionForUser(ct.VIEW_CLASSIFICATIONS) && !0 === wi.layer.getPermissionForUser(ct.EDIT_DATA) && ut(dt.BLUE, "Change classification").appendTo(o).on("click", ( () => {
                    Fi.show()
                }
                ));
                let r = ft("More data").appendTo(e);
                null !== wi.layer.organisation.userPermissions && !0 === wi.layer.isPrivate && ut(dt.BLUE, "Notes").appendTo(r).on("click", ( () => {
                    Ui.show()
                }
                ));
                let s = ft("Find your nearest").appendTo(e);
                null !== wi.layer.organisation.userPermissions && !0 === wi.layer.organisation.hasFyn && !0 === wi.layer.isPrivate && ( () => {
                    let e = "";
                    e = !0 === wi.layer.getPermissionForUser(ct.EDIT_DATA) ? "Manage FYN settings" : "View FYN settings",
                    ut(dt.BLUE, e).appendTo(s).on("click", ( () => {
                        Bi.show()
                    }
                    ))
                }
                )();
                let l = ft("Reports and Exports").appendTo(e);
                wi instanceof Na && !0 === wi.layer.getPermissionForUser(ct.VIEW_DEMOGRAPHICS) && (ut(dt.BLUE, "Demographic report").appendTo(l).on("click", ( () => {
                    Di.show()
                }
                )),
                !1 === wi.layer.isBaseLayer && ut(dt.BLUE, "Download demographic breakdown").appendTo(l).on("click", ( () => Ri.show())));
                let c = ft("Edit").appendTo(e);
                wi.layer.organisation.userPermissions && (wi instanceof Na && !0 === wi.layer.getPermissionForUser(ct.EDIT_BOUNDARIES) && !0 === wi.layer.baseLayerIsAvailable() && (a(),
                n()),
                wi instanceof lt && !0 === wi.layer.getPermissionForUser(ct.EDIT_LOCATIONS) && (a(),
                n()));
                let d = ft("Sharing").appendTo(e);
                if (wi instanceof Na && !1 === wi.layer.isBaseLayer && !0 === wi.layer.getPermissionForUser(ct.CAN_REPORT)) {
                    let e = Wi.getSharingOptions();
                    void 0 !== e && !0 === e.isEnabled ? (ut(dt.RED, "Disable Sharing").appendTo(d).on("click", (async () => {
                        await Wi.setSharing(!1),
                        i()
                    }
                    )),
                    ut(dt.BLUE, "Send a link").appendTo(d).on("click", ( () => {
                        Wi.showSendLink()
                    }
                    ))) : ut(dt.GREEN, "Enable Sharing").appendTo(d).on("click", (async () => {
                        await Wi.setSharing(!0),
                        i()
                    }
                    )),
                    ut(dt.BLUE, "Share Statistics").appendTo(d).on("click", ( () => {
                        Wi.showShareStatistics()
                    }
                    ))
                }
                let p = ft("More actions").appendTo(e);
                wi instanceof Na && null !== wi.layer.organisation.userPermissions && !1 === wi.layer.isBaseLayer && ut(dt.BLUE, "Copy area to another layer").appendTo(p).on("click", ( () => {
                    !async function(e) {
                        Aa.display(e)
                    }(wi)
                }
                )),
                e.children(".button-group").each(( (e, t) => {
                    !1 === ht($(t)) && $(t).remove()
                }
                )),
                Ai(t, zi.getCurrentRecordHeader())
            }
            e.initialise = function() {
                !0 !== ki && $("#iw-action-menu-close").on("click", ( () => zi.show()))
            }
            ,
            e.show = function() {
                i(),
                Ze(t)
            }
        }(Si || (Si = {})),
        function(e) {
            let t, i = "#iw-data-edit", a = "#iw-data-edit-save", n = "#iw-data-edit-close";
            function o() {
                t && !0 === t.hasChanges() ? (0 === r() ? $(a).show() : $(a).hide(),
                $(n).text(`Cancel (${t.changeCount()} unsaved changes)`)) : ($(a).hide(),
                $(n).text("Cancel"))
            }
            function r() {
                return $(i).children("div.body").find("*:invalid, *:out-of-range").length
            }
            e.intilialise = function() {
                !0 !== ki && ($(a).on("click", (async () => {
                    0 === r() ? (await async function() {
                        if (!wi)
                            return Promise.reject("No record is set. Unable to save record data.");
                        if (!1 === wi.layer.getPermissionForUser(ct.EDIT_DATA))
                            return Promise.reject("User does not have permission. Unable to save record data.");
                        if (!t)
                            return Promise.reject("No change tracker is set. Unable to save record data.");
                        if (r() > 0)
                            return Promise.reject("There are input errors. Unable to save record data.");
                        if (!1 === t.hasChanges())
                            return Promise.resolve();
                        let e = {
                            recordId: wi.id,
                            layerId: wi.layer.id,
                            organisationId: wi.layer.organisation.id,
                            name: t.currentValue.name,
                            uniqueKey: t.currentValue.uniqueKey,
                            customFieldValues: [],
                            address: null
                        };
                        e.customFieldValues = t.currentValue.customFields.map((e => ({
                            id: e.id,
                            value: e.value.toString()
                        }))),
                        wi instanceof lt && t.currentValue.address && (e.address = {
                            recordId: wi.id,
                            line1: t.currentValue.address.line1,
                            line2: t.currentValue.address.line2,
                            line3: t.currentValue.address.line3,
                            cityTown: t.currentValue.address.cityTown,
                            countyState: t.currentValue.address.countyState,
                            postalCode: t.currentValue.address.postalCode,
                            country: t.currentValue.address.country
                        });
                        let i = await $e("SaveRecordData", e);
                        wi instanceof Na && i.forEach((e => {
                            wi.updateCustomFieldLabel(e.id, e.value)
                        }
                        )),
                        wi instanceof Na && (wi.updateNameLabel(e.name),
                        wi.updateCodeLabel(e.uniqueKey)),
                        await gi.Instance.updateFilteredContentOnDataChange(wi.layer, [0, 1, 30, 41, 42, 43, 44, 45, 46, 47])
                    }(),
                    await zi.show(),
                    de(),
                    t = void 0,
                    $(i).find("div.body").empty()) : pe("Please correct invalid input.")
                }
                )),
                $(n).on("click", ( () => Si.show())))
            }
            ,
            e.show = async function() {
                (function(e) {
                    if (!wi)
                        throw new Error("No record is set. Unable to display view/edit data.");
                    wi instanceof lt && null === e.address && (e.address = {
                        line1: "",
                        line2: "",
                        line3: "",
                        cityTown: "",
                        countyState: "",
                        postalCode: "",
                        country: ""
                    }),
                    t = new ri(e),
                    o();
                    let a = $(i).find("div.body");
                    a.empty(),
                    Li("General information").appendTo(a),
                    Ei("Name").appendTo(a),
                    $("<input>").attr({
                        type: "text",
                        maxlength: "100"
                    }).prop("required", !0).val(e.name).appendTo(a).on("input", (e => {
                        t.currentValue.name = $(e.target).val(),
                        o()
                    }
                    )),
                    Ei("Unique key").appendTo(a),
                    $("<input>").attr({
                        type: "text",
                        maxlength: "100"
                    }).val(e.uniqueKey).appendTo(a).on("input", (e => {
                        t.currentValue.uniqueKey = $(e.target).val(),
                        o()
                    }
                    ));
                    let n = (e, i) => {
                        t.currentValue.customFields.filter((t => t.id === e))[0].value = i,
                        o()
                    }
                    ;
                    if (e.customFields.length > 0 && (Li("Custom fields").appendTo(a),
                    e.customFields.forEach((e => {
                        Ei(e.name).appendTo(a);
                        let t = (e => {
                            let t = $("<input>");
                            switch (e.type) {
                            case fi.TEXT:
                            case fi.FYN_RETURN_VALUE:
                                t.attr({
                                    type: "text",
                                    maxlength: "100"
                                }),
                                t.val(e.value.toString());
                                break;
                            case fi.NUMBER:
                                {
                                    let i = "1";
                                    void 0 !== e.decimalPlaces && e.decimalPlaces > 0 && (i = `0.${Q("0", e.decimalPlaces - 1, "")}1`),
                                    t.attr({
                                        type: "number",
                                        min: "-9999999999999",
                                        max: "9999999999999",
                                        step: i
                                    }),
                                    t.val(e.value.toString());
                                    break
                                }
                            case fi.BOOL:
                                t.attr({
                                    type: "checkbox"
                                }),
                                t.prop("checked", e.value);
                                break;
                            case fi.DATE:
                                t.attr({
                                    type: "date",
                                    placeholder: "YYYY-MM-DD",
                                    pattern: "[0-9]{4}-[0-9]{2}-[0-9]{2}"
                                }),
                                t.val(e.value.toString())
                            }
                            return t
                        }
                        )(e).appendTo(a);
                        e.type === fi.BOOL ? t.on("change", (t => {
                            let i = $(t.target).prop("checked");
                            n(e.id, i)
                        }
                        )) : t.on("input", (t => {
                            let i;
                            i = e.type === fi.NUMBER ? parseFloat($(t.target).val()) : e.type === fi.DATE ? Y($(t.target).val()) : $(t.target).val(),
                            n(e.id, i)
                        }
                        ))
                    }
                    ))),
                    wi instanceof lt && !0 === wi.layer.getPermissionForUser(ct.VIEW_ADDRESS)) {
                        Li("Address").appendTo(a);
                        let e = (e, i, n="") => {
                            $("<input>").attr({
                                type: "text",
                                maxlength: i,
                                placeholder: n
                            }).val(t.currentValue.address[`${e}`]).appendTo(a).on("input", (i => {
                                t.currentValue.address[`${e}`] = $(i.target).val(),
                                o()
                            }
                            ))
                        }
                        ;
                        Ei("Street").appendTo(a),
                        e("line1", 100, "Line 1"),
                        e("line2", 100, "Line 2"),
                        e("line3", 100, "Line 3"),
                        Ei("City/Town").appendTo(a),
                        e("cityTown", 50),
                        Ei("County/State").appendTo(a),
                        e("countyState", 50),
                        Ei("Post/ZIP code").appendTo(a),
                        e("postalCode", 10),
                        Ei("Country").appendTo(a),
                        e("country", 50)
                    }
                    !1 === wi.layer.getPermissionForUser(ct.EDIT_DATA) && a.children("input").prop({
                        readonly: !0,
                        disabled: !0
                    }),
                    Ai(i, e.name),
                    function() {
                        if (void 0 === wi)
                            return;
                        let e = $(i).children("header").children("h2");
                        !1 === wi.layer.getPermissionForUser(ct.EDIT_DATA) ? e.text("View data") : e.text("View/Edit data")
                    }()
                }
                )(await (wi ? Ae("GetRecordViewEditData", {
                    recordId: wi.id,
                    layerId: wi.layer.id,
                    organisationId: wi.layer.organisation.id
                }) : Promise.reject("No record is set. Unable to fetch record view/edit data."))),
                Ze(i)
            }
        }(Oi || (Oi = {})),
        function(e) {
            let t = []
              , i = 0;
            async function a() {
                const e = {
                    recordId: wi.id,
                    layerId: t[i].layerId,
                    organisationId: t[i].organisationId
                };
                await Ie("GetDemographicBreakdown", e),
                n(),
                y()
            }
            function n() {
                t = [],
                i = 0
            }
            e.show = async function() {
                if (n(),
                t = await async function() {
                    return Ae("GetDemographicExportOptions", wi.layer.identifier)
                }(),
                1 === t.length)
                    await a();
                else {
                    let e = function() {
                        let e = b();
                        $("<p>").text("Choose the layer you would like the demographic breakdown reported at.").appendTo(e);
                        let a = $("<select>").appendTo(e).on("change", ( () => i = parseInt(a.val())));
                        return t.forEach(( (e, t) => $("<option>").attr("value", t).text(e.name).appendTo(a))),
                        a.niceSelect(),
                        e
                    }();
                    x(g.SMALL, "Demographic Export", zi.getCurrentRecordHeader(), e, {
                        text: "Download",
                        okFunction: a
                    })
                }
            }
        }(Ri || (Ri = {})),
        function(e) {
            let t = "#iw-demo-info";
            e.initialise = function() {
                !0 !== ki && $("#iw-demo-info-close").on("click", ( () => zi.show()))
            }
            ,
            e.show = async function(e) {
                let i = await function(e) {
                    return wi ? Ae("GetDemographicInformation", {
                        demographicId: e,
                        layerId: wi.layer.id,
                        organisationId: wi.layer.organisation.id
                    }) : Promise.reject("No record is set. Unable to fetch demographic information.")
                }(e);
                !function(e) {
                    let i = $(t).children("div.body")
                      , a = (e, t) => {
                        $("<h4>").text(e).appendTo(i),
                        $("<p>").text(t).appendTo(i)
                    }
                    ;
                    if (i.empty(),
                    Ai(t, e.title),
                    e.groupName && a("Demographic Group", e.groupName),
                    e.description && ($("<h4>").text("Description").appendTo(i),
                    $("<div>").html(e.description).appendTo(i)),
                    e.baseDemographics.length > 0) {
                        $("<h4>").text("This demographic combines").appendTo(i);
                        let t = $("<ul>").appendTo(i);
                        e.baseDemographics.forEach((e => {
                            $("<li>").text(e.title).appendTo(t)
                        }
                        ))
                    }
                    e.summaryStatistics && (a("Total Market Size", e.summaryStatistics.baseTotal || e.summaryStatistics.total),
                    e.summaryStatistics.coverage && a(`The ${e.summaryStatistics.layerName} layer covers`, `${e.summaryStatistics.total} (${e.summaryStatistics.coverage})`),
                    a(`${e.summaryStatistics.layerName} range between`, `${e.summaryStatistics.min} and ${e.summaryStatistics.max}`),
                    a(`Average value in the ${e.summaryStatistics.layerName} layer`, e.summaryStatistics.average)),
                    e.author && (a("Data source", e.author.name),
                    e.author.copyright && a("Copyright", e.author.copyright))
                }(i),
                Ze(t)
            }
        }(Mi || (Mi = {})),
        function(e) {
            let t, i = "#iw-demo-report", a = "#iw-demo-report-ext";
            function n(e) {
                if (!(wi instanceof Na))
                    return Promise.reject("No current area record set. Unable to display demographic report.");
                t = e;
                let n = $(a).children("div.body");
                return n.empty(),
                null !== e.table && (e => {
                    let t = $("<table>").appendTo(n)
                      , i = $("<thead>").appendTo(t)
                      , a = $("<tr>").appendTo(i);
                    $("<th>").text("Demographic").appendTo(a),
                    $("<th>").text("Total value").appendTo(a),
                    $("<th>").text("Percentage of base").appendTo(a),
                    $("<th>").text("Index").appendTo(a);
                    let o = $("<tbody>").appendTo(t);
                    e.forEach((e => {
                        let t = $("<tr>").appendTo(o);
                        $("<td>").text(e.name).appendTo(t),
                        $("<td>").text(e.value).appendTo(t),
                        $("<td>").text(e.percentageOfBase).appendTo(t);
                        let i = $("<td>").text(e.index).appendTo(t);
                        var a;
                        a = e.index,
                        parseFloat(a.replace(/,/g, "")) < 100 ? i.addClass("below") : i.addClass("above")
                    }
                    ))
                }
                )(e.table),
                Ai(i, zi.getCurrentRecordHeader()),
                Qe(a)
            }
            function o() {
                if (!(wi instanceof Na))
                    throw new Error("No current area record set. Unable to setup module.");
                let e = (e, t, i) => {
                    let a = $("<div>").addClass("report-option").appendTo(o);
                    return $("<h3>").text(e).appendTo(a),
                    $("<p>").text(t).appendTo(a),
                    $("<div>").addClass("button-colour green-rev").text("Select").appendTo(a).on("click", ( () => {
                        !0 !== a.hasClass("selected") && (o.children("div.report-option").removeClass("selected"),
                        a.addClass("selected"),
                        i())
                    }
                    )),
                    a
                }
                  , o = $(i).find("div.body");
                o.empty(),
                e("Demographic summary table", `Displays summary values for all demographics chosen for display on ${wi.layer.name}.`, ( () => {
                    n(t)
                }
                )).addClass("selected"),
                wi.layer.organisation.featurePackLevel > 1 && e("Demographic dashboard", "Provides a full breakdown of the area for all available demographics.", (async () => {
                    W(),
                    function(e) {
                        if (!(wi instanceof Na))
                            return Promise.reject("No current area record set. Unable to display demographic dashboard.");
                        let t = $(a).children("div.body");
                        t.empty();
                        let i = (e, t) => ( (e, t) => e.filter((e => e.tier === t)))(e, t).reduce(( (e, t) => e.concat(t.demographics)), [])
                          , n = (e, t) => i(e, t).map((e => [e.name, e.value]))
                          , o = (e, t) => {
                            let i = anychart.column(t);
                            i.credits(!1),
                            i.animation(!1),
                            i.title(""),
                            i.xAxis().labels().rotation(-90),
                            i.xAxis().labels().width("75px"),
                            i.xAxis().labels().fontSize("10px"),
                            i.getSeries(0).tooltip().format((function() {
                                return this.value.toLocaleString()
                            }
                            )),
                            i.background().fill("transparent"),
                            i.container(e),
                            i.draw()
                        }
                        ;
                        e.forEach(( (e, a) => {
                            let r = t => {
                                if (d.empty(),
                                1 === i(e.tiers, t).length)
                                    $("<p>").text(( (e, t) => i(e, t).reduce(( (e, t) => e + t.value), 0))(e.tiers, t).toLocaleString()).appendTo(d);
                                else {
                                    let a = ( (e, t) => i(e, t).reduce(( (e, t) => e + t.percentageOfBase), 0))(e.tiers, t);
                                    a > 101 ? o(d[0], n(e.tiers, t)) : ( (e, t) => {
                                        let i = anychart.pie(t);
                                        i.credits(!1),
                                        i.animation(!1),
                                        i.title(""),
                                        i.fill("aquastyle"),
                                        i.background().fill("transparent"),
                                        i.container(e),
                                        i.draw()
                                    }
                                    )(d[0], n(e.tiers, t))
                                }
                                p.empty(),
                                e.customs.filter((e => e.tier === t)).forEach((e => {
                                    let t = $("<div>").addClass("custom-demographic").appendTo(p);
                                    $("<p>").text(e.name).appendTo(t),
                                    $("<p>").text(`${e.value.toLocaleString()} | ${e.percentageOfBase}%`).appendTo(t)
                                }
                                ))
                            }
                              , s = $("<div>").addClass("demographic-group").appendTo(t)
                              , l = $("<header>").appendTo(s)
                              , c = $("<div>").addClass("options").appendTo(l);
                            $("<h3>").text(e.name).appendTo(c),
                            e.tiers.length > 1 && e.tiers.forEach(( (t, i) => {
                                let a = $("<div>").addClass("button-colour blue-rev").text(`Level ${i + 1}`).appendTo(c).on("click", ( () => {
                                    c.children(".button-colour").removeClass("selected"),
                                    a.addClass("selected"),
                                    r(t.tier)
                                }
                                ));
                                i === e.tiers.length - 1 && a.addClass("selected")
                            }
                            ));
                            let d = $("<div>").addClass("chart").appendTo(l)
                              , p = $("<footer>").appendTo(s);
                            r(e.tiers[e.tiers.length - 1].tier)
                        }
                        )),
                        Qe(a)
                    }(await (wi instanceof Na ? Ae("GetDemographicDashboard", {
                        recordId: wi.id,
                        layerId: wi.layer.id,
                        organisationId: wi.layer.organisation.id
                    }) : Promise.reject("No current area record set. Unable to fetch demographic dashboard."))),
                    Z()
                }
                ))
            }
            e.initialise = function() {
                !0 !== ki && $("#iw-demo-report-close").on("click", (async () => {
                    await qe(),
                    zt(!0),
                    zi.show()
                }
                ))
            }
            ,
            e.setupOptions = o,
            e.show = async function() {
                if (!(wi instanceof Na))
                    return Promise.reject("No current area record set. Unable to show module.");
                o(),
                n(await (wi instanceof Na ? Ae("GetDemographicSummaryForRecord", {
                    recordId: wi.id,
                    layerId: wi.layer.id,
                    organisationId: wi.layer.organisation.id
                }) : Promise.reject("No current area record set. Unable to fetch demographic report."))),
                zt(!1),
                Ze(i)
            }
        }(Di || (Di = {})),
        function(e) {
            let t = "#iw-edit-class"
              , i = "#iw-edit-class-save"
              , a = "#iw-edit-class-close"
              , n = null
              , o = null;
            function r() {
                wi && n !== o ? ($(i).show(),
                $(a).text("Close and cancel changes")) : ($(i).hide(),
                $(a).text("Close"))
            }
            e.initialise = function() {
                !0 !== ki && ($(i).on("click", (async () => {
                    await async function() {
                        if (!wi)
                            return Promise.reject("No record is set. Unable to save classification.");
                        if (n === o)
                            return Promise.resolve();
                        let e = wi.layer.getClassification(o);
                        if (null === e)
                            return Promise.reject("The selected classification was not found in the current records layer.");
                        let t = {
                            recordId: wi.id,
                            organisationId: wi.layer.organisation.id,
                            layerId: wi.layer.id,
                            classificationId: e.id
                        };
                        await Ae("SaveRecordClassification", t),
                        ( () => {
                            if (wi instanceof Na)
                                wi.setClassification(e);
                            else if (wi instanceof lt) {
                                wi.setClassification(e);
                                let t = wi.layer.getRecord(wi.id);
                                t instanceof lt && t.setClassification(e)
                            }
                        }
                        )(),
                        await gi.Instance.updateFilteredContentOnDataChange(wi.layer, [2])
                    }(),
                    await zi.show(),
                    de(),
                    n = null,
                    o = null,
                    $(t).children("div.body").empty()
                }
                )),
                $(a).on("click", ( () => Si.show())))
            }
            ,
            e.show = async function() {
                await function() {
                    if (!wi)
                        throw new Error("No record is set. Unable to display classifications.");
                    n = wi.classification.id,
                    o = wi.classification.id;
                    let e = $(t).children("div.body");
                    return e.empty(),
                    wi.layer.classifications.forEach((t => (t => {
                        let i = {
                            "background-color": "transparent",
                            color: "#000",
                            "font-weight": "normal"
                        }
                          , a = {
                            "background-color": "transparent",
                            color: "#fff",
                            "font-weight": "700"
                        }
                          , s = $("<div>").addClass("classification").appendTo(e);
                        wi instanceof Na ? s[0].appendChild(ye(1, {
                            height: 24,
                            width: 24
                        }, {
                            fillColour: t.colour.asRgba()
                        })) : wi instanceof lt && s[0].appendChild(ye(0, {
                            height: 30,
                            width: 30
                        }, {
                            fillColour: t.colour.asRgb(),
                            text: t.iconText,
                            textColour: t.iconTextColour
                        }));
                        let l = $("<p>").text(t.name).appendTo(s);
                        return a["background-color"] = t.colour.asRgba(),
                        a.color = t.colour.bestContrastingFontColour().asRgb(),
                        s.on({
                            mouseenter: () => {
                                l.css(a)
                            }
                            ,
                            mouseleave: () => {
                                o !== t.id && l.css(i)
                            }
                            ,
                            click: () => {
                                o !== t.id && (e.find("div.classification > p").css(i),
                                l.css(a),
                                o = t.id,
                                r())
                            }
                        }),
                        n === t.id && l.css(a),
                        s
                    }
                    )(t))),
                    r(),
                    Ai(t, zi.getCurrentRecordHeader()),
                    Promise.resolve()
                }(),
                Ze(t)
            }
        }(Fi || (Fi = {})),
        function(e) {
            let t, i, a = "#iw-fyn", n = "#iw-fyn-save", o = "#iw-fyn-close";
            function r() {
                t && !0 === t.hasChanges() ? (0 === l() ? $(n).show() : $(n).hide(),
                $(o).text(`Cancel (${t.changeCount()} unsaved changes)`)) : ($(n).hide(),
                $(o).text("Close"))
            }
            function s() {
                i && (i.setMap(null),
                i = void 0)
            }
            function l() {
                return $(a).children("div.body").find("*:invalid, *:out-of-range").length
            }
            e.clearFynBoundaryPreview = s,
            e.initialise = function() {
                !0 !== ki && ($(n).on("click", (async () => {
                    0 === l() ? (await async function() {
                        if (!wi)
                            return Promise.reject("No record is set. Unable to save record fyn settings.");
                        if (t && !1 === t.hasChanges())
                            return Promise.resolve();
                        let e = {
                            recordId: wi.id,
                            organisationId: wi.layer.organisation.id,
                            layerId: wi.layer.id,
                            rules: t.currentValue.reduce(( (e, t) => e.concat(t.rules.map((e => ({
                                ruleId: e.id,
                                included: e.included,
                                distance: e.distance
                            }))))), [])
                        };
                        W(),
                        await $e("SaveRecordFynSettings", e),
                        await gi.Instance.updateFilteredContentOnDataChange(wi.layer, [60, 61]),
                        Z()
                    }(),
                    await zi.show(),
                    de(),
                    t = void 0,
                    s(),
                    $(a).find("div.body").empty()) : pe("Please correct invalid input.")
                }
                )),
                $(o).on("click", ( () => Si.show())))
            }
            ,
            e.show = async function() {
                (function(e) {
                    if (!wi)
                        throw new Error("No record is set. Unable to display fyn settings.");
                    t = new ri(e),
                    r();
                    let n = $(a).find("div.body");
                    n.empty();
                    let o = e => $("<h5>").text(e).appendTo(n);
                    e.forEach(( (e, a) => {
                        var l;
                        l = e.ruleset,
                        $("<h3>").text(l).appendTo(n),
                        e.rules.forEach(( (e, l) => {
                            if ((e => {
                                let t = "";
                                e === bi.ALLOCATION ? t = "Allocation" : e === bi.NEAREST && (t = "Nearest"),
                                $("<h4>").text(t).appendTo(n)
                            }
                            )(e.type),
                            o("Include in results?"),
                            $("<input>").attr({
                                type: "checkbox"
                            }).prop("checked", e.included).appendTo(n).on("change", (e => {
                                t.currentValue[a].rules[l].included = $(e.target).prop("checked"),
                                r()
                            }
                            )),
                            e.type === bi.NEAREST) {
                                const c = xi().distanceUnits
                                  , d = 2 === c ? 1e3 : 1609.344;
                                o(`Maximum distance for results (${re(c, !0)})`),
                                $("<input>").attr({
                                    type: "number",
                                    min: "0",
                                    max: "1000",
                                    step: "any"
                                }).val(e.distance / d).appendTo(n).on("input", (e => {
                                    let i = parseFloat($(e.target).val())
                                      , n = !0 === Number.isNaN(i) ? void 0 : i;
                                    t.currentValue[a].rules[l].distance = void 0 === n ? void 0 : n * d,
                                    r(),
                                    p.addClass("blue").removeClass("red").text("Preview boundary"),
                                    void 0 === n ? p.addClass("disabled") : p.removeClass("disabled"),
                                    s()
                                }
                                ));
                                let p = $("<div>").addClass("button-colour blue").text("Preview boundary").appendTo(n).on("click", (async o => {
                                    if (!0 !== p.hasClass("disabled"))
                                        if (!0 === p.hasClass("red"))
                                            s(),
                                            p.addClass("blue").removeClass("red").text("Preview boundary");
                                        else {
                                            n.find("div.button-colour").not(p).removeClass("red").addClass("blue").text("Preview boundary");
                                            let o = t.currentValue[a].rules[l].distance;
                                            void 0 !== o && (await async function(e, t=0) {
                                                if (!wi)
                                                    throw new Error("No record is set. Unable to display fyn boundary preview.");
                                                let a = {
                                                    recordId: wi.id,
                                                    organisationId: wi.layer.organisation.id,
                                                    layerId: wi.layer.id,
                                                    ruleId: e,
                                                    distanceInMetres: t
                                                };
                                                var n;
                                                W(),
                                                n = await Ae("GetFynBoundary", a),
                                                i ? i.setOptions({
                                                    paths: G(n.boundary)
                                                }) : i = new google.maps.Polygon({
                                                    map: yo(),
                                                    strokeColor: "#333333",
                                                    strokeWeight: 2,
                                                    visible: !0,
                                                    zIndex: 9e3,
                                                    paths: G(n.boundary),
                                                    fillColor: "#333333",
                                                    fillOpacity: .5,
                                                    clickable: !1
                                                }),
                                                Z()
                                            }(e.id, o),
                                            p.removeClass("blue").addClass("red").text("Turn preview off"))
                                        }
                                }
                                ))
                            }
                        }
                        ))
                    }
                    )),
                    !1 === wi.layer.getPermissionForUser(ct.EDIT_DATA) && n.children("input").prop({
                        readonly: !0,
                        disabled: !0
                    }),
                    Ai(a, zi.getCurrentRecordHeader())
                }
                )(await (wi ? Ae("GetRecordFynSettings", {
                    recordId: wi.id,
                    layerId: wi.layer.id,
                    organisationId: wi.layer.organisation.id
                }) : Promise.reject("No record is set. Unable to fetch record fyn settings."))),
                Ze(a)
            }
        }(Bi || (Bi = {})),
        function(e) {
            let t = "#iw-main"
              , i = "#iw-main-actions"
              , a = !1
              , n = "";
            function o(e) {
                let t = $("#iw-classification");
                if (null === e)
                    t.text("").hide();
                else {
                    let i = e.overrideColour || wi.layer.formatting.colour().asHex()
                      , a = {
                        backgroundColor: i,
                        color: U.fromHex(i).bestContrastingFontColour().asHex()
                    };
                    wi instanceof Na && (a.backgroundColor = U.fromHex(e.overrideColour, e.overrideOpacity).asRgba()),
                    t.text(e.name).css(a).show()
                }
            }
            e.getCurrentRecordHeader = function() {
                return n
            }
            ,
            e.initialise = function() {
                !0 !== ki && ($(i).on("click", ( () => {
                    !0 === a ? se.Notify.failure("Actions are not available for a migration history record.") : Si.show()
                }
                )),
                $("#iw-main-close").on("click", ( () => _i())))
            }
            ,
            e.show = async function() {
                let e = await (wi ? Ae("GetRecordInformation", {
                    recordId: wi.id,
                    layerId: wi.layer.id,
                    organisationId: wi.layer.organisation.id,
                    outputUnits: xi().distanceUnits
                }) : Promise.reject("No record is set. Unable to fetch data."));
                (function(e) {
                    if (!wi)
                        throw new Error("No current record set. Unable to display record data.");
                    var i, a;
                    i = e.uniqueKey,
                    a = e.name,
                    n = X(a, i),
                    function() {
                        if (!wi)
                            throw new Error("No current record set. Unable to set pane headers.");
                        Ai(t, n),
                        $(t).children("header").children("h2").text(wi.layer.name)
                    }(),
                    !0 === wi.layer.getPermissionForUser(ct.VIEW_CLASSIFICATIONS) ? o(e.classification) : o(null);
                    let r = $(t).children("div.body");
                    if (r.empty(),
                    wi.layer.layerType === ae.RADIAL) {
                        let t = $("<div>").addClass("record-data").appendTo(r);
                        $("<h2>").text("Radius size").appendTo(t),
                        $("<p>").text(e.radius || "Error").appendTo(t)
                    }
                    if (wi instanceof lt && null !== e.address && ("" === e.address.line1 && "" === e.address.line2 && "" === e.address.line3 && "" === e.address.cityTown && "" === e.address.countyState && "" === e.address.postalCode && "" === e.address.country || function(e) {
                        let t = $("<div>").addClass("record-data");
                        $("<h2>").text("Address").appendTo(t);
                        let i = [e.line1, e.line2, e.line3, e.cityTown, e.countyState, e.postalCode, e.country].filter((e => null !== e && "" !== e.trim())).join(", ");
                        return $("<p>").text(i).appendTo(t),
                        t
                    }(e.address).appendTo(r)),
                    e.data.forEach((e => {
                        (function(e) {
                            let t = $("<div>").addClass("record-data");
                            $("<h2>").text(e.name).appendTo(t);
                            let i = $("<p>").text(e.value).appendTo(t);
                            return e.value || i.text("Not set").addClass("not-set"),
                            e.type === vi.DEMOGRAPHIC ? (t.addClass("clickable"),
                            t.on("click", ( () => Mi.show(e.id)))) : e.type === vi.CUSTOM_FIELD && e.value && i.linkify(),
                            t
                        }
                        )(e).appendTo(r)
                    }
                    )),
                    wi instanceof Na) {
                        let t = $("<div>").addClass("record-data").appendTo(r);
                        $("<h2>").text("Area").appendTo(t),
                        $("<p>").text(e.area).appendTo(t)
                    }
                    if (e.numberOfNotes > 0) {
                        let t = $("<div>").addClass("record-data clickable").appendTo(r);
                        $("<h2>").text("Number of notes").appendTo(t),
                        $("<p>").text(e.numberOfNotes).appendTo(t),
                        t.on("click", ( () => {
                            Ui.show(!0)
                        }
                        ))
                    }
                    if (e.sharing) {
                        let t = $("<div>").addClass("record-data").appendTo(r);
                        $("<h2>").text("Is Shared?").appendTo(t),
                        $("<p>").text(!0 === e.sharing.isEnabled ? "Yes" : "No").appendTo(t)
                    }
                    Wi.setSharingOptions(e.sharing)
                }
                )(e),
                a = e.isMigrationHistoryRecord,
                !0 === a ? $(i).hide() : $(i).show(),
                Ze(t)
            }
        }(zi || (zi = {})),
        function(e) {
            let t = "#iw-multi-options";
            function i(e, t, i) {
                let a = $("<div>").attr("data-layer-text-id", e.textId).addClass("list-item clickable");
                a[0].appendChild(i);
                let n = $("<header>").appendTo(a);
                return $("<h6>").text(e.name).appendTo(n),
                $("<h5>").text(t).appendTo(n),
                a
            }
            function a(e) {
                return $e("GetRecordsWithNames", e)
            }
            function n(e, i) {
                let a = $(t).children("header");
                a.children("h1").text(e),
                a.children("h2").text(`Displaying ${i} record${i > 1 ? "s" : ""}`)
            }
            e.getRecordsWithNames = a,
            e.initialise = function() {
                !0 !== ki && $("#iw-multi-options-close").on("click", ( () => _i()))
            }
            ,
            e.removeOptionsWithinLayer = function(e) {
                let i = $(t).children("div.body");
                if (0 === i.children("div.list-item").length)
                    return;
                i.children(`div.list-item[data-layer-text-id='${e.textId}']`).remove();
                let a = $(t).children("header")
                  , n = i.children("div.list-item").length;
                a.children("h2").text(`Displaying ${n} record${n > 1 ? "s" : ""}`),
                n < 1 && _i()
            }
            ,
            e.showLocations = async function(e) {
                try {
                    await ot(et.INFO_WINDOW),
                    function(e) {
                        let a = $(t).children("div.body");
                        a.empty(),
                        e.forEach((e => {
                            i(e.layer, e.name, e.classification.getIconAsSVG()).appendTo(a).on("click", ( () => {
                                Ni(e)
                            }
                            ))
                        }
                        )),
                        n("Choose a location", e.length)
                    }(e),
                    Ze(t)
                } catch (e) {
                    pe(e)
                }
            }
            ,
            e.showAreas = async function(e) {
                try {
                    await ot(et.INFO_WINDOW),
                    function(e, a) {
                        let o = $(t).children("div.body");
                        o.empty(),
                        e.forEach((e => {
                            let t = a.find((t => t.id === e.id));
                            void 0 !== t && i(e.layer, t.name, e.classification.getIconAsSVG()).appendTo(o).on("click", ( () => {
                                Ni(e)
                            }
                            ))
                        }
                        )),
                        n("Choose an area", e.length)
                    }(e, await (o = e,
                    0 === o.length ? Promise.resolve([]) : a({
                        recordIds: o.map((e => e.id))
                    }))),
                    Ze(t)
                } catch (e) {
                    pe(e)
                }
                var o
            }
        }(Pi || (Pi = {})),
        function(e) {
            let t, i = "#iw-notes", a = "#iw-notes-create", n = "#iw-notes-close", o = !1;
            e.initialise = function() {
                !0 !== ki && ($(a).on("click", ( () => t.show())),
                $(n).on("click", ( () => {
                    !0 === o ? zi.show() : Si.show()
                }
                )),
                t.initialise())
            }
            ,
            e.show = async function(e=!1) {
                o = e,
                function(e) {
                    if (!wi)
                        throw new Error("No record is set. Unable to display notes.");
                    let r = $(i).find("div.body");
                    r.empty(),
                    $(a).hide(),
                    e.forEach((e => {
                        let i = (e => {
                            let t = $("<div>").addClass("note").appendTo(r)
                              , i = e.body.replace(/\r?\n/g, "<br/>");
                            return $("<p>").html(i).appendTo(t).linkify(),
                            $("<h6>").text(`${e.createdDate} by ${e.createdBy}`).appendTo(t),
                            t
                        }
                        )(e);
                        !0 === wi.layer.getPermissionForUser(ct.EDIT_DATA) && ($("<div>").addClass("button-colour blue-rev").text("Edit").appendTo(i).on("click", ( () => {
                            t.show(e)
                        }
                        )),
                        $("<div>").addClass("button-colour red-rev").text("Delete").appendTo(i).on("click", ( () => {
                            T({
                                tinyMode: !0,
                                okButtonOptions: {
                                    text: "Yes, delete it.",
                                    okFunction: async () => {
                                        await function(e) {
                                            return wi ? Ae("DeleteNote", {
                                                recordId: wi.id,
                                                organisationId: wi.layer.organisation.id,
                                                layerId: wi.layer.id,
                                                noteId: e.id
                                            }) : Promise.reject("No record is set. Unable to delete record note.")
                                        }(e),
                                        i.hide("fade", ( () => i.remove())),
                                        de()
                                    }
                                }
                            })
                        }
                        )))
                    }
                    )),
                    Ai(i, zi.getCurrentRecordHeader()),
                    !0 === wi.layer.getPermissionForUser(ct.EDIT_DATA) && $(a).show(),
                    !0 === o ? $(n).text("Back to record summary") : $(n).text("Back to action menu")
                }(await (wi ? Ae("getRecordNotes", {
                    recordId: wi.id,
                    layerId: wi.layer.id,
                    organisationId: wi.layer.organisation.id
                }) : Promise.reject("No record is set. Unable to fetch record notes."))),
                Ze(i)
            }
            ,
            function(t) {
                let i, a = "#iw-notes-edit", n = "#iw-notes-edit-save", r = "#iw-notes-edit-close";
                function s() {
                    i && !0 === i.hasChanges() ? (0 === l() ? $(n).show() : $(n).hide(),
                    $(r).text("Cancel unsaved changes")) : ($(n).hide(),
                    $(r).text("Cancel"))
                }
                function l() {
                    return $(a).children("div.body").find("*:invalid, *:out-of-range").length
                }
                t.initialise = function() {
                    !0 !== ki && ($(n).on("click", (async () => {
                        0 === l() ? (await (wi ? i && !1 === i.hasChanges() ? Promise.resolve() : $e("SaveNote", {
                            recordId: wi.id,
                            organisationId: wi.layer.organisation.id,
                            layerId: wi.layer.id,
                            noteId: i.currentValue.id,
                            body: i.currentValue.body
                        }) : Promise.reject("No record is set. Unable to save record note.")),
                        await e.show(o),
                        de(),
                        i = void 0) : pe("Please correct invalid input.")
                    }
                    )),
                    $(r).on("click", ( () => e.show(o))))
                }
                ,
                t.show = async function(e) {
                    await function(e) {
                        if (!wi)
                            return Promise.reject("No record is set. Unable to create or edit a note.");
                        let t = $(a).find("div.body");
                        return t.empty(),
                        i = new ri(e ? {
                            id: e.id,
                            body: e.body
                        } : {
                            id: null,
                            body: ""
                        }),
                        s(),
                        $("<textarea>").attr({
                            maxlength: "1000",
                            "data-gramm_editor": "false"
                        }).prop("required", !0).val(i.currentValue.body).appendTo(t).on("input", (e => {
                            i.currentValue.body = $(e.target).val(),
                            s()
                        }
                        )),
                        n = e ? "Edit note" : "Create new note",
                        $(a).children("header").children("h2").text(n),
                        Ai(a, zi.getCurrentRecordHeader()),
                        Promise.resolve();
                        var n
                    }(e),
                    Ze(a)
                }
            }(t || (t = {}))
        }(Ui || (Ui = {})),
        function(e) {
            let t, i = "#iw-share-sendlink", a = "#iw-share-sendlink-send";
            function n(e) {
                t = e
            }
            e.getSharingOptions = function() {
                return t
            }
            ,
            e.initialise = function() {
                !0 !== ki && ($(a).on("click", (async () => {
                    try {
                        await function() {
                            if (void 0 === wi)
                                return Promise.reject("Unable to send link. No current record is set.");
                            let e = [];
                            return $(i).children("div.body").find("input[type=email]").filter((function() {
                                return this.value.length > 0
                            }
                            )).each(( (t, i) => {
                                !0 === $(i).is(":valid") && e.push($(i).val())
                            }
                            )),
                            e.length < 1 ? Promise.reject("There are no valid receipient email addresses provided.") : $e("SendSharingLinks", {
                                recordId: wi.id,
                                layerId: wi.layer.id,
                                organisationId: wi.layer.organisation.id,
                                recipients: e
                            })
                        }(),
                        se.Notify.success("Your links have been sent."),
                        zi.show()
                    } catch (e) {
                        se.Notify.failure(e)
                    }
                }
                )),
                $("#iw-share-sendlink-close").on("click", ( () => Si.show())),
                $("#iw-share-sendlink-copyurl").on("click", (async () => {
                    let e = $("#iw-share-sendlink-url").val();
                    var t;
                    !0 === await (t = e,
                    (navigator.permissions && navigator.clipboard ? navigator.permissions.query({
                        name: "clipboard-write"
                    }).then((e => "granted" === e.state || "prompt" === e.state ? navigator.clipboard.writeText(t) : Promise.reject())) : Promise.reject()).then(( () => !0)).catch(( () => !1)).then((e => !1 !== e || function() {
                        let e = !1;
                        const i = document.createElement("textarea");
                        i.value = t,
                        i.setAttribute("readonly", ""),
                        i.style.position = "absolute",
                        i.style.left = "-9999px",
                        document.body.appendChild(i);
                        const a = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
                        return i.select(),
                        e = document.execCommand("copy"),
                        document.body.removeChild(i),
                        a && (document.getSelection().removeAllRanges(),
                        document.getSelection().addRange(a)),
                        !0 === e ? Promise.resolve() : Promise.reject()
                    }().then(( () => !0)).catch(( () => !1))))) ? se.Notify.success("Copied sharing link to clipboard.") : se.Notify.warning("Your browser does not support automatic copying. Please copy manually.")
                }
                )),
                $(i).find("input[type=email]").on("input", ( () => {
                    $(i).find("input[type=email]:valid").filter((function() {
                        return this.value.length > 0
                    }
                    )).length > 0 ? $(a).show() : $(a).hide()
                }
                )))
            }
            ,
            e.setSharingOptions = n,
            e.setSharing = async function(e) {
                if (void 0 === wi)
                    return Promise.reject("No current record. Unable to set sharing status.");
                let t = {
                    recordId: wi.id,
                    layerId: wi.layer.id,
                    organisationId: wi.layer.organisation.id,
                    enableSharing: e
                };
                n(await Ae("SetRecordSharing", t)),
                de()
            }
            ,
            e.showShareStatistics = async function() {
                return await async function() {
                    if (void 0 === wi)
                        return Promise.reject("No current record. Unable to get sharing statistics.");
                    let e = {
                        recordId: wi.id,
                        layerId: wi.layer.id,
                        organisationId: wi.layer.organisation.id
                    };
                    return await Ae("GetShareStatistics", e)
                }().then((e => function(e) {
                    let t = b().addClass("share-statistics")
                      , i = v().appendTo(t);
                    var a;
                    w("Total Views").appendTo(i),
                    (a = e.total,
                    $("<p>").addClass("headline-stat").text(a)).appendTo(i);
                    let n = v().appendTo(t);
                    if (w("Views by user").appendTo(n),
                    0 === e.users.length)
                        k().appendTo(n);
                    else {
                        let t = new Le(3);
                        t.addHeaders("User", "No. of views", "Last viewed"),
                        e.users.forEach((e => {
                            t.addData(e.email, e.views.toString(), e.lastView ?? "")
                        }
                        )),
                        t.table.appendTo(n)
                    }
                    x(e.users.length < 5 ? g.SMALL : g.LARGE, "Share Statistics", zi.getCurrentRecordHeader(), t, {
                        text: "OK",
                        okFunction: () => {
                            y()
                        }
                    })
                }(e)))
            }
            ,
            e.showSendLink = function() {
                return function() {
                    if (void 0 === t)
                        throw new Error("Record is not enabled for sharing. Unable to load content.");
                    let e = $(i).find("div.body");
                    $("#iw-share-sendlink-url").val(`${window.location.origin}/Sharing/Area/${t.link}`),
                    e.find("input[type=email]").val(""),
                    $(a).hide(),
                    Ai(i, zi.getCurrentRecordHeader())
                }(),
                Ze(i)
            }
        }(Wi || (Wi = {})),
        function(e) {
            e[e.TRANSPARENT = 0] = "TRANSPARENT",
            e[e.COLOURFUL = 1] = "COLOURFUL"
        }(Hi || (Hi = {})),
        function(e) {
            e[e.NONE = 0] = "NONE",
            e[e.PARTIAL = 8] = "PARTIAL",
            e[e.FULL = 9] = "FULL"
        }(ji || (ji = {}));
        class Xi {
            _countryId;
            _currentAnalysisMetaData = null;
            _currentAnalysisFormats = [];
            _enabled = !1;
            _filterColumns = [];
            _id;
            _isViewOnly;
            _layerType;
            _loadMethod;
            _maxZoom;
            _name;
            _on = !1;
            _organisation;
            _ownerOrganisationId;
            _protectionLevel;
            _shown = !0;
            _suppressions;
            _zIndex;
            get countryId() {
                return this._countryId
            }
            get currentAnalysisFormats() {
                return this._currentAnalysisFormats
            }
            get filterColumns() {
                return this._filterColumns
            }
            set filterColumns(e) {
                this._filterColumns = e,
                this._filterColumns.forEach(( (e, t) => e.order = t))
            }
            get id() {
                return this._id
            }
            get isEnabled() {
                return this._enabled
            }
            get isOn() {
                return this._on
            }
            get isPrivate() {
                return this._organisation.id === this._ownerOrganisationId
            }
            get isShown() {
                return this._shown
            }
            get isViewOnly() {
                return this._isViewOnly
            }
            get layerType() {
                return this._layerType
            }
            get loadMethod() {
                return this._loadMethod
            }
            get maxZoom() {
                return this._maxZoom
            }
            get name() {
                return this._name
            }
            get organisation() {
                return this._organisation
            }
            get protectionLevel() {
                return this._protectionLevel
            }
            get zIndex() {
                return this._zIndex
            }
            set zIndex(e) {
                this._zIndex = e
            }
            formatting;
            _classifications = [];
            _records = new Map;
            constructor(e, t, i, a) {
                var n;
                this._id = e.id,
                this._organisation = (n = e.accessingOrganisationId,
                In.get(n) || null),
                this._ownerOrganisationId = e.datasetOrganisationId,
                this._loadMethod = e.loadMethod,
                this._maxZoom = e.displayMaxZoom,
                this._name = e.name,
                this._isViewOnly = e.isViewOnly,
                this._suppressions = new Je(e.suppressions),
                this.formatting = a,
                this._protectionLevel = e.protectionLevel,
                this._countryId = t,
                this._zIndex = i,
                this._layerType = e.layerType
            }
            on() {
                this._on = !0
            }
            off() {
                Ti(this),
                this._on = !1
            }
            show() {
                this._shown = !0
            }
            hide() {
                this._shown = !1
            }
            enable() {
                this._enabled = !0
            }
            disable() {
                this._enabled = !1
            }
            applyFiltering(e) {
                const t = this.filterColumns.filter((e => null !== e.filter)).length > 0
                  , i = new Set(e);
                this._records.forEach((e => {
                    !1 === t ? e.setFiltered(!0) : e.setFiltered(i.has(e.id))
                }
                ))
            }
            checkZoom() {
                return yo().getZoom() >= this.maxZoom
            }
            getAnalysisFormattingForMapItem(e) {
                let t = this._currentAnalysisFormats.find((t => t.getMapItemId() === e));
                return t ? t.getFormat() : {}
            }
            get identifier() {
                return {
                    layerId: this.id,
                    organisationId: this.organisation.id
                }
            }
            getClassification(e) {
                return this._classifications.find((t => t.id === e)) || null
            }
            get classifications() {
                return this._classifications
            }
            get currentAnalysis() {
                return this._currentAnalysisMetaData?.getAnalysisType() ?? null
            }
            get currentAnalysisMetaData() {
                return this._currentAnalysisMetaData
            }
            getDetailsForMapItemLoad() {
                return {
                    layerId: this.id,
                    organisationId: this.organisation.id,
                    labelSettings: null,
                    filteredColumns: this._filterColumns.filter((e => null !== e.filter)).map((e => e.asServerObject())),
                    alreadyLoadedRecords: this.loadMethod === ne.LAZY ? Array.from(this._records.keys()) : []
                }
            }
            equals(e) {
                return this.id === e.id && this.organisation.id === e.organisation.id
            }
            getRecord(e) {
                return this._records.get(e) || null
            }
            getPermissionForUser(e) {
                let t = this.organisation.userPermissions;
                if (null === t)
                    switch (e) {
                    case ct.EDIT_BOUNDARIES:
                    case ct.EDIT_DATA:
                    case ct.EDIT_LOCATIONS:
                    case ct.CAN_REPORT:
                    case ct.CAN_EXPORT:
                        return !1;
                    case ct.VIEW_CLASSIFICATIONS:
                        return !this._suppressions.areClassificationsSuppressed();
                    case ct.VIEW_ADDRESS:
                        return !this._suppressions.areAddressSuppressed();
                    case ct.VIEW_CUSTOMFIELDS:
                        return !this._suppressions.areCustomFieldsSuppressed();
                    case ct.VIEW_DEMOGRAPHICS:
                        return !this._suppressions.areDemographicsSuppressed();
                    default:
                        throw new Error("Unexpected permission received.")
                    }
                else
                    switch (e) {
                    case ct.EDIT_BOUNDARIES:
                        return t.editBoundaries && !this.isViewOnly;
                    case ct.EDIT_DATA:
                        return t.editData && !this.isViewOnly;
                    case ct.EDIT_LOCATIONS:
                        return t.editLocations && !this.isViewOnly;
                    case ct.VIEW_CLASSIFICATIONS:
                        return t.viewClassifications;
                    case ct.VIEW_ADDRESS:
                        return t.viewAddress;
                    case ct.VIEW_CUSTOMFIELDS:
                        return t.viewCustomFields;
                    case ct.VIEW_DEMOGRAPHICS:
                        return t.viewDemographics;
                    case ct.CAN_REPORT:
                        return t.canReport;
                    case ct.CAN_EXPORT:
                        return t.canExport;
                    default:
                        throw new Error("Unexpected permission received.")
                    }
            }
            get textId() {
                return Xi.CreateLayerTextId(this.id, this.organisation.id)
            }
            recordCount() {
                return this._records.size
            }
            setCurrentAnalysis(e, t) {
                let i = $("#layerPane").find("div.layer[data-id=" + this.textId + "]").find("div.layerControls").find("span.analysis");
                null == e ? (this._currentAnalysisMetaData = null,
                this._currentAnalysisFormats = [],
                i.removeClass("toggled")) : (this._currentAnalysisMetaData = e,
                this._currentAnalysisFormats = t || [],
                i.addClass("toggled"))
            }
            static CreateLayerTextId(e, t) {
                return `${e}_${t}`
            }
        }
        class qi extends ue {
            _iconAsGoogleMapsSymbol;
            _overrideIconText;
            _overrideIconTextColour;
            constructor(e, t) {
                super(e, t),
                this._colour = U.fromHex(t?.overrideColour ?? this.layer.formatting.colour().asHex()),
                this._overrideIconText = t?.overrideIconText ?? null,
                this._overrideIconTextColour = U.fromHex(t?.overrideIconTextColour ?? this.layer.formatting.iconTextColour.asHex()),
                this._iconAsGoogleMapsSymbol = ge(0, {
                    height: 30,
                    colour: this.colour.asRgb()
                })
            }
            getIconAsSVG() {
                return ye(0, {
                    height: 30,
                    width: 30
                }, {
                    text: this.iconText,
                    textColour: this.iconTextColour,
                    fillColour: this.colour.asRgb()
                })
            }
            get iconSymbol() {
                return this._iconAsGoogleMapsSymbol
            }
            get iconText() {
                return this._overrideIconText ?? this.layer.formatting.iconText ?? void 0
            }
            get iconTextColour() {
                return this._overrideIconTextColour?.asHex() ?? this.layer.formatting.iconTextColour.asHex() ?? void 0
            }
        }
        class Yi extends we {
            _iconColour;
            _iconText;
            _iconTextColour;
            constructor(e) {
                super(),
                this._iconColour = U.fromHex(e?.iconColour ?? Yi.DefaultIconColour),
                this._iconText = e?.iconText ?? null,
                this._iconTextColour = U.fromHex(e?.iconTextColour ?? Yi.DefaultIconTTextColour)
            }
            get iconColour() {
                return this._iconColour
            }
            get iconText() {
                return this._iconText
            }
            get iconTextColour() {
                return this._iconTextColour
            }
            colour() {
                return this._iconColour
            }
            static DefaultIconColour = "#000000";
            static DefaultIconTTextColour = "#FFFFFF"
        }
        class Ki extends Xi {
            constructor(e, t, i) {
                super(e, t, i, new Yi(e.formatting)),
                this.addClassification(new qi(this)),
                this.filterColumns.push(new ui({
                    colType: 0,
                    id: null,
                    isExportable: !0,
                    name: "Name"
                },0)),
                this.filterColumns.push(new ui({
                    colType: 1,
                    id: null,
                    isExportable: !0,
                    name: "Unique Key"
                },1)),
                this.filterColumns.push(new ui({
                    colType: 2,
                    id: null,
                    isExportable: !0,
                    name: "Classification"
                },2))
            }
            addClassification(e) {
                this._classifications.push(e)
            }
            addLocation(e, t, i) {
                let a = this.getClassification(i.micId)
                  , n = new lt(i.id,i.name,this,a,e,t);
                this._records.set(i.id, n)
            }
            addLocations(e) {
                const t = this._records.size;
                return e.forEach((e => {
                    const t = this.getClassification(e.classificationId)
                      , i = new lt(e.id,e.name,this,t,e.lon,e.lat);
                    this._records.set(e.id, i)
                }
                )),
                this._records.size - t
            }
            records() {
                return Array.from(this._records.values())
            }
            removeRecord(e) {
                this._records.delete(e)
            }
            disable() {
                super.disable(),
                !0 === this.isOn && $i(this)
            }
            off() {
                super.off(),
                $i(this)
            }
        }
        !function(e) {
            e[e.HEAT_MAPPING = 0] = "HEAT_MAPPING"
        }(Vi || (Vi = {})),
        function(e) {
            e[e.VALUES = 0] = "VALUES",
            e[e.VALUES_DENSITY = 1] = "VALUES_DENSITY",
            e[e.PERCENTAGE_OF_BASE = 2] = "PERCENTAGE_OF_BASE",
            e[e.INDEX = 3] = "INDEX"
        }(Gi || (Gi = {}));
        class Zi {
            _analysisType;
            constructor(e) {
                this._analysisType = e
            }
            getAnalysisType() {
                return this._analysisType
            }
        }
        class Qi extends Zi {
            _demographicId;
            _valueType;
            _localisationOnLayerId;
            _groups;
            _numberOfGroups;
            constructor(e, t, i, a, n) {
                super(Vi.HEAT_MAPPING),
                this._demographicId = e,
                this._valueType = t,
                this._localisationOnLayerId = i,
                this._groups = null === a ? [] : a,
                this._numberOfGroups = n
            }
            getDemographicId() {
                return this._demographicId
            }
            getHeatMappingGroups() {
                return this._groups
            }
            getHeatMappingValueType() {
                return this._valueType
            }
            getLocalisationOnLayerId() {
                return this._localisationOnLayerId
            }
            getNumberOfGroups() {
                return this._numberOfGroups
            }
        }
        class Ji {
            _id;
            _options;
            constructor(e, t) {
                this._id = e,
                this._options = t
            }
            getMapItemId() {
                return this._id
            }
            getFormat() {
                return this._options
            }
        }
        class ea {
            static instance;
            constructor() {
                for (let e = 1; e < 21; e++)
                    this.heatMapping.palette.push(q(e))
            }
            static get Instance() {
                return this.instance || (this.instance = new ea),
                this.instance
            }
            settings = {
                isOn: !1,
                currentLayer: null
            };
            heatMapping = {
                palette: [],
                opacity: .6,
                getColour: (e, t) => this.heatMapping.palette[e][t],
                getPolygonOptions: (e, t) => {
                    let i = {
                        fillColor: "#FFFFFF",
                        fillOpacity: 0
                    };
                    return null === t || null === e || (i.fillColor = this.heatMapping.palette[e][t],
                    i.fillOpacity = this.heatMapping.opacity),
                    i
                }
            };
            async getHeatMappingData(e, t, i, a, n, o) {
                void 0 === o && (o = null);
                let r = {
                    layerId: e,
                    organisationId: t,
                    demographicId: i,
                    thematicValueType: a,
                    localisationOnLayerId: o,
                    numberOfGroups: n
                }
                  , s = await (l = r,
                Ae("HeatMappingAnalysis", l));
                var l;
                de(),
                (r => {
                    let s = [];
                    r.mapItems.forEach((e => {
                        let t = this.heatMapping.getPolygonOptions(null === o ? r.numberOfGroups - 1 : e.maxGroup, e.group);
                        s.push(new Ji(e.id,t))
                    }
                    )),
                    null === r.groups || 0 === r.groups.length ? $("#heatMappingLegend").hide() : ($("#heatMappingLegend").show(),
                    this.setHeatMappingLegendItems(r.groups, a));
                    let l = zn(e, t);
                    if (null === l)
                        throw new Error("Application layer could not be found.");
                    let c = new Qi(i,a,void 0 === o ? null : o,r.groups,n);
                    l.setCurrentAnalysis(c, s)
                }
                )(s),
                this._showHideClearHeatMappingButton()
            }
            setHeatMappingLegendItems(e, t) {
                let i = $("#heatMappingLegendItems");
                i.empty(),
                e.forEach(( (a, n) => {
                    let o = ( (e, i, a) => {
                        let n = ">";
                        0 === e && (n = ">=");
                        let o = $("<div>").addClass("heatMappingLegendItem")
                          , r = `${n} ${a.minValue} and <= ${a.maxValue}`;
                        return t === Gi.VALUES_DENSITY && (r += " per sq. Km"),
                        $("<p>").addClass("up oneLine").text(a.countItems + " areas").appendTo(o),
                        $("<p>").addClass("std oneLine").text(r).appendTo(o),
                        o
                    }
                    )(n, e.length, a);
                    o.css("border-left-color", new U(255,255,255).add(U.fromHex(this.heatMapping.getColour(e.length - 1, n), this.heatMapping.opacity)).asRgb()),
                    o.appendTo(i)
                }
                ))
            }
            handleSelectedHeatMappingDemographic() {
                let e = $("#heatMappingDemographicOptions")
                  , t = e.children("option:selected")
                  , i = $("#heat-mapping-values")
                  , a = $("#heat-mapping-pob");
                -1 === parseInt(e.val()) ? (i.prop("checked", !0),
                a.prop("disabled", !1)) : (a.prop("disabled", !1),
                !0 !== t.data("hasBase") && (a.prop("disabled", !0),
                !0 === a.is(":checked") && i.prop("checked", !0)))
            }
            loadAnalysis(e) {
                if (null === this.settings.currentLayer)
                    return Promise.reject("No current layer set for analysis.");
                if (null !== this.settings.currentLayer.currentAnalysis && this.settings.currentLayer.currentAnalysis !== e && this.clear(!0),
                !1 === ( () => e === Vi.HEAT_MAPPING && this.settings.currentLayer instanceof Sa)())
                    return Promise.reject(`Analysis type (${e}) not available for current layer.`);
                if (e === Vi.HEAT_MAPPING)
                    return (async () => {
                        let e = {
                            layerId: this.settings.currentLayer.id,
                            organisationId: this.settings.currentLayer.organisation.id
                        };
                        var t;
                        (e => {
                            let t = null;
                            this.settings.currentLayer.currentAnalysis === Vi.HEAT_MAPPING && (t = this.settings.currentLayer.currentAnalysisMetaData);
                            let i = $("#heatMappingDemographicOptions")
                              , a = $("#heatMappingNumberGroups");
                            if (i.off(),
                            i.children("option:not(:first-child)").remove(),
                            i.next(".nice-select").off().remove(),
                            e.demographics.forEach((e => {
                                $("<option>").attr("value", e.id).data("hasBase", e.hasBase).text(e.title).appendTo(i)
                            }
                            )),
                            null !== t ? (i.children().prop("selected", !1).filter("[value=" + t.getDemographicId() + "]").prop("selected", !0),
                            a.children().prop("selected", !1).filter("[value=" + t.getNumberOfGroups() + "]").prop("selected", !0)) : a.children().prop("selected", !1).filter("[value=15]").prop("selected", !0),
                            this.handleSelectedHeatMappingDemographic(),
                            i.on("change", ( () => {
                                this.handleSelectedHeatMappingDemographic()
                            }
                            )),
                            i.niceSelect(),
                            a.niceSelect("update"),
                            null !== t)
                                switch (t.getHeatMappingValueType()) {
                                case Gi.VALUES:
                                    $("#heat-mapping-values").prop("checked", !0);
                                    break;
                                case Gi.VALUES_DENSITY:
                                    $("#heat-mapping-density").prop("checked", !0);
                                    break;
                                case Gi.PERCENTAGE_OF_BASE:
                                    $("#heat-mapping-pob").prop("checked", !0);
                                    break;
                                case Gi.INDEX:
                                    break;
                                default:
                                    throw new Error("Unexpected heat mapping value type received.")
                                }
                            let n = $("#heatMappingLocalisationOptions");
                            if (n.children("option:not(:first-child)").remove(),
                            n.next(".nice-select").off().remove(),
                            0 === e.layers.length)
                                $("#heatMappingLocalisation").hide();
                            else if ($("#heatMappingLocalisation").show(),
                            e.layers.forEach((e => {
                                $("<option>").attr("value", e.layerId).data("organisationId", e.organisationId).text(e.name).appendTo(n)
                            }
                            )),
                            null !== t) {
                                let e = t.getLocalisationOnLayerId();
                                null !== e && n.children().prop("selected", !1).filter("[value=" + e + "]").prop("selected", !0)
                            }
                            null === t ? $("#heatMappingLegend").hide().find("#heatMappingLegendItems").empty() : (this.setHeatMappingLegendItems(t.getHeatMappingGroups(), t.getHeatMappingValueType()),
                            $("#heatMappingLegend").show()),
                            n.niceSelect(),
                            this._showHideClearHeatMappingButton(),
                            Ye("#heatMapping")
                        }
                        )(await (t = e,
                        Ae("GetHeatMappingOptions", t)))
                    }
                    )();
                throw Promise.reject("Unexpected analysis type on load.")
            }
            applyHeatMapping() {
                let e = $("#heatMappingDemographicOptions")
                  , t = $('#heatMapping > div.body input[type="radio"]:checked')
                  , i = $("#heatMappingLocalisationOptions")
                  , a = $("#heatMappingNumberGroups")
                  , n = parseInt(e.val())
                  , o = parseInt(t.val())
                  , r = parseInt(i.val())
                  , s = parseInt(a.val());
                -1 !== n ? (-1 === r && (r = null),
                this.getHeatMappingData(this.settings.currentLayer.id, this.settings.currentLayer.organisation.id, n, o, s, r)) : pe("You must select a demographic to apply heat mapping.")
            }
            clear(e) {
                let t = this.settings.currentLayer.currentAnalysis;
                if (null === t)
                    return Promise.resolve();
                return t === Vi.HEAT_MAPPING && !0 === e && ( () => {
                    (this.settings.currentLayer instanceof Sa || this.settings.currentLayer instanceof Ki) && this.settings.currentLayer.setCurrentAnalysis()
                }
                )(),
                Promise.resolve()
            }
            async clearLayerAnalysis(e) {
                if (null !== this.settings.currentLayer)
                    return this.clear(!0);
                this.settings.currentLayer = e,
                await this.clear(!0),
                this.settings.currentLayer = null
            }
            _showHideClearHeatMappingButton() {
                let e = $("#clearHeatMapping")
                  , t = !1;
                null === this.settings.currentLayer ? t = !1 : this.settings.currentLayer.currentAnalysis === Vi.HEAT_MAPPING && (t = !0),
                !0 === t ? e.show().one("click", (async () => {
                    await this.clear(!0),
                    this.close()
                }
                )) : e.hide().off()
            }
            async close() {
                await this.clear(!1),
                await Yn(this.settings.currentLayer.id, this.settings.currentLayer.organisation.id),
                ( () => {
                    this.settings.currentLayer = null,
                    this.settings.isOn = !1
                }
                )()
            }
            getCurrentLayer() {
                return this.settings.currentLayer
            }
            isOn() {
                return this.settings.isOn
            }
            openHeatMapping(e) {
                return this.settings.currentLayer = e,
                $("#heatMapping").find("header > h1").text(e.name),
                this.loadAnalysis(Vi.HEAT_MAPPING)
            }
            reapplyAnalysis(e) {
                let t = null;
                if (null !== (t = e.currentAnalysis))
                    switch (t) {
                    case Vi.HEAT_MAPPING:
                        {
                            let t = e.currentAnalysisMetaData
                              , i = t.getDemographicId()
                              , a = t.getHeatMappingValueType()
                              , n = t.getLocalisationOnLayerId();
                            this.getHeatMappingData(e.id, e.organisation.id, i, a, t.getNumberOfGroups(), n);
                            break
                        }
                    default:
                        return
                    }
            }
        }
        class ta {
            canvasMap;
            shape = void 0;
            shapeOptions = {
                fillColor: "#cccccc",
                fillOpacity: .3,
                strokeWeight: 3,
                strokeColor: "#000000",
                clickable: !1,
                editable: !0,
                zIndex: 99999
            };
            drawingManager;
            constructor(e, t) {
                this.canvasMap = e,
                this.drawingManager = new google.maps.drawing.DrawingManager({
                    drawingControl: !1,
                    drawingControlOptions: {
                        drawingModes: this.getDrawingModes()
                    },
                    circleOptions: this.shapeOptions,
                    polygonOptions: this.shapeOptions,
                    map: this.canvasMap
                }),
                google.maps.event.addListener(this.drawingManager, "overlaycomplete", (e => {
                    e.overlay.setMap(null),
                    this.shape = e.overlay,
                    this.cancelDrawing(),
                    t(this.shape)
                }
                ))
            }
            cancelDrawing() {
                this.drawingManager.setMap(null)
            }
            dispose() {
                this.cancelDrawing()
            }
            getShape() {
                return this.shape
            }
        }
        class ia extends ta {
            constructor(e, t) {
                super(e, t),
                this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON)
            }
            getDrawingModes() {
                return [google.maps.drawing.OverlayType.POLYGON]
            }
        }
        class aa extends ta {
            constructor(e, t) {
                super(e, t),
                this.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.CIRCLE)
            }
            getDrawingModes() {
                return [google.maps.drawing.OverlayType.CIRCLE]
            }
        }
        const na = {
            alignBottom: !1,
            boxClass: "infoBox",
            boxStyle: {},
            content: "",
            disableAutoPan: !1,
            enableEventPropagation: !1,
            maxWidth: 0,
            pane: "floatPane",
            pixelOffset: void 0,
            position: void 0,
            visible: !0,
            zIndex: 0
        };
        class oa extends google.maps.OverlayView {
            alignBottom_;
            boxClass_;
            boxStyle_;
            closeBoxURL_;
            content_;
            disableAutoPan_;
            enableEventPropagation_;
            fixedWidthSet_;
            maxWidth_;
            pane_;
            pixelOffset_;
            position_;
            isHidden_;
            zIndex_;
            closeListener_ = null;
            contextListener_ = null;
            eventListeners_ = [];
            moveListener_ = null;
            div_;
            constructor(e) {
                super(),
                this.content_ = e?.content ?? na.content,
                this.disableAutoPan_ = e?.disableAutoPan ?? na.disableAutoPan,
                this.maxWidth_ = e?.maxWidth ?? na.maxWidth,
                this.pixelOffset_ = e?.pixelOffset ?? (void 0 === na.pixelOffset && (na.pixelOffset = new google.maps.Size(0,0)),
                na.pixelOffset),
                this.position_ = e?.position ?? (void 0 === na.position && (na.position = new google.maps.LatLng(0,0)),
                na.position),
                this.zIndex_ = e?.zIndex ?? na.zIndex,
                this.boxClass_ = e?.boxClass ?? na.boxClass,
                this.boxStyle_ = e?.boxStyle ?? na.boxStyle,
                this.closeBoxURL_ = "",
                this.isHidden_ = !e.visible,
                this.alignBottom_ = e?.alignBottom ?? na.alignBottom,
                this.pane_ = e?.pane ?? na.pane,
                this.enableEventPropagation_ = e?.enableEventPropagation ?? na.enableEventPropagation,
                this.div_ = null,
                this.closeListener_ = null,
                this.moveListener_ = null,
                this.contextListener_ = null,
                this.eventListeners_ = null,
                this.fixedWidthSet_ = !1
            }
            addClickHandler_() {
                var e;
                "" !== this.closeBoxURL_ ? (e = this.div_.firstChild,
                this.closeListener_ = google.maps.event.addDomListener(e, "click", this.getCloseClickHandler_())) : this.closeListener_ = null
            }
            close() {
                this.closeListener_ && (google.maps.event.removeListener(this.closeListener_),
                this.closeListener_ = null),
                this.eventListeners_ && (this.eventListeners_.forEach((e => google.maps.event.removeListener(e))),
                this.eventListeners_ = []),
                this.moveListener_ && (google.maps.event.removeListener(this.moveListener_),
                this.moveListener_ = null),
                this.contextListener_ && (google.maps.event.removeListener(this.contextListener_),
                this.contextListener_ = null),
                this.setMap(null)
            }
            createInfoBoxDiv_() {
                var e, t, i, a = this, n = function(e) {
                    e.cancelBubble = !0,
                    e.stopPropagation && e.stopPropagation()
                };
                if (!this.div_) {
                    if (this.div_ = document.createElement("div"),
                    this.setBoxStyle_(),
                    this.div_.innerHTML = this.content_,
                    this.getPanes()[this.pane_].appendChild(this.div_),
                    this.addClickHandler_(),
                    this.div_.style.width ? this.fixedWidthSet_ = !0 : 0 !== this.maxWidth_ && this.div_.offsetWidth > this.maxWidth_ ? (this.div_.style.width = this.maxWidth_.toString(),
                    this.div_.style.overflow = "auto",
                    this.fixedWidthSet_ = !0) : (i = this.getBoxWidths_(),
                    this.div_.style.width = this.div_.offsetWidth - i.left - i.right + "px",
                    this.fixedWidthSet_ = !1),
                    this.panBox_(this.disableAutoPan_),
                    !this.enableEventPropagation_) {
                        for (this.eventListeners_ = [],
                        t = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"],
                        e = 0; e < t.length; e++)
                            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, t[e], n));
                        this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", (function(e) {
                            this.style.cursor = "default"
                        }
                        )))
                    }
                    this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", (function(e) {
                        e.returnValue = !1,
                        e.preventDefault && e.preventDefault(),
                        a.enableEventPropagation_ || n(e)
                    }
                    )),
                    google.maps.event.trigger(this, "domready")
                }
            }
            draw() {
                this.createInfoBoxDiv_();
                var e = this.getProjection().fromLatLngToDivPixel(this.position_);
                this.div_.style.left = e.x + this.pixelOffset_.width + "px",
                this.alignBottom_ ? this.div_.style.bottom = -(e.y + this.pixelOffset_.height) + "px" : this.div_.style.top = e.y + this.pixelOffset_.height + "px",
                this.isHidden_ ? this.div_.style.visibility = "hidden" : this.div_.style.visibility = "visible"
            }
            getBoxWidths_() {
                let e, t = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                };
                return document.defaultView && document.defaultView.getComputedStyle && (e = this.div_.ownerDocument.defaultView.getComputedStyle(this.div_, ""),
                e && (t.top = parseInt(e.borderTopWidth, 10) || 0,
                t.bottom = parseInt(e.borderBottomWidth, 10) || 0,
                t.left = parseInt(e.borderLeftWidth, 10) || 0,
                t.right = parseInt(e.borderRightWidth, 10) || 0)),
                t
            }
            getCloseBoxImg_ = () => "";
            getCloseClickHandler_() {
                return e => {
                    e.stopPropagation && e.stopPropagation(),
                    google.maps.event.trigger(this, "closeclick"),
                    this.close()
                }
            }
            getContent = () => this.content_;
            getPosition = () => this.position_;
            getVisible() {
                return void 0 !== this.getMap() && null !== this.getMap() && !this.isHidden_
            }
            getZIndex = () => this.zIndex_;
            onRemove() {
                this.div_?.parentNode.removeChild(this.div_)
            }
            open(e, t) {
                t && (this.position_ = t.getPosition(),
                this.moveListener_ = google.maps.event.addListener(t, "position_changed", ( () => this.setPosition(t.getPosition())))),
                this.setMap(e),
                this.div_ && this.panBox_()
            }
            panBox_(e) {
                if (!e) {
                    const e = this.getMap();
                    if (e instanceof google.maps.Map) {
                        e.getBounds().contains(this.position_) || e.setCenter(this.position_);
                        const t = e.getDiv()
                          , i = t.offsetWidth
                          , a = t.offsetHeight
                          , n = this.pixelOffset_.width
                          , o = this.pixelOffset_.height
                          , r = this.div_.offsetWidth
                          , s = this.div_.offsetHeight
                          , l = this.getProjection().fromLatLngToContainerPixel(this.position_);
                        let c = 0
                          , d = 0;
                        l.x < -n ? c = l.x + n : l.x + r + n > i && (c = l.x + r + n - i),
                        this.alignBottom_ ? l.y < -o + s ? d = l.y + o - s : l.y + o > a && (d = l.y + o - a) : l.y < -o ? d = l.y + o : l.y + s + o > a && (d = l.y + s + o - a),
                        0 === c && 0 === d || e.panBy(c, d)
                    }
                }
            }
            setBoxStyle_() {
                var e, t;
                if (this.div_) {
                    for (e in this.div_.className = this.boxClass_,
                    this.div_.style.cssText = "",
                    t = this.boxStyle_)
                        t.hasOwnProperty(e) && (this.div_.style[e] = t[e]);
                    this.div_.style.transform = "translateZ(0)",
                    void 0 !== this.div_.style.opacity && "" !== this.div_.style.opacity && (this.div_.style.filter = "alpha(opacity=" + 100 * Number.parseFloat(this.div_.style.opacity) + ")"),
                    this.div_.style.position = "absolute",
                    this.div_.style.visibility = "hidden",
                    null !== this.zIndex_ && (this.div_.style.zIndex = this.zIndex_.toString())
                }
            }
            setOptions(e) {
                void 0 !== e.boxClass && (this.boxClass_ = e.boxClass),
                void 0 !== e.boxStyle && (this.boxStyle_ = e.boxStyle),
                void 0 === e.boxClass && void 0 === e.boxStyle || this.setBoxStyle_(),
                void 0 !== e.content && this.setContent(e.content),
                void 0 !== e.disableAutoPan && (this.disableAutoPan_ = e.disableAutoPan),
                void 0 !== e.maxWidth && (this.maxWidth_ = e.maxWidth),
                void 0 !== e.pixelOffset && (this.pixelOffset_ = e.pixelOffset),
                void 0 !== e.alignBottom && (this.alignBottom_ = e.alignBottom),
                void 0 !== e.position && this.setPosition(e.position),
                void 0 !== e.zIndex && this.setZIndex(e.zIndex),
                void 0 !== e.visible && (this.isHidden_ = !e.visible),
                void 0 !== e.enableEventPropagation && (this.enableEventPropagation_ = e.enableEventPropagation),
                this.div_ && this.draw()
            }
            setContent(e) {
                this.content_ = e,
                null !== this.div_ && void 0 !== this.div_ && (null !== this.closeListener_ && (google.maps.event.removeListener(this.closeListener_),
                this.closeListener_ = null),
                this.div_.innerHTML = e,
                google.maps.event.trigger(this, "content_changed"))
            }
            setPosition(e) {
                this.position_ = e,
                this.div_ && this.draw(),
                google.maps.event.trigger(this, "position_changed")
            }
            setVisible(e) {
                this.isHidden_ = !e,
                this.div_ && (this.div_.style.visibility = this.isHidden_ ? "hidden" : "visible")
            }
            setZIndex(e) {
                this.zIndex_ = e,
                this.div_ && (this.div_.style.zIndex = e.toString()),
                google.maps.event.trigger(this, "zindex_changed")
            }
        }
        class ra {
            areaShapeEventListeners = new Map;
            currentArea;
            targetLayer;
            name;
            areaShape;
            constructor(e) {
                e instanceof Na ? (this.currentArea = e,
                this.targetLayer = e.layer) : e instanceof Sa && (this.targetLayer = e)
            }
            addEvent(e, t) {
                void 0 !== this.areaShape && (this.areaShapeEventListeners.get(e)?.remove(),
                this.areaShapeEventListeners.set(e, google.maps.event.addListener(this.areaShape, e, t)))
            }
            remove() {
                this.areaShapeEventListeners.forEach(( (e, t) => {
                    e.remove(),
                    this.areaShapeEventListeners.delete(t)
                }
                )),
                this.areaShape?.setMap(null),
                this.areaShape = void 0
            }
            get shape() {
                return this.areaShape
            }
            getShapeOptions() {
                return {
                    map: yo(),
                    strokeColor: "#e63433",
                    strokeWeight: 5,
                    zIndex: 999998
                }
            }
        }
        class sa {
            radius;
            centerMarker;
            dragMarker;
            radialLine;
            infoBox;
            mouseMoveListener;
            dragListener;
            dragStartListener;
            dragEndListener;
            updateFunction;
            constructor(e, t) {
                this.radius = e,
                this.updateFunction = t,
                this.createCentreMarker(),
                this.createDragMarker(),
                this.createRadialLine(),
                this.setMouseMoveListener(),
                this.setDragListeners()
            }
            createCentreMarker() {
                void 0 === this.centerMarker && (this.centerMarker = new google.maps.Marker({
                    map: yo(),
                    position: this.radius.getCenter(),
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: "#142737",
                        fillOpacity: 1,
                        strokeColor: "#fff",
                        strokeWeight: 2,
                        scale: 10
                    }
                }),
                this.infoBox = new oa({
                    alignBottom: !0,
                    boxStyle: {
                        "background-color": "#fff",
                        padding: "10px",
                        "border-radius": "4px",
                        "text-align": "center",
                        width: "100px"
                    },
                    pixelOffset: new google.maps.Size(-50,50),
                    visible: !0
                }),
                this.refreshInfoBox(),
                this.infoBox.open(yo(), this.centerMarker))
            }
            createDragMarker() {
                void 0 === this.dragMarker && (this.dragMarker = new google.maps.Marker({
                    map: yo(),
                    draggable: !0,
                    position: google.maps.geometry.spherical.computeOffset(this.radius.getCenter(), this.radius.getRadius(), 0),
                    title: "Move me",
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        fillColor: "#e63433",
                        fillOpacity: 1,
                        strokeColor: "#fff",
                        strokeWeight: 2,
                        scale: 10
                    }
                }))
            }
            createRadialLine() {
                this.radialLine = new google.maps.Polyline({
                    map: yo(),
                    path: [this.centerMarker.getPosition(), this.dragMarker.getPosition()],
                    strokeOpacity: 0,
                    icons: [{
                        icon: {
                            path: "M0 -1L0 1",
                            strokeColor: "#e63433",
                            fillColor: "#e63433",
                            strokeOpacity: 1,
                            strokeWeight: 4,
                            scale: 4
                        },
                        offset: "0",
                        repeat: "20px"
                    }, {
                        icon: {
                            path: "M0 -1L0 1",
                            strokeColor: "#fff",
                            fillColor: "#fff",
                            strokeOpacity: 1,
                            strokeWeight: 2,
                            scale: 3
                        },
                        offset: "0px",
                        repeat: "20px"
                    }]
                })
            }
            setDragListeners() {
                this.dragListener = google.maps.event.addListener(this.dragMarker, "drag", (e => {
                    const t = this.centerMarker.getPosition() ?? null;
                    if (null === t || null === e.latLng)
                        return;
                    const i = google.maps.geometry.spherical.computeDistanceBetween(t, e.latLng);
                    this.radialLine.getPath().setAt(1, e.latLng),
                    this.radius.setRadius(i),
                    this.refreshInfoBox()
                }
                )),
                this.dragStartListener = google.maps.event.addListener(this.dragMarker, "dragstart", (e => $a.displayStage1())),
                this.dragEndListener = google.maps.event.addListener(this.dragMarker, "dragend", (e => {
                    this.updateFunction()
                }
                ))
            }
            refreshInfoBox() {
                this.infoBox.setContent(function(e, t, i, a=!1) {
                    return `${oe(e, t, i).toLocaleString()} ${re(i, a)}`
                }(this.radius.getRadius(), 1, xi().distanceUnits, !0))
            }
            setMouseMoveListener() {
                this.mouseMoveListener = google.maps.event.addListener(yo(), "mousemove", (e => {
                    const t = this.centerMarker.getPosition() ?? null;
                    if (null === t || null === e.latLng)
                        return;
                    const i = google.maps.geometry.spherical.computeHeading(t, e.latLng)
                      , a = google.maps.geometry.spherical.computeOffset(t, this.radius.getRadius(), i);
                    this.dragMarker.setPosition(a),
                    this.radialLine.getPath().setAt(1, a)
                }
                ))
            }
            remove() {
                this.mouseMoveListener?.remove(),
                this.dragListener?.remove(),
                this.dragStartListener?.remove(),
                this.dragEndListener?.remove(),
                this.centerMarker?.setMap(null),
                this.dragMarker?.setMap(null),
                this.radialLine?.setMap(null),
                this.infoBox.close()
            }
            setRadius(e) {
                if (e <= 0)
                    return;
                this.radius.setRadius(e);
                const t = google.maps.geometry.spherical.computeHeading(this.centerMarker.getPosition(), this.dragMarker.getPosition())
                  , i = google.maps.geometry.spherical.computeOffset(this.centerMarker.getPosition(), e, t);
                this.dragMarker.setPosition(i),
                this.radialLine.getPath().setAt(1, i),
                this.refreshInfoBox()
            }
        }
        class la extends ra {
            radialWidget;
            constructor(e, t) {
                let i;
                super(e);
                let a = 0;
                if (void 0 !== this.currentArea)
                    i = this.currentArea.boundary.getCenter(),
                    a = this.currentArea.boundary.getRadius();
                else {
                    if (void 0 === t)
                        throw new Error("RadialAreaBuilder: No options on create.");
                    i = new google.maps.LatLng(t.y,t.x),
                    a = oe(1, xi().distanceUnits, 1),
                    this.name = t.name
                }
                const n = this.updateShape({
                    centre: i,
                    radius: a
                });
                this.radialWidget = new sa(n,( () => this.requestUpdate()))
            }
            fitShape() {
                this.areaShape instanceof google.maps.Circle && !1 === mo(this.areaShape.getBounds()) && yo().fitBounds(this.areaShape.getBounds())
            }
            remove() {
                this.radialWidget?.remove(),
                super.remove()
            }
            async requestUpdate() {
                this.fitShape(),
                void 0 !== this.shape && await La(this.shape)
            }
            updateShape(e) {
                if (void 0 === this.shape) {
                    if (void 0 === e.centre)
                        throw new Error("Unable to create radial area. No centre point defined.");
                    if (void 0 === e.radius)
                        throw new Error("Unable to create radial area. No radius size defined.");
                    const t = super.getShapeOptions();
                    t.center = e.centre,
                    t.radius = e.radius,
                    t.clickable = !1,
                    this.areaShape = new google.maps.Circle(t)
                } else
                    void 0 !== e.radius && this.radialWidget.setRadius(e.radius);
                return this.fitShape(),
                this.shape
            }
            get shape() {
                return super.shape
            }
        }
        class ca extends ra {
            _polyLines = [];
            constructor(e) {
                super(e),
                e instanceof Na && this.updatePolygon(e.boundary.getPaths())
            }
            clearPolyLines() {
                this._polyLines.forEach((e => e.setMap(null))),
                this._polyLines = []
            }
            remove() {
                super.remove(),
                this.clearPolyLines()
            }
            updatePolygon(e) {
                if (this.clearPolyLines(),
                null === e)
                    this.areaShape instanceof google.maps.Polygon && (this.areaShape.setMap(null),
                    this.areaShape = void 0);
                else {
                    const i = e instanceof google.maps.MVCArray ? (t = e,
                    new google.maps.MVCArray(t?.getArray().map((e => xa(e, !1))))) : G(e);
                    if (void 0 === this.shape) {
                        const e = super.getShapeOptions();
                        e.paths = i,
                        e.clickable = !1,
                        this.areaShape = new google.maps.Polygon(e)
                    } else
                        this.shape.setPaths(i);
                    i.forEach(( (e, t) => {
                        const i = xa(e, !0);
                        this._polyLines.push(new google.maps.Polyline({
                            path: i,
                            map: yo(),
                            strokeOpacity: 0,
                            icons: [{
                                icon: {
                                    path: "M 0,-1 0,1",
                                    strokeOpacity: 1,
                                    strokeWeight: 2,
                                    strokeColor: "white",
                                    scale: 3
                                },
                                offset: "0",
                                repeat: "12px"
                            }],
                            zIndex: 999999
                        }))
                    }
                    ))
                }
                var t;
                return this.areaShape
            }
            get shape() {
                return super.shape
            }
        }
        class da extends ca {
            eventListeners = [];
            _updateOnBoundaryChanges = !0;
            constructor(e) {
                super(e)
            }
            updatePolygon(e) {
                return this.eventListeners?.forEach((e => e.remove())),
                this.eventListeners = [],
                super.updatePolygon(e),
                this.areaShape?.setEditable(!0),
                this.areaShape?.getPaths().forEach(( (e, t) => {
                    ["insert_at", "remove_at", "set_at"].forEach((i => {
                        this.eventListeners.push(e.addListener(i, ( () => {
                            try {
                                this._polyLines[t].setPath(xa(e, !0)),
                                !0 === this._updateOnBoundaryChanges && Ta(this.areaShape, !1)
                            } catch (e) {
                                alert(`An error occurred in the hand-drawn shape events: ${e}.`)
                            }
                        }
                        )))
                    }
                    ))
                }
                )),
                this.shape
            }
            get updateOnBoundaryChange() {
                return this._updateOnBoundaryChanges
            }
            set updateOnBoundaryChange(e) {
                this._updateOnBoundaryChanges = e
            }
        }
        class pa extends ca {
            _selectedAreas = new Set;
            targetBaseLayer;
            constructor(e) {
                if (super(e),
                null === this.targetLayer.baseLayerId || !1 === this.targetLayer.baseLayerIsAvailable())
                    throw new Error("AggregatedAreaBuilder: Target base layer unavailable.");
                this.targetBaseLayer = zn(this.targetLayer.baseLayerId, this.targetLayer.organisation.id)
            }
            handleAreaSelection(e, t) {
                let i = !1;
                return Array.isArray(e) ? e.forEach((e => {
                    !0 === t ? i = i || this.handleAreaSelection(e, t) : (this._selectedAreas.add(e),
                    i = !0)
                }
                )) : (!0 === t && this._selectedAreas.has(e) ? this._selectedAreas.delete(e) : this._selectedAreas.add(e),
                i = !0),
                i
            }
            get selectedAreas() {
                return Array.from(this._selectedAreas.values())
            }
        }
        let ua, fa = !1, ha = !1, ma = !1;
        async function ga(e, t) {
            $a.initialise();
            try {
                await ot(et.AREA_EDITOR);
                const i = e instanceof Na ? e.layer.layerType : e.layerType;
                switch (i) {
                case ae.AGGREGATED:
                    ua = new pa(e);
                    break;
                case ae.CUSTOM_AREA:
                    ua = new da(e);
                    break;
                case ae.RADIAL:
                    if (e instanceof Sa && void 0 === t)
                        throw new Error("Starting location for new radial area was not provided.");
                    ua = new la(e,t);
                    break;
                default:
                    throw new Error(`${function(e) {
                        switch (e) {
                        case ae.BASE_LAYER:
                        case ae.BASE_LAYER_ON_HIERARCHY:
                            return "Base Areas";
                        case ae.AGGREGATED:
                            return "Aggregated Areas";
                        case ae.CUSTOM_AREA:
                            return "Hand-drawn Areas";
                        case ae.RADIAL:
                            return "Radial Areas";
                        case ae.LOCATIONS:
                            return "Locations";
                        case ae.GEOCODING:
                            return "Geocoding";
                        default:
                            return ""
                        }
                    }(i)} is not valid for area editing.`)
                }
                if (void 0 !== ua.shape) {
                    let e;
                    ua instanceof ca ? e = H(ua.shape) : ua instanceof la && (e = ua.shape.getBounds()),
                    void 0 !== e && yo().fitBounds(e)
                }
                await $a.show()
            } catch (e) {
                pe(e),
                at()
            }
        }
        function ya(e) {
            return ha && void 0 !== ua && (ua.targetLayer.equals(e) || ua instanceof pa && ua.targetBaseLayer.equals(e))
        }
        function xa(e, t) {
            const i = new google.maps.MVCArray(e.getArray().map((e => new google.maps.LatLng(e.lat(),e.lng()))));
            if (!0 === t) {
                const e = i.getAt(0)
                  , t = i.getAt(i.getLength() - 1);
                e.lat() === t.lat() && e.lng() === t.lng() || i.push(new google.maps.LatLng(e.lat(),e.lng()))
            }
            return i
        }
        function ba() {
            return $a.Tools.isDrawing()
        }
        function va() {
            if (void 0 === ua)
                throw new Error("AreaEditor: No current builder.");
            return ua
        }
        function wa(e) {
            return void 0 === e ? 0 : e.getPaths().getArray().reduce(( (e, t) => e + t.getLength()), 0)
        }
        function ka(e) {
            void 0 === e && (e = va());
            const t = {
                targetRecordId: e.currentArea?.id ?? null,
                organisationId: e.targetLayer.organisation.id,
                targetLayerId: e.targetLayer.id,
                userId: 0,
                baseLayerFilteringColumns: [],
                idSelections: [],
                polygonSelections: [],
                radialSelections: []
            };
            return e instanceof pa && (t.baseLayerFilteringColumns = e.targetBaseLayer.getDetailsForMapItemLoad().filteredColumns),
            t
        }
        function Ca(e) {
            const t = []
              , i = [];
            return t.push(i),
            e.getPaths().forEach((e => {
                e.getLength() >= 3 && i.push(e.getArray().map((e => ({
                    lat: e.lat(),
                    lon: e.lng()
                }))))
            }
            )),
            t
        }
        async function _a(e) {
            const t = await $e("HandleSelections", e)
              , i = va();
            i instanceof ca && i.updatePolygon(t.boundary),
            i instanceof pa && i.handleAreaSelection(t.recordIds, !1),
            $a.updateDemographicData(t.demographics)
        }
        async function Ta(e, t) {
            if (wa(e) < 3)
                return;
            const i = va()
              , a = ka(i);
            !0 === t && a.polygonSelections.push({
                paths: Ca(e)
            }),
            i instanceof pa ? a.idSelections.push({
                ids: i.selectedAreas
            }) : i instanceof da && void 0 !== i.shape && a.polygonSelections.unshift({
                paths: Ca(i.shape)
            }),
            await _a(a)
        }
        async function La(e) {
            if (0 === e.getRadius())
                return;
            const t = va();
            if (t instanceof da)
                return;
            const i = ka(t);
            i.radialSelections.push({
                lat: e.getCenter().lat(),
                lon: e.getCenter().lng(),
                radius: e.getRadius()
            }),
            t instanceof pa && i.idSelections.push({
                ids: t.selectedAreas
            }),
            await _a(i)
        }
        function Ea() {
            return ha
        }
        async function Ia(e) {
            const t = [0, 1, 2, 20, 50, 51];
            return e.deletedItems.forEach((e => (e => {
                const t = zn(e.layerId, e.organisationId);
                t instanceof Sa && t.removeRecord(e.mapItemId)
            }
            )(e))),
            e.changes.forEach((async e => await (async e => {
                const i = zn(e.layerId, e.organisationId);
                if (i instanceof Sa)
                    return e.areaRecords.forEach((e => {
                        if (!(i instanceof Sa))
                            return;
                        const t = i.getRecord(e.id);
                        t instanceof Na ? (t.setLabelContent(e.labels),
                        t.setLabelPosition(e.lon, e.lat),
                        t.setClassification(i.getClassification(e.classificationId)),
                        t.updateBoundary(e.boundary)) : i.addAreas(e)
                    }
                    )),
                    await gi.Instance.updateFilteredContentOnDataChange(i, t),
                    ya(i) ? ea.Instance.reapplyAnalysis(i) : void 0
            }
            )(e))),
            await (async () => {
                if (ua instanceof pa)
                    return gi.Instance.updateFilteredContentOnDataChange(ua.targetBaseLayer, t)
            }
            )(),
            ( () => {
                const t = ua?.currentArea
                  , i = null === e.newMapItemId ? void 0 : ua?.targetLayer?.getRecord(e.newMapItemId);
                return t ?? i ?? void 0
            }
            )()
        }
        var Aa, $a;
        !function(e) {
            let t;
            function i(e) {
                let t = $("<p>").text("Always copied.");
                if (void 0 === e || 0 === e.length)
                    return t;
                {
                    let i = $("<div>");
                    return t.appendTo(i),
                    $("<p>").text("The following areas will be affected:").appendTo(i),
                    function(e, t=!1) {
                        const i = $(!0 === t ? "<ol>" : "<ul>");
                        return e.forEach((e => {
                            $("<li>").text(e).appendTo(i)
                        }
                        )),
                        i
                    }(e).appendTo(i),
                    i
                }
            }
            async function a() {
                if (void 0 === t)
                    C("No selected layer", "You must select a layer to copy this area to.");
                else {
                    const e = zn(t.layerId, t.organisationId);
                    switch (e.layerType) {
                    case ae.AGGREGATED:
                        ua = new pa(e);
                        break;
                    case ae.CUSTOM_AREA:
                        ua = new da(e);
                        break;
                    case ae.RADIAL:
                        ua = new la(e)
                    }
                    W();
                    const i = await $e("CloneArea", t)
                      , a = await Ia(i);
                    void 0 !== a && !0 === zn(t.layerId, t.organisationId).isOn && await Ni(a),
                    t = void 0,
                    ua = void 0,
                    y(),
                    Z(),
                    de()
                }
            }
            e.display = async function(e) {
                let n = await async function(e) {
                    return Ae("GetAreaCopySettings", {
                        recordId: e.id,
                        layerId: e.layer.id,
                        organisationId: e.layer.organisation.id
                    })
                }(e)
                  , o = await async function(e, a) {
                    const n = "copy-area-settings";
                    let o = b()
                      , r = v().appendTo(o);
                    w("Choose a layer").appendTo(r),
                    $("<p>").text("Only layers built using the same base area layer or using hand-drawn boundaries are available.").appendTo(r);
                    let s = $("<select>").appendTo(r);
                    return $("<option>").attr("value", "null").text("Select a layer").appendTo(s),
                    a.forEach(( (e, t) => {
                        let i = zn(e.layerId, e.organisationId);
                        null !== i && $("<option>").attr("value", t).text(i.name).appendTo(s)
                    }
                    )),
                    s.on("change", (async () => {
                        let r = parseInt(s.val());
                        if (o.find(`#${n}`).remove(),
                        t = void 0,
                        !1 === Number.isNaN(r)) {
                            let s = a[r];
                            t = {
                                recordId: e.id,
                                layerId: s.layerId,
                                organisationId: s.organisationId,
                                classification: s.classificationAvailable,
                                uniqueKey: !s.uniqueKeyDuplicate,
                                customFields: s.customFields.filter((e => !0 === e.available)).map((e => e.id)),
                                layerSettings: Fn()
                            };
                            let l = new Le(3);
                            l.setAlign("all-left"),
                            l.addHeaders("Data", "Status", "Copy"),
                            l.addData("Boundary", {
                                jquery: i(s.boundaryAffects)
                            }, {
                                jquery: $("<input>").attr("type", "checkbox").prop({
                                    checked: !0,
                                    disabled: !0
                                })
                            }),
                            l.addData("Name", "Always copied.", {
                                jquery: $("<input>").attr("type", "checkbox").prop({
                                    checked: !0,
                                    disabled: !0
                                })
                            }),
                            l.addData("Unique Key", !0 === s.uniqueKeyDuplicate ? "Will not be copied. An area already exists in the selected layer with this unique key." : "Copied by default. Untick to omit.", {
                                jquery: $("<input>").attr("type", "checkbox").prop({
                                    checked: !s.uniqueKeyDuplicate,
                                    disabled: s.uniqueKeyDuplicate
                                }).on("change", (e => {
                                    let i = $(e.target).prop("checked");
                                    t.uniqueKey = i
                                }
                                ))
                            }),
                            l.addData("Classification", !0 === s.classificationAvailable ? "Copied by default. Untick to omit." : "Cannot be copied. The classification is not attached to the target layer.", {
                                jquery: $("<input>").attr("type", "checkbox").prop({
                                    checked: s.classificationAvailable,
                                    disabled: !s.classificationAvailable
                                }).on("change", (e => {
                                    let i = $(e.target).prop("checked");
                                    t.classification = i
                                }
                                ))
                            }),
                            s.customFields.forEach((e => {
                                l.addData(e.name, !0 === e.available ? "Copied by default. Untick to omit." : "Cannot be copied. The custom field is not attached to the target layer.", {
                                    jquery: $("<input>").attr("type", "checkbox").prop({
                                        checked: e.available,
                                        disabled: !e.available
                                    }).on("change", (i => {
                                        !0 === $(i.target).prop("checked") ? t.customFields.push(e.id) : t.customFields = t.customFields.filter((t => t !== e.id))
                                    }
                                    ))
                                })
                            }
                            ));
                            let c = v().attr("id", n).appendTo(o);
                            $("<h3>").text("Options").appendTo(c),
                            l.table.appendTo(c)
                        }
                    }
                    )),
                    s.niceSelect(),
                    o
                }(e, n.layers);
                x(g.LARGE, "Copy Area", X(n.name, n.uniqueKey), o, {
                    text: "Copy area",
                    okFunction: a
                })
            }
        }(Aa || (Aa = {})),
        function(e) {
            let t, i, a, n = "#areaeditor-main", o = "#areaeditor-continue", r = null;
            async function s() {
                await Xe(),
                await async function() {
                    ha = !1,
                    yo().setOptions({
                        minZoom: fo
                    }),
                    ua instanceof pa && !0 === fa && Mn(ua.targetBaseLayer.id, ua.targetBaseLayer.organisation.id),
                    ua?.remove(),
                    ua = void 0,
                    t = void 0,
                    fa = !1,
                    r = null,
                    at()
                }(),
                Pt(!0)
            }
            async function l() {
                !function(e, t) {
                    const i = $(n).children("header");
                    i.children("h1").text(e ?? ""),
                    i.children("h2").text(t ?? "")
                }(void 0 === va().currentArea ? "Create new area" : `Edit ${t?.territories[0].name}`, va().targetLayer.name),
                await Ze(n),
                ha = !0
            }
            function c() {
                !0 !== ma && (nt(et.AREA_EDITOR, {
                    allows: [],
                    closeFunction: s
                }),
                a.initialise(),
                i.initialise(),
                $("#areaeditor-show-tools").on("click", ( () => {
                    a.show()
                }
                )),
                $(o).on("click", ( () => {
                    i.show()
                }
                )),
                $("#areaeditor-close").on("click", (async () => {
                    if (ua instanceof pa) {
                        const e = Array.from(new Set(ua.targetBaseLayer.filterColumns.map((e => e.type))));
                        e.length > 0 && await gi.Instance.updateFilteredContentOnDataChange(ua.targetBaseLayer, e)
                    }
                    s()
                }
                )),
                ma = !0)
            }
            function d() {
                $(o).hide(),
                void 0 !== t && (ua instanceof pa && ua.selectedAreas.length > 0 && $(o).show(),
                ua instanceof da && void 0 !== ua.shape && $(o).show(),
                ua instanceof la && void 0 !== ua.shape && $(o).show())
            }
            function p(e) {
                const t = $(n).children("div.body");
                if (t.empty(),
                e.length > 0) {
                    const i = new Le(2);
                    i.setAlign("first-left"),
                    i.addHeaders("Demographic", "Selected value"),
                    e.forEach((e => i.addData(e.name, e.value))),
                    i.table.css({
                        width: "100%"
                    }).appendTo(t)
                }
                d()
            }
            e.displayStage1 = l,
            e.initialise = c,
            e.show = async function() {
                W(),
                c(),
                Pt(!1),
                await new Promise(( (e, t) => {
                    ua instanceof pa && yo().getZoom() < ua.targetBaseLayer.maxZoom ? (google.maps.event.addListenerOnce(yo(), "idle", ( () => {
                        e()
                    }
                    )),
                    yo().setZoom(ua.targetBaseLayer.maxZoom)) : e()
                }
                )),
                function() {
                    if (void 0 !== ua) {
                        let e = ua.targetLayer.maxZoom;
                        ua instanceof pa && ua.targetBaseLayer.maxZoom > e && (e = ua.targetBaseLayer.maxZoom),
                        e < fo && (e = fo),
                        yo().setOptions({
                            minZoom: e
                        })
                    }
                }(),
                function() {
                    if (ua instanceof pa) {
                        const e = Pn(ua.targetBaseLayer);
                        e.insertAfter(e.parent().children("h2")),
                        Vn(ua.targetBaseLayer.countryId)
                    }
                }(),
                await async function() {
                    if (ua instanceof pa && !1 === ua.targetBaseLayer.isOn)
                        return fa = !0,
                        await Nn(ua.targetBaseLayer.id, ua.targetBaseLayer.organisation.id)
                }(),
                function(e) {
                    t = e,
                    ua instanceof pa && ua.handleAreaSelection(e.territories[0].idsInTerritory, !1),
                    ua instanceof da && (0 === e.demographics.length || wa(ua.shape) > 200) && (ua.updateOnBoundaryChange = !1),
                    p(e.demographics.map(( (t, i) => ({
                        name: t.title,
                        value: e.territories[0].values[i].new
                    })))),
                    d()
                }(await async function() {
                    return Ae("LaunchAreaEditor", {
                        layerId: va().targetLayer.id,
                        organisationId: va().targetLayer.organisation.id,
                        recordId: va().currentArea?.id ?? null
                    })
                }()),
                await l(),
                ua instanceof la && void 0 === ua.currentArea && void 0 !== ua.shape && await La(ua.shape),
                Z()
            }
            ,
            e.updateDemographicData = p,
            function(i) {
                const a = "#areaeditor-stage2"
                  , n = `${a}-ext`
                  , o = `${a}-save`
                  , c = `${a}-back`
                  , d = "decreased"
                  , p = "increased";
                function u(e, t) {
                    const i = Number.parseFloat(e.replace(/,/g, ""))
                      , a = Number.parseFloat(t.replace(/,/g, ""));
                    return i < a ? p : i > a ? d : ""
                }
                function f() {
                    return qe()
                }
                async function h() {
                    const i = await async function() {
                        const e = ka()
                          , t = va();
                        return t instanceof pa ? e.idSelections.push({
                            ids: t.selectedAreas
                        }) : t instanceof da ? e.polygonSelections.push({
                            paths: Ca(t.shape)
                        }) : t instanceof la && e.radialSelections.push({
                            lat: t.shape.getCenter().lat(),
                            lon: t.shape.getCenter().lng(),
                            radius: t.shape.getRadius()
                        }),
                        await $e("GetStageTwoData", e)
                    }();
                    !function(e) {
                        let t = $(n).children("div.body");
                        t.empty();
                        const i = new Le(1 + 2 * e.length);
                        i.table.appendTo(t);
                        const a = [""];
                        e.forEach(( (e, t) => a.push({
                            text: 0 === t ? "This area" : !0 === e.willBeDeleted ? "Will be deleted" : "Being changed",
                            classes: 0 === t ? "current" : !0 === e.willBeDeleted ? "deleting" : "changing",
                            attr: {
                                colspan: "2"
                            }
                        }))),
                        i.addHeaders(...a).addClass("areaeditor-status-row");
                        const o = [""];
                        e.forEach((e => o.push({
                            text: null === e.id ? "New area" : e.name,
                            attr: {
                                colspan: "2"
                            }
                        }))),
                        i.addHeaders(...o);
                        const r = ["Demographic"];
                        e.forEach(( () => r.push("Original", "New"))),
                        i.addHeaders(...r),
                        e[0].demographics.map((e => e.name)).forEach(( (t, a) => {
                            const n = [t];
                            e.forEach(( () => n.push({
                                attr: {
                                    colspan: "2"
                                }
                            }))),
                            i.addData(...n).addClass("demographic-title-row");
                            const o = ["Values"];
                            e.forEach((e => {
                                const t = e.demographics[a].originalValue
                                  , i = e.demographics[a].currentValue;
                                o.push(t, {
                                    text: i,
                                    classes: u(t, i)
                                })
                            }
                            ));
                            const r = ["Percentage of base"];
                            e.forEach((e => {
                                const t = e.demographics[a].originalPercentageOfBase
                                  , i = e.demographics[a].currentPercentageOfBase;
                                r.push(t, {
                                    text: i,
                                    classes: u(t, i)
                                })
                            }
                            ));
                            const s = ["Index"];
                            e.forEach((e => {
                                const t = e.demographics[a].originalIndex
                                  , i = e.demographics[a].currentIndex;
                                s.push(t, {
                                    text: i,
                                    classes: u(t, i)
                                })
                            }
                            )),
                            i.addData(...o),
                            i.addData(...r),
                            i.addData(...s)
                        }
                        ))
                    }(i),
                    e.updateDemographicData(i[0].demographics.map((e => ({
                        name: e.name,
                        value: e.currentValue
                    })))),
                    void 0 === ua?.currentArea ? function() {
                        if (void 0 !== ua?.currentArea || void 0 === t || void 0 === ua?.targetLayer)
                            return;
                        let e = $(a).children("div.body");
                        e.empty(),
                        $("<h5>").text("Give the new area a name").appendTo(e),
                        $("<input>").attr({
                            type: "text",
                            maxlength: "100",
                            pattern: ".*\\S+.*"
                        }).prop({
                            required: !0
                        }).val(ua.name ?? "").on("input", (e => {
                            if (void 0 === ua)
                                return;
                            let t = $(e.target);
                            ua.name = t.val(),
                            !0 === t.is(":invalid") ? $(o).hide() : $(o).show()
                        }
                        )).appendTo(e).trigger("input"),
                        $("<h5>").text("Choose a classification").appendTo(e);
                        ua?.targetLayer.classifications.forEach((t => {
                            (t => {
                                let i = {
                                    "background-color": "transparent",
                                    color: "#000",
                                    "font-weight": "normal"
                                }
                                  , a = {
                                    "background-color": "transparent",
                                    color: "#fff",
                                    "font-weight": "700"
                                }
                                  , n = $("<div>").addClass("classification");
                                n[0].appendChild(t.getIconAsSVG());
                                let o = $("<p>").text(t.name).appendTo(n);
                                return a["background-color"] = t.colour.asRgba(),
                                a.color = t.colour.bestContrastingFontColour().asRgb(),
                                n.on({
                                    mouseenter: () => {
                                        o.css(a)
                                    }
                                    ,
                                    mouseleave: () => {
                                        r !== t.id && o.css(i)
                                    }
                                    ,
                                    click: () => {
                                        r !== t.id && (e.find("div.classification > p").css(i),
                                        o.css(a),
                                        r = t.id)
                                    }
                                }),
                                t.id === r && o.css(a),
                                n
                            }
                            )(t).appendTo(e)
                        }
                        ))
                    }() : ($(a).children("div.body").empty(),
                    $(o).show()),
                    function() {
                        let e = $(a).children("header");
                        void 0 !== ua?.currentArea && t ? e.children("h1").text(`Edit ${t.territories[0].name}`) : e.children("h1").text("Create new area"),
                        e.children("h2").text(ua?.targetLayer.name ?? "")
                    }()
                }
                i.initialise = function() {
                    !0 !== ma && ($(o).on("click", (async () => {
                        let e;
                        W();
                        let i = await async function() {
                            const e = va();
                            if (void 0 === e || void 0 === t)
                                throw new Error("AreaEditor: Save: No data to save.");
                            const i = ka(e);
                            if (i.activeLayerSettings = Fn(),
                            i.name = e.name?.trim() ?? null,
                            i.classificationId = void 0 === e.currentArea ? r : null,
                            e instanceof pa)
                                i.idSelections.push({
                                    ids: e.selectedAreas
                                });
                            else if (e instanceof da)
                                i.polygonSelections.unshift({
                                    paths: Ca(e.shape)
                                });
                            else if (e instanceof la) {
                                const t = e.shape;
                                i.radialSelections.push({
                                    lat: t.getCenter().lat(),
                                    lon: t.getCenter().lng(),
                                    radius: t.getRadius()
                                })
                            }
                            return await $e("CreateOrEditArea", i)
                        }();
                        e = await Ia(i),
                        await f(),
                        await s(),
                        void 0 !== e && !1 === e.isFilteredOff && (await Ni(e),
                        yo().fitBounds(e.getBounds())),
                        Z(),
                        zt(!0),
                        Pt(!0),
                        de()
                    }
                    )),
                    $(c).on("click", ( () => {
                        !async function() {
                            await f(),
                            await l(),
                            zt(!0)
                        }()
                    }
                    )))
                }
                ,
                i.show = async function() {
                    zt(!1),
                    h(),
                    await Ze(a),
                    await Qe(n)
                }
            }(i || (i = {})),
            function(t) {
                const i = "#areaeditor-tools"
                  , a = `${i}-back`;
                let n, o;
                async function r() {
                    const t = va()
                      , a = $(i).children("div.body");
                    if (a.empty(),
                    t instanceof da) {
                        const i = ft("Drawing tools").appendTo(a);
                        void 0 === n ? ut(dt.BLUE, "Draw a new area").appendTo(i).on("click", ( () => {
                            void 0 === n && (n = new ia(yo(),s)),
                            r()
                        }
                        )) : ut(dt.RED, "Cancel drawing area").appendTo(i).on("click", ( () => {
                            n?.dispose(),
                            n = void 0,
                            r()
                        }
                        ));
                        const l = ft("Settings").appendTo(a);
                        ut(!0 === t.updateOnBoundaryChange ? dt.RED : dt.GREEN, `Turn ${!0 === t.updateOnBoundaryChange ? "off" : "on"} auto updates on boundary change`).appendTo(l).on("click", (async () => {
                            t.updateOnBoundaryChange = !t.updateOnBoundaryChange,
                            !0 === t.updateOnBoundaryChange && void 0 !== t.shape && void 0 === n && void 0 === o ? (e.displayStage1(),
                            await Ta(t.shape, !1)) : r()
                        }
                        ))
                    } else if (t instanceof la) {
                        const e = xi().distanceUnits;
                        $("<h5>").text(`Radius (${re(e, !0)})`).appendTo(a);
                        let i = $("<input>").attr({
                            type: "number",
                            min: "0.01",
                            max: "1000",
                            step: "any"
                        }).prop("required", !0).val(oe(t.shape?.getRadius(), 1, xi().distanceUnits)).appendTo(a).on("input", ( () => {
                            if (!1 === i.is(":invalid")) {
                                const e = parseFloat(i.val());
                                if (!1 === Number.isNaN(e)) {
                                    const i = t.updateShape({
                                        radius: oe(e, xi().distanceUnits, 1)
                                    });
                                    !1 === mo(i.getBounds()) && yo().fitBounds(i.getBounds())
                                }
                            }
                        }
                        ))
                    } else {
                        const e = ft("Selection tools").appendTo(a);
                        void 0 === n ? ut(dt.BLUE, "Select by drawing an area", void 0 !== o).appendTo(e).on("click", ( () => {
                            void 0 === n && void 0 === o && (n = new ia(yo(),s)),
                            r()
                        }
                        )) : ut(dt.RED, "Cancel area selection").appendTo(e).on("click", ( () => {
                            n?.dispose(),
                            n = void 0,
                            r()
                        }
                        )),
                        void 0 === o ? ut(dt.BLUE, "Select by drawing a circle", void 0 !== n).appendTo(e).on("click", ( () => {
                            void 0 === n && void 0 === o && (o = new aa(yo(),c)),
                            r()
                        }
                        )) : ut(dt.RED, "Cancel radial selection").appendTo(e).on("click", ( () => {
                            o?.dispose(),
                            o = void 0,
                            r()
                        }
                        ))
                    }
                }
                async function s(t) {
                    n && t && (e.displayStage1(),
                    await Ta(t, !0),
                    n = void 0)
                }
                async function c(t) {
                    o && t && (e.displayStage1(),
                    await La(t),
                    o = void 0)
                }
                t.initialise = function() {
                    !0 !== ma && $(a).on("click", (async () => {
                        ua instanceof la && await ua.requestUpdate(),
                        await l(),
                        n && (n.dispose(),
                        n = void 0),
                        o && (o.dispose(),
                        o = void 0)
                    }
                    ))
                }
                ,
                t.isDrawing = function() {
                    return void 0 !== n || void 0 !== o
                }
                ,
                t.show = async function() {
                    await r(),
                    Ze(i)
                }
            }(a = e.Tools || (e.Tools = {}))
        }($a || ($a = {}));
        class Na extends Ce {
            _labelcontent = [];
            _labelinstance = null;
            _labelposition;
            _mapObject;
            _clickEventHandler = null;
            _mouseOverEventHandler = null;
            _mouseOutEventHandler = null;
            _mouseMoveEventHandler = null;
            constructor(e, t, i, a, n, o, r) {
                super(e, t, i),
                this._labelposition = new google.maps.LatLng(n,a),
                this.createMapObject(r),
                this.setLabelContent(o),
                this.createClickEventHandler(),
                this.createMouseOverEventHandler(),
                this.createMouseOutEventHandler()
            }
            createLabelContent() {
                let e = this.layer.formatting.getLabelTemplate()
                  , t = this._labelcontent.map(( (e, t) => {
                    let i = this.layer.labels[t].userPrefix
                      , a = e || "-";
                    return i ? `${i}: ${a}` : a
                }
                ));
                return e.innerHTML = t.join("<br>"),
                e
            }
            createClickEventHandler() {
                this._clickEventHandler = google.maps.event.addListener(this._mapObject, "click", (e => {
                    if (!0 === Ea() && !0 === ba())
                        return;
                    if (!0 === ii())
                        return;
                    let t = [];
                    if (this.layer.layerType === ae.CUSTOM_AREA || this.layer.layerType === ae.RADIAL ? (t = this.layer.getAllAreasContainingLatLng(e.latLng),
                    -1 === t.findIndex((e => e.id === this.id)) && t.push(this)) : t.push(this),
                    !0 === ya(this.layer) && !1 === ba())
                        return async function(e) {
                            ua instanceof pa && await async function(e) {
                                const t = va();
                                if (t instanceof pa && !0 === t.handleAreaSelection(e.filter((e => e.layer.equals(t.targetBaseLayer))).map((e => e.id)), !0)) {
                                    const e = ka(t);
                                    e.idSelections.push({
                                        ids: t.selectedAreas
                                    }),
                                    await _a(e)
                                }
                            }(e)
                        }(t);
                    1 === t.length ? Ni(this) : async function(e) {
                        Ii();
                        try {
                            await ot(et.INFO_WINDOW),
                            Ci(),
                            await Pi.showAreas(e)
                        } catch (e) {
                            pe(e)
                        }
                    }(t)
                }
                ))
            }
            createMouseOverEventHandler() {
                this._mouseMoveEventHandler = google.maps.event.addListener(this._mapObject, "mousemove", (e => google.maps.event.trigger(yo(), "mousemove", e))),
                this._mouseOverEventHandler = google.maps.event.addListener(this._mapObject, "mouseover", (e => {
                    if (!0 === Ea() && !0 === ba())
                        return;
                    this.setHighlighted();
                    let t = this.layer.formatting.lineWidth;
                    this._mapObject.setOptions({
                        strokeWeight: t + 2
                    })
                }
                ))
            }
            createMouseOutEventHandler() {
                this._mouseOutEventHandler = google.maps.event.addListener(this._mapObject, "mouseout", ( () => {
                    this.resetFormatting(),
                    this._mapObject.setOptions({
                        strokeWeight: this.layer.formatting.lineWidth
                    })
                }
                ))
            }
            createMapObject(e) {
                let t = this.layer.colourMode;
                const i = {
                    fillColor: (a = this.classification,
                    t === Hi.TRANSPARENT ? "#FFFFFF" : t === Hi.COLOURFUL ? a.colour.asRgb() : "#FFFFFF"),
                    fillOpacity: (e => t === Hi.TRANSPARENT ? 0 : t === Hi.COLOURFUL ? e.opacity : 0)(this.classification),
                    map: yo(),
                    strokeColor: this.layer.formatting.colour().asHex(),
                    strokeWeight: this.layer.formatting.lineWidth,
                    visible: !0 === this.layer.isOn && !0 === this.layer.isShown,
                    zIndex: this.layer.zIndex
                };
                var a;
                this.layer.layerType === ae.RADIAL ? (i.center = new google.maps.LatLng(e.y,e.x),
                i.radius = e.r,
                this._mapObject = new google.maps.Circle(i)) : (i.paths = G(e),
                this._mapObject = new google.maps.Polygon(i)),
                null !== this.layer.currentAnalysis && this.setAnalysis(this.layer.getAnalysisFormattingForMapItem(this.id))
            }
            get boundary() {
                return this._mapObject
            }
            getBounds() {
                return this.layer.layerType === ae.RADIAL ? this._mapObject.getBounds() : H(this._mapObject)
            }
            remove() {
                google.maps.event.clearInstanceListeners(this._mapObject),
                this._mapObject.setMap(null),
                this._labelinstance.close()
            }
            resetFormatting() {
                if (null !== this.layer.currentAnalysis)
                    this.setAnalysis(this.layer.getAnalysisFormattingForMapItem(this.id));
                else {
                    let e = this.layer.colourMode;
                    e === Hi.TRANSPARENT ? this.setTransparent() : e === Hi.COLOURFUL && this.setColourful()
                }
            }
            setAnalysis(e) {
                this._mapObject.setOptions(e)
            }
            setBorderColour(e) {
                this._mapObject.setOptions({
                    strokeColor: e
                })
            }
            setClassification(e) {
                if (super.setClassification(e),
                !1 == (null !== this.layer.currentAnalysis))
                    switch (this.layer.colourMode) {
                    case Hi.COLOURFUL:
                        this.setColourful();
                        break;
                    case Hi.TRANSPARENT:
                        this.setTransparent()
                    }
            }
            setColourful() {
                this._mapObject.setOptions(this.classification.polygonOptions)
            }
            setFiltered(e) {
                super.setFiltered(e),
                !0 === e ? (this.turnOn(),
                !0 === this.layer.labelsOn && this.turnOnLabel()) : (this.turnOff(),
                this.turnOffLabel())
            }
            setHighlighted() {
                this._mapObject.setOptions(function() {
                    switch (oo.map.getMapTypeId()) {
                    case google.maps.MapTypeId.HYBRID:
                    case google.maps.MapTypeId.SATELLITE:
                        return so;
                    case google.maps.MapTypeId.ROADMAP:
                    case google.maps.MapTypeId.TERRAIN:
                        return ro;
                    default:
                        throw new Error("Unexpected map type received.")
                    }
                }())
            }
            setLabelContent(e) {
                this._labelcontent = e;
                let t = this.createLabelContent();
                if (null !== this._labelinstance)
                    this._labelinstance.setOptions({
                        content: t.outerHTML,
                        pixelOffset: V(this._labelcontent.length, this.layer.formatting.labelFontSize)
                    });
                else {
                    let e = {
                        content: t.outerHTML,
                        pixelOffset: V(this._labelcontent.length, this.layer.formatting.labelFontSize),
                        disableAutoPan: !0,
                        position: this._labelposition,
                        visible: !0 === this.layer.labelsOn && !0 === this.layer.isOn,
                        pane: "overlayLayer",
                        enableEventPropagation: !0,
                        zIndex: this.layer.zIndex + 1e3
                    };
                    this._labelinstance = new oa(e),
                    this._labelinstance.open(yo())
                }
            }
            setLabelPosition(e, t) {
                this._labelposition = new google.maps.LatLng(t,e),
                null !== this._labelinstance && this._labelinstance.setOptions({
                    position: this._labelposition
                })
            }
            setTransparent() {
                this._mapObject.setOptions(lo)
            }
            setZIndex(e) {
                this._mapObject.setOptions({
                    zIndex: e
                }),
                null !== this._labelinstance && this._labelinstance.setOptions({
                    zIndex: e + 1e3
                })
            }
            turnOn() {
                !0 !== this._isFilteredOff && this._mapObject.setVisible(!0)
            }
            turnOff() {
                this._mapObject.setVisible(!1),
                Ti(this)
            }
            turnOnLabel() {
                !0 !== this._isFilteredOff && null !== this._labelinstance && this._labelinstance.setVisible(!0)
            }
            turnOffLabel() {
                null !== this._labelinstance && this._labelinstance.setVisible(!1)
            }
            updateBoundary(e) {
                if (this.layer.layerType === ae.RADIAL)
                    this._mapObject.setOptions({
                        center: new google.maps.LatLng(e.y,e.x),
                        radius: e.r
                    });
                else {
                    let t = G(e);
                    this._mapObject.setOptions({
                        paths: t
                    })
                }
            }
            updateCustomFieldLabel(e, t) {
                let i = this.layer.labels;
                if (null !== i) {
                    let a = i.findIndex((t => 30 === t.type && t.id === e));
                    -1 !== a && (this._labelcontent[a] = t,
                    this.setLabelContent(this._labelcontent))
                }
            }
            updateCodeLabel(e) {
                let t = this.layer.labels;
                if (null !== t) {
                    let i = t.findIndex((e => 1 === e.type));
                    -1 !== i && (this._labelcontent[i] = e,
                    this.setLabelContent(this._labelcontent))
                }
            }
            updateNameLabel(e) {
                let t = this.layer.labels;
                if (null !== t) {
                    let i = t.findIndex((e => 0 === e.type));
                    -1 !== i && (this._labelcontent[i] = e,
                    this.setLabelContent(this._labelcontent))
                }
            }
        }
        class Sa extends Xi {
            baseLayerId;
            _colourMode;
            _labels = [];
            _labelsOn = !1;
            _alreadyLoaded = !1;
            _baseLayerIsAvailable;
            constructor(e, t, i) {
                super(e, t, i, new ke(e.formatting)),
                this.baseLayerId = e.baseLayerId,
                null === e.baseLayerId ? this._colourMode = Hi.TRANSPARENT : this._colourMode = Hi.COLOURFUL,
                this._baseLayerIsAvailable = e.baseLayerAvailable,
                !0 === e.defaultLabels.uniqueId && this._labels.push(new ui({
                    colType: 1,
                    id: null,
                    isExportable: !0,
                    name: "Unique Key"
                },this._labels.length)),
                !0 === e.defaultLabels.name && this._labels.push(new ui({
                    colType: 0,
                    id: null,
                    isExportable: !0,
                    name: "Name"
                },this._labels.length)),
                this.addClassification(new be(this)),
                this.layerType === ae.BASE_LAYER || this.layerType === ae.BASE_LAYER_ON_HIERARCHY ? (!0 === e.defaultLabels.uniqueId && this.filterColumns.push(new ui({
                    colType: 1,
                    id: null,
                    isExportable: !0,
                    name: "Unique Key"
                },this.filterColumns.length)),
                !0 === e.defaultLabels.name && this.filterColumns.push(new ui({
                    colType: 0,
                    id: null,
                    isExportable: !0,
                    name: "Name"
                },this.filterColumns.length))) : (this.filterColumns.push(new ui({
                    colType: 0,
                    id: null,
                    isExportable: !0,
                    name: "Name"
                },0)),
                this.filterColumns.push(new ui({
                    colType: 1,
                    id: null,
                    isExportable: !0,
                    name: "Unique Key"
                },1)),
                this.filterColumns.push(new ui({
                    colType: 2,
                    id: null,
                    isExportable: !0,
                    name: "Classification"
                },2))),
                this._labelsOn = xi().autoLabels
            }
            on() {
                super.on(),
                this._turnOnAllAreas(),
                Ne({
                    actionType: Ee.AREA_LAYER_ON,
                    organisationId: this.organisation.id
                })
            }
            enable() {
                super.enable(),
                !0 === this.isOn && this._turnOnAllAreas()
            }
            disable() {
                super.disable(),
                !0 === this.isOn && (this._turnOffAllRecords(),
                $i(this))
            }
            _turnOnAllAreas() {
                this._records.forEach((e => {
                    e.turnOn()
                }
                )),
                !0 === this._labelsOn ? this.turnOnLabels() : !0 === xi().autoLabels && Zn(this.id, this.organisation.id)
            }
            addAreas(...e) {
                e.forEach((e => {
                    if (!0 === this._records.has(e.id))
                        return;
                    let t = this.getClassification(e.classificationId);
                    const i = new Na(e.id,this,t,e.lon,e.lat,e.labels,e.boundary);
                    this._records.set(e.id, i)
                }
                )),
                this.loadMethod === ne.COMPLETE && (this._alreadyLoaded = !0)
            }
            addClassification(e) {
                this._classifications.push(e)
            }
            baseLayerIsAvailable() {
                return this._baseLayerIsAvailable
            }
            clearAnalysisFormatting() {
                this._records.forEach((e => {
                    e.resetFormatting()
                }
                ))
            }
            off() {
                super.off(),
                this._turnOffAllRecords(),
                $i(this),
                Ne({
                    actionType: Ee.AREA_LAYER_OFF,
                    organisationId: this.organisation.id
                })
            }
            get colourMode() {
                return this._colourMode
            }
            getAllAreasContainingLatLng(e) {
                let t = [];
                return this._records.forEach((i => {
                    i.layer.layerType !== ae.RADIAL ? !0 === google.maps.geometry.poly.containsLocation(e, i.boundary) && t.push(i) : google.maps.geometry.spherical.computeDistanceBetween(e, i.boundary.getCenter()) <= i.boundary.getRadius() == 1 && t.push(i)
                }
                )),
                t
            }
            getDetailsForMapItemLoad() {
                let e = super.getDetailsForMapItemLoad();
                return e.labelSettings = this._labels.map((e => e.asServerObject())),
                e.labelSettings.forEach(( (e, t) => e.order = t)),
                e
            }
            get labels() {
                return this._labels
            }
            hide() {
                super.hide(),
                !0 === this.isOn && this._turnOffAllRecords()
            }
            _turnOffAllRecords() {
                this._records.forEach((e => {
                    e.turnOff(),
                    e.turnOffLabel()
                }
                ))
            }
            get isAlreadyLoaded() {
                return this._alreadyLoaded
            }
            get isBaseLayer() {
                return this.layerType === ae.BASE_LAYER || this.layerType === ae.BASE_LAYER_ON_HIERARCHY
            }
            get labelsOn() {
                return this._labelsOn
            }
            reapplyFiltering() {
                0 !== this.filterColumns.length && this._records.forEach((e => {
                    e.setFiltered(!e.isFilteredOff)
                }
                ))
            }
            reColour() {
                let e = this.formatting.colour().asHex();
                this._records.forEach((t => {
                    t.setBorderColour(e)
                }
                ))
            }
            removeAllRecords() {
                this._records.forEach((e => {
                    e.remove()
                }
                )),
                this._records.clear()
            }
            removeRecord(e) {
                const t = this.getRecord(e);
                t?.remove(),
                this._records.delete(e)
            }
            setColourful() {
                this._records.forEach((e => {
                    e.setColourful()
                }
                )),
                this._colourMode = Hi.COLOURFUL
            }
            setCurrentAnalysis(e, t) {
                super.setCurrentAnalysis(e, t);
                let i = $("#layerPane").find("div.layer[data-id=" + this.textId + "]").find("div.layerControls").find("span.toggleColour");
                if (null == e)
                    this._records.forEach((e => {
                        e.resetFormatting()
                    }
                    )),
                    i.show();
                else {
                    if (0 === this.currentAnalysisFormats.length)
                        return;
                    this._records.forEach((e => {
                        let t = this.getAnalysisFormattingForMapItem(e.id);
                        e.setAnalysis(t)
                    }
                    )),
                    i.hide()
                }
            }
            setTransparent() {
                this._records.forEach((e => {
                    e.setTransparent()
                }
                )),
                this._colourMode = Hi.TRANSPARENT
            }
            setZIndex(e) {
                this.zIndex = e,
                this._records.forEach((t => {
                    t.setZIndex(e)
                }
                ))
            }
            show() {
                super.show(),
                !0 === this.isOn && this._turnOnAllAreas()
            }
            turnOnLabels() {
                !0 === this.isOn && (!1 === this._labelsOn && Ne({
                    actionType: Ee.LABELS_ON,
                    organisationId: this.organisation.id
                }),
                this._labelsOn = !0,
                this._records.forEach((e => {
                    e.turnOnLabel()
                }
                )))
            }
            turnOffLabels() {
                this._labelsOn = !1,
                this._records.forEach((e => {
                    e.turnOffLabel()
                }
                )),
                Ne({
                    actionType: Ee.LABELS_OFF,
                    organisationId: this.organisation.id
                })
            }
            updateLabels(e, t) {
                this._labels = e,
                t.forEach((e => {
                    let t = this.getRecord(e.id);
                    null !== t && t.setLabelContent(e.labels || [])
                }
                ))
            }
        }
        class Oa {
            _colour;
            _featurePackLevel;
            _hasFyn;
            _id;
            _isFrozen;
            _name;
            _userPermissions;
            constructor(e, t) {
                this._id = e.id,
                this._name = e.name,
                this._colour = U.fromHex(e.colour),
                this._userPermissions = t,
                this._isFrozen = e.isFrozen,
                this._featurePackLevel = e.featurePackLevel,
                this._hasFyn = e.hasFyn
            }
            get colour() {
                return this._colour
            }
            get featurePackLevel() {
                return this._featurePackLevel
            }
            get hasFyn() {
                return this._hasFyn
            }
            get id() {
                return this._id
            }
            get isFrozen() {
                return this._isFrozen
            }
            get name() {
                return this._name
            }
            get userPermissions() {
                return this._userPermissions
            }
            currentUserIsAdmin() {
                return this._userPermissions?.currentUserIsAdmin ?? !1
            }
        }
        let Ra = !1;
        const Ma = "/images/clustering"
          , Da = [];
        let Fa, Ba = [];
        function za(e) {
            e.show(),
            Ba.push(e)
        }
        function Pa(e) {
            if (!0 !== Ra && (yo().addListener("maptypeid_changed", ( () => function() {
                const e = Wa();
                Ba.forEach((t => {
                    t instanceof Ga && t.refreshIcon(e)
                }
                ))
            }())),
            Da.push(new Ha("#9C640C","#F8C471",{
                height: 28,
                width: 28
            },Ua("cluster-1.png"),Ua("cluster-alt-1.png"),1,9)),
            Da.push(new Ha("#0E6655","#73C6B6",{
                height: 32,
                width: 32
            },Ua("cluster-2.png"),Ua("cluster-alt-2.png"),10,99)),
            Da.push(new Ha("#1A5276","#7FB3D5",{
                height: 40,
                width: 40
            },Ua("cluster-3.png"),Ua("cluster-alt-3.png"),100,999)),
            Da.push(new Ha("#943126","#F1948A",{
                height: 50,
                width: 50
            },Ua("cluster-4.png"),Ua("cluster-alt-4.png"),1e3,9999)),
            Da.push(new Ha("#5B2C6F","#BB8FCE",{
                height: 58,
                width: 58
            },Ua("cluster-5.png"),Ua("cluster-alt-5.png"),1e4,Number.MAX_VALUE)),
            Fa = new Ha("#7B241C","#D98880",{
                height: 37,
                width: 25
            },Ua("multipoint.png"),Ua("multipoint-alt.png"),0,0),
            Ra = !0),
            Ba.forEach((e => e.remove())),
            Ba = [],
            void 0 === e || 0 === e.length)
                return;
            const t = go().getMapbounds()
              , i = function(e) {
                const t = new Map
                  , i = 1e5;
                return e.forEach((e => {
                    const a = Math.round(e.latLng.lat * i) / i
                      , n = Math.round(e.latLng.lon * i) / i
                      , o = `${a},${n}`
                      , r = t.get(o);
                    void 0 !== r ? r.groups.push(e) : t.set(o, {
                        latLng: new st(a,n),
                        groups: new Array(e)
                    })
                }
                )),
                Array.from(t.values())
            }(e).sort(( (e, t) => function(e, t) {
                return e.lon === t.lon ? e.lat > t.lat ? 1 : e.lat < t.lat ? -1 : 0 : e.lon > t.lon ? 1 : -1
            }(e.latLng, t.latLng)));
            (function(e, t) {
                const i = [];
                return e.forEach((e => {
                    const a = i.map((t => ({
                        distance: Math.sqrt(Math.pow(e.latLng.lon - t.latLng.lon, 2) + Math.pow(e.latLng.lat - t.latLng.lat, 2)),
                        group: t
                    }))).filter((e => e.distance <= t)).sort(( (e, t) => e.distance - t.distance)).shift();
                    void 0 === a ? i.push({
                        latLng: e.latLng,
                        groups: new Array(e)
                    }) : a.group.groups.push(e)
                }
                )),
                i
            }
            )(i, function(e, t, i, a) {
                const n = Math.max(e, i) - Math.min(e, i)
                  , o = Math.max(t, a) - Math.min(t, a)
                  , r = Math.pow(n, 2)
                  , s = Math.pow(o, 2);
                return Math.sqrt(r + s) / 20
            }(t.east, t.north, t.west, t.south)).forEach((e => {
                const t = e.groups.reduce(( (e, t) => (e.groupCount++,
                e.locationCount += t.groups.length,
                e.locations.push(...t.groups),
                e)), {
                    groupCount: 0,
                    locationCount: 0,
                    locations: new Array
                });
                1 === t.groupCount ? 1 === t.locationCount ? za(new Va(t.locations[0])) : t.locationCount > 1 && za(new Xa(e.latLng,t.locationCount,t.locations)) : t.groupCount > 1 && za(new qa(e.latLng,t.locationCount,t.locations))
            }
            ))
        }
        function Ua(e) {
            return `${Ma}/${e}`
        }
        function Wa() {
            switch (yo().getMapTypeId()) {
            case google.maps.MapTypeId.HYBRID:
            case google.maps.MapTypeId.SATELLITE:
                return !0;
            case google.maps.MapTypeId.ROADMAP:
            case google.maps.MapTypeId.TERRAIN:
            default:
                return !1
            }
        }
        class Ha {
            _colour;
            _altColour;
            _iconSize;
            _filename;
            _altFilename;
            _minSize;
            _maxSize;
            constructor(e, t, i, a, n, o, r) {
                this._colour = U.fromHex(e),
                this._altColour = U.fromHex(t),
                this._iconSize = i,
                this._filename = a,
                this._altFilename = n,
                this._minSize = o,
                this._maxSize = r
            }
            colour(e) {
                return !0 === e ? this._altColour : this._colour
            }
            filename(e) {
                return !0 === e ? this._altFilename : this._filename
            }
            get iconSize() {
                return this._iconSize
            }
            get maxSize() {
                return this._maxSize
            }
            get minSize() {
                return this._minSize
            }
        }
        class ja {
            _data;
            _latLon;
            _marker;
            _size;
            constructor(e, t, i) {
                this._latLon = e,
                this._size = t,
                this._data = i,
                this._setMarker()
            }
            _setMarker() {
                this._marker = new google.maps.Marker({
                    position: this._latLon.asGoogleMapsLatLng(),
                    zIndex: po,
                    visible: !0,
                    clickable: !0,
                    optimized: !0
                }),
                this._marker.addListener("click", ( () => this._clickHandler()))
            }
            remove() {
                google.maps.event.clearInstanceListeners(this._marker),
                this._marker.setMap(null),
                this._marker.setIcon(null),
                this._marker.setPosition(null)
            }
            show() {
                this._marker.setMap(yo())
            }
        }
        class Va extends ja {
            constructor(e) {
                super(e.latLng, 1, e),
                this._marker.setIcon(this._data.classification.iconSymbol),
                void 0 !== this._data.classification.iconText && this._marker.setLabel({
                    text: this._data.classification.iconText,
                    fontSize: "10px",
                    fontWeight: "700",
                    color: this._data.classification.iconTextColour
                })
            }
            _clickHandler() {
                Ni(this._data)
            }
        }
        class Ga extends ja {
            _options;
            constructor(e, t, i, a) {
                super(e, t, i),
                this._options = a,
                this.refreshIcon()
            }
            _setLabel(e) {
                this._marker.setLabel({
                    text: this._size.toLocaleString(),
                    color: this._options.colour(e).bestContrastingFontColour().asHex(),
                    fontSize: "10px",
                    fontWeight: "500"
                })
            }
            refreshIcon(e) {
                void 0 === e && (e = Wa()),
                this._setIcon(e),
                this._setLabel(e)
            }
        }
        class Xa extends Ga {
            constructor(e, t, i) {
                super(e, t, i, Fa)
            }
            _clickHandler() {
                !async function(e) {
                    Ii();
                    try {
                        await ot(et.INFO_WINDOW),
                        Ci(),
                        await Pi.showLocations(e)
                    } catch (e) {
                        pe(e)
                    }
                }(this._data)
            }
            _setIcon(e) {
                this._marker.setIcon({
                    url: this._options.filename(e),
                    scaledSize: new google.maps.Size(this._options.iconSize.width,this._options.iconSize.height),
                    labelOrigin: new google.maps.Point(this._options.iconSize.width / 2,.45 * this._options.iconSize.height)
                })
            }
        }
        class qa extends Ga {
            constructor(e, t, i) {
                super(e, t, i, function(e) {
                    const t = Da.filter((t => e >= t.minSize && e <= t.maxSize)).shift();
                    if (void 0 === t)
                        throw new Error(`No cluster settings found for size: ${e}.`);
                    return t
                }(t))
            }
            _clickHandler() {
                const e = this._data.reduce(( (e, t) => (e.north = Math.max(e.north, t.latLng.lat),
                e.east = Math.max(e.east, t.latLng.lon),
                e.south = Math.min(e.south, t.latLng.lat),
                e.west = Math.min(e.west, t.latLng.lon),
                e)), {
                    north: -90,
                    east: -180,
                    south: 90,
                    west: 180
                })
                  , t = new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.west),new google.maps.LatLng(e.north,e.east));
                yo().fitBounds(t, 10)
            }
            _setIcon(e) {
                this._marker.setIcon({
                    url: this._options.filename(e),
                    scaledSize: new google.maps.Size(this._options.iconSize.width,this._options.iconSize.height),
                    anchor: new google.maps.Point(this._options.iconSize.width / 2,this._options.iconSize.height / 2)
                })
            }
        }
        var Ya;
        !function(e) {
            e[e.NORMAL = 0] = "NORMAL",
            e[e.HIGH = 1] = "HIGH",
            e[e.CRITICAL = 2] = "CRITICAL"
        }(Ya || (Ya = {}));
        let Ka = "#notifications"
          , Za = "#notifications-view"
          , Qa = "#notifications-close"
          , Ja = []
          , en = !1;
        async function tn() {
            await Xe(),
            at()
        }
        function an(e, t) {
            let i = $("<div>").addClass("list-item")
              , a = $("<header>").appendTo(i);
            null !== e.title && $("<h4>").text(e.title).appendTo(a),
            null !== e.description && $("<p>").text(e.description).appendTo(a),
            e.url && $("<p>").text(e.url).appendTo(a).linkify({
                format: () => "Click here for more information"
            });
            let n = $("<footer>").appendTo(i)
              , o = $("<div>").appendTo(n);
            $("<div>").text(e.date).appendTo(n);
            let r = $("<div>").addClass("btn-small button-colour blue-rev").addSmallTooltip("#notification-markread");
            switch (!0 === t && r.appendTo(n).on("click", (async () => {
                Ja.splice(Ja.findIndex((t => t.id === e.id)), 1),
                await function(e) {
                    return $e("MarkNotificationAsRead", {
                        notificationIds: [e.id]
                    })
                }(e),
                i.hide("puff", {}, Se, ( () => i.remove())),
                sn(),
                rn(Ja.length)
            }
            )),
            e.severity) {
            case Ya.NORMAL:
                i.addClass("normal"),
                o.text("Normal"),
                r.addClass("blue-rev");
                break;
            case Ya.HIGH:
                i.addClass("high"),
                o.text("High"),
                r.addClass("orange-rev");
                break;
            case Ya.CRITICAL:
                i.addClass("critical"),
                o.text("Critical"),
                r.addClass("red-rev")
            }
            return i
        }
        function nn() {
            let e = $(Ka).children("div.body");
            e.empty(),
            Ja.forEach((t => {
                an(t, !0).appendTo(e)
            }
            )),
            on("Unread notifications"),
            rn(Ja.length),
            $(Za).text("View read notifications").off().on("click", ( () => async function() {
                (function(e) {
                    let t = $(Ka).children("div.body");
                    t.empty(),
                    e.forEach(( (e, i) => {
                        let a = an(e, !1).appendTo(t);
                        e.url || a.removeClass("clickable")
                    }
                    )),
                    on("Read notifications"),
                    rn(e.length),
                    $(Za).text("View unread notifications").off().on("click", ( () => {
                        nn(),
                        Ze(Ka)
                    }
                    ))
                }
                )(await Ae("GetReadNotifications")),
                Ze(Ka)
            }()))
        }
        function on(e) {
            $(Ka).children("header").children("h1").text(e)
        }
        function rn(e) {
            $(Ka).children("header").children("h2").text(`Showing ${e} notification${1 !== e ? "s" : ""}`)
        }
        function sn() {
            let e = $("#mnu-notifications");
            Ja.length > 0 ? e.addClass("notify") : e.removeClass("notify")
        }
        async function ln() {
            !0 !== en && (nt(et.NOTIFICATIONS, {
                allows: [et.AREA_EDITOR, et.INFO_WINDOW, et.LOCATION_EDITOR, et.TERRITORY_CHECKS],
                closeFunction: tn
            }),
            $(Qa).on("click", ( () => tn())),
            en = !0);
            try {
                return await ot(et.NOTIFICATIONS),
                nn(),
                Ze(Ka)
            } catch (e) {
                pe(e)
            }
        }
        const cn = new Map;
        function dn() {
            cn.forEach((e => e.isSelected = !1))
        }
        function pn(e) {
            e.empty(),
            cn.forEach((t => {
                const i = $("<div>").addClass("user-view").appendTo(e)
                  , a = $("<header>").appendTo(i)
                  , n = $("<h3>").text(t.name).appendTo(a);
                !0 === t.isSelected && $("<span>").addClass("active-view").text("(Active)").appendTo(n);
                const o = $("<div>").addClass("view-layers").appendTo(i);
                0 === t.layers.length ? k("This view has no layers").appendTo(o) : t.layers.forEach((e => {
                    var t;
                    $("<p>").addClass("view-layer").text(e.name).css("background-image", `url(${(t = e.countryId,
                    An.get(t))?.flag})`).appendTo(o)
                }
                ));
                const r = $("<footer>").appendTo(i);
                !0 === t.isDefault && $("<p>").addClass("default-view").text("This is the default view").appendTo(r);
                const s = $("<p>").addClass("text-button").appendTo(r);
                !0 === t.isSelected ? s.addClass("red").text("Turn off view").on("click", ( () => {
                    un(),
                    pn(e)
                }
                )) : s.addClass("green").text("Turn on view").on("click", ( () => {
                    un(t.id),
                    y()
                }
                )),
                !0 === Ea() || !0 === ii() ? s.off("click").addClass("disabled").addSmallTooltipWithContent("The view cannot be changed while editing a record.", !1) : 0 === t.layers.length && s.off("click").addClass("disabled").addSmallTooltipWithContent("The view cannot be selected as it contains no layers.", !1)
            }
            ))
        }
        function un(e) {
            if (void 0 === e)
                dn(),
                Gn();
            else {
                const t = cn.get(e);
                if (void 0 === t || !0 === t.isSelected)
                    return;
                dn(),
                t.isSelected = !0,
                Gn(t)
            }
        }
        class fn {
            _id;
            _name;
            _layers;
            _isDefault;
            _viewBounds;
            isSelected = !1;
            constructor(e) {
                this._id = e.id,
                this._name = e.name,
                this._isDefault = e.isDefault,
                this._layers = e.layers?.map((e => zn(e.layerId, e.organisationId))).filter((e => e instanceof Xi)) ?? [],
                this._viewBounds = null !== e.view ? j(e.view) : null
            }
            get id() {
                return this._id
            }
            get name() {
                return this._name
            }
            get layers() {
                return this._layers
            }
            get isDefault() {
                return this._isDefault
            }
            get viewBounds() {
                return this._viewBounds
            }
        }
        const hn = "#mnu-territory-checks";
        let mn = "#territory-checks"
          , gn = `${mn}-close`
          , yn = []
          , xn = null
          , bn = !1
          , vn = null;
        async function wn() {
            await Xe(),
            at()
        }
        function kn(e=null) {
            if (null === e)
                null !== vn && (vn.setMap(null),
                vn = null);
            else if (null === vn) {
                const t = {
                    clickable: !1,
                    fillColor: "#e63433",
                    strokeColor: "#000",
                    strokeWeight: 5,
                    map: yo(),
                    paths: G(e)
                };
                vn = new google.maps.Polygon(t)
            } else
                vn.setPaths(G(e));
            null !== vn && yo().fitBounds(H(vn))
        }
        function Cn() {
            let e = $(mn).children("div.body");
            e.empty();
            const t = yn.filter((e => e.openChecks.length > 0)).length > 1;
            yn.forEach((i => {
                i.openChecks.forEach((a => {
                    (function(e, t=null) {
                        let i = $("<div>").addClass("list-item")
                          , a = $("<header>").appendTo(i);
                        const n = null === t || 0 === t.length ? "" : `${t}: `;
                        $("<h4>").text(`${n}${e.potName}`).appendTo(a);
                        let o = $("<p>").text(e.submittedHuman).addClass("open-check-age").appendTo(a);
                        $("<p>").text(e.description).appendTo(a);
                        let r = $("<footer>").appendTo(i)
                          , s = $("<div>").addClass("btn button-colour");
                        e.id === xn?.id ? s.text("Hide search area").addClass("red-rev").addSmallTooltipWithContent("Removes the search area from the map.", !1).on("click", ( () => {
                            xn = null,
                            kn(null),
                            Cn()
                        }
                        )).appendTo(r) : s.text("Show search area").addClass("blue-rev").addSmallTooltipWithContent("Displays the search area on the map.", !1).on("click", (async () => {
                            xn = e,
                            kn((await async function(e) {
                                const t = {
                                    searchAreaId: e,
                                    activeLayers: Bn().map((e => e.identifier))
                                };
                                return await $e("GetCheckRequestSearchArea", t)
                            }(e.id)).boundary),
                            Cn()
                        }
                        )).appendTo(r),
                        $("<div>").text("Respond").addClass("btn button-colour green-rev").on("click", ( () => {
                            const t = new h((async i => {
                                try {
                                    await async function(e, t) {
                                        return $e("SubmitTerritoryCheckResponse", {
                                            searchAreaId: e.id,
                                            result: t,
                                            activeLayers: Bn().map((e => e.identifier))
                                        })
                                    }(e, i),
                                    se.Notify.success("Response successfully sent!"),
                                    t.close(),
                                    yn.forEach((t => {
                                        t.openChecks.findIndex((t => t.id === e.id)) > -1 && (t.openChecks = t.openChecks.filter((t => t.id !== e.id)),
                                        kn(null))
                                    }
                                    )),
                                    Cn()
                                } catch (e) {
                                    console.error(e)
                                }
                            }
                            )).setMode("TINY").setContentId("tc-territorychecks-respond").setTitle("Decision required").setSubtitle("Choose how to respond").show()
                        }
                        )).appendTo(r);
                        const l = (Date.now() - new Date(e.submitted).getTime()) / 36e5;
                        return l < 24 ? (i.addClass("normal"),
                        o.addClass("normal")) : l < 48 ? (i.addClass("warning"),
                        o.addClass("warning")) : (i.addClass("critical"),
                        o.addClass("critical")),
                        i
                    }
                    )(a, !0 === t ? i.organisationName : "").appendTo(e)
                }
                ))
            }
            )),
            $(mn).children("header").children("h1").text("Territory Checker"),
            function() {
                const e = _n();
                $(mn).children("header").children("h2").text(`Showing ${e} check${1 !== e ? "s" : ""} awaiting response`)
            }(),
            Tn()
        }
        function _n() {
            return yn.map((e => e.openChecks)).flat(1).length
        }
        function Tn() {
            const e = $("#mnu-territory-checks");
            _n() > 0 ? e.addClass("notify") : e.removeClass("notify")
        }
        const Ln = "#layer-control";
        let En = new Map
          , In = new Map
          , An = new Map
          , $n = null;
        async function Nn(e, t) {
            let i = zn(e, t);
            if (null === i)
                throw new Error("The specified layer was not found.");
            if (Qn(i),
            i instanceof Sa)
                i.on(),
                mt.Instance.refreshData(),
                await Hn([i]),
                i.loadMethod === ne.COMPLETE && !1 === i.isAlreadyLoaded && i.addAreas();
            else {
                if (!(i instanceof Ki))
                    throw new Error("Unhandled layer type activated.");
                i.on(),
                mt.Instance.refreshData(),
                await Un()
            }
        }
        function Sn(e) {
            En.set(e.textId, e)
        }
        function On() {
            En.forEach((e => {
                !1 !== e.isShown && (!0 === e.checkZoom() ? (function(e) {
                    Pn(e).removeClass("unavailable"),
                    !0 === e.isOn && Qn(e)
                }(e),
                !1 === e.isEnabled && e.enable()) : (function(e) {
                    Pn(e).addClass("unavailable"),
                    !0 === e.isOn && Jn(e)
                }(e),
                !0 === e.isEnabled && e.disable()))
            }
            )),
            mt.Instance.refreshData(),
            Pa()
        }
        async function Rn() {
            await Ge(),
            await Promise.all([eo.clear(), io.clear()])
        }
        function Mn(e, t) {
            let i = zn(e, t);
            if (null !== i)
                return !0 === ya(i) || !0 === function(e) {
                    return void 0 !== jt && jt.equals(e)
                }(i) ? void pe("This layer cannot be turned off at this time.") : (Jn(i),
                i instanceof Sa ? (i.off(),
                mt.Instance.refreshData(),
                Promise.resolve()) : i instanceof Ki ? (i.off(),
                mt.Instance.refreshData(),
                Un()) : Promise.reject("Unhandled layer type deactivated."));
            throw new Error("The specified layer was not found.")
        }
        async function Dn() {
            W();
            let e = await Ae("FetchUserData");
            await (async e => {
                var t, i, a;
                if (In.clear(),
                null !== e.organisations && e.organisations.forEach((e => {
                    let t = null;
                    null !== e.permissions && (t = new pt(e.permissions));
                    let i = new Oa(e,t);
                    In.set(e.id, i)
                }
                )),
                null !== e.notifications && (t = e.notifications,
                Ja = t,
                sn(),
                Ja.length > 0 && ln()),
                1 != (0 === (a = e.territoryChecks).filter((e => !0 === e.hasTerritoryChecker)).length) ? (yn = a,
                Tn()) : $(hn).remove(),
                null !== e.view) {
                    let t = j(e.view);
                    $n = t,
                    Xn()
                }
                i = e.preferences,
                void 0 === yi && (yi = i),
                await async function(e) {
                    let t = $(Ln)
                      , i = $("#legend")
                      , a = t.find("div.body")
                      , n = i.find("div.body")
                      , o = e => {
                        let t = $("<div>").attr("data-id", e.id).addClass("list-item-group");
                        return $("<h2>").text(e.name).css("background-image", `url(${e.flag})`).appendTo(t),
                        t
                    }
                    ;
                    return e.forEach((e => {
                        An.set(e.id, {
                            id: e.id,
                            name: e.name,
                            flag: e.flag
                        });
                        let t = o(e).appendTo(a);
                        o(e).appendTo(n),
                        e.layers.forEach(( (i, a) => {
                            let n, o = co - 2 * a;
                            switch (i.layerType) {
                            case ae.BASE_LAYER:
                            case ae.BASE_LAYER_ON_HIERARCHY:
                            case ae.AGGREGATED:
                            case ae.CUSTOM_AREA:
                            case ae.RADIAL:
                                n = ( (e, t, i) => {
                                    let a = new Sa(e,t.id,i);
                                    return null !== e.classifications && e.classifications.forEach((e => {
                                        let t = new be(a,e);
                                        a.addClassification(t)
                                    }
                                    )),
                                    Sn(a),
                                    a
                                }
                                )(i, e, o);
                                break;
                            case ae.LOCATIONS:
                                n = ( (e, t, i) => {
                                    let a = new Ki(e,t.id,i);
                                    return null !== e.classifications && e.classifications.forEach((e => {
                                        let t = new qi(a,e);
                                        a.addClassification(t)
                                    }
                                    )),
                                    Sn(a),
                                    a
                                }
                                )(i, e, o);
                                break;
                            default:
                                throw new Error("Unexpected layer type received.")
                            }
                            (function(e) {
                                const t = $("<div>").addClass("list-item clickable").attr("data-id", e.textId)
                                  , i = $("<header>").appendTo(t).on("click", ( () => {
                                    !0 !== t.hasClass("unavailable") && (!0 === t.hasClass("active") ? Mn(e.id, e.organisation.id) : Nn(e.id, e.organisation.id))
                                }
                                ));
                                $("<h6>").css({
                                    color: e.organisation.colour.asRgb()
                                }).text(e.organisation.name).appendTo(i),
                                $("<h5>").text(e.name).appendTo(i);
                                const a = $("<footer>").appendTo(t).hide();
                                if ($("<div>").addClass("button-colour btn-small layer-reorder").addSmallTooltip("#lc-layer-reorder").appendTo(a),
                                $("<div>").addClass("button-colour btn-small filter-status").addSmallTooltip("#lc-layer-filter").hide().appendTo(a),
                                e instanceof Sa) {
                                    const t = $("<div>").addClass("button-colour layer-labels").appendTo(a).on("click", ( () => {
                                        Zn(e.id, e.organisation.id)
                                    }
                                    ));
                                    !0 === e.labelsOn ? t.addClass("red-rev").text("Turn labels off") : t.addClass("green-rev").text("Turn labels on")
                                } else
                                    e instanceof Ki && $("<div>").addClass("spacer").appendTo(a);
                                return $("<div>").addClass("button-colour btn-small button-colour layer-actions blue").addSmallTooltip("#lc-layer-actions").appendTo(a).on("click", ( () => {
                                    Yn(e.id, e.organisation.id)
                                }
                                )),
                                $("<div>").addClass("unavailable-message").html("<p>This layer is not available at the current zoom level.</p>").appendTo(t),
                                t
                            }
                            )(n).appendTo(t)
                        }
                        )),
                        t.sortable({
                            cursor: "move",
                            opacity: .8,
                            tolerance: "pointer",
                            items: "div.list-item",
                            axis: "y",
                            helper: "clone",
                            handle: "footer > div.layer-reorder",
                            start: function(e, t) {
                                t.placeholder.css({
                                    visibility: "visible",
                                    "background-color": "#aaa"
                                })
                            },
                            update: function(t, i) {
                                Vn(e.id)
                            }
                        })
                    }
                    )),
                    On(),
                    mt.Instance.refreshData(),
                    Ft()
                }(e.countries),
                null !== e.userViews && function(e, t=!0) {
                    if (e.forEach((e => cn.set(e.id, new fn(e)))),
                    !0 === t) {
                        const e = Array.from(cn.values()).filter((e => !0 === e.isDefault)).shift();
                        void 0 !== e && un(e.id)
                    }
                }(e.userViews, !0)
            }
            )(e),
            Z()
        }
        function Fn() {
            let e = [];
            return En.forEach((t => {
                t instanceof Sa && (!1 === t.isAlreadyLoaded && t.loadMethod === ne.COMPLETE || e.push(t.getDetailsForMapItemLoad()))
            }
            )),
            e
        }
        function Bn() {
            return Array.from(En.values()).filter((e => !0 === e.isOn && !0 === e.isShown))
        }
        function zn(e, t) {
            return En.get(Xi.CreateLayerTextId(e, t)) || null
        }
        function Pn(e) {
            return $(Ln).find(`div.list-item[data-id=${e.textId}]`)
        }
        async function Un() {
            const e = Array.from(En.values()).filter((e => e instanceof Ki && !0 === e.isOn && !0 === e.isShown));
            if (0 !== e.length)
                return Hn(e);
            jn()
        }
        async function Wn() {
            return Hn(Array.from(En.values()).filter((e => !0 === e.isOn && !0 === e.isShown && !0 === e.isEnabled && e.loadMethod !== ne.COMPLETE)))
        }
        async function Hn(e) {
            if (0 !== e.length)
                return async function(e) {
                    if (0 === e.length)
                        return;
                    const t = go().getMapbounds();
                    let i = {
                        activatedLayers: e.map((e => e.getDetailsForMapItemLoad())),
                        x1: t.west,
                        y1: t.south,
                        x2: t.east,
                        y2: t.north,
                        zoomLevel: yo().getZoom()
                    };
                    (await $e("GetRecords", i)).layers.forEach((e => {
                        const t = zn(e.layerId, e.organisationId);
                        t instanceof Sa ? t.addAreas(...e.areaRecords) : t instanceof Ki && t.addLocations(e.locationRecords)
                    }
                    )),
                    jn()
                }(e.filter((e => !(e instanceof Sa && !0 === e.isAlreadyLoaded))))
        }
        function jn() {
            const e = Array.from(En.values()).filter((e => e instanceof Ki && !0 === e.isOn && !0 === e.isShown))
              , t = go().getMapbounds();
            Pa(e.flatMap((e => e.records().filter((e => !1 === e.isFilteredOff && e.latLng.lat <= t.north && e.latLng.lat >= t.south && e.latLng.lon <= t.east && e.latLng.lon >= t.west)))))
        }
        function Vn(e) {
            $(`${Ln} > div.body > div.list-item-group[data-id=${e}] > div.list-item`).each(( (e, t) => {
                let i = $(t).attr("data-id").split("_")
                  , a = zn(parseInt(i[0]), parseInt(i[1]));
                if (null !== a) {
                    let t = co - 2 * e;
                    a.zIndex !== t && a instanceof Sa && a.setZIndex(t)
                }
            }
            ))
        }
        function Gn(e) {
            void 0 === e ? (En.forEach((e => {
                Kn(e),
                e.show()
            }
            )),
            $(Ln).find("div.list-item-group").show(),
            Xn()) : ((e => {
                const t = e.layers.map((e => e.identifier));
                $(Ln).find("div.list-item-group").hide(),
                En.forEach((e => {
                    !0 === t.some((t => t.layerId === e.id && t.organisationId === e.organisation.id)) ? (Kn(e),
                    e.show(),
                    $(Ln).find(`div.list-item-group[data-id=${e.countryId}]`).show()) : (function(e) {
                        Pn(e).hide()
                    }(e),
                    e.hide())
                }
                ))
            }
            )(e),
            Xn(e.viewBounds || void 0))
        }
        function Xn(e) {
            if (null === $n)
                return;
            let t = yo().getBounds();
            var i, a;
            e ? yo().fitBounds(e) : yo().fitBounds($n),
            1 == (a = yo().getBounds(),
            void 0 !== (i = t) && void 0 !== a && i.getCenter().toUrlValue(3) === a.getCenter().toUrlValue(3)) && Wn()
        }
        async function qn() {
            return Ye(Ln)
        }
        async function Yn(e, t) {
            return eo.show(e, t)
        }
        function Kn(e) {
            Pn(e).show()
        }
        function Zn(e, t) {
            let i = zn(e, t);
            if (null === i)
                throw new Error("The specified layer was not found.");
            if (!(i instanceof Sa))
                throw new Error("The specified layer is not an Area layer.");
            let a = Pn(i).find("div.layer-labels");
            a.toggleClass("green-rev red-rev"),
            !0 === i.labelsOn ? (a.text("Turn labels on"),
            i.turnOffLabels()) : (a.text("Turn labels off"),
            i.turnOnLabels())
        }
        function Qn(e) {
            let t = Pn(e);
            t.addClass("active"),
            t.find("footer").slideDown(Se),
            t.children("header").children().css({
                "border-color": e.formatting.colour().asHex()
            })
        }
        function Jn(e) {
            let t = Pn(e);
            t.removeClass("active"),
            t.find("footer").slideUp(Se),
            t.children("header").children().css({
                "border-color": "transparent"
            })
        }
        var eo, to, io;
        let ao;
        !function(e) {
            const t = "#layer-action-menu";
            let i = !1;
            function a() {
                let e = $(t);
                e.find("header > h1").text("");
                let i = e.find("div.body");
                i.find("div.button-colour").off(),
                i.empty()
            }
            async function n() {
                await qn(),
                await a()
            }
            e.clear = a,
            e.close = n,
            e.show = async function(e, o) {
                !0 !== i && ($("#layer-action-menu-close").on("click", ( () => n())),
                i = !0);
                let r = zn(e, o);
                if (null === r)
                    throw new Error("The specified layer was not found.");
                a();
                let s = $(t);
                s.find("header > h1").text(r.name);
                let l = s.find("div.body");
                const c = ft().appendTo(l);
                if (r instanceof Sa) {
                    const e = r.getPermissionForUser(ct.EDIT_BOUNDARIES)
                      , t = r.layerType !== ae.AGGREGATED || null !== r.baseLayerId && !0 === r.baseLayerIsAvailable()
                      , i = r.layerType !== ae.AGGREGATED || !0 === t && function(e) {
                        const t = Array.from(cn.values()).filter((e => !0 === e.isSelected)).shift();
                        return void 0 === t || t.layers.filter((t => t.equals(e))).length > 0
                    }(zn(r.baseLayerId, r.organisation.id))
                      , a = ut(dt.GREEN, "Create new area", !e || !t || !i).appendTo(c);
                    !1 === e ? a.addSmallTooltip("map-layer-no-permission") : !1 === t ? a.addSmallTooltip("map-layer-no-required-base-layer") : !1 === i ? a.addSmallTooltip("map-layer-base-layer-not-in-view") : a.on("click", (async () => {
                        switch (await qn(),
                        r.layerType) {
                        case ae.AGGREGATED:
                        case ae.CUSTOM_AREA:
                            await ga(r);
                            break;
                        case ae.RADIAL:
                            Bt(r)
                        }
                    }
                    ))
                } else if (r instanceof Ki) {
                    const e = r.getPermissionForUser(ct.EDIT_LOCATIONS)
                      , t = ut(dt.GREEN, "Create new location", !e).appendTo(c);
                    !1 === e ? t.addSmallTooltip("map-layer-no-permission") : t.on("click", (async () => {
                        !1 === ii() && Bt(r)
                    }
                    ))
                }
                if (null !== r.organisation.userPermissions) {
                    let e = ft("Analysis");
                    r instanceof Sa && ut(dt.BLUE, "Apply heat mapping").appendTo(e).on("click", ( () => {
                        ea.Instance.openHeatMapping(r)
                    }
                    )),
                    null !== r.currentAnalysis && ut(dt.RED, "Clear current analysis").appendTo(e).one("click", (async () => {
                        await ea.Instance.clearLayerAnalysis(r),
                        Yn(r.id, r.organisation.id)
                    }
                    )),
                    !0 === ht(e) && e.appendTo(l)
                }
                if (r instanceof Sa) {
                    let e = ft("Display options");
                    if (!1 === r.isBaseLayer && !0 === r.getPermissionForUser(ct.VIEW_CLASSIFICATIONS)) {
                        let t = () => (r.colourMode === Hi.COLOURFUL ? "Hide" : "Show") + " classification colours"
                          , i = ut(dt.BLUE, t()).appendTo(e);
                        null !== r.currentAnalysis ? i.addClass("disabled").on("click", ( () => {
                            pe("This action is not available while analysis is applied on the layer.")
                        }
                        )) : i.on("click", (e => {
                            r.colourMode === Hi.COLOURFUL ? r.setTransparent() : r.colourMode === Hi.TRANSPARENT && r.setColourful(),
                            $(e.target).text(t())
                        }
                        ))
                    }
                    ut(dt.BLUE, "Edit label content").appendTo(e).on("click", ( () => {
                        to.show(r)
                    }
                    )),
                    e.appendTo(l)
                }
                let d = ft("Layer data").appendTo(l);
                ut(dt.BLUE, "Table view").appendTo(d).on("click", ( () => {
                    gi.Instance.open(r)
                }
                )),
                null !== r.organisation.userPermissions && ut(dt.BLUE, "Layer information").appendTo(d).on("click", ( () => {
                    io.show(r)
                }
                )),
                await Ye(t),
                await io.clear()
            }
        }(eo || (eo = {})),
        function(e) {
            const t = "labels-reorder";
            let i = [];
            async function a(e) {
                const t = {
                    activatedLayer: e.getDetailsForMapItemLoad()
                };
                return t.activatedLayer.labelSettings = [],
                i.forEach(( (e, i) => {
                    let a = e.asServerLabel();
                    a.order = i,
                    t.activatedLayer.labelSettings?.push(a)
                }
                )),
                $e("GetReplacementLabels", t)
            }
            function n() {
                i.forEach(( (e, t) => e.order = t))
            }
            e.getReplacementLabels = a,
            e.show = async function e(o, r) {
                i = r || o.labels.map((e => e.clone()));
                let s = function(a) {
                    const o = "data-idx";
                    let r = b()
                      , s = new Le(4);
                    s.addHeaders("", "Label", "Prefix", ""),
                    i.forEach(( (r, l) => {
                        let c = $("<div>").addClass(t).attr(o, l).addSmallTooltip("tt-labels-reorder")
                          , d = $("<input>").attr({
                            type: "text",
                            maxlength: "10",
                            value: r.userPrefix,
                            placeholder: "Enter an optional prefix"
                        }).addClass("labels-prefix").on("input", ( () => r.userPrefix = d.val()))
                          , p = $("<div>").addClass("labels-delete").addSmallTooltip("tt-labels-delete").on("click", ( () => {
                            i = i.filter((e => !(e.type === r.type && e.id === r.id))),
                            n(),
                            e(a, i)
                        }
                        ));
                        s.addData({
                            jquery: c
                        }, r.title, {
                            jquery: d
                        }, {
                            jquery: p
                        })
                    }
                    ));
                    let l = $("<a>").attr("id", "labels-add").text("Add label");
                    return i.length < 5 ? l.on("click", ( () => {
                        pi({
                            layer: a,
                            selected: i,
                            maxSelected: 5
                        }, (t => {
                            e(a, t)
                        }
                        ))
                    }
                    )) : l.addClass("disabled").addSmallTooltip("#add-labels-disabled"),
                    s.addData({}, {
                        jquery: l
                    }, {}, {}),
                    s.table.appendTo(r).sortable({
                        cursor: "move",
                        opacity: .8,
                        tolerance: "pointer",
                        items: "tbody > tr:not(:last-of-type)",
                        axis: "y",
                        helper: "clone",
                        handle: `.${t}`,
                        start: function(e, t) {
                            t.placeholder.css({
                                visibility: "visible",
                                "background-color": "#aaa"
                            })
                        },
                        update: function(e, a) {
                            let r = [];
                            $(e.target).find(`tr:not(:last-of-type) .${t}`).each(( (e, t) => {
                                r.push(parseInt($(t).attr(o))),
                                $(t).attr(o, e)
                            }
                            ));
                            let s = [];
                            r.forEach(( (e, t) => s.push(i[e]))),
                            i = s,
                            n()
                        }
                    }),
                    r
                }(o);
                x(g.SMALL, "Label Settings", "Current labels", s, {
                    text: "Save changes",
                    okFunction: async () => {
                        if (0 === i.length)
                            C("Unable to proceed", "You must have at least one label.");
                        else {
                            o.recordCount() > 500 && W();
                            let e = await a(o);
                            o.updateLabels(i, e),
                            i = [],
                            y(),
                            Z()
                        }
                    }
                })
            }
        }(to || (to = {})),
        function(e) {
            const t = "#layer-information";
            function i() {
                $(t).find("div.body").empty()
            }
            e.clear = i,
            e.show = async function(e) {
                let a = $(t);
                i();
                let n = a.find("div.body")
                  , o = e => $("<h4>").text(e)
                  , r = e => $("<p>").text(e)
                  , s = await async function(e) {
                    return Ae("GetLayerInformation", e.identifier)
                }(e);
                $(t).find("header > h1").text(e.name),
                o("Number of records").appendTo(n),
                r(s.numberOfRecords).appendTo(n),
                s.author && (o("Author").appendTo(n),
                r(s.author).appendTo(n)),
                s.copyright && (o("Copyright").appendTo(n),
                r(s.copyright).appendTo(n)),
                s.release && (o("Release").appendTo(n),
                r(s.release).appendTo(n)),
                s.newerReleaseAvailable && (o("Newer release available?").appendTo(n),
                r(!0 === s.newerReleaseAvailable ? "Yes" : "No").appendTo(n)),
                s.numberOfRecords > 0 && s.classifications && !0 === e.getPermissionForUser(ct.VIEW_CLASSIFICATIONS) && (e => {
                    if (0 === e.length || 1 === e.length && null === e[0].id)
                        return;
                    o("Classification breakdown").appendTo(n),
                    $("<div>").attr({
                        id: "layer-information-class-chart"
                    }).css({
                        height: "350px",
                        width: "auto"
                    }).appendTo(n);
                    let t = []
                      , i = [];
                    e.forEach((e => {
                        t.push([e.name, e.count]),
                        i.push(new U(255,255,255).add(U.fromHex(e.colour, e.opacity)).asRgb())
                    }
                    ));
                    let a = anychart.pie(t);
                    a.credits(!1),
                    a.animation(!1),
                    a.title(),
                    a.title("");
                    let r = anychart.palettes.rangeColors();
                    r.items(i),
                    a.palette(r),
                    a.background().fill("transparent"),
                    a.container("layer-information-class-chart"),
                    a.draw()
                }
                )(s.classifications),
                $("#layer-information-close").off().on("click", ( () => {
                    Yn(e.id, e.organisation.id)
                }
                )),
                await Ye(t),
                await eo.clear()
            }
        }(io || (io = {}));
        let no, oo, ro = {
            fillColor: "#333333",
            fillOpacity: .3
        }, so = {
            fillColor: "#CCCCCC",
            fillOpacity: .3
        }, lo = {
            fillColor: "#FFFFFF",
            fillOpacity: 0
        }, co = 1e3, po = 5e3, uo = 6e3, fo = 3, ho = !1;
        function mo(e) {
            return void 0 !== oo && oo.map.getBounds().contains(e.getNorthEast()) && oo.map.getBounds().contains(e.getSouthWest())
        }
        function go() {
            if (void 0 === oo)
                throw new Error("No map provider is set.");
            return oo
        }
        function yo() {
            if (void 0 === oo)
                throw new Error("No map provider is set.");
            return oo.map
        }
        class xo {
            _map;
            constructor(e) {
                this._map = e
            }
            getMapbounds() {
                const e = this._map.getBounds();
                if (void 0 === e)
                    throw new Error("No map was available from which to determine the bounds.");
                return {
                    north: e.getNorthEast().lat(),
                    east: e.getNorthEast().lng(),
                    south: e.getSouthWest().lat(),
                    west: e.getSouthWest().lng()
                }
            }
            getMapContainer() {
                return ao
            }
            get map() {
                return this._map
            }
        }
        const bo = "tooltipster-punk-smallbtn"
          , vo = "data-tooltip-content"
          , wo = [350, 150];
        function ko() {
            return {
                theme: ["tooltipster-punk"],
                maxWidth: 250,
                animationDuration: wo
            }
        }
        $(( () => {
            !function() {
                try {
                    anychart.licenseKey("atlas-mapping-e061ef00-b9b870f9")
                } catch {
                    console.log("Unable to intialise module: Anychart.")
                }
            }(),
            jQuery.fn.extend({
                addSmallTooltip: function(e) {
                    !1 === e.startsWith("#") && (e = `#${e}`);
                    const t = ko();
                    return Array.isArray(t.theme) && t.theme.push(bo),
                    t.contentCloning = !0,
                    $(this).attr(vo, e).tooltipster(t)
                },
                addSmallTooltipWithContent: function(e, t) {
                    const i = ko();
                    return Array.isArray(i.theme) && i.theme.push(bo),
                    i.content = e,
                    i.contentAsHTML = t,
                    $(this).tooltipster(i)
                },
                removeTooltip: function() {
                    return $(this).removeAttr(vo),
                    !0 === $(this).hasClass("tooltipstered") && $(this).tooltipster("destroy"),
                    $(this)
                }
            }),
            function() {
                try {
                    se.Notify.init({
                        width: "230px",
                        position: "left-bottom",
                        borderRadius: "8px",
                        distance: "10px",
                        info: {
                            background: "#3498DB",
                            notiflixIconColor: "#5DADE2"
                        },
                        failure: {
                            background: "#E74C3C",
                            notiflixIconColor: "#EC7063"
                        },
                        success: {
                            background: "#27AE60",
                            notiflixIconColor: "#52BE80"
                        },
                        warning: {
                            background: "#E67E22",
                            notiflixIconColor: "#EB984E"
                        },
                        cssAnimationStyle: "from-left"
                    }),
                    se.Report.init({
                        borderRadius: "8px",
                        svgSize: "60px",
                        plainText: !1,
                        info: {
                            buttonBackground: "#3498DB",
                            svgColor: "#3498DB"
                        },
                        failure: {
                            buttonBackground: "#E74C3C",
                            svgColor: "#E74C3C"
                        },
                        success: {
                            buttonBackground: "#27AE60",
                            svgColor: "#27AE60"
                        },
                        warning: {
                            buttonBackground: "#E67E22",
                            svgColor: "#E67E22"
                        }
                    })
                } catch {
                    console.log("Unable to intialise module: Notiflix.")
                }
            }(),
            $("select").niceSelect(),
            $(".tip").tooltipster({
                theme: "tooltipster-punk",
                maxWidth: 250,
                animationDuration: [350, 150]
            }),
            jQuery.fn.extend({
                showFlex: function() {
                    return $(this).css({
                        display: "flex"
                    })
                },
                sayNo: function() {
                    $(this).animate({
                        backgroundColor: "rgba(192,0,0,0.5)"
                    }, 250).animate({
                        backgroundColor: "transparent"
                    }, 250)
                },
                wrapTextInBold: function(e) {
                    let t = e.tag || "strong"
                      , i = e.words || []
                      , a = RegExp(i.join("|"), "gi")
                      , n = "<" + t + ">$&</" + t + ">";
                    return this.html(( () => $(this).text().replace(a, n)))
                },
                overlayMessage: function(e) {
                    $(this).removeOverlayMessage(),
                    $("<div>").addClass("msgOverlay").css({
                        zIndex: $(this).zIndex() + 100
                    }).text(e).appendTo($(this))
                },
                removeOverlayMessage: function() {
                    $(this).children(".msgOverlay").remove()
                }
            }),
            async function() {
                !0 !== ho && (void 0 === z && (z = new te("Map")),
                !0 !== A && (A = !0,
                O()),
                function() {
                    if (void 0 !== oo)
                        return;
                    if (ao = document.getElementById("map"),
                    null === ao)
                        throw new Error("Map container not set.");
                    let e = {
                        zoom: 6,
                        minZoom: fo,
                        center: new google.maps.LatLng(54,-4.4),
                        mapTypeControlOptions: {
                            style: google.maps.MapTypeControlStyle.DEFAULT,
                            position: google.maps.ControlPosition.TOP_LEFT
                        },
                        panControl: !1,
                        scaleControl: !0,
                        fullscreenControl: !1
                    };
                    const t = new google.maps.Map(ao,e);
                    oo = new xo(t),
                    google.maps.event.addListener(t, "maptypeid_changed", ( () => {
                        En.forEach((e => {
                            e instanceof Sa && e.reColour()
                        }
                        )),
                        mt.Instance.refreshData()
                    }
                    )),
                    google.maps.event.addListener(t, "zoom_changed", ( () => {
                        On()
                    }
                    )),
                    google.maps.event.addListener(t, "idle", ( () => {
                        no && (clearTimeout(no),
                        no = void 0),
                        no = window.setTimeout(( () => {
                            Wn()
                        }
                        ), 150)
                    }
                    ))
                }(),
                await Dn(),
                ho = !0)
            }(),
            async function() {
                void 0 === kt && (kt = new google.maps.Geocoder)
            }(),
            $("#search-phrase").on({
                keydown: function(e) {
                    switch (e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0) {
                    case 13:
                        e.preventDefault(),
                        Et($(this).val());
                        break;
                    case 27:
                        $(this).val("")
                    }
                },
                focusout: function() {
                    $(this).val("")
                }
            }),
            $("#search-clear-pinned").on("click", (function() {
                At().forEach((e => e.remove())),
                $(vt).children("div.list-item").remove(),
                _t = It(),
                Ot()
            }
            )),
            $("#search-close").on("click", ( () => {
                Lt()
            }
            )),
            $("#mnu-layer-control").on("click", (function() {
                !1 === $(this).hasClass("toggled") ? Ft() : (Rn(),
                $(this).removeClass("toggled"))
            }
            )),
            $("#mnu-legend").on("click", (function() {
                !1 === $(this).hasClass("toggled") ? (mt.Instance.show(),
                Dt(),
                $("#mnu-legend").addClass("toggled")) : (mt.Instance.close(),
                $(this).removeClass("toggled"))
            }
            )),
            $("#mnu-search").on("click", (function() {
                !1 === $(this).hasClass("toggled") ? Bt() : (Lt(),
                $(this).removeClass("toggled"))
            }
            )),
            $("#topbar-views").on("click", ( () => async function() {
                const e = b().addClass("user-views-container");
                0 === cn.size ? k("You have not created any views.").appendTo(e) : pn(e),
                x(cn.size > 5 ? g.LARGE : g.SMALL, "My Views", `${cn.size} views`, e, {
                    text: "Close",
                    okFunction: () => y()
                })
            }())),
            $("#heatMappingDemographics").on("click", "p.heatMappingValueOption:not(.disabled)", (function() {
                $("#heatMappingDemographics").find("p.heatMappingValueOption").removeClass("toggled"),
                $(this).addClass("toggled")
            }
            )),
            $("#closeHeatMapping").on("click", (function() {
                ea.Instance.close()
            }
            )),
            $("#applyHeatMapping").on("click", (function() {
                ea.Instance.applyHeatMapping()
            }
            )),
            $("#filter-pane-apply").on("click", (function() {
                gi.Instance.applyToMap()
            }
            )),
            $("#create-edit-filter-selmode").on("click", "div.filter-classification", (function() {
                $(this).toggleClass("selected")
            }
            )),
            $("#current-filters-clearfilters").on("click", (function() {
                gi.Instance.clearAllCurrentFilters()
            }
            )),
            $("#filter-pane-columns-selected").on("click", (function() {
                gi.Instance.selectColumns()
            }
            )),
            $("#filter-pane-column-select").on("click", ".filter-column-select-option", (function() {
                $(this).toggleClass("selected")
            }
            )),
            $("#create-edit-filter-rule").on("change", (function() {
                let e = [hi.NUM_BETWEEN]
                  , t = [hi.BOOL_YES, hi.BOOL_NO]
                  , i = parseInt($(this).val())
                  , a = $("#create-edit-filter-rulmode-val1")
                  , n = $("#create-edit-filter-rulmode-val2");
                a.show(),
                n.show(),
                !1 === e.includes(i) && n.hide(),
                !0 === t.includes(i) && (a.hide(),
                n.hide())
            }
            )),
            $("#filter-pane-cancel-filter").on("click", (function() {
                gi.Instance.cancelCreateEditFilter()
            }
            )),
            $("#filter-pane-export").on("click", (function() {
                gi.Instance.showExportContent()
            }
            )),
            $("#filter-pane-export-cancel").on("click", (function() {
                gi.Instance.closeExportContent()
            }
            )),
            $("#filter-export-option").on("change", (function() {
                let e = parseInt($("#filter-export-option").val());
                gi.Instance.setExportMode(e)
            }
            )),
            $("#filter-pane-export-get").on("click", (function() {
                gi.Instance.generateExport()
            }
            )),
            $("#filter-pane-export-option-page").on("click", "div.export-option-yes", (function() {
                !1 === $(this).hasClass("toggled") && ($(this).addClass("toggled"),
                $(this).parent().parent().find("div.export-option-no").removeClass("toggled"))
            }
            )).on("click", "div.export-option-no", (function() {
                !1 === $(this).hasClass("toggled") && ($(this).addClass("toggled"),
                $(this).parent().parent().find("div.export-option-yes").removeClass("toggled"))
            }
            )),
            $("#mnuHelpCentre").on("click", ( () => {
                Ne({
                    actionType: Ee.HELP_CENTRE,
                    organisationId: null
                })
            }
            )),
            $("#layer-control-close").on("click", ( () => {
                Rn(),
                $("#mnu-layer-control").removeClass("toggled")
            }
            )),
            $("#legend-close").on("click", ( () => {
                mt.Instance.close(),
                $("#mnu-legend").removeClass("toggled")
            }
            )),
            $("#search-close").on("click", ( () => {
                Lt(),
                $("#mnu-search").removeClass("toggled")
            }
            )),
            $("#iw-main-close").on("click", ( () => {
                _i()
            }
            )),
            $("#mnu-notifications").on("click", ( () => {
                ln()
            }
            )),
            $("#mnu-territory-checks").on("click", ( () => {
                !async function() {
                    !0 !== bn && (nt(et.TERRITORY_CHECKS, {
                        allows: [et.AREA_EDITOR, et.INFO_WINDOW, et.LOCATION_EDITOR],
                        closeFunction: wn
                    }),
                    $(gn).on("click", ( () => wn())),
                    bn = !0);
                    try {
                        return await ot(et.TERRITORY_CHECKS),
                        yn = await async function() {
                            return await Ae("GetOpenChecks")
                        }(),
                        Cn(),
                        Ze(mn)
                    } catch (e) {
                        pe(e)
                    }
                }()
            }
            ))
        }
        ))
    }
    )()
}
)();
