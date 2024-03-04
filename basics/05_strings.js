const name = "Doctor";
const star = "Strange";

// console.log(name + star);   ---> older user in js


// String Interpolation used in (``) backticks it insert placeholders in it
console.log(`My name is ${name} ${star}`);

const newStar = new String('harry potter');

console.log(newStar[0]);
console.log(newStar.__proto__);

console.log(newStar.length);
console.log(newStar.toUpperCase());
console.log(newStar.charAt(6));
console.log(newStar.indexOf("t"));

const newString = newStar.substring(0, 4);
console.log(newString);

const anotherString = newStar.slice(2, 7);
console.log(anotherString);

const newStr = "  Ronald  ";
console.log(newStr);
console.log(newStr.trim());

const url = "https://harrypotter.com/harry%2a0=potter";
console.log(url.replace("%2a0=", "-"));
console.log(url.includes("hermione"));