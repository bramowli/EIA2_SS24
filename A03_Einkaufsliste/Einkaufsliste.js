"use strict";
/// <reference path="Data.ts" />
var Einkaufsliste;
(function (Einkaufsliste) {
    window.addEventListener("load", handleLoad);
    Einkaufsliste.logItems();
    const eintraege = document.querySelector("#Einträge") ?? new Element(); // if no element exists create new
    const kaufen = document.querySelector("#kaufen") ?? new Element();
    function handleLoad() {
        document.getElementById("new")?.addEventListener("click", newElement);
        generateContent();
    }
    // create items from data
    function generateContent() {
        // create items for as long there is data for it
        for (let i = 0; i < Einkaufsliste.items.length; i++) {
            // if array index is taken, increase counter
            createItem(i, Einkaufsliste.items[i], eintraege);
        }
    }
    // create an item, either with data or without
    function createItem(id, data, parent) {
        console.log("create item: id=" + id);
        let item = document.createElement("div");
        parent.appendChild(item);
        item.setAttribute("class", "item");
        item.setAttribute("id", "item-" + id);
        let checkbox = document.createElement("input");
        checkbox.setAttribute("class", "check");
        checkbox.type = "checkbox";
        checkbox.name = "checkbox";
        item.appendChild(checkbox);
        checkbox.addEventListener("click", changePosition);
        checkbox.checked = true;
        let rightSide = document.createElement("div");
        item.appendChild(rightSide);
        rightSide.setAttribute("class", "rightSide");
        let upperHalf = document.createElement("div");
        rightSide.appendChild(upperHalf);
        upperHalf.setAttribute("class", "upperHalf");
        let lowerHalf = document.createElement("div");
        rightSide.appendChild(lowerHalf);
        lowerHalf.setAttribute("class", "lowerHalf");
        let datalist = document.createElement("input");
        upperHalf.appendChild(datalist);
        datalist.setAttribute("class", "datalist");
        datalist.type = "text";
        datalist.setAttribute("name", "Datalist");
        //datalist.list = "options";
        datalist.setAttribute("placeholder", "Was willst du kaufen?");
        datalist.addEventListener("keydown", changeInput);
        datalist.addEventListener("change", Einkaufsliste.logItems);
        let date = document.createElement("span");
        upperHalf.appendChild(date);
        date.innerText = "" + new Date().toISOString().split("T")[0];
        date.setAttribute("class", "date");
        date.setAttribute("id", "date-" + id);
        let xIcon = document.createElement("image");
        upperHalf.appendChild(xIcon);
        xIcon.classList.add("fa-solid", "fa-circle-xmark", "delete");
        xIcon.addEventListener("click", deleteElement);
        let amount = document.createElement("input");
        lowerHalf.appendChild(amount);
        amount.setAttribute("class", "amount");
        amount.type = "number";
        amount.setAttribute("name", "stepper");
        amount.value = "0";
        amount.setAttribute("step", "1");
        amount.setAttribute("style", "width:37px");
        amount.addEventListener("change", changeInput);
        let comment = document.createElement("textarea");
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
    function newElement() {
        console.log("create empty item");
        let itemCounter = 0;
        while (Einkaufsliste.items[itemCounter])
            itemCounter++;
        createItem(itemCounter, undefined, eintraege);
        const item = {
            datalist: "",
            date: new Date().toISOString().split("T")[0],
            amount: 0,
            comment: "",
        };
        Einkaufsliste.items[itemCounter] = item;
        Einkaufsliste.logItems();
    }
    function deleteElement(event) {
        console.log("remove item");
        if (!confirm("Bist du sicher?")) {
            return;
        }
        const xIcon = event.target;
        const item = xIcon.parentElement?.parentElement?.parentElement;
        item.parentElement?.removeChild(item);
        const id = Number(item.id.split("-")[1]);
        Einkaufsliste.items[id] = undefined;
        Einkaufsliste.logItems();
    }
    function changePosition(event) {
        const checkbox = event.target;
        const item = checkbox.parentElement;
        item.parentElement?.removeChild(item);
        if (checkbox.checked) {
            eintraege.appendChild(item);
            const id = Number(item.id.split("-")[1]);
            const date = document.querySelector("#date-" + id);
            date.innerText = "" + new Date().toISOString().split("T")[0];
            const itemData = Einkaufsliste.items[id];
            if (!itemData)
                return;
            itemData.date = date.innerText;
        }
        else {
            kaufen.appendChild(item);
        }
    }
    function changeInput(event) {
        const datalist = event.target;
        const item = datalist.parentElement?.parentElement?.parentElement;
        const id = Number(item.id.split("-")[1]);
        const dataItem = Einkaufsliste.items[id];
        if (!dataItem)
            return;
        dataItem.datalist = datalist.value;
        //logItems();
    }
    function changeTextArea(event) {
        const comment = event.target;
        const item = comment.parentElement?.parentElement?.parentElement;
        const id = Number(item.id.split("-")[1]);
        const dataItem = Einkaufsliste.items[id];
        if (!dataItem)
            return;
        dataItem.comment = comment.value;
        //logItems();
    }
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=Einkaufsliste.js.map