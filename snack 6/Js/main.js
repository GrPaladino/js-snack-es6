const products = [
  { title: "Mela", price: 2.3 },
  { title: "Banana", price: 1.5 },
  { title: "Mango", price: 2 },
  { title: "Pesca", price: 1.8 },
  { title: "Pera", price: 1.5 },
  { title: "Arancia", price: 2.2 },
];

let finalPrice = 0;
for (let i = 0; i < products.length - 2; i++) {
  const prezzo = products[i].price;
  finalPrice = finalPrice + prezzo;
}

console.log(finalPrice);
