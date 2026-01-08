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

// USE BINARY SEARCHING
function searchInsertK2(arr, k){
    
    let size = arr.length;
    let start = 0;
    let end = size-1;
    let mid = Math.floor((start + end) / 2);

    return mid;
}

let arr = [2, 6, 7, 10, 14], k = 10;
let arr2 = [2, 6, 10, 14];
console.log(searchInsertK1(arr, k));

function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            high = mid - 1;

        // Else the element can only be present
        // in right subarray
        else
            low = mid + 1;
    }

    // We reach here when element is not
    // present in array
    return -1;
}

// Driver Code
arr = new Array(2, 3, 4, 10, 40);
x = 10;
result = binarySearch(arr, x);
if (result == -1)
    console.log("Element is not present in array")
else
    console.log("Element is present at index " + result);






























// sorting an array using toSorted() method
    // let sortedArr = [...arr].sort((a, b) => a - b);
    // let sortedArr = arr.toSorted((a, b) => a - b);
// console.log(sortedArr);
