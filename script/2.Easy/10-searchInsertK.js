/*
Search insert position of K in a sorted array

Given a sorted array arr[] (0-index based) of distinct integers and an integer k, find the index of k
if it is present in the arr[]. If not, return the index where k should be inserted to maintain the sorted
order.

Examples:
-----------
Input: arr[] = [1, 3, 5, 6], k = 5
Output: 2
Explanation: Since 5 is found at index 2 as arr[2] = 5, the output is 2.

Input: arr[] = [1, 3, 5, 6], k = 2
Output: 1
Explanation: The element 2 is not present in the array, but inserting it at index 1 will maintain the sorted
order.

Input: arr[] = [2, 6, 7, 10, 14], k = 15
Output: 5
Explanation: The element 15 is not present in the array, but inserting it after index 4 will maintain the
sorted order.
*/

// USING SIMPLE TRAVERSE AND CHECKING
function searchInsertK1(arr, k){
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= k){
            return i;
        }
    }
    return arr.length;
}
function searchInsertK2(arr, k){
    // code here
}

let arr = [2, 6, 7, 10, 14], k = 8;
console.log(searchInsertK1(arr, k));