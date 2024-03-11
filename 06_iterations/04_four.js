// forIn loop

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "cpp", "py", "ruby"];

for (const key in programming) {
 console.log(programming[key]);
}


