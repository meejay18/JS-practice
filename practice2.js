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
