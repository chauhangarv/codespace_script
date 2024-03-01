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
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false;
// "" => false;
// "helo" => true

let someName = null;

let string = String(someName);
console.log(string);

// string => everything is converted
