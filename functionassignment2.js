const people = [
  {
    name: "Alice",
    hobbies: ["Reading", "Swimming", "Hiking"],
  },
  {
    name: "Bob",
    hobbies: ["Cycling", "Movies", "Gaming"],
  },
  {
    name: "Charlie",
    hobbies: ["Writing", "Chess", "Dancing"],
  },
];

// 1
const getRandomperson = () => {
  const randomPerson = Math.floor(Math.random() * people.length);
  const person = people[randomPerson];
  const randomHobby = Math.floor(Math.random() * person.hobbies.length);
  const hobby = person.hobbies[randomHobby];
  return `name: ${person.name} , hobby: ${hobby}`;
};
console.log("1..", getRandomperson());

// 2
const products = {
  electronics: ["Laptop", "Phone", "Tablet"],
  clothing: ["Shirt", "Pants", "Jacket"],
  groceries: ["Milk", "Eggs", "Bread"],
};

const getRandomproduct = () => {
  const product = Object.keys(products);
  const randomProduct = Math.floor(Math.random() * product.length);
  const category = product[randomProduct];

  const productList = products[category];
  const randomvalue = Math.floor(Math.random() * productList.length);
  const value = productList[randomvalue];

  return `${category}: ${value}`;
};
console.log("2..", getRandomproduct());

// 3
const employees = [
  { name: "John", tasks: ["Meeting", "Coding", "Review"] },
  { name: "Sarah", tasks: ["Design", "Testing", "Report"] },
  { name: "David", tasks: ["Analysis", "Documentation", "Planning"] },
];

const getRandomemployee = () => {
  const Randomemployee = Math.floor(Math.random() * employees.length);
  const employee = employees[Randomemployee];
  const randomTask = Math.floor(Math.random() * employee.tasks.length);
  const task = employee.tasks[randomTask];

  return `${employee.name}: ${task}`;
};
console.log("3..", getRandomemployee());

// 4
const foodCategories = [
  { category: "Fruits", items: ["Apple", "Banana", "Grapes"] },
  { category: "Vegetables", items: ["Carrot", "Broccoli", "Spinach"] },
  { category: "Dairy", items: ["Milk", "Cheese", "Youghurt"] },
];

const getRandomfoodCat = () => {
  const randomfoodcat = Math.floor(Math.random() * foodCategories.length);
  const foodcat = foodCategories[randomfoodcat];
  const randomFoodItem = Math.floor(Math.random() * foodcat.items.length);
  const foodItem = foodcat.items[randomFoodItem];

  return `${foodcat.category}: ${foodItem}`;
};

console.log("4..", getRandomfoodCat());

// 5
const classes = {
  math: ["Alice", "Bob", "Charlie"],
  science: ["David", "Eve", "Frank"],
  history: ["Grace", "Hannah", "Isaac"],
};

const getRandom = () => {
  const getClass = Object.keys(classes);
  const randomKeys = Math.floor(Math.random() * getClass.length);
  const retrieve = getClass[randomKeys];

  const student = classes[retrieve];
  const randomStudent = Math.floor(Math.random() * student.length);
  const retrieve2 = student[randomStudent];

  return `${retrieve}: ${retrieve2}`;
};

console.log("5..", getRandom());
