const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed());

const otheNumber = 124.8959;
console.log(otheNumber.toPrecision(4));

const Hundcred = 1000000;
console.log(Hundcred.toLocaleString("en-IN"));

// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf : ƒ valueOf()

// +++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++
console.log(Math);

console.log(Math.abs(-8));
console.log(Math.round(5.4));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.min(5, 2, 8, 10, 7, 6));
console.log(Math.max(5, 2, 8, 10, 7, 6));
// How to use this life
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 20;
const max = 30;

//formula
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// abs: ƒ abs()
// acos: ƒ acos()
// acosh: ƒ acosh()
// asin: ƒ asin()
// asinh: ƒ asinh()
// atan: ƒ atan()
// atan2: ƒ atan2()
// atanh: ƒ atanh()
// cbrt: ƒ cbrt()
// ceil: ƒ ceil()
// clz32: ƒ clz32()
// cos: ƒ cos()
// cosh: ƒ cosh()
// exp: ƒ exp()
// expm1: ƒ expm1()
// f16round: ƒ f16round()
// floor: ƒ floor()
// fround: ƒ fround()
// hypot: ƒ hypot()
// imul: ƒ imul()
// log: ƒ log()
// log1p: ƒ log1p()
// log2: ƒ log2()
// log10: ƒ log10()
// max: ƒ max()
// min: ƒ min()
// pow: ƒ pow()
// random: ƒ random()
// round: ƒ round()
// sign: ƒ sign()
// sin: ƒ sin()
// sinh: ƒ sinh()
// sqrt: ƒ sqrt()
// tan: ƒ tan()
// tanh: ƒ tanh()
// trunc: ƒ trunc()
// Symbol(Symbol.toStringTag):"Math"
