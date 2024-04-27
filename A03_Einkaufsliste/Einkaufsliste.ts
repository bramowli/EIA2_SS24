/// <reference path="Data.ts" />

namespace Einkaufsliste {
  window.addEventListener("load", handleLoad);
  logItems();

  const eintraege = document.querySelector("#Einträge") ?? new Element(); // if no element exists create new
  const kaufen = document.querySelector("#kaufen") ?? new Element();

  function handleLoad() {
    document.getElementById("new")?.addEventListener("click", newElement);
    generateContent();
  }

  // create items from data
  function generateContent(): any {
    // create items for as long there is data for it
    for (let i: number = 0; i < items.length; i++) {
      // if array index is taken, increase counter
      createItem(i, items[i], eintraege);
    }
  }

  // create an item, either with data or without
  function createItem(id: number, data: Listeneintrag | undefined, parent: Element): void {
    console.log("create item: id=" + id);

    let item: HTMLDivElement = document.createElement("div");
    parent.appendChild(item);
    item.setAttribute("class", "item");
    item.setAttribute("id", "item-" + id);

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.setAttribute("class", "check");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox";
    item.appendChild(checkbox);
    checkbox.addEventListener("click", changePosition);
    checkbox.checked = true;

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
    datalist.addEventListener("keydown", changeInput);
    datalist.addEventListener("change", logItems);

    let date: HTMLSpanElement = document.createElement("span");
    upperHalf.appendChild(date);
    date.innerText = "" + new Date().toISOString().split("T")[0];
    date.setAttribute("class", "date");
    date.setAttribute("id", "date-" + id);

    let xIcon: any = document.createElement("image");
    upperHalf.appendChild(xIcon);
    xIcon.classList.add("fa-solid", "fa-circle-xmark", "delete");
    xIcon.addEventListener("click", deleteElement);

    let amount: HTMLInputElement = document.createElement("input");
    lowerHalf.appendChild(amount);
    amount.setAttribute("class", "amount");
    amount.type = "number";
    amount.setAttribute("name", "stepper");
    amount.value = "0";
    amount.setAttribute("step", "1");
    amount.setAttribute("style", "width:37px");
    amount.addEventListener("change", changeInput);

    let comment: HTMLTextAreaElement = document.createElement("textarea");
    lowerHalf.appendChild(comment);
    comment.setAttribute("class", "comment");
    comment.setAttribute("name", "Area");
    comment.setAttribute("rows", "1");
    comment.setAttribute("placeholder", "Kommentar");
    comment.addEventListener("keydown", changeTextArea);

    if (data) {
      // if there is data, fill the fields with it
      datalist.value = data.datalist;
      date.innerText = data.date;
      amount.value = data.amount.toString();
      comment.value = data.comment;
    }
  }

  function newElement(): void {
    console.log("create empty item");
    let itemCounter: number = 0;
    while (items[itemCounter]) itemCounter++;
    createItem(itemCounter, undefined, eintraege);
    const item: Listeneintrag = {
      datalist: "",
      date: new Date().toISOString().split("T")[0],
      amount: 0,
      comment: "",
    };
    items[itemCounter] = item;
    logItems();
  }

  function deleteElement(event: Event): any {
    console.log("remove item");
    if (!confirm("Bist du sicher?")) {
      return;
    }
    const xIcon: HTMLImageElement = <HTMLImageElement>event.target;
    const item: HTMLDivElement = <HTMLDivElement>xIcon.parentElement?.parentElement?.parentElement;
    item.parentElement?.removeChild(item);
    const id = Number(item.id.split("-")[1]);

    items[id] = undefined;
    logItems();
  }

  function changePosition(event: Event): void {
    const checkbox: HTMLInputElement = <HTMLInputElement>event.target;
    const item: HTMLDivElement = <HTMLDivElement>checkbox.parentElement;
    item.parentElement?.removeChild(item);
    if (checkbox.checked) {
      eintraege.appendChild(item);
      const id = Number(item.id.split("-")[1]);
      const date: HTMLSpanElement = <HTMLSpanElement>document.querySelector("#date-" + id);
      date.innerText = "" + new Date().toISOString().split("T")[0];
      const itemData = items[id];
      if (!itemData) return;
      itemData.date = date.innerText;
    } else {
      kaufen.appendChild(item);
    }
  }

  function changeInput(event: Event): void {
    const datalist: HTMLInputElement = <HTMLInputElement>event.target;
    const item: HTMLDivElement = <HTMLDivElement>datalist.parentElement?.parentElement?.parentElement;
    const id = Number(item.id.split("-")[1]);
    const dataItem = items[id];
    if (!dataItem) return;
    dataItem.datalist = datalist.value;
    //logItems();
  }

  function changeTextArea(event: Event): void {
    const comment: HTMLTextAreaElement = <HTMLTextAreaElement>event.target;
    const item: HTMLDivElement = <HTMLDivElement>comment.parentElement?.parentElement?.parentElement;
    const id = Number(item.id.split("-")[1]);
    const dataItem = items[id];
    if (!dataItem) return;
    dataItem.comment = comment.value;
    //logItems();
  }
}
