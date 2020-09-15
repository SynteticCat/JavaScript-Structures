// array: find
const arr = [1, 2, "abc", 4];
console.log(arr.find((el) => el === "abc"));

// object: []
const books = {
  12: { name: "История России" },
  32: { name: "YDNJS" },
};
console.log(books[12]);

// set: convert to array + find
const seta = new Set([1, 2, 3, 4, 5, 5]);
console.log([...seta].find((el) => el === "abc"));

// map: get
const mapa = new Map([
  [1, 1],
  ["abc", "adjdjd"],
]);
console.log(mapa.get("abc"));
