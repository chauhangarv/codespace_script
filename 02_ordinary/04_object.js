// Singleton

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "01_willy"
tinderUser.name = "William"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: "some@male.com",
    identity: {
        username: {
            full_name: "Jack",
            last_name: "Reacher",
        }
    }
}

console.log(regularUser.identity.username);


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}  // spread operator for concatenate

console.log(obj3);
console.log(obj4);


const users = [
    {
        id: 1,
        email: "hello@male.com"
    },
    {
        id: 1,
        email: "hello@male.com"
    },
    {
        id: 1,
        email: "hello@male.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));
