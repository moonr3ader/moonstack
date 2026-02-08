function mean(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    // Floor of the mean
    return Math.floor(sum / arr.length);
}

function median(arr) {
    let n = arr.length;
    
    // sorting function 
    arr.sort((a, b) => a - b);
    let result = 0;
    
    // if there are two middle element 
    if (n % 2 === 0) {
        result = Math.floor((arr[n / 2] + arr[(n / 2) - 1]) / 2);
    } 
    
    // if there are only one middle element 
    else {
        result = arr[Math.floor(n / 2)];
    }

    return result;
}

// Driver Code
let arr = [2, 3, 4, 8];

let meanValue = mean(arr);
let medianValue = median(arr);

console.log(meanValue + " " + medianValue);
