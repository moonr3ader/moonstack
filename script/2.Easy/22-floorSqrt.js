function floorSqrt(n) {
  
    // initial search space
    let lo = 1, hi = n;
    let res = 1;
    
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        
        // if square of mid is less than or equal to n 
        // update the result and search in upper half
        if (mid * mid <= n) {
            res = mid;
            lo = mid + 1;
        }
        
        // if square of mid exceeds n, 
        // search in the lower half
        else {
            hi = mid - 1;
        }
    }
    
    return res;
}

// Driver Code
let n = 11;
console.log(floorSqrt(n));
