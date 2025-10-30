function countDigitOne(n){

    let num = Math.abs(n);
    let count = 0, lastDigit = 0;

    while (num!==0){
        lastDigit = num % 10;
        count+=lastDigit;
        num = Math.floor(num / 10);
    }
    return count;
};

console.log(countDigitOne(13));