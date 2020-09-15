// array: convert to set => convert to array
const arr = [1, 2, 3, 1, 4, 5, 5, 2, 1];
const noDublicatesArr = [...new Set(arr)];
console.log(noDublicatesArr);

const arr1 = [{ a: 1 }, { b: 2 }, { b: 2 }];
const noDublicatesArr1 = [...new Set(arr1)];
console.log(noDublicatesArr1);

// object: встроенный механизм
const obj = {
  a: 1,
  b: 2,
  b: 3,
  a: 4,
};
obj["a"] = 5;
console.log(obj);

// set: встроенный механизм
const seta = new Set([1, 2, 3, 4, 4]);
seta.add(2);
console.log(seta);

// map: встроенный механизм
const mapa = new Map([
  [1, "one"],
  ["1", "two"],
  ["1", "t333o"],
]);
mapa.set(1, "five");
console.log(mapa);
