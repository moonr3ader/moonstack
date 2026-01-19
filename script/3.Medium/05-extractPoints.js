function extractPoints(arr) {
    const n = arr.length;
    const result = [];
    if (n === 0) return result;

    // Always include the first point
    result.push(arr[0]);
    for (let i = 1; i < n - 1; i++) {

        // check for a peak: strictly greater 
        // than both the last added and the next element
        if (arr[i] > result[result.length - 1]
                                && arr[i] > arr[i + 1]) {
            result.push(arr[i]);
        }

        // check for a valley: strictly smaller 
        // than both the last added and the next element
        else if (result[result.length - 1] > arr[i]
                                && arr[i] < arr[i + 1]) {
            result.push(arr[i]);
        }
    }

    // include the last point if it is 
    // different from the last added point
    if (result[result.length - 1] !== arr[n - 1]) {
        result.push(arr[n - 1]);
    }

    return result;
}

// Driver Code
const arr = [6, 4, 2, -2, 5, 3, 2, 2, -1, -1, 4];
const result = extractPoints(arr);
console.log(...result);