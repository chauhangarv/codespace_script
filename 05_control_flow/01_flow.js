// if


if (true) {
}

if (false) {
    // not executed
}


const isUserloggedIn = true;

const temperature = 40;

if (temperature === 20) {
    console.log("Hot");
} else {
    console.log("Cold");
}

// <, >, <=, >=, ==, !=, ===(strict equal; checks datatypes), !==


const score = 100;

if (score > 50) {
    var power = "High";
    console.log(`High Score: ${power}`);
}

console.log(`User power: ${power}`);

// iss code m agr (var) use hota to wo baad m bhi run hota bcs var global scope hota h, but let and const global scope nhi hote h, isiliye hum let use krte h ab...




// IMPLICIT CODE

const balance = 1000;

if (balance > 500) console.log("okk");


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy a course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


