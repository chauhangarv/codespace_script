const score = 300;
console.log(score);

const balance = new Number(600);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 123.896;
console.log(otherNum.toPrecision(4));

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));


//----------------    MATHS -----------------------------------

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

/*  
Math.random m value 0 to 1 ke beech m hi aati h
 */
console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);