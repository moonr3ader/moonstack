function reverseNum1(n){
    let revN = 0;
    let n2 = Math.abs(n);

    if(n === 0) return;

    while(n !== 0){
        revN = revN * 10 + n % 10;
        n2 = Math.floor(n2 / 10);
    }
    return revN;
}

// USING RECURSION
function reverseNum2(n){
    //code here

}

let n = [151, 132, 555, 141, 12];
for(let val of n){
    console.log(`The reverse of ${val} is ${reverseNum1(val)}`);
}