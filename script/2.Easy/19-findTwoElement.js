function findTwoElement(arr) {
    let n = arr.length;

    // frequency array to count occurrences
    let freq = new Array(n + 1).fill(0);
    let repeating = -1, missing = -1;

    // count frequency of each element
    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    // identify missing and repeating numbers
    for (let i = 1; i <= n; i++) {
        if (freq[i] === 0) missing = i;
        else if (freq[i] === 2) repeating = i;
    }

    return [repeating, missing];
}

// Driver Code
let arr = [3, 1, 3];
let ans = findTwoElement(arr);
console.log(ans[0], ans[1]);
