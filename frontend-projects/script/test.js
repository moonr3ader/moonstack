//Finding the sum
const sum = (a, b) => a + b;
console.log("The sum of 5 and 3 is:", sum(5, 3));


//OBJECTS: Practice Question 1
const product = {
    name: "Parker Jotter Standard CT Ball Pen (Black)",
    rating: 4,
    price: 270.00,
    offer: 5 + "%",
};
//Practice Question 2
const profile = {
    username: "Shradha Khapra",
    post: 195,
    followers: 569+"k",
    following: 4,
    bio: "Entrepreneur",
};

console.log(product);
console.log(profile);
//checking individual data type
console.log(typeof profile["post"]);

let a = 33;
//ternary operator
console.log(a > 40? "true" : "false");
a >= 18? console.log("adult") : console.log("not adult");