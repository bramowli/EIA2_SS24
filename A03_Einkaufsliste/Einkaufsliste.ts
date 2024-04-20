document.getElementById("new")?.addEventListener("click", newElement);
document.getElementsByClassName("delete").addEventListener("click", deleteElement);
document.getElementById("fertig")?.addEventListener("click", addElement)
document.getElementsByClassName("check").addEventListener("click", changePosition)
let elements = document.querySelectorAll('.delete')

elements.forEach(element => {
    element.addEventListener('click', () => {
        // Your event handling code here
        console.log('Element clicked:', element);
    });
});

function newElement(): any {
    console.log("Mach was Neues!")
}

function deleteElement(): any {
    console.log("gelöscht")
}

function addElement(): any {
    console.log("neuer Eintrag")
}

function changePosition(): any {
    console.log("jetzt isses wo anders")
}