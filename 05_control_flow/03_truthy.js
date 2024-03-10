const userEmail = [];

if (userEmail) {
    console.log("Got the userMail");
} else {
    console.log("Don't hhave mail");
}


// Falsy Values :-  false, 0, -0, null, undefined, NaN, "", BigInt 0n

// Truthy Values :- "0", "false", " ", [], {}, function(){}


if (userEmail.length === 0) {
    console.log("Array is Okk");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}





// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
val1 = null ?? 5 ?? 10;

console.log(val1);



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")