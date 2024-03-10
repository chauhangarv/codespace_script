/*
 kis trha se data ko memory m rkha jata and acces kiya jata h us basis pr data ko 2 categorization h (1) Primitive (2) Non Primitve (Reference Datatypes)
*/


// Primitive :-
// callbyvalue: mtlb jb bhi aap inhe khi copy krte h to unka original data reference nhi diya jaata unka data copy krke diya jaata h inke copy m hum changes krte h naa ki main file m

//  7 types: String, Boolean, Number, Null, Undefined, Symbol(unique bnane ke liye use krte h), Bigint

const num = 100;
const num1 = 1000.21;
const isLoggedIn = false;
const temp = null;
let email;

const id = Symbol('123');
const anotherid = Symbol('123');

// console.log(id === anotherid);

const bigNum = 2234567n;


// Reference (Non Primitive) :-
// callbyreference :-  aisi koi bhi value jise copy krne pr real value copy nhi hota but uska references value pass ho jati h

// Array, Objects, Functions

const heros = ["Spiderman", "Hulk", "Wanda"];
let identity = {
    age: 22,
    name: "Hello World",
}
console.table(identity);

const myfunction = function(){
    console.log("hello India");
}
console.log(typeof myfunction);

/*
dataypeof null -> object
datatypeof function -> functionobject
datatypeof non-primitive datatypes -> objects
*/




// ----------------------------------------------------------------------------


// Memory :-

// Stack (Primitive) -->
// hum primitive datatypes value Stack Memory m hi jaate h agr unme changes krte h to unke copy m changes hota h...

// Heap (Non-Primitive)  -->
// saare non-primitive datatypes Heap Memory m jaate h aur unme changes main function m hi hota h...

let myName = "IronMan";
anotherName = "Tony Stark";

console.log(anotherName);
console.log(myName);

let nameOne = {
    name: "SpiderMan",
    id: "Peter Parker",
}

let anotherOne = nameOne;

anotherOne.id = "Miles Morales";

console.log(anotherOne.id);
console.log(nameOne.id);