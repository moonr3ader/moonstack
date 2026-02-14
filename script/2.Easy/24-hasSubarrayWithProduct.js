function hasSubarrayWithProduct(arr, k) {
    const n = arr.length;
    // Iterate over all possible starting points of subarrays
    for (let start = 0; start < n; ++start) {
        let product = 1; // Initialize the product for the current subarray
        // Iterate over all possible end points for subarrays starting at 'start'
        for (let end = start; end < n; ++end) {
            product *= arr[end]; // Update the product for the current subarray
            // Check if the current subarray product is equal to k
            if (product === k) {
                return true; // Return true if such subarray is found
            }
        }
    }
    return false; // Return false if no subarray with product k is found
}

// Input array
const arr = [1, 2, 3, 4];
// Target product value
const product = 6;

// Check if there is a subarray with the given product and print the result
if (hasSubarrayWithProduct(arr, product)) {
    console.log("YES");
} else {
    console.log("NO");
}
