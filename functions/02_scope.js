// SCOPE -> {}

var c = 400;
let a = 200;              // GLOBAL SCOPE

if (true) {                    // BLOCK SCOPE
    let a = 10;
    const b = 20;
    var c = 30;
    console.log("Inner: ", a)
}

// console.log(a)
// console.log(b)
console.log(c)





function one(){
    const username = "William";

    function two(){
        const website = "william.com";
        console.log(username);
    }
    // console.log(website);

    two()
}
one();


if (true) {
    const name = "Harry Potter";
    if(name === "Harry Potter") {
        const school = " Hogwarts";
        console.log(name + school)
    }
    // console.log(school);
}
// console.log(name);

