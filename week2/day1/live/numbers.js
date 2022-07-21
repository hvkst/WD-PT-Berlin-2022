let a = 10;
let b = 5;

// +, -, /, *
console.log(a + b);
console.log(a - b);

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// different ways of increasing a number by one;
a += 1;
a = a + 1;
a++;
++a;

a--;
--a;

console.log("a", a);

console.log(Math.E);
console.log(Math.pow(10, 2));

// %
const c = 10;
console.log(c % b);

console.log("Math.floor of 11.5", Math.floor(11.5));
console.log("Math.ceil of 11.1", Math.ceil(11.1));

console.log("Math.round of 11.5", Math.round(11.5));
console.log("Math.round of 11.4", Math.round(11.4));

// console.clear();

console.log(NaN + 10);
console.log(NaN === NaN);
console.log(10 / 0);

console.log(0 / 0);
console.log({} === {});

// ################################################################

// Multiply-and-Divide in combo with Math.round():
// let anyNumber = 5.679345;
// let roundedToOne = Math.round(anyNumber*10)/10;
// let roundedToTwo = Math.round(anyNumber*100)/100;
// let roundedToThree = Math.round(anyNumber*1000)/1000;

// console.log(roundedToOne); // <== 5.7
// console.log(roundedToTwo); // <== 5.68
// console.log(roundedToThree); // <== 5.679

// Use method .toFixed(n) to round the number to n digits after the point.

// let anyNumber = 5.679345;
// let roundedToOne = anyNumber.toFixed(1);
// console.log(roundedToOne); // <== "5.7"        CAREFUL, STRING!

// // From here back to a number with Number()
// let roundedToOne1 = Number(anyNumber.toFixed(1));
// console.log(roundedToOne1); // <== 5.7

// let roundedToTwo = +anyNumber.toFixed(2);
// console.log(roundedToTwo); // <== 5.68

// Math.random() => returns a random number from 0 to 1 (including 0 but not including 1)
console.log(Math.random()); // <== 0.010086087097095797
console.log(Math.random()); // <== 0.24143918045188073
console.log(Math.random()); // <== 0.23920890331219713

// Math.max(a, b, c...) / Math.min(a, b, c...) => returns the greatest/smallest from the arbitrary number of arguments.
console.log(Math.max(2, 8, -10, 0, -4)); // <== 8
console.log(Math.min(1, 2, 0, -5)); // <== -5

// Math.pow(n, power) => returns n raised the given power
console.log(Math.pow(2, 3)); // <== 8

// Math.floor() => rounds ⬇️down:

// Math.ceil() => rounds ⬆️up:

// Math.round() => rounds to the nearest integer:

// isFinite()	Checks whether a value is a finite number

// isInteger()	Checks whether a value is an integer

// isNaN()	Checks whether a value is Number.NaN

// isSafeInteger()	Checks whether a value is a safe integer

// toExponential(x)	Converts a number into an exponential notation

// toFixed(x)	Formats a number with x numbers of digits after the decimal point

// toLocaleString()	Converts a number into a string, based on the locale settings

// toPrecision(x)	Formats a number to x length

// toString()	Converts a number to a string

// valueOf()	Returns the primitive value of a number
