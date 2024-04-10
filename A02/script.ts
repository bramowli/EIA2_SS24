window.addEventListener("load", handleLoad);

function handleLoad(): void {
    document.addEventListener("mousemove", setInfoBox)
}

function setInfoBox(_event: MouseEvent) {
    const box = document.getElementsByTagName("span")
}

function logInfo(_event: Event) {
    console.log(_event.type, _event.target, _event.currentTarget, _event)
}