function kthMissing(arr, k) {
    let lo = 0, hi = arr.length - 1;
    let res = arr.length + k;

    // binary Search for index where 
    // arr[i] > (i + k)
    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (arr[mid] > mid + k) {
            res = mid + k;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return res;
}

// Driver Code
const arr = [2, 3, 4, 7, 11];
const k = 5;
console.log(kthMissing(arr, k));
