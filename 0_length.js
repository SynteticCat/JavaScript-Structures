// array: length
const arr = [1, 2, 3];
console.log(arr.length);

// object: convert to array + length
const obj = { id: 1, name: "skillfactory" };
console.log(Object.keys(obj).length);

// set: size
const setb = new Set([1, 2, 3, 3]);
console.log(setb.size);

// map: size
const mapb = new Map([
  [0, 0],
  ["asd", 1],
]);
console.log(mapb.size);
