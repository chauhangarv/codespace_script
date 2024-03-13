const myNums = [1, 2, 3]

const total = myNums.reduce(function (acc, curV) {
    console.log(`acc: ${acc} and curV: ${curV}`);
    return acc + curV
}, 4)

const myTotal = myNums.reduce( (acc, curV) => acc + curV, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "Shirt",
        price: 2999
    },
    {
        itemName: "Track Pants",
        price: 999
    },
    {
        itemName: "Joggers",
        price: 999
    },
    {
        itemName: "Polo",
        price: 2999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);