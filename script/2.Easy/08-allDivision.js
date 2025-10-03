// PRINT ALL THE DIVISORS OF N

function allDivision(n){
    let arr = [];
    for(let i = 1;i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(n / i === i){
                arr.push(i);
            } else{
                arr.push(i);
                arr.push(n / i);
            }
        }
    }
    return arr;
}

let n = [10, 15, 21, 3];
for(let val of n){
    console.log(`All numbers that can divide ${val} are ${allDivision(val)}`);
}