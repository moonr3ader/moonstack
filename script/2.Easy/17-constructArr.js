// Construct an array from its pair-sum array

function constructArr(arr) {
    
    // only one pair-sum 
    // the original array has exactly two numbers
    if (arr.length === 1) {
        return [1, arr[0] - 1];
    }

    // size of the original array
    const n = Math.floor((1 + Math.sqrt(1 + 8 * arr.length)) / 2);

    // reconstruct the original array
    const res = new Array(n);
    res[0] = (arr[0] + arr[1] - arr[n - 1]) / 2;
    for (let i = 1; i < n; i++) {
        res[i] = arr[i - 1] - res[0];
    }

    return res;
}

// Driver code
const arr = [4, 5, 3];
const res = constructArr(arr);
console.log(res.join(' '));
