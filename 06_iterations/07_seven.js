const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = nums.map( (num) => num + 10)
console.log(newNum);



const Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const new_Nums = Nums
                .map( (num) => num + 10)
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(new_Nums);

