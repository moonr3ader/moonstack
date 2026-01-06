/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    reverseArray(arr) {
        // // approach - naive: using temp array, O(n) time and O(n) space
        // let n  =arr.length;
        // let temp = new Array(n);
        // for(let i = 0; i<n; i++){
        //     temp[i] = arr[n-i-1];
        // }
        // for(let i=0; i<n; i++){
        //     arr[i] = temp[i];
        // }
        // return arr;
        
        // // approach - two pointer, O(n) time and O(1) space
        // let n = arr.length;
        // let first = 0, last = n - 1;
        // // why not for loop?
        // while(first < last){
        //     [arr[first], arr[last]] = [arr[last], arr[first]];
        //     first++;
        //     last--;
        // }
        // return arr;
        
        // approach - one pointer, O(n) time and O(1) space
        let n = arr.length;
        for(let i=0; i<n/2; i++){
            let temp = arr[i];
            arr[i] = arr[n-i-1];
            arr[n-i-1] = temp;
        }
        return arr;
        
        // // approach - inbuilt method
        // return arr.reverse();
        
    }
}
