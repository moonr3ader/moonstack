function insertAtEnd(arr, val){
    
    arr.push(val);
    
    return arr;
}

let arr = [16,54,86,35];
let val = 48;
console.log(insertAtEnd(arr, val));


function linearSearchArr(arr, val){
    for(let i=0;i<arr.length;i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;
}

arr = [15, 15, 64, 86, 10, 13, 1, 6, 48, 9, 5];
console.log(`The value ${val} is at index ${linearSearchArr(arr,val)} in the array.`);