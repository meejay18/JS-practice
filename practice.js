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

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(33, 50, 25));

// let dolphinAverage = calcAverage(44, 23, 71);
// let koalasAverage = calcAverage(65, 54, 49);
// console.log(dolphinAverage, koalasAverage);

// const checkWinner = (dolphinAverage, koalasAverage) => {
//   if (dolphinAverage >= 2 * koalasAverage) {
//     console.log(`dolphins win by 🏆🎯 ${dolphinAverage} to ${koalasAverage}`);
//   } else if (koalasAverage >= 2 * dolphinAverage) {
//     console.log(`koalas win🏆🎯 by ${koalasAverage} to ${dolphinAverage}`);
//   } else {
//     console.log("No team wins");
//   }
// };

// checkWinner(dolphinAverage, koalasAverage);

// dolphinAverage = calcAverage(85, 54, 41);
// koalasAverage = calcAverage(23, 34, 27);
// checkWinner(dolphinAverage, koalasAverage);

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends[1]);
// // console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);

// const mije = [
//   "mijoghene",
//   "Digban",
//   2008 - 1991,
//   "software developer",
//   friends,
// ];
// console.log(mije);

// const calcAge = (birthYear) => {
//   return 2047 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age4 = calcAge(2035);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// push method
// const friends = ["Micheal", "Steven", "Peter"];
// const newLength = friends.push("Mije");
// console.log(friends);
// console.log(newLength);

// // unshift method
// friends.unshift("teks");
// console.log(friends);
// // pop method removes element from an array

// friends.pop();

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // shift method

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("bob"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// } else {
//   console.log("You do not have a friend called Steven");
// }

// const billvalue = 125;
// const calcTip = (billvalue) => {
//   return `${billvalue}` >= 50 && `${billvalue}` <= 300
//     ? 0.15 * `${billvalue}`
//     : 0.2 * `${billvalue}`;
// };

// console.log(calcTip(`${billvalue}`), `${billvalue}`);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(total);

// const mije = {
//   firstName: "mijoghene",
//   surName: "Digban",
//   age: 2037 - 2011,
//   friends: ["teks", "Paul", "ezi"],
//   job: "Software engineer",
// };

// console.log(mije);

// console.log(mije.surName);
// console.log(mije["job"]);

// const Namekey = "Name";
// console.log(mije["sur" + Namekey]);
// console.log(mije["first" + Namekey]);

// // console.log();

// // const interestedIn = prompt(
// //   "What do you want to know about mije? choose between friends, job , age, firstName, surname "
// // );
// // console.log(mije[interestedIn]);

// mije.location = "ohio";
// mije["twitter"] = "@meejayDigban";
// console.log(mije);

// // challenge

// console.log(
//   `${mije.firstName} has ${mije.friends.length} friends and one of them is ${mije.friends[0]}`
// );

const mije = {
  firstName: "mijoghene",
  surName: "Digban",
  birthYear: 2037,
  friends: ["teks", "Paul", "ezi"],
  job: "Software engineer",
  hasDriversLicense: true,

  // calcAge: (birthYear) => {
  //   return 2067 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);

  //   return 2067 - this.birthYear;
  // },

  //   getSummary: function () {
  //     console.log(this);
  //     return `${this.firstName} is a  ${2070 - this.birthYear} year old ${
  //       this.job
  //     } and has ${this.hasDriversLicense ? "a" : "No"} drivers license   `;
  //   },
  // };

  // console.log(mije.getSummary());
  // // console.log(mije["calcAge"](birthYear));

  // const mark = {
  //   fullName: "Mark Miller",
  //   mass: 78,
  //   height: 1.69,

  //   calcBMI: function () {
  //     this.bmi = this.mass / this.height ** 2;
  //     return this.bmi;
  //   },
  // };
  // const john = {
  //   fullName: "Mark Miller",
  //   mass: 92,
  //   height: 1.95,

  //   calcBMI: function () {
  //     this.bmi = this.mass / this.height ** 2;
  //     return this.bmi;
  //   },
  // };

  // mark.calcBMI();
  // john.calcBMI();

  // console.log(mark.bmi, john.bmi);

  // if (mark.bmi > john.bmi) {
  //   console.log(
  //     `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s bmi(${john.bmi})`
  //   );
  // } else if (john.bmi > mark.bmi) {
  //   console.log(
  //     `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s bmi(${mark.bmi})`
  //   );
  // }

  // // For loop
  // // keeps running while the condition is true

  // for (let rep = 1; rep <= 10; rep++) {
  //   console.log(`jogging everyday repetition ${rep}🚀🚀🚀🚀 `);
  // }

  // const mijeArray = [
  //   "mijoghene",
  //   "Digban",
  //   2008 - 1991,
  //   "software developer",
  //   ["teks", "uri", "ru"],
  //   true,
  // ];

  // const types = [];

  // for (let i = 0; i < mijeArray.length; i++) {
  //   console.log(mijeArray[i], typeof mijeArray[i]);

  //   // types[i] = typeof mijeArray[i];

  //   types.push(typeof mijeArray[i]);
  // }

  // console.log(types);

  // const ages = [];

  // for (let i = 0; i < years.length; i++) {
  //   ages.push(2037 - years[i]);
  // }
  // console.log(ages);

  // // continue and break
  // for (let i = 0; i < mijeArray.length; i++) {
  //   if (typeof mijeArray[i] !== "string") continue;
  //   console.log(mijeArray[i], typeof mijeArray[i]);
  // }

  // for (let i = 0; i < mijeArray.length; i++) {
  //   if (typeof mijeArray[i] === "number") break;
  //   console.log(mijeArray[i], typeof mijeArray[i]);
};

console.clear();

// const years = [1991, 2007, 2020, 1995];
// const IdCard = ["bisi", 2037 - 1995, "graduate", ["tj", "kemi", "bola"], true];

// const ages2 = [];
// const number = ["you", 1885, "mije", 2003];

// for (let i = 0; i < number.length; i++) {
//   if (typeof number[i] === "string") continue;
//   ages2.push(2050 - years[i]);

//   console.log(number[i], typeof number[i]);

//   // console.log(IdCard[i]);
//   // console.log(ages2);
// }

const mijeArray = [
  "mijoghene",
  "Digban",
  2008 - 1991,
  "software developer",
  ["teks", "uri", "ru"],
  true,
];

// 4, 3,2,1

for (let i = mijeArray.length - 1; i >= 0; i--) {
  console.log(i, mijeArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------starting exercise ${exercise} 🏋️`);

  for (let workout = 1; workout < 6; workout++) {}
}

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(
    `this round needs at least ${rep} rep(s) to move to the next round`
  );
  rep++;
}
