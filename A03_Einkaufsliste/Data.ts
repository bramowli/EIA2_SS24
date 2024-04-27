namespace Einkaufsliste {
  export interface Listeneintrag {
    datalist: string;
    date: string;
    amount: number;
    comment: string;
  }

  export function logItems() {
    let output = "";
    for (let i: number = 0; i < items.length; i++) {
      output += items[i]?.datalist + "; ";
    }
    console.log("Data: " + output);
  }

  export let items: Listeneintrag[] | undefined[] = [
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
}
