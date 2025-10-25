/*
What is linear searching: 
Searching something from left to right in a data structure (like arrays, objects, and strings).
*/

// ------------------------------- BASIC ARRAY LINEAR SEARCH ------------------------------- 
// search the array to see if val exist or not
function searchArrays(arr, val){
    if (arr.length === 0) return -1;

    for(let i=0;i<arr.length;i++){
        if(arr[i] === val){
            return i;
        }
    }
    return -1;

    // TIME COMPLEXITY: O(n)
    // SPACE COMPLEXITY: O(1)
}

function searchArrays2(arr, val){
    if(arr.lenght === 0) return -1;

    for(let [i, item] of arr.entries()){
        if(Object.is(arr[i], val)) return i;
    }
}

let arr = [15, 15, 64, 86, 10, 13, 1, 6, 48, 9, 5];
let val = 6;

const idx = searchArrays(arr,val);

if (idx !== -1) {
  console.log(`"${val}" found at index ${idx}.`);
} else {
  console.log(`"${val}" not found in the array.`);
}

// ------------------------------- BASIC STRING LINEAR SEARCH ------------------------------- 
function searchStr(str, ch){
    
    if(str.length === 0) return -1;
    
    for(let i=0;i<str.length;i++){
        if(str[i] === ch){
            return i;
        }
    }
    return -1;
}
let str = "GeeksForGeeks";
let ch = 'f';
const index = searchStr(str, ch);

if (index !== -1) {
  console.log(`"${ch}" found at index ${index}.`);
} else {
  console.log(`"${ch}" not found in the array.`);
}