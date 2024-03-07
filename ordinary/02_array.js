const wiz_heros = ["Harry Potter", "Hermione", "Ronald"];

const marv_heros = ["Doctor Strange", "Wanda", "Spider Man"];

wiz_heros.push(marv_heros);

console.log(wiz_heros);

const allHeros = wiz_heros.concat(marv_heros);
console.log(allHeros);


// spread operator

const all_new_heros = [...wiz_heros, ...marv_heros];
console.log(all_new_heros);



const another_array = [1, 2, 3, 4, [3, 4, 5, 6], 7, 5, [5, 6, [6, 7, 8]]];

const ano_arr = another_array.flat(Infinity);
console.log(ano_arr);


console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));