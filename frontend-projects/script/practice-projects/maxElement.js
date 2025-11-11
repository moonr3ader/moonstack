function maxElement(arr){
    let max = arr[0];
    for(let i = 1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

function maxElement2(arr){
    arr.sort((a, b) => a -b);
    return arr.at(-1);
}

arr = [2, 8, 1, 5, 9, 85];
console.log(maxElement(arr));
console.log(maxElement2(arr));