// PALINDROME NUMBER

function isPalindrome(n){
    let reverse = 0;
    while(n > 0){
        reverse = reverse * 10 + n % 10;
        n = Math.floor(n/10);
    }
    if(n === reverse) return true;
    else return false;
}

let n = [151, 132, 555, 141, 12];
for(let val of n){
    
}

console.log(isPalindrome(n));
console.log(isPalindrome(n2));