document.getElementById("new")?.addEventListener("click", newElement);
document.getElementById("fertig")?.addEventListener("click", addElement);
let deletes: NodeListOf<Element> = document.querySelectorAll(".delete");
let checked: NodeListOf<Element> = document.querySelectorAll(".check");

// Loop to add eventListeners to every element of a class
for (let i: number = 0; i < deletes.length; i++) { 
  deletes[i].addEventListener("click", deleteElement);
}

for (let i: number = 0; i < checked.length; i++) {
  checked[i].addEventListener("click", changePosition);
}

function newElement(): void {
  console.log("Mach was Neues!");
}

function deleteElement(): void {
  console.log("gelöscht");
}

function addElement(): void {
  console.log("neuer Eintrag");
}

function changePosition(): void {
  console.log("jetzt isses wo anders");
}
