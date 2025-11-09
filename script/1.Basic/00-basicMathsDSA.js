
function isOdd(n){   
    if(((n % 2) === 0) && ((n & 1) === 0))
        return true;
    else
        return false;

    // Using Bitwise are extremely fast and efficient because they operate directly 
    // at the binary level, making them significantly faster than arithmetic or logical
    // operations.    
}
function floorCeil(a, b){
    function floorDiv(a, b){
        let q = Math.trunc(a/b);

        if((a ^ b) < 0 && a % b !== 0){
            q--;
        }
        return q;
    }

    function ceilDiv(a, b){
        let q = Math.trunc(a / b);

        if((a ^ b) > 0 && a % b !== 0){
            q++;
        }
        return q;
    }

    let res = [];

    res.push(floorDiv(a,b));
    res.push(ceilDiv(a,b));

    return res;
}

function floorCeil2(a, b){
    // using in-built math.floor and math.ceil
    let res = [];
    res.push(Math.floor(a/b));
    res.push(Math.ceil(a/b));

    return res;
}

function sumOfNaturals(n){
    if(n == 1) return 1;

    function sumN1(n){
        // NAIVE APPROACH: using loop to sum it up
        // O(n), O(1)
        let sum = 0;
        for(let i =0; i <= n; i++){
            sum+=i;
        }
        return sum;
    }
    function sumN2(n){
        return (n + sumN2(n-1));
    }
    function sumN3(n){
        // EXPECTED APPROACH: USING FORMULA
        // // O(1), O(1)
        return n * (n + 1) / 2;
    }

    let res = [];
    res.push(sumN1(n));
    res.push(sumN2(n));
    res.push(sumN3(n));
    
    return res;
}

console.log(isOdd(15));
console.log(floorCeil(- 7, 2));
console.log(floorCeil2(- 7, 2));
console.log(sumOfNaturals(16));