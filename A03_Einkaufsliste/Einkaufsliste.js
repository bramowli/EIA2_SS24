"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    document.addEventListener("load", handleLoad);
    let deletes = document.querySelectorAll(".delete");
    let checked = document.querySelectorAll(".check");
    function handleLoad() {
        document.getElementById("new")?.addEventListener("click", newElement);
        document.getElementById("fertig")?.addEventListener("click", addElement);
        // Loop to add eventListeners to every element of a class
        for (let i = 0; i < deletes.length; i++) {
            deletes[i].addEventListener("click", deleteElement);
        }
        for (let i = 0; i < checked.length; i++) {
            checked[i].addEventListener("click", changePosition);
        }
        generateContent;
    }
    function generateContent(_items) {
        createItem;
    }
    function createItem() {
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
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste.js.map