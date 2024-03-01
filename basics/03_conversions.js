let score = "33ab";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);  // NaN -> Not a Number

// "33" => 33
// "33ab" => NaN
// true => 1; false => 0;
// null => 0
// undefined => NaN

let isLoggedIn = "h";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "helo" => true

let someName = null;

let string = String(someName);
// console.log(string);

// string => everything is converted


let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2); // addition
// console.log(2-2); // sub
// console.log(2*2); // multiplication
// console.log(2**2);  // power
// console.log(2/2);  // division
// console.log(2%2);  // reminder

let str1 = "Hello";
let str2 = " World";
let str3 = str1 + str2;

// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log(1 + 2);

// console.log(1 + 2 + "2");
// console.log("1" + 2 + 2);

/* 
agr string first m h to sbhi to string ki trha hi treat kra jayega...
*/

// console.log(+"");

let game = 100;
++game;   // prefixoperator
game++;    // postfixoperator
// console.log(game);