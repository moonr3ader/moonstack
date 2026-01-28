// Merge Two Sorted Arrays Without Extra Space

// [Naive Approach] Using Insert of Insertion Sort
function mergeArrays1(a, b) {    
    // Traverse b[] starting from the last element
    for (let i = b.length - 1; i >= 0; i--) {
        // If b[i] is smaller than the largest element of a[]
        if (a[a.length - 1] > b[i]) {
            // Place b[i] in the correct position in a[], 
            // and move last element of a[] to b[]
            let last = a[a.length - 1];
            let j = a.length - 2;
            while (j >= 0 && a[j] > b[i]) {
                a[j + 1] = a[j];
                j--;
            }
            a[j + 1] = b[i];
            b[i] = last;
        }
    }
}

// [Better Approach 1] Using n-th smallest element
// Find m-th smallest element
// Do a binary search in a[] to find the right index idx
// in a[] such that all combined elements in a[idx..m-1]
// and b[m-idx...n-1] are greater than or equal to all
// the remaining elements (a[0..idx-1] and b[m-idx-1..n-1])
// in both the arrays.
function kthSmallest(a, b, k) {
    const n = a.length, m = b.length;
    let lo = 0, hi = n, idx = 0;

    
    while (lo <= hi) {
        const mid1 = Math.floor((lo + hi) / 2);
        const mid2 = k - mid1;

        // We don't have mid2 elements in b[], so pick more
        // elements from a[]
        if (mid2 > m) {
            lo = mid1 + 1;
            continue;
        }

        // Find elements to the left and right of partition in a[]
        const l1 = (mid1 === 0 ? Number.NEGATIVE_INFINITY : a[mid1 - 1]);
        const r1 = (mid1 === n ? Number.POSITIVE_INFINITY : a[mid1]);

        // Find elements to the left and right of partition in b[]
        const l2 = (mid2 === 0 ? Number.NEGATIVE_INFINITY : b[mid2 - 1]);
        const r2 = (mid2 === m ? Number.POSITIVE_INFINITY : b[mid2]);

        // If it is a valid partition
        if (l1 <= r2 && l2 <= r1) {
            idx = mid1;
            break;
        }

        // Check if we need to take lesser elements from a[]
        if (l1 > r2) {
            hi = mid1 - 1;
        }

        // Check if we need to take more elements from a[]
        else {
            lo = mid1 + 1;
        }
    }
    return idx;
}

function mergeArrays2(a, b) {
    const n = a.length;
    const m = b.length;
    const idx = kthSmallest(a, b, n);

    // Move all smaller elements in a[]
    for (let i = idx; i < n; i++) {
        [a[i], b[i - idx]] = [b[i - idx], a[i]];
    }

    // Sort both a[] and b[]
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
}

// [Better Approach 2] By Swap and Sort
function mergeArrays3(a, b) {
    let i = a.length - 1;
    let j = 0;

    // Swap smaller elements from b[] with 
    // larger elements from a[]
    while (i >= 0 && j < b.length) {
        if (a[i] < b[j]) {
            i--;
        } else {
            [a[i], b[j]] = [b[j], a[i]];
            i--;
            j++;
        }
    }
    // Sort both arrays
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
}

// [Better Approach 2] Using Gap method
function mergeArrays4(a, b) {
    let n = a.length;
    let m = b.length;
    let gap = Math.floor((n + m + 1) / 2);

    while (gap > 0) {
        let i = 0;
        let j = gap;
      
      while (j < n + m) {
            // If both pointers are in the first array a[]
            if (j < n && a[i] > a[j]) {
                [a[i], a[j]] = [a[j], a[i]];
            }
            // If first pointer is in a[] and 
            // the second pointer is in b[]
            else if (i < n && j >= n && a[i] > b[j - n]) {
                [a[i], b[j - n]] = [b[j - n], a[i]];
            }
            // Both pointers are in the second array b
            else if (i >= n && b[i - n] > b[j - n]) {
                [b[i - n], b[j - n]] = [b[j - n], b[i - n]];
            }
            i++;
            j++;
        }
        // After operating for gap of 1 break the loop
        if (gap === 1) break;
        // Calculate the next gap
        gap = Math.floor((gap + 1) / 2);
    }
}

// Driver Code
const a = [1, 5, 9, 10, 15, 20];
const b = [2, 3, 8, 13];
mergeArrays(a, b);

console.log(a.join(" "));
console.log(b.join(" "));
