// this keyword used for current context

const user = {
    username: "william",
    price: 888,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the page`);
        // console.log(this);      --> current context
    }
}

user.welcomeMessage();
user.username = "James";
user.welcomeMessage();

// console.log(this);     --> shows empty object, but in browser it shows windows object



function code() {
    let username = "Harry"          // it shows undefined
    console.log(this.username);     // it shows so many things in node env 
}

code();



const code1 = function (){
    let username = "Harry Potter"
    console.log(this.username);
}

code1();




const code2 = () => {                // BIG FAT ARROW function
    let username = "Harry Potter"
    console.log(this.username);
}

code2()





// ++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++++++++


// Explicit Return

const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(3, 5));


// Implicit Return

const addNum = (num1, num2) => num1 + num2;
const addNum1 = (num1, num2) => ({username: "Hello"});
console.log(addNum(6, 8));
console.log(addNum1());



/*
NOTE: curly braces m return keyword likhna pdega, lekin paranthesis m return keyword likhna nhi pdega...
*/ 