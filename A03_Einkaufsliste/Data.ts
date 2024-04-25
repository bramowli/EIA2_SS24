namespace Einkaufsliste {
  export interface liste{
    datalist: string
    date: number
    amount: number
    comment: string
  }

  
  export let items = [
    {
      datalist: "Klopapier",
      date: "20.04.24",
      amount: "8",
      comment: "Blätter, unbenutzt",
    },
    {
      datalist: "Kind",
      date: "20.04.24",
      amount: "1",
      comment: "lebend oder noch frisch",
    },
    {
        datalist: "Klopapier",
        date: "09.09.09",
        amount: "99",
        comment: "Tropfen",
      },
  ];
}
