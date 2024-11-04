// function welcomeStaff() {
//   return `Welcome to codelab set 10 Javascript class Joel`;
// }

// function welcomeStaff2(name) {
//   return `Welcome to codelab set 10 Javascript class ${name}`;
// }

// const welcomeStudent = () => {
//   return `Welcome to codelab set10 Javascript class Joel`;
// };
// const welcomeStudent2 = (name) => {
//   return `Wwlcome to codelab set10 Javascript class ${name}`;
// };

// // console.log(welcomeStaff());
// console.log(welcomeStaff2("wisdom"));
// console.log(welcomeStaff2("mije"));
// console.log(welcomeStaff2("sam"));
// console.log(welcomeStudent());

// const introduction = (name, age, gender, state, height) => {
//   const namee = name;
//   const agee = age;
//   const genderr = gender;
//   const statee = state;
//   const heightt = height;

//   return `my name is ${namee}, i am ${agee} years old, i am a ${genderr}, from ${statee} state, and my height is ${heightt}`;
// };

// console.log(introduction("sandra", "56", "female", "Delta", "6ft2"));

// let arrNum = [223, 32, 42, 46, 76, 64, 35, 93, 52, 73, 53, 45];

// let arry = [1, 2, 3, 4, 5];

// // write a function that returns the total sum of the numbers
// // Write a function that checks the highest value in the array
// // Write a function that checks the smallest value in the array

// const getTotal = (container) => {
//   const total = container.reduce((a, b) => {
//     return a + b;
//   });
//   return total;
// };

// console.log(getTotal(arrNum));
// console.log(getTotal(arry));

// // highest
// const getHighest = (container) => {
//   const high = Math.max(...container);
//   return high;
// };

// console.log(getHighest(arrNum));
// console.log(getHighest(arry));

// // lowest
// const getLowest = (container) => {
//   const low = Math.min(...container);
//   return low;
// };

// console.log(getLowest(arrNum));
// console.log(getLowest(arry));

// let arry2 = [1, 2, 3, 4, 5];

// const total = (container) => {
//   const finalTotal = container.reduce((a, b) => {
//     return a + b;
//   });
//   return finalTotal;
// };

// console.log(total(arry2));

// const sports = (name, numberofplayers, stadium, jerseycolor) => {
//   return `I love ${name}, ${numberofplayers} players play this beautiful game of football, i would love to play at ${stadium} someday and wear the almighty ${jerseycolor}.`;
// };

// console.log(sports("football", "11", "Old trafford", "red"));

const numbers = [11, 22, 33, 44, 55, 66, 73, 84, 96, 100];
const ValueTocheck = 22;

// 1
const filterEven = (container) => {
  const filter = container.filter((el) => {
    return el % 2 === 0;
  });
  return filter;
};

console.log(filterEven(numbers));

// 2.
const checkValue = (numbers, ValueTocheck) => {
  if (numbers.includes(ValueTocheck)) {
    return `${ValueTocheck} is in the array`;
  } else {
    return `${ValueTocheck} is not in the array`;
  }
};
console.log(checkValue);
