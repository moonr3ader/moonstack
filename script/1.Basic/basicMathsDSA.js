function isPrime(n){
    
    for(let i=2;(i*i)<n;i++){
        if(n % i == 0){
            return "non-prime";
        }
    }
    return "prime";
}

function isPrimeRange(n, N){

    let isprime;

    for(let n=2; n < N; n++){
        isprime = true;
        for(let i=2;i*i <= N; i++){
            if(n%i == 0){
                isprime = false;
                break;
            }
        }
    }
    return isprime;
}

let nArr = [7,16,9,13,17,21];
for(let val of nArr){
    console.log(`${val} is a ${isPrime(val)}`);
}
// but 9 is showing prime (?)

let n = 9, N = 40;
console.log(isPrimeRange(n, N));