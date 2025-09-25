// User function Template for javascript
class Solution {
    customSort(arr) {
        
        //sort the array first
        //arr.sort((a, b) => a - b);              // ascending sort
        let mid = Math.ceil(arr.length / 2);    //setting the midpoint
        
        // setting first n second half
        let firstHalf = arr.slice(0, mid).sort((a,b) => a- b);  // slice(start, end)
        let secondHalf = arr.slice(mid).sort((a,b) => b - a);   // slice(start) + sort desc
        
        // return single array (driver will handle .join(' '))
        return [...firstHalf, ...secondHalf];
    }
}

const arr = [10, 20, 30, 50];
// driver code
let obj = new Solution();
let ans = obj.customSort(arr);
console.log(ans.join(" "));