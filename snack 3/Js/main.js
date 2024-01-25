// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bikes = [
  {
    brand: "specialized",
    weightKg: 9,
  },
  {
    brand: "scott",
    weightKg: 10,
  },
  {
    brand: "canyon",
    weightKg: 8,
  },
  {
    brand: "bmc",
    weightKg: 10,
  },
  {
    brand: "yt",
    weightKg: 11,
  },
  {
    brand: "santa cruz",
    weightKg: 12,
  },
];

const [bike1, bike2, bike3, bike4, bike5, bike6] = bikes;
let lighterWeight = bike1;

bikes.forEach((bike) => {
  if (bike.weightKg < lighterWeight.weightKg) {
    lighterWeight = bike;
  }
});

const { brand, weightKg } = lighterWeight;
console.log(`brand: ${brand};
weightKg: ${weightKg}`);

const containerElement = document.getElementById("container-element");
const lighterBike = lighterWeight;
console.log(lighterBike);

let htmlElement = `
<h1 class="py-3">The lighter bike is:</h1>

<div class="card">

<p>Brand: ${brand}</p>
<p>Weight: ${weightKg}</p>
</div>`;

containerElement.innerHTML = htmlElement;
