// array: sort(comparator)
const comparator = (book1, book2) => book1.id - book2.id;

const arr = [
  { id: 12, name: "История России" },
  { id: 674, name: "YDNJS" },
  { id: 81, name: "YDNJS(RUS)" },
];
arr.sort(comparator);
console.log(arr);

// object: встроенный механизм
const obj = {
  30: "dad",
  4: "mother",
  13: "child",
  abd: null,
  39: "find",
  654: "null",
};
console.log(obj);

// set: convert to array + sort + convert to set
let seta = new Set([
  { id: 132, name: "История России(EN)" },
  ...arr,
  { id: -12, name: "История России(UK)" },
]);
seta = new Set([...seta].sort(comparator));

console.log(seta);

// map: convert to array(method) + sort + convert to map
const mapa = new Map([
  [1, "a"],
  [2, "b"],
]);
const mapSorted = new Map([...mapa.entries()].sort((a, b) => b[0] - a[0]));
console.log(mapSorted);
