// JavaScript program to find the minimum number
// of jumps to reach the end of the array

function minJumpsRecur(i, arr) {
    
    // Return 0 when last element is reached.
    if (i >= arr.length - 1)
        return 0;

    // Traverse through all the points
    // reachable from arr[i].
    // Recursively, get the minimum number
    // of jumps needed to reach array end from
    // these points.
    let ans = Infinity;
    for (let j = i + 1; j <= i + arr[i]; j++) {
        let val = minJumpsRecur(j, arr);
        if (val != Infinity)
            ans = Math.min(ans, 1 + val);
    }

    return ans;
}

function minJumps(arr) {
    let ans = minJumpsRecur(0, arr);
    
    // If end cannot be reached.
    if (ans == Infinity) 
        return -1;
        
    return ans;
}

let arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
console.log(minJumps(arr));
