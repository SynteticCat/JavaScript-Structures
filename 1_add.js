// array: push, unshift
const arr = [1, 2];
arr.unshift(0);
arr.push("a");
console.log(arr);

// object: [], ['']
const obj = {};
obj["a"] = "b";
obj[1] = "v";
console.log(obj);

// set: add
const seta = new Set([1, 2, "aa", "aa", 1]);
seta.add(2);
seta.add(3);
console.log(seta);

// map: set
const mapa = new Map();
mapa.set("a", "value");
console.log(mapa);
