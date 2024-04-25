namespace Einkaufsliste {
  window.addEventListener("load", handleLoad);

  let itemCounter = 0;
  let deletes: NodeListOf<Element> = document.querySelectorAll(".delete");
  let checked: NodeListOf<Element> = document.querySelectorAll(".check");

  function handleLoad() {
    document.getElementById("new")?.addEventListener("click", newElement);
    document.getElementById("fertig")?.addEventListener("click", addElement);
    // Loop to add eventListeners to every element of a class
    for (let i: number = 0; i < deletes.length; i++) {
      deletes[i].addEventListener("click", deleteElement);
    }

    for (let i: number = 0; i < checked.length; i++) {
      checked[i].addEventListener("click", changePosition);
    }

    generateContent();
  }

  function generateContent(): any {
    createItem();
  }

  function createItem(): any {
    let item: HTMLDivElement = document.createElement("div");
    document.querySelector("#Einträge")?.appendChild(item);
    item.setAttribute("class", "item");
    item.setAttribute("id", "item" + itemCounter);

    let checkbox: HTMLInputElement = document.createElement("input");
    item.appendChild(checkbox);
    checkbox.setAttribute("class", "check");
    checkbox.type = "checkbox";
    checkbox.value = "checked";

    let rightSide: HTMLDivElement = document.createElement("div");
    item.appendChild(rightSide);
    rightSide.setAttribute("class", "rightSide");

    let upperHalf: HTMLDivElement = document.createElement("div");
    rightSide.appendChild(upperHalf);
    upperHalf.setAttribute("class", "upperHalf");

    let lowerHalf: HTMLDivElement = document.createElement("div");
    rightSide.appendChild(lowerHalf);
    lowerHalf.setAttribute("class", "lowerHalf");

    let datalist: HTMLInputElement = document.createElement("input");
    upperHalf.appendChild(datalist);
    datalist.setAttribute("class", "datalist");
    datalist.type = "text";
    datalist.setAttribute("name", "Datalist");
    //datalist.list = "options";
    datalist.setAttribute("placeholder", "Was willst du kaufen?");

    let date: HTMLSpanElement = document.createElement("span");
    upperHalf.appendChild(date);
    date.innerText = "" + new Date().toISOString().split("T")[0];
    date.setAttribute("class", "date");

    let xIcon: any = document.createElement("image");
    upperHalf.appendChild(xIcon);
    xIcon.classList.add("fa-solid", "fa-circle-xmark", "delete");

    let amount: HTMLInputElement = document.createElement("input");
    lowerHalf.appendChild(amount);
    amount.setAttribute("class", "amount");
    amount.type = "number";
    amount.setAttribute("name", "stepper");
    amount.value = "0";
    amount.setAttribute("step", "1");
    amount.setAttribute("style", "width:37px");

    let comment: HTMLTextAreaElement = document.createElement("textarea");
    lowerHalf.appendChild(comment);
    comment.setAttribute("class", "comment");
    comment.setAttribute("name", "Area");
    comment.setAttribute("rows", "1");
    comment.setAttribute("placeholder", "Kommentar");

    let add: HTMLButtonElement = document.createElement("button");
    lowerHalf.appendChild(add);
    add.setAttribute("id", "fertig");
    add.textContent = "fertig";

    console.log(amount.value);
  }

  function newElement(): void {
    console.log("Mach was Neues!");
    createItem()
  }

  function deleteElement(): void {
    console.log("gelöscht");
    prompt("Bist du sicher?")
  }

  function addElement(): void {
    console.log("neuer Eintrag");
  }

  function changePosition(): void {
    console.log("jetzt isses wo anders");
  }
}
