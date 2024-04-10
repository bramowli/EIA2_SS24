"use strict";
window.addEventListener("load", handleLoad);
function handleLoad() {
    document.addEventListener("mousemove", setInfoBox);
}
function setInfoBox(_event) {
    const box = document.getElementsByTagName("span");
}
function logInfo(_event) {
    console.log(_event.type, _event.target, _event.currentTarget, _event);
}
//# sourceMappingURL=script.js.map