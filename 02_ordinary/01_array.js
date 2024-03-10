const myArr = [1, 2, 3, 4, 5];
const stars = ["Spiderman", "Harry Potter"];

const myArray = new Array(1,2, 3, 6, 4);

console.log(myArr[4]);


// Array Methods

myArr.push(6);    // --> to add element in array
myArr.push(9);
myArr.pop();      // -->  to remove the last element in array

myArr.unshift(4);  // --> to add the element in the start of the array
myArr.unshift(8); 
myArr.shift();  // --> to remove the element in the start of the array

console.log(myArr.includes(9));  //  --> check krne ke liye ki isme ye data h ya nhi...answer boolean m hi milega

console.log(myArr.indexOf(12));  // --> ye btata h ki iska index kiya h...agr ye nhi hoga to answer m (-1) hi aayega

console.log(myArr.indexOf(3));   // -->  agr index same hua to answer mil jayega

console.log(myArr);

const newArr = myArr.join()  // --> join humesha existing array to string m convert krega and string print krega

console.log(newArr);


//  slice , splice

console.log("A", myArr);

const myArr1 = myArr.slice(1, 3);

console.log(myArr1);
console.log("B", myArr);


const myArr2 = myArr.splice(1, 3);

console.log(myArr2);
console.log("c" ,myArr);