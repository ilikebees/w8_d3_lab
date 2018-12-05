use bucketList;
db.dropDatabase();

db.bucketList.insertMany(
[
  {
    name: "Niagra",
    description: "Visit the waterfall",
    date: "01/01/2019",
    priority: "4"
  },
  {
    name: "Japan",
    description: "Visit Rabbit Island",
    date: "02/05/2020",
    priority: "1"
  },
  {
    name: "Antartica",
    description: "Meet the penguins",
    date: "02/12/2022",
    priority: "2"
  },
  {
    name: "Yosemite",
    description: "Basque in the glory of the mountains",
    date: "19/08/2021",
    priority: "3"
  }
]);
