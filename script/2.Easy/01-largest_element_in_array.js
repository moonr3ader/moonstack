/*
QUESTION:-
Given an array arr. The task is to find the largest element in the given array. 
Examples: 

Input: arr[] = [10, 20, 4]
Output: 20
Explanation: Among 10, 20 and 4, 20 is the largest. 

Input: arr[] = [20, 10, 20, 4, 100]
Output: 100
*/

/*
APPROACH #1:-
-> Iterative Approach - O(n) Time and O(1) Space: The approach to solve this problem is to traverse the whole array and find the maximum among them.
-> Recursive Approach - O(n) Time and O(n) Space: The idea is similar to the iterative approach. Here the traversal of the array is done recursively instead of an iterative loop. 
->  Using Library Methods - O(n) Time and O(1) Space: Most of the languages have a relevant max() type in-built function to find the maximum element, such as  std::max_element in C++. We can use this function to directly find the maximum element.
*/


// CODE:-
function largest1(arr){
    let max = arr[0]; //make the 1st element as largest
    for(let i=1;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
function findMax(arr, i){
    //Last index returns the elment
    if(i === arr.length -1){
        return arr[i];
    }

    //find the maximum from the rest of the array
    let recMax = findMax(arr, i+1);

    //compare with i-th element and return
    return Math.max(recMax, arr[i]);
}
function largest2(arr){
    return findMax(arr,0);
}

function largest3(arr){
    return Math.max(...arr);
}

const arr = [121, 2148, 542, 7231, 1429];
const arr2 = [10, 324, 45, 90, 9808];
console.log(`The answer for function1: ${largest1(arr)}, function2: ${largest2(arr2)}, and function3: ${largest3(arr)}`);