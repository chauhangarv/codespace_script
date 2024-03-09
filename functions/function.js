function namHell(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}
// namHell;   --> it shows reference
namHell();


function addTwoNumbers(number1 , number2){         // parameters--> function ki defination bnate h
    console.log(number1 + number2);
}

addTwoNumbers(3, 4);    // arguments  --> function ko call krate h


function addNumbers(number1 , number2){
    let result = number1 + number2;
    return result;
    console.log("hello")            // it never be executes bcs after return in function nothing will be exexcuted
}

const result = addNumbers(4, 8);

console.log("Result:",result);




function loginMessage(username) {
    if(!username){
        console.log("Please enter username!")
        return
    }
    return `${username} just logged in!`
}

console.log(loginMessage());



function addCart(val1, val2, ...num1){         // rest operator(...) bacchi hui saari chezzo ko leleta h
    return num1;
}

console.log(addCart(200, 500, 800, 300));



const user = {
    name: "Harry Potter",
    school: "Hogwarts",
}

function handleObject(anyObject){
    console.log(`Name is ${anyObject.name} and school is ${anyObject.school}`)
}

handleObject(user);




const myNewArray = [200, 400, 600, 700];

function returnArray(getArray){
    return getArray[2]
}

console.log(returnArray(myNewArray));

