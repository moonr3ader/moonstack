

function minMax(arr){
    let sortedArr = [...arr].sort((a,b)=> a-b);
    return [sortedArr[0], sortedArr[sortedArr.length - 1]];
}

function addMinMax(arr){
    let sortedArr = [...arr].sort((a,b)=> a-b);
    return [sortedArr[0] + sortedArr[sortedArr.length - 1]];
}

let arr = [1,5,8,1,-3,9];
console.log(minMax(arr));
console.log(addMinMax(arr));