const coding = ["Java", "JavaScript", "Python", "Ruby"];

const val = coding.forEach( (item) => {
    console.log(item);
    return item;
})
console.log(val);



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter( (num) => {
    return num > 4;
})   // agr paranthesis lga diye to return keyword likhna hi pdega
console.log(newNums);



const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNum = []

Num.filter( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

console.log(newNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (book) => book.genre === "history")

userBooks = books.filter( (book) => {
    return book.publish >= 1999 && book.genre === "Science"
})
console.log(userBooks);