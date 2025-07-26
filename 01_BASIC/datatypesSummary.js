// Primitive

// 7 types :- String, Number, Boolean, Null, Undefined, Symbol, Bigint

let score = 100;
const scorevalue = 100.3;

let isloggedIn = false;
const outsidetemp = null;

let userEmail;

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);

// let BigNumber = 144457878641587547754n;

// Refarance (Not primitive)

// array, object, Function

// array

let heros = ["Aman", "Naman", "Sachin"];

// object

let myobj = {
  name: "Aman",
  age: 18,
};

// function

const myfunction = function () {
  console.log("Hello World");
};

console.log(typeof anotherId);

// typeof : BigNumber => undefined
// myfunction => object function
// myobj => object
// heros =. object
// anotherId => symbol

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack and heap memory
// Stack Memory (Primitive),Heap Memory (Not primitive)

// stack memory

let myYoutubename = "Codehelpaman@.com";

let myanothername = myYoutubename;
myanothername = "codehhelp@hotcom";

console.log(myYoutubename);
console.log(myanothername);

// Heap memory
let userOne = {
  email: "Codehelpaman@gmail.com",
  upi: "aman@yal",
};

let UserTwo = userOne;
UserTwo.email = "Amanyadavhamjapur@gmail.com";

console.log(userOne.email);
console.log(UserTwo.email);
