// Using Kadane's Algorithm - O(n) Time and O(1) Space

// HOW TO GENERATE ALL SUBARRAYS?

let getSubArr = (arr) => {
    // Empty array to store one subarray
    let arr1 = [];
    for(let i=0;i<arr.length; i++){
        // Empty array, to store one subarray
        let subArr = [];
        for(let j=i; j<arr.length; j++){
            // to get elements to the right of selected in the element till j
            subArr.push(arr.slice(i,j+1));
        }
        // storing individual subarrays into main array
        arr1.push(subArr);
    }
    return arr1;
}

let arr = [1,2,3,4];
let arr1 = getSubArr(arr);
console.log(arr1);

function maxSubarraySum(arr2) {
    
    // Stores the result (maximum sum found so far)    
    let res = arr2[0];
    
    // Maximum sum of subarray ending at current position
    let maxEnding = arr2[0];

    for (let i = 1; i < arr2.length; i++) {
        
        // Either extend the previous subarray or start 
        // new from current element
        maxEnding = Math.max(maxEnding + arr2[i], arr2[i]);
        
        // Update result if the new subarray sum is larger
        res = Math.max(res, maxEnding);
    }
    return res;
}

// Driver Code
const arr2 = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarraySum(arr2));