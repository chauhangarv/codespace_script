// -js
// -word vs keyword
// -var const let
// -hoisting
// -types in js
// -conditionals
// -if else else-if
// -loops
// -functions
// -params, arguments
// -arrays
// -push pop shift unshift
// -objects
// -props vs methods
// -updating object props
// --the difference
// --window object
// --browser context api
// --stack
// --heap memory
// --execution context
// --lexical environment
// --how to copy reference values
// --truthy vs falsy
// --switch
// --foreach forin do-while(bhut km use hota h)
// --callback fncs
// --how do arrays are made behind the scenes
// --why we can make negative indexes arrays in js
// --practice questions and scenarios
// --how to delete object prop
// --practice questions, scenarios



//js ----> es5, es6


//words vs keywords
//words --> that doesn't have any sense in js
//keywords --> that have sense in js

//hello, bye, garv, all are words
//if, for, const, var, else all are keywords


//var const let
//variables --> koi bhi data store krne ke liye jiska use hota h use variable khte h
//constant --> humara store kraya hua data kbhi bhi change nhi hota error show hoga
// let and const dono se aap value store kr skte ho, but dono differently behave krte h, let change ho skta h 
//and const nhi ho skta, let ko first time value dena compulsury nhi h and const ko h


//hoisting
//--> variables and functions are hoisted which means their decalaration is moved on the top of code
//undefined vs not-defined
//undefined --> particular cheez ho ya uski existance ho but value nhi pta
//not-defined --> uski existance hi nhi ho

//types in js
//primitives vs references
//primitives --> number, string, undefinied, boolean
//references --> [] () {} 
//---> aisi koi bhi value jise copy krne pr real value copy nhi hota but uska references value pass ho  jata h;
//whereas; jisli value copy krne pr real value copy ho jae use primitive bolte h
//var a =12; ----> primitive value exapmle
//var a = [12,13];   ------> reference value example
// var b=a;
// b.pop();


//conditionals - if else else-if
//jb koi bhi conditional option aaye tb use kre


//loops - for while
//---> to simplify the code


//functions ---> mainly for 3 uses ---> aap kuch code ko likh kr koi naam de skte ho aur bd m usse use kr skte ho bina pure code likh kr
// function abcd(){
//}

//1. jb hum code instantly nhi chalana chate future m chalana chate h tb use krte h
//function hello(){
//  console.log("helloworld");
//}
//hello();

//2. jb hum code reuse krna chate h
//3. jb code chalana chate ho hrr barr with diff data



//parameters and arguments
//function abcd(a,b,c,d){   ------> parameters value h/ varaiables jinme values store hoti h arguments wali
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4); ---> values arguments h/ jo real value h



//Arrays ----> hum ek variable m ek value store krwate h, but agr hume ek se jayada value store krani ho to hum array use krte h
// var a = 12,13;  X
//var arr = [1,2,3,4]; ----> array/ group of values


//push-pop , shift-unshift , splice
//var arr = [1,2,3,4];
//arr.push(8); ---> add one number behind the last number of array
//arr.pop();   ---> deduct one number from the array
//arr.unshift(0) ---> array ki start m ek number add krne ke liye hota h
//arr.shift()   ----> array ki start m se ek number deduct krne ke liye use hote h
//arr.splice(2,1)   -----> array ki middle m se ek number htane ke liye use hota h aur hume ek dead point bhi set krna hota h



//Object ---> details ko hold krna
// ----> ek se jayada ke barre m baat hui to hua array, aur ek ke barre m sari baat hui to hua object
//var obj {
//     name: "hello",
//     class: "world"
// } console.log(obj);



//var let const
//var old js m use hoti h
//var function scoped hota h => var apne parent function scoped h
//var adds itself to the window object

//let, const new js mein h
//let braces scoped hota h
//let, const doen't adds

//# NOTE:--->
// ### js mein kai saare features h pr kuch kuch features jo hum use nhi krte h wo features wo nhi h pr  fir bhi
// use kr paate h kyunki wo features js language use leti h window se, aur window h ek box of feature given by 
//browser to use with js (like ALERT, PROMPT, CONSOLE)



//Browser context API -----> 3 things jo api deta h ----> Windows,Heap,Stack


//Stack
//way of doing the work ----> kaam kese krta h, jo phle aayega whi phle jaega

//Heap
//jitne bhi intermediate data ya data hum bnate h unhe khi to store krna hota h use heap bolte h
//1+2+3+4+5+6 => 1+2=3 => 3+3=6 => 6+4.....

//Execution context
//execution context is a container where the function's code is executed and it's created whenever a 
//function is called, it contains 3 things variables, functions, lexical environment

