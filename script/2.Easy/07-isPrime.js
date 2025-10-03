function isPrime(n){
    if(n <= 1)
        return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0)
            return false;
    }
    return true;
}

let n = [1, 6, 7, 9, 11];
for(let val of n){
    console.log(`Is ${val} a prime? ${isPrime(val)}`);
}