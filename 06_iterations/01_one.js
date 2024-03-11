// for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 print");
    }
    console.log(element);
}


for (let i = 0; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`Inner loop value: ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
    }
}



const stars = ["Harry Potter", "Hermione", "Ronald"];

for (let i = 0; i < stars.length; i++) {
    const element = stars[i];
    console.log(element);
}



// BREAK and CONTINUE

for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected");
        break;
    }
    console.log(`Value is ${i}`);
}


for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        console.log("Detected");
        continue;
    }
    console.log(`Value is ${i}`);
}