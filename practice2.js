// var createHelloWorld = function () {
//   return () => "Hello World";
// };

// console.log(createHelloWorld());

// let args = [];
// const createHelloWorld = () => {
//   return function (...args) {
//     return "hello world";
//   };
// };
// const f = createHelloWorld();
// console.log(f());

const createHelloWorld = () => {
  const hello = () => {
    return "hello world";
  };
  return hello;
};

const f = createHelloWorld();
console.log(f());

// challenge

const temperatures = [43, 20, -9, 30, -3, "error", 3, 7];

const createTempAmp = (arr1, arr2) => {
  let addArray = arr1.concat(arr2);

  let max = addArray[0];
  let min = addArray[0];

  for (let i = 0; i < addArray.length; i++) {
    let curTemp = addArray[i];

    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
let amplitude = createTempAmp([1, 3, -6], [9, 5, 3]);
console.log(amplitude);
