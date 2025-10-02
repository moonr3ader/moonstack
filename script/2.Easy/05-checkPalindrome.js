// PALINDROME NUMBER

function isPalindrome1(n){
    let reverse = 0;
    let temp = n;
    while(temp > 0){
        reverse = reverse * 10 + temp % 10;
        temp = Math.floor(temp/10);
    }
    return (n === reverse);
}

function isPalindrome2(n){
    
    let temp = Math.abs(n).toString();
    let len = temp.length;

    for(let i = 0; i < len / 2; i++){
        if(temp[i] !== temp[len - i - 1])
            return false;
    }
    return true;
}

let n = [151, 132, 555, 141, 12];
for(let val of n){
    console.log(`Is ${val} a palindrome? ${isPalindrome1(val)}`);
    console.log(`Is ${val} a palindrome using string function? ${isPalindrome2(val)}`);
}