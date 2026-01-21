// [Naive Approach] Using Nested Loops - O(n ^ 2) Time and O(1) Space

function maxSum1(arr) {
    let n = arr.length;

    // Initialize result
    let res = -Infinity;

    // Consider rotation beginning with i
    // for all possible values of i.
    for (let i = 0; i < n; i++) {

        // Initialize sum of current rotation
        let sum = 0;

        // Compute sum of all values
        for (let j = 0; j < n; j++) {

            // compute the rotated index
            let index = (i + j) % n;
            sum += j * arr[index];
        }

        // Update the maximum value
        res = Math.max(res, sum);
    }

    return res;
}

// [Expected Approach] Using Mathematics - O(n) Time and O(1) Space
function maxSum2(arr) {
    let n = arr.length;

    // Compute sum of all array elements
    let curSum = 0;
    for (let i = 0; i < n; i++)
        curSum += arr[i];

    // Compute sum of i*arr[i] for initial
    // configuration.
    let currVal = 0;
    for (let i = 0; i < n; i++)
        currVal += i * arr[i];

    // Initialize result
    let res = currVal;

    // Compute values for other iterations
    for (let i = 1; i < n; i++) {

        // Compute next value using previous
        let nextVal = currVal - (curSum - arr[i - 1]) + arr[i - 1] * (n - 1);

        // Update current value
        currVal = nextVal;

        // Update result if required
        res = Math.max(res, nextVal);
    }

    return res;
}

// Driver Code
let arr = [8, 3, 1, 2];
console.log(maxSum1(arr));
console.log(maxSum2(arr));