//function abcd(){
//     var a=10;     --------> execution context contain a,def,lexical environment
//     function def(){
//         var b=13;  ------> lexical environment btata h ki function ke andr function ke object execution context m include nhi hoga
//     }
// }




//lexical environment
//lexical environment hota h ek chart jisme ye likha hota h ki aapka particular function kin chezzo ko access kr skta h and kinko nhi,
//sometimes it called to holds SCOPE and SCOPE CHAIN


//Spread Operator ----> to copy the refernce values
// var a= [1,2,3,4]
// var b= [...a] ----> ... spread operator
// var obj = {name: Hello} -----> copy objects
// var copyobj1 = {...obj}


//JS m kuch bhi likho wo mainly do types m se kisi ek m belong krte h
//TRUTHY and FALSY
//Falsy ----> 0, false, undefined, null, NaN, document.all
//Truthy ----> other than all falsy values everything belongs in truthy


//forEach ---> forEach loop sirf array pr chlta h mtlb ki kbhi bhi tumhare pass ek array ho, tb use mein kun aata h forEach loop
//forEach kbhi bhi by defalut aapke array mein change nhi krta wo aapko changes krke deta h array ki temporary copy pr jiske wajah se array humesha same rehta h
// var a = [1,2,3,4,5]
// a.forEach(function(val){
//     console.log(val+2);
// })

//forIn ------> objects pr loop krne ke liye hota h forin loop
// var obj={
//     name: "hello",
//     class: "World"
// }
// for(var key in obj){
//     console.log(key, obj[key]);
// }



//callback funs
//----> jb bhi koi aisa code jo baad m chlta h, aap likhoge kyunki wo code baad mein chlta h JS 
// ko ye pta nhi hota ke wo complete hua ya nhi, aise code ke completion pr JS ko btaya jaata h ke wo 
// complete hogya aur aap usse chla skte ho, ye btane ka kaam CALLBACK ka hota h
// setTimeout(function(){
//     console.log("2 second baad");
// }, 2000);



//first class concept
//JS mein ek concept h jiska mtlb hota h ki aap fnc ko use kr skte ho as a value
// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hello");})



//arrow functions
// purani JS m 3 types ke functions the: (functions statements, functions expression, anonymous function)
// new JS m 1 type ke functions hai but different parts:
// Basic fat arrow function
// var a =()=>{
// }; 
// console.log(a());
//fat arrow function with one parameter
// var a = p=>{             var a = (p,q)=>{
// }                          }
//console.log(b(12));       console.log(b(12,13));
//fat arrow function with implicit return
// var a = ()=>12;
// console.log(a());




// template literals backticks ``
//hey 2+2 is 4 and 2-2 is 0 print it
//console.log(`hey ${2+2} is 4 and ${2-2} is 0`);


//Default parameters 
// jb bhi hum kisi bhi parameter m value dete h but argument m nhi to undefined aata h, but usko avoid krne 
//ke liye hum parameter ki sbhi values ko 0 de dete h
// function abc(a=0,b=0,c=0){
//     console.log(a,b,c);
// }
// abc(1,2,3);
// abc(1,2,2);
// abc(1);


//rest/spread -----> jo ki aalg work krte h different context m
// rest use hota h jb aapko bache huye values ek variables m daalne ho
// function abc(a,b,c,...d){       ------> rest operator ...d
// console.log(abc);
// }
// abc(1,2,3,4,5,6,7,8);



//destructing ----> arrays and objects se data baahr nikalna in variables
// var a = [1,2,3];           var a = [1,2,3];
// var [b,c,d]= a;               var [b,,d] = a; ----> kisi bhi value ko center se skip krne ke liye use hota h



//classes ----> to make objects from a particular blueprint




//promises ----> to take care of asyn part
//resolve => agr humara task complete hota h to resolve run hota h  => then
//reject  => agr humara task complete nhi hota h to reject run hota h  =. catch




//async await ----> to take care of the async part but more than elegantly
// koi bhi esa function jisme aap async code likhoge, kyunki async code h to aap promises ka use kr skte h, jb uska
// answer aayega aapko 'then' lgana pdega, uss 'then' ko lgane se bachne ke liye, aap async await ka use kr skte h
// async function abcd(){                           async function abcd(){
//     await fetch(``)                              let raw = await fetch(``)
//     .then(function(raw){                          let ans =await raw.json();
//         return raw.json();                          console.log(ans);
//     })                                                }
//     .then(function(data){                          abcd(){
//      console.log(data);                            
//     })                                                  
// }                                                      


// var a = 12;
// console.log("hello");

// const express = require('express')
// const app = express();

// app.get("/", function (req, res){
//     res.send("HEllo");
// });

// app.listen(3000);