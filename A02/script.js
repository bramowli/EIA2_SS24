"use strict";
var EventInspector;
(function (EventInspector) {
    let span = document.getElementsByTagName("span"), innerHTML;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        document.getElementById("div0")?.addEventListener("click", logInfo);
        document.getElementById("div1")?.addEventListener("click", logInfo);
    }
    function setInfoBox(_event) {
        let X = _event.clientX;
        let Y = _event.clientY;
        span.innerHTML = _event.clientX, _event.clientY, _event.target;
    }
    function logInfo(_event) {
        console.log(_event.type, _event.target, _event.currentTarget, _event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=script.js.map