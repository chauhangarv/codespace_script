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





// ++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))    // function ke data ko phle declare krne ko Hoisting bolte h

function addOne(num){
    return num + 1;
}


addTwo(5)                    // variables m store hue data ko phle declare nhi krskte h...
const addTwo = function(num){
    return num + 2
}