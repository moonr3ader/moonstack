// ==========================================
//  Multiple Solutions Inside One Class
// ==========================================

class Solution {

    // --------------------------------------
    // 1. Brute Force (O(n))
    // --------------------------------------
    bruteForce(arr, key) {
        let less = 0, more = 0;
        for (let x of arr) {
            if (x <= key) less++;
            if (x >= key) more++;
        }
        return [less, more];
    }

    // --------------------------------------
    // 2. Sorting + Linear Scan (O(n log n))
    // --------------------------------------
    sortingApproach(arr, key) {
        let sorted = [...arr].sort((a, b) => a - b);
        let less = 0, more = 0;

        for (let x of sorted) {
            if (x <= key) less++;
            if (x >= key) more++;
        }
        return [less, more];
    }

    // --------------------------------------
    // 3. Binary Search Approach (O(log n))
    //    Expected for DSA / GFG
    // --------------------------------------
    binarySearch(arr, key) {
        let sorted = [...arr].sort((a, b) => a - b);

        function upperBound(arr, key) {
            let l = 0, r = arr.length;
            while (l < r) {
                let mid = Math.floor((l + r) / 2);
                if (arr[mid] <= key) l = mid + 1;
                else r = mid;
            }
            return l;   // # of elements <= key
        }

        function lowerBound(arr, key) {
            let l = 0, r = arr.length;
            while (l < r) {
                let mid = Math.floor((l + r) / 2);
                if (arr[mid] < key) l = mid + 1;
                else r = mid;
            }
            return l;   // first index where arr[i] >= key
        }

        const less = upperBound(sorted, key);
        const more = sorted.length - lowerBound(sorted, key);

        return [less, more];
    }

    // --------------------------------------
    // 4. One-Pass Expected Solution (O(n))
    //    Works when array is SORTED
    // --------------------------------------
    onePass(sortedArr, key) {
        let n = sortedArr.length;
        let less = 0, more = 0;

        let left = 0;
        let right = n - 1;

        // Move left pointer to count <= key
        while (left < n && sortedArr[left] <= key) {
            left++;
        }
        less = left;

        // Move right pointer to count >= key
        while (right >= 0 && sortedArr[right] >= key) {
            right--;
        }
        more = n - (right + 1);

        return [less, more];
    }
}



// ==========================================
//  Test Runner
// ==========================================
function runTests() {
    const sol = new Solution();

    const tests = [
        { arr: [1, 2, 4, 4, 4, 7], key: 4 },
        { arr: [10, 1, 2, 8, 4, 5], key: 9 },
        { arr: [1, 1, 1, 1], key: 1 },
        { arr: [2, 3, 5, 7, 11, 13], key: 6 },
        { arr: [], key: 5 },
        { arr: [0, 0, 0], key: -1 },
        { arr: [0, 0, 0], key: 0 },
        { arr: [0, 0, 0], key: 1 },
    ];

    tests.forEach((test, i) => {
        console.log(`\n========================`);
        console.log(`Test #${i + 1}`);
        console.log(`Array: [${test.arr}]`);
        console.log(`Key: ${test.key}`);

        const sorted = [...test.arr].sort((a, b) => a - b);

        console.log(`Brute Force:         ${sol.bruteForce(test.arr, test.key)}`);
        console.log(`Sorting Approach:    ${sol.sortingApproach(test.arr, test.key)}`);
        console.log(`Binary Search:       ${sol.binarySearch(test.arr, test.key)}`);
        console.log(`One-Pass (sorted):   ${sol.onePass(sorted, test.key)}`);
    });
}

runTests();
