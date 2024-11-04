const number2 = [10, 24, 35, 75, 85, 40, 23, 47];

// 1.
const filterEven = (container) => {
  const evenNumber = container.filter((number) => {
    return number % 2 === 0;
  });
  return evenNumber;
};
// console.clear();
console.log("1..", filterEven(number2));

// 2.
const checkValue = [10, 24, 35, 75, 85, 40, 23, 47];
const value = 10;
const value2 = 14;

const containsElement = (container, value1) => {
  const check = container.some((number) => {
    return number === value1;
  });
  if (check === true) {
    return true;
  } else {
    return false;
  }
};

console.log("2..", containsElement(checkValue, value2));

// 3.

const checkValue2 = [100, 24, 67, 75, 85, 40, 23, 47];

const reverseArray = (container) => {
  const reverse = container.reverse((rev) => {
    return rev;
  });
  return reverse;
};

console.log("3", reverseArray(checkValue2));

// 4.

const singleNumber = 8;

const isEven = (number) => {
  if (number % 2 === 0) {
    return ` true ${number}`;
  } else {
    return `false ${number}`;
  }
};

console.log("4..", isEven(7));

// 5.
const checkValue3 = [100, 24, 67, 75, 85, 40, 23, 47, 3];

const filterodd = (container) => {
  const remove = container.filter((el) => {
    return el % 2 === 1;
  });
  return remove;
};
console.log("5..", filterodd(checkValue3));

// 6.
const name = "madam";

const isPalindrome = (name) => {
  const splitName = name.split("").reverse().join("");
  if (name === splitName) {
    return `${name} is a palindrome`;
  } else {
    return `${name} is not a palindrome`;
  }
};

console.log("6..", isPalindrome("dark"));

// 7.

const userName = "harn";
const password = "buyit";
const predefinedvalues = [userName, password];

const login = (userName, password) => {
  if (predefinedvalues.includes(userName, password)) {
    return "Login successful";
  } else {
    return "Login failed";
  }
};

console.log("7.", login("harn", "buyit"));
// console.clear();

// 8..

// 9.
const assignHouse = () => {
  const house = ["red house", "blue house", "green house", "yellow house"];
  const random = Math.floor(Math.random() * house.length);
  const studentNames = ["mije", "bola", "james", "nedu"];
  const randomNames = Math.floor(Math.random() * studentNames.length);
  return `${studentNames[randomNames]} assigned to ${house[random]}`;
};
console.log("9..", assignHouse());

// 10.'

const generateEmployeeDetails = (name, company) => {
  const id = Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
};

// 10..
let arrayOfroles = [
  "Manager",
  "Developer",
  "Human Raesource",
  "Personnel",
  "Secretary",
  "Supervisor",
];
let random = arrayOfroles[Math.floor(Math.random() * arrayOfroles.length)];

let name1 = "CharlieHonda";
let uppercase = name1
  .charAt(0)
  .toUpperCase()
  .concat(name1.slice(0, name1.length).toLowerCase());

let join = "@";
let company = "Echelon";
let domain = ".com";
let companyEmail = name1.concat(join).concat(company.concat(domain));

// console.log(companyEmail);

let newId = Math.floor(Math.random() * 10000);

const generatedEmployeeDetails = (id, email, role, goodName) => {
  return { id, email, role, goodName };
};

console.log(generateEmployeeDetails(newId, companyEmail, random, uppercase));
