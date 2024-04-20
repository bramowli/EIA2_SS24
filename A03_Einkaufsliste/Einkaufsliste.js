"use strict";
document.getElementById("new")?.addEventListener("click", newElement);
document.getElementById("fertig")?.addEventListener("click", addElement);
let deletes = document.querySelectorAll(".delete");
let checked = document.querySelectorAll(".check");
for (let i = 0; i < deletes.length; i++) {
    deletes[i].addEventListener("click", deleteElement);
}
for (let i = 0; i < checked.length; i++) {
    checked[i].addEventListener("click", changePosition);
}
function newElement() {
    console.log("Mach was Neues!");
}
function deleteElement() {
    console.log("gelöscht");
}
function addElement() {
    console.log("neuer Eintrag");
}
function changePosition() {
    console.log("jetzt isses wo anders");
}
//# sourceMappingURL=Einkaufsliste.js.map