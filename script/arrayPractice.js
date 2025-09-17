//Lesson: Arrays
//Initializing array
let arr = [22,44,63,66,3];
console.log(`The elements in the array are: ${arr}`); //will print all the elements in array
console.log(`The total element in the array is: ${arr.length}`); //.length is a property of an array, it will return the length of array (how many elements are in the array)


//Q: Print the average of marks
let mark = [85,97,44,37,76,60];
let avg=0, sum=0;
for (let val of mark){
    sum += val;
}
avg = sum/mark.length;
console.log(avg); //66.5

//Q: Given array with prices of 5 items > [250,645,300,900,50] and all item have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//using for loop
let price = [250,645,300,900,50];
let i=0;
for(let i=0;i<price.length;i++){
    let offer = price[i]/10;
    price[i] -=offer;
}
console.log(price);

//using for-of loop, reset the variable values back to ori
price = [250,645,300,900,50];
i=0;
for(let val of price){
    console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    price[i]= price[i] - offer;
    console.log(`offers of price at index ${i} = ${price[i]}`);
    i++;
}


/*
---- Arrays methods ----
push(): add to end

pop(): delete from end & return

toString(): convert array to string

*/

console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array = [1, 3, 2];

console.log(Math.max(...array));
// Expected output: 3