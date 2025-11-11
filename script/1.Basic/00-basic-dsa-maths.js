function isOdd(n){   
    if(((n % 2) === 0) && ((n & 1) === 0))
        return true;
    else
        return false;

    // Using Bitwise are extremely fast and efficient because they operate directly 
    // at the binary level, making them significantly faster than arithmetic or logical
    // operations.    
}

function floorCeilDiv(a,b){
    // APPROACH 1: STANDARD DIVISION WITH SIGN CORRECTION
    function floorCeil1(a, b){
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
        // APPROACH 2: USING IN-BUILT FUNCTIONS
        let res = [];
        res.push(Math.floor(a/b));
        res.push(Math.ceil(a/b));

        return res;
    }

    let ans = [];
    ans.push(floorCeil1(a, b));
    ans.push(floorCeil2(a, b));
    return ans;
}

function sumOfNaturals(n){
    if(n == 1) return [1,1,1]; // Return array form for consistency

    function sumN1(n){
        // APPROACH 1 NAIVE: using loop to sum it up
        // O(n), O(1)
        let sum = 0;
        for(let i =0; i <= n; i++){
            sum+=i;
        }
        return sum;
    }
    function sumN2(n){
        // APPROACH 2 OPTIMAL: RECURSION
        // need the base case here, if not it will be an infinite recursion
        // When sumN2(1) is reached, it keeps calling sumN2(0), then sumN2(-1), sumN2(-2)
        // That never stops → leading to a "Maximum call stack size exceeded" error.
        if(n == 1) return 1;
        return (n + sumN2(n-1));
    }
    function sumN3(n){
        // APPROACH 3 EXPECTED: USING FORMULA
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
console.log(floorCeilDiv(- 7, 2));
console.log(sumOfNaturals(16));