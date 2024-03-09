// JavaScript Execution Context

// Execution Contexts are:-

// (1) Global Execution Context     -> (this)
// (2) Function Execution Context
// (3) Eval Execution Context


// Next Step-
// (1) Memory Creation Phase
// (2) Execution Phase


let var1 = 10;
let var2 = 5;
function addNum (num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(var1, var2);
let result2 = addNum(10, 2);


// Step1: Global Execution(this)

// Step2: Memory Creaton Phase
// var1: undefined
// var2: undefined
// addNum: defination
// result1: undefined
// result2: undefined

// Step3: Execution Phase
// var1: 10
// var2: 5
// addNum: Create new variable environment + Execution Thread


// -> addNum_Memory Phase:
// var1: undefined
// var2: undefined
// total: undefined

// -> Execution Context:
// num1: 10
// num2: 5
// total: 15


// Step4: Again back to Global_Execution and delete the env of previous one

// -> again NVE + Thread
// -> Memory Phase:
// val1: undefined
// val2: undefined
// total: undefined

// -> Execution Phase:
// num1: 10
// num2: 2
// total: 12




