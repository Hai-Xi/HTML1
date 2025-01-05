console.log("Hello from scripts.js");

var animal = "cat"; // es5

let animal2 = "cat"; // declaration + assignment
// let animal2 = "dog";
// animal2 = "cat"; // reassignment

const animal3 = "cat";

const MY_OBJECT = {
  key: "value",
  key2: 2,
  key3: true,
  name: "amy",
};

console.log("My object name is: ", MY_OBJECT);

const MY_ARRAY = ["a", "1", true, MY_OBJECT];
console.log("My array's 0th element is: ", MY_ARRAY[0]);

//undefined vs null
let undefinedExample;
console.log("undefinedExample: ", undefinedExample);

let nullExample = null;
// nullExample = undefinedExample;
console.log("nullExample: ", nullExample);

// == vs ===
console.log("1 == '1': ", 1 == true);
console.log("1 === '1': ", 1 === true);

// functions
// way 1
function introduceYourself(name) {
  console.log("Hello, my name is ", name);

  return name;
}

// way 2
const introduceYourself2 = function (name) {
  console.log("Hello, my name is ", name);

  return name;
};

// way 3
const addTwoNumbers = (num1, num2) => {
  const result = num1 + num2;
  return result;
};

// way 3 one line expression
const addTwoNumbersV2 = (num1, num2) => num1 + num2;

// IIFE
(function (name) {
  console.log("Hello, my name is ", name);

  return name;
})("Hai -- testing IIFE");

((num1, num2) => console.log(num1 + num2))(1, 2);

// callback function
function animalMakeSound(animal) {
  if (animal === "cat") {
    console.log("Meow");
  } else if (animal === "dog") {
    console.log("Woof");
  } else {
    console.log("Unknown animal");
  }
}

function animalMakeSoundV2(soundfunction) {
  soundfunction();
}

const dogSound = () => console.log("Woof");
const catSound = () => console.log("Meow");

animalMakeSoundV2(dogSound);
