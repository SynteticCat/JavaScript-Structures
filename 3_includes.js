// array: includes
const obj1 = {};
const arr = [1, "a", obj1, true];
console.log(arr.includes(obj1));
console.log(arr.includes(true));
console.log("-------");

// object: hasOwnProperty
const obj = { id: 132442, name: "Ilya", 1: 34 };
console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("sirname"));
console.log(obj.hasOwnProperty("1"));
console.log(obj.hasOwnProperty(1));
console.log("-------");

// set: has
const seta = new Set(arr);
console.log(seta.has(obj1));
console.log(seta.has(1));
console.log("-------");

// map: has
const mapa = new Map([
  [1, 1],
  [NaN, 2],
]);
console.log(mapa.has(1));
console.log(mapa.has(NaN));
