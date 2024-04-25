/* namespace Einkaufsliste {
  document.addEventListener("load", handleLoad);

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
    let item: any = document.createElement("div");
    document.querySelector(".Einträge")?.appendChild(item);
    item.setAttribute("class", "item");

    let checkbox: any = document.createElement("input");
    document.querySelector(".item")?.appendChild(checkbox);
    checkbox.setAttribute("class", "check");
    checkbox.type = "checkbox";
    checkbox.value = "checked";

    let rightSide: any = document.createElement("div");
    document.querySelector(".item")?.appendChild(rightSide);
    rightSide.setAttribute("class", "rightSide");

    let upperHalf: any = document.createElement("div");
    document.querySelector(".rightSide")?.appendChild(upperHalf);
    upperHalf.setAttribute("class", "upperHalf");

    let lowerHalf: any = document.createElement("div");
    document.querySelector(".rightSide")?.appendChild(lowerHalf);
    lowerHalf.setAttribute("class", "lowerHalf");

    let datalist: any = document.createElement("input");
    document.querySelector(".upperHalf")?.appendChild(datalist);
    datalist.setAttribute("class", "datalist");
    datalist.type = "text";
    datalist.setAttribute("name", "Datalist");
    datalist.list = "options";
    datalist.setAttribute("placeholder", "Was willst du kaufen?");

    let date: any = document.createElement("span");
    document.querySelector(".upperHalf")?.appendChild(date);
    date.setAttribute("class", "date");

    let xIcon: any = document.createElement("image");
    document.querySelector(".upperHalf")?.appendChild(xIcon);
    xIcon.classList.add("fa-solid", "fa-circle-xmark", "delete");

    let amount: any = document.createElement("input");
    document.querySelector(".lowerHalf")?.appendChild(amount);
    amount.setAttribute("class", "amount");
    amount.type = "number";
    amount.setAttribute("name", "stepper");
    amount.value = "0";
    amount.setAttribute("step", "1");
    amount.setAttribute("style", "width:37px");

    let comment: any = document.createElement("textarea");
    document.querySelector(".lowerHalf")?.appendChild(comment);
    comment.setAttribute("class", "comment");
    comment.setAttribute("name", "Area");
    comment.setAttribute("rows", "1");
    comment.setAttribute("placeholder", "Kommentar");

    let add: any = document.createElement("button");
    document.querySelector(".lowerHalf")?.appendChild(add);
    add.setAttribute("id", "fertig");
    add.textContent = "fertig";
    console.log("jrjz");
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
}
*/
namespace Einkaufsliste {
  let deletes: NodeListOf<Element>;
  let checked: NodeListOf<Element>;

  deletes = document.querySelectorAll(".delete");
  checked = document.querySelectorAll(".check");

  for (let i: number = 0; i < deletes.length; i++) {
    deletes[i].addEventListener("click", deleteElement);
  }

  for (let i: number = 0; i < checked.length; i++) {
    checked[i].addEventListener("click", changePosition);
  }

  generateContent();

  function generateContent(): void {
    createItem();
  }

  function createItem(): void {
    let item: any = document.createElement("div");
    document.querySelector(".Einträge")?.appendChild(item);
    item.classList.add("item");

    let checkbox: any = document.createElement("input");
    item.appendChild(checkbox);
    checkbox.classList.add("check");
    checkbox.type = "checkbox";
    checkbox.value = "checked";

    let rightSide: any = document.createElement("div");
    item.appendChild(rightSide);
    rightSide.classList.add("rightSide");

    let upperHalf: any = document.createElement("div");
    rightSide.appendChild(upperHalf);
    upperHalf.classList.add("upperHalf");

    let lowerHalf: any = document.createElement("div");
    rightSide.appendChild(lowerHalf);
    lowerHalf.classList.add("lowerHalf");

    let datalist: any = document.createElement("input");
    upperHalf.appendChild(datalist);
    datalist.classList.add("datalist");
    datalist.type = "text";
    datalist.setAttribute("name", "Datalist");
    datalist.setAttribute("list", "options");
    datalist.setAttribute("placeholder", "Was willst du kaufen?");

    let date: any = document.createElement("span");
    upperHalf.appendChild(date);
    date.classList.add("date");

    let xIcon: any = document.createElement("image");
    upperHalf.appendChild(xIcon);
    xIcon.classList.add("fa-solid", "fa-circle-xmark", "delete");

    let amount: any = document.createElement("input");
    lowerHalf.appendChild(amount);
    amount.classList.add("amount");
    amount.type = "number";
    amount.setAttribute("name", "stepper");
    amount.value = "0";
    amount.setAttribute("step", "1");
    amount.setAttribute("style", "width:37px");

    let comment: any = document.createElement("textarea");
    lowerHalf.appendChild(comment);
    comment.classList.add("comment");
    comment.setAttribute("name", "Area");
    comment.setAttribute("rows", "1");
    comment.setAttribute("placeholder", "Kommentar");

    let add: any = document.createElement("button");
    lowerHalf.appendChild(add);
    add.setAttribute("id", "fertig");
    add.textContent = "fertig";
    console.log("jrjz");
  }

  function deleteElement(): void {
    console.log("gelöscht");
  }

  function changePosition(): void {
    console.log("jetzt isses wo anders");
  }
}
