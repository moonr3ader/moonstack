/*
Sum of Digits of a Number
Given a number n, find the sum of its digits.
Examples : 
    Input: n = 687
    Output: 21
    Explanation: The sum of its digits are: 6 + 8 + 7 = 21
Examples : 
    Input: n = 12
    Output: 3
    Explanation: The sum of its digits are: 1 + 2 = 3
*/

/*
[Approach 3] String Conversion
- Convert the number to a string and iterate through each character (digit). 
- For each character, subtract the ASCII value of '0' to get the actual digit, then add it to the sum.
Note: This method is especially useful when the number is too large to fit in standard integer types.
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