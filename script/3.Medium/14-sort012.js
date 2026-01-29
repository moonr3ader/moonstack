function sort012(arr) {
    let n = arr.length;
    
    // initialize three pointers:
    // lo: boundary for 0s
    // mid: current element being checked
    // hi: boundary for 2s
    let lo = 0;
    let hi = n - 1;
    let mid = 0;
    
    // process elements until mid crosses hi
    while (mid <= hi) {
        if (arr[mid] === 0) {
            
            // current is 0: swap with lo and move both 
            // pointers forward
            [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
            lo++;
            mid++;
        }
        else if (arr[mid] === 1) {
            // current is 1: it's already in correct position
            mid++;
        }
        else {
            // current is 2: swap with hi and move hi backward
            // do not increment mid, as swapped value needs
            // to be re-checked
            [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
            hi--;
        }
    }
}

// Driver Code
let arr = [0, 1, 2, 0, 1, 2];
let n = arr.length;

// sort the array in-place
sort012(arr);

for (let i = 0; i < n; i++)
    process.stdout.write(arr[i] + " ");
