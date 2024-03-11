// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4]

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello World";
for (const greet of greetings) {
    console.log(`Char is ${greet}`);
}



// MAPS
// -> maps unique values ke liye jaante jaate h...jo aapne enter kra h whi aayega repeat nhi hoga


const map = new Map()
map.set('IN', "India")
map.set('RUS', "Russia")
map.set('JPN', "Japan")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


// This is not working for Object

// const myObject = {
//     'game1': 'GTA',
//     'game2': 'Valo'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }