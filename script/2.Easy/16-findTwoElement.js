function findTwoElement(arr) {
    let n = arr.length;
    let xorVal = 0;  

    // Get the xor of all array elements
    // And numbers from 1 to n
    for (let i = 0; i < n; i++) {
        xorVal ^= arr[i];
        xorVal ^= (i + 1);  // 1 to n numbers
    }

    // Get the rightmost set bit in xorVal
    let setBitIndex = xorVal & ~(xorVal - 1);
    
    let x = 0, y = 0;

    // Now divide elements into two sets 
    // by comparing rightmost set bit
    for (let i = 0; i < n; i++) {
      
        // Decide whether arr[i] is in first set 
        // or second
        if (arr[i] & setBitIndex) { 
            x ^= arr[i]; 
        }  
        else { 
            y ^= arr[i]; 
        } 
      
        // Decide whether (i+1) is in first set 
        // or second
        if ((i + 1) & setBitIndex) { 
            x ^= (i + 1); 
        }
        else { 
            y ^= (i + 1); 
        }
    }

    let xCnt = arr.filter(num => num === x).length;
    
    let missing = xCnt === 0 ? x : y;
    let repeating = xCnt === 0 ? y : x;

    return [repeating, missing];
}

// Driver Code
let arr = [3, 1, 3];
let ans = findTwoElement(arr);
console.log(ans[0], ans[1]);
