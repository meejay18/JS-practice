const prompt = require("prompt-sync")();

// for loop
// for (i = 0; i < 8; i++) {
//   console.log(i);
// }

// while loop
// let i = 0;
// while (i < 100) {
//   i++;
//   console.log(i);
// }

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);

// console.log(inputYear + 18);

// console.log(Number("Mije"));
// console.log(typeof NaN);

// // type coersion
// console.log("I am " + 23 + " years old");
// console.log("I am " + "23" + " years old");

// 5 falsy values: 0, "", undefined, null, Nan
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Mije"));
// console.log(Boolean({}));

// const money = 10;
// if (money) {
//   console.log("Dont spend it all");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("Yay, Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = 18;
// if (age === 18) console.log("YOU JUST BECAME AN ADULT");

// const bread = "not fresh";
// const bread2 = "not managable";

// const breadneeded =
//   bread === "fresh"
//     ? console.log("buy")
//     : bread2 === "managable"
//     ? console.log(" You can buy")
//     : console.log("Do not buy any");

// const money = 0;

// if (money) {
//   console.log("Dont spend it all");
// } else {
//   console.log("Go get a job");
// }

// let height = 0;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height is undefined");
// }

// const age = 18;
// if (age === 18) console.log("YOU JUST BECAME AN ADULT");
// if (age == 18) console.log("YOU JUST BECAME AN ADULT");
// console.clear();

// // const favourite2 = Number(prompt("what's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// let favourite = 23;
// // favourite = 7;
// // favourite = 6;

// if (favourite === 23) {
//   console.log("cool! 23 is an amzing number");
// } else if (favourite === 7) {
//   console.log("7 is a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// const hasDriversLicense = true; //A
// const hasGoodvision = true; //b
// console.log(hasDriversLicense && hasGoodvision);
// console.log(hasDriversLicense || hasGoodvision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodvision;
// if (hasDriversLicense && hasGoodvision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive");
// }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodvision && isTired);

// if (hasDriversLicense && hasGoodvision && !isTired) {
//   console.log("sarah can drive");
// } else {
//   console.log("sarah cannot drive");
// }

// const dolphinScore = 97 + 112 + 80;
// const koalasScore = 109 + 95 + 50;
// const dolphinAverage = Math.round(dolphinScore / 3);
// const koalasAverage = Math.round(koalasScore / 3);
// console.log(dolphinAverage, koalasAverage);

// let minimumscore = 100;

// // if (dolphinAverage === koalasAverage) {
// //   console.log("A tie ");
// // } else if (dolphinAverage >= koalasAverage || koalasAverage > dolphinAverage) {
// //   console.log("A winner has been found");
// // } else {
// //   console.log("better luck next time");
// // }

// if (dolphinAverage >= minimumscore && dolphinAverage > koalasAverage) {
//   console.log("dolphins are the winners");
// } else if (koalasAverage >= minimumscore && koalasAverage > dolphinAverage) {
//   console.log("koalas are the winner ");
// } else if (
//   dolphinAverage === koalasAverage ||
//   (dolphinAverage && koalasAverage >= minimumscore)
// ) {
//   console.log("A tie");
// } else {
//   console.log("Better luck next time to both teams");
// }

// const day = "wednesday";
// switch (day) {
//   case "monday": //
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// const age1 = 16;
// age1 >= 18 ? console.log("ELIGIBLE 😇") : console.log("NOT ELIGIBLE");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// const age3 = 18;
// age3 >= 18
//   ? console.log("he can get into college")
//   : console.log("he isnt eligible for admission");

// const admission =
//   age >= 18 ? "he can get into college" : "he isnt eligible for admission";
// console.log(admission);

// let admission2;
// if (age >= 18) {
//   admission2 = "passed";
// } else {
//   admission2 = "did not pass";
// }
// console.log(admission2);

// console.log(`only when it shows ${age >= 18 ? "passed" : "did not pass"}`);
// console.clear();

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    tip + bill
  }`
);
console.clear();
// FUNCTIONS
// function logger() {
//   console.log("My name is mije");
// }

// // calling /running /invoking the function.
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// // fruitProcessor(5, 0);

// const applejuice = fruitProcessor(5, 0);
// console.log(applejuice);

// const fruits = (apples, oranges) => {
//   const juices = `There are ${apples} apples and ${oranges} oranges`;
//   return juices;
// };

// console.log(fruits(3, 5));

// function sports(football, basketball) {
//   // console.log(football, basketball);

//   const favourite = `I play football ${football} and basketball ${basketball}`;
//   return favourite;
// }
// const result = sports("once", "twice");
// console.log(result);

// // const result = fruits(3, 0);
// // console.log(result);

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

// const h1 = calcAge(1991);
// console.log(h1);

// const h2 = (birthYear) => {
//   return 2047 - birthYear;
// };
// console.log(h2(1995));

// function cutFruitpiesces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applPieces = cutFruitpiesces(apples);
//   const orangePieces = cutFruitpiesces(oranges);

//   const juices = `There are ${applPieces} pieces of  apples and ${orangePieces} pieces oranges`;
//   return juices;
// }

// console.log(fruitProcessor(2, 3));

// Arrown functions
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(44, 23, 7));

// // Test 1
// let dolphinScore = calcAverage(44, 23, 71);
// let koalasScore = calcAverage(65, 54, 49);
// console.log(dolphinScore, koalasScore);

// const checkWinner = (dolphinAverage, koalasAverage) => {
//   if (dolphinAverage >= 2 * koalasAverage) {
//     console.log(`dolphins win🏆 (${dolphinAverage} vs ${koalasAverage})  `);
//   } else if (koalasAverage >= 2 * dolphinAverage) {
//     console.log(`koala win 🏆 (${koalasAverage} vs ${dolphinAverage})`);
//   } else {
//     console.log("no team wins");
//   }
// };
// checkWinner(dolphinScore, koalasScore);
// checkWinner(376, 50);

// // Test 2
// dolphinScore = calcAverage(85, 54, 41);
// koalasScore = calcAverage(23, 34, 27);
// console.log(dolphinScore, koalasScore);
// checkWinner(dolphinScore, koalasScore);

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(33, 50, 25));

let dolphinAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
console.log(dolphinAverage, koalasAverage);

const checkWinner = (dolphinAverage, koalasAverage) => {
  if (dolphinAverage >= 2 * koalasAverage) {
    console.log(`dolphins win by 🏆🎯 ${dolphinAverage} to ${koalasAverage}`);
  } else if (koalasAverage >= 2 * dolphinAverage) {
    console.log(`koalas win🏆🎯 by ${koalasAverage} to ${dolphinAverage}`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(dolphinAverage, koalasAverage);

dolphinAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);
checkWinner(dolphinAverage, koalasAverage);
