// Immediately Invoked Function Expressions (IIFE)

// Global scope ke pollution se problem hoti h kyi baar to uss global scope ke variables h ya jo bhi declaration h ussko haatane ke liye hum IIFE ka use krte h

(function one() {
    //named iife
    console.log(`DB CONNECTED`);
})();


( (name) => {
    // unnamed iife
    console.log(`DB CONNECTED TOO ${name}`);
})("Hello");