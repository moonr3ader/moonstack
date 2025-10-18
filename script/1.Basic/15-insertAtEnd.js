function insertAtEnd(arr, val){
    
    arr.push(val);
    
    return arr;
}

let arr = [16,54,86,35];
let val = 48;
console.log(insertAtEnd(arr, val));