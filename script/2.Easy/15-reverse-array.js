function reverseArray1(arr) {
    let n = arr.length;
    
    // Temporary array to store elements 
    // in reversed order
    let temp = new Array(n);
  
    // Copy elements from original array
    // to temp in reverse order
    for (let i = 0; i < n; i++)
        temp[i] = arr[n - i - 1];
  
    // Copy elements back to original array
    for (let i = 0; i < n; i++){
        arr[i] = temp[i];
    }

    return arr.join(" ");
}

function reverseArray2(arr) {    
    // Initialize left to the beginning 
    // and right to the end
    let left = 0, right = arr.length - 1;
  
    // Iterate till left is less than right
    while (left < right) {
        
        // Swap the elements at left 
        // and right position
        [arr[left], arr[right]] = [arr[right], arr[left]];
      
        // Increment the left pointer
        left++;
      
        // Decrement the right pointer
        right--;
    }
    return arr.join(" ");
}

function reverseArray3(arr) {
    let n = arr.length;
    
    // Iterate over the first half 
    // and for every index i, swap 
    // arr[i] with arr[n - i - 1]
    for (let i = 0; i < n / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }

    return arr.join(" ");
}

// function to reverse an array
function reverseArray(arr) {
    return arr.reverse();
}

// Driver Code 
const arr = [1, 4, 3, 2, 6, 5];
console.log(reverseArray1(arr));
console.log(reverseArray2(arr));
console.log(reverseArray3(arr));
console.log(reverseArray4(arr));
