// array: splice, filter
const arr = [1, 2, 3, 4];
const arrFiltered = arr.filter((el) => el !== 2); // arr не изменится
arr.splice(1, 1);
console.log(arr, arrFiltered);

// object: delete
const obj = { id: 123, name: "Dmitriy", sirname: "Kargopoltsev" };
delete obj.sirname;
console.log(obj);

// set: delete
const seta = new Set([1, 2, 3]);
seta.delete(1);
console.log(seta);

// map: delete
const mapa = new Map([
  [obj, seta],
  [arr, "a"],
  [NaN, 1234],
]);
console.log(mapa);
mapa.delete(arr);
mapa.set(NaN, "skillfactory");
console.log(mapa);
