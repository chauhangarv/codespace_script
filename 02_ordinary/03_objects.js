// singleton  --> iska mtlb ki koi bhi constructor se bnate h to single object bnta h....iska mtlb h ki ye ek hi trha ka object h

// Object.create  --> isse singleton bnta h


// object literals  --> isme singleton nhi bnta h

const mySym = Symbol("Key 1")

const JsUser = {
    name: "Harry",
    "full name": "Harry Potter",
    [mySym]: "myKey1",
    age: 12,
    school: "Hogwarts",
    magician: true,
    friends: ["Hermione", "Ronald"]
}

console.log(JsUser.school);
console.log(JsUser["school"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.school = "wizarding world"
// Object.freeze(JsUser)
JsUser.school = "Koi aur"
console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Wizards");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello Wizard, ${this.name}`);
}

console.log(JsUser.greetings);
console.log(JsUser.greetingsTwo);

/*
NOTE: agr hum object m spaces m name likhte h to hume square braces m hi ise call krna pdega aur koi option nhi h isiliye hum object ko call krte time square braces use krte h....
For ex:- full name
*/
