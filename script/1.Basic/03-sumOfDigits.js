/*

*/


function sumOfDigits(n){
    //changing it string and iterate thru the string and change to int when summing
    let s = n.toString(); //changing the n to string
    let sum= 0; //used to count the total amount

    for(let val of s){ //iterate through each string
        sum += parseInt(val); //passes the string and returns the integer
    }

    return sum; // return the total value
}

let n = 513; //should be: 5+1+3 = 9
console.log(sumOfDigits(n));