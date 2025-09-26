// User function Template for javascript
//  arr1 number[]
//  arr2 number[]
//  returns boolean
class Solution {
    isIdentical1(a, b) {
        // Naive approach: Sort n then check in loop
        // if all true, then end result is true
        // Time Complexity: O(n*log n), since sorting is used
        // Auxiliary Space: O(1)
        
        a.sort();
        b.sort();
        
        if(a.length !== b.length){
            return false;
        }
        
        for(let i=0;i<a.length;i++){
            if(a[i] !== b[i]){
                return false;
            }
        }
        return true;
    }

    isIdentical2(a, b){
        // Expected Approach

        
    }
}


// DRIVER CODE
const arr1 = [10, 20, 30, 50];
const arr2 = [80, 50, 10, 30];
// driver code
let obj = new Solution();
let ans1 = obj.isIdentical1(arr1, arr2);
console.log(ans1);

let ans2 = obj.isIdentical2(arr1, arr2);
console.log(ans2);