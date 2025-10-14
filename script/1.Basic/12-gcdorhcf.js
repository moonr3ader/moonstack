function gcd1(a, b){
    let result = Math.min(a, b);

    while(result > 0){
        if(a % result === 0 && b % result === 0){
            break;
        }
        result--;
    }

    return result;
}

let a = 20;
let b = 28;
console.log(gcd1(a,b));