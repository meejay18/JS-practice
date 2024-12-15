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

const createTemperatureAmplitude = (arr1, arr2) => {
  let arrayAdd = arr1.concat(arr2);
  console.log(arrayAdd);

  let max = arrayAdd[0];
  let min = arrayAdd[0];
  for (let i = 0; i < arrayAdd.length; i++) {
    const curTemp = arrayAdd[i];
    if (typeof curTemp !== "number ") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

let amplitude = createTemperatureAmplitude([24, 4, 8], [3, 12, 7]);
console.log(amplitude);
