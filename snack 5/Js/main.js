let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5,
  },
  {
    color: "yellow",
    type: "station wagon",
    capacity: 5,
  },
  {
    color: "green",
    type: "berlina",
    capacity: 4,
  },
  {
    color: "purple",
    type: "utilitaria",
    capacity: 2,
  },
];

const passenger = parseInt(prompt("Quanti viaggiatori siete?"));

let myCar;

cars.forEach((car) => {
  if (car.capacity >= passenger) {
    myCar = car;
  }
});
console.log(myCar);
