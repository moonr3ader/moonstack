function minSumDiff(arr){
    let n = arr.length;
    let sum = 0;

    for(let i = 0; i < n; i++){
        let diff = Math.abs(arr[i] - arr[(i +1) % n]);
        sum += diff;
    }
    return sum;
}

// FROM GFG & CORRECT ANSWER
function minSumDiff2(arr){
    let n = arr.length;
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        let minDiff = Number.MAX_VALUE;
        
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[j]));
            }
        }
        
        // Add minimum difference to sum
        sum += minDiff;
    }
    
    return sum;
}

let arr = [4, 1, 5];
console.log(minSumDiff(arr));
console.log(minSumDiff2(arr));