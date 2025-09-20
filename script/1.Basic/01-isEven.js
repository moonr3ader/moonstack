/* Finding if a given number is odd or even
Naive Approach: Using Mod (%) to check
Expected Approach: Using Bitwise AND to check, every even number in binary ends with 0 and every odd number in binary ends with 1, using that logic we check if a number is even or odd.

What's the logic behind this?
How does this help in DSA?

*/

function isEven(n){
    return ((n & 1) === 0);
}

let n = prompt("Enter a number: ");
alert(isEven(n));