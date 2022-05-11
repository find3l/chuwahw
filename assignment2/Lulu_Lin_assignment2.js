const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

//double quantity and price
const doubleArray = itemsObject.map(({ quantity, price }) => {
  return { quantity: quantity * 2, price: price * 2 };
});
console.log(doubleArray);

//contains item quantity > 2 and price > 300 only
const filterArray = itemsObject.filter(
  (obj) => obj.quantity > 2 && obj.price > 300
);
console.log(filterArray);

const sum = itemsObject.reduce(
  (preValue, curValue) => preValue + curValue.quantity * curValue.price,
  0
);
console.log(sum);

// remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
let newString = string.trim().split(/[ -]+/).join(" ").toLowerCase();
console.log(newString);
