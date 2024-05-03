"use strict";
var Einkaufsliste;
(function (Einkaufsliste) {
    function logItems() {
        let output = "";
        for (let i = 0; i < Einkaufsliste.items.length; i++) {
            output += Einkaufsliste.items[i]?.datalist + "; ";
        }
        console.log("Data: " + output);
    }
    Einkaufsliste.logItems = logItems;
    Einkaufsliste.items = [
        {
            datalist: "Klopapier",
            date: "2024-04-20",
            amount: 8,
            comment: "Blätter, unbenutzt",
        },
        {
            datalist: "Kind",
            date: "2024-04-20",
            amount: 1,
            comment: "lebend oder noch frisch",
        },
        {
            datalist: "Wasser",
            date: "2009-09-09",
            amount: 99,
            comment: "Tropfen",
        },
    ];
})(Einkaufsliste || (Einkaufsliste = {}));
//# sourceMappingURL=Data.js.map