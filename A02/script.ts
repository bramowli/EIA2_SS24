namespace EventInspector {
let span = document.getElementsByTagName("span")innerHTML

window.addEventListener("load", handleLoad);

function handleLoad(): void {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    document.getElementById("div0")?.addEventListener("click", logInfo);
    document.getElementById("div1")?.addEventListener("click", logInfo);
}

function setInfoBox(_event: MouseEvent) {
    let X: number = _event.clientX;
    let Y: number = _event.clientY;
    span.innerHTML = _event.clientX, _event.clientY, _event.target
}

function logInfo(_event: Event) {
    console.log(_event.type, _event.target, _event.currentTarget, _event);
}
}