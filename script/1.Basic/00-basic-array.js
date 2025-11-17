// INITIALIZING AN ARRAY
let a = new Array(10,20,30);
let b = [10, 20, 30];

// PRINT ALL ELEMENT IN AN ARRAY
let arr = [1,2,3,4];
console.log(arr);

// FIND SUM OF ALL ELEMENTS
let sum = 0;
for(let val of arr){
    sum += val;
}
console.log(sum); // 10

// FIND THE MINIMUM AND MAXIMUM ELEMENT IN ARRAY
let arr2 = [3,9,2,5];
let max = arr2[0];
let min = arr2[0];
for(let i=0; i<arr2.length; i++){
    if(arr2[i] > max){
        max = arr2[i];
    }
    if(arr2[i] < min){
        min = arr2[i];
    }
}
console.log(max); // 9
console.log(min); // 2

// COUNT HOW MANY EVEN NUMBERS PRESENT IN ARRAY
let arr3 = [1,2,3,4,6];
let count = 0;
for(let val of arr3){
    if(val % 2 === 0){
        count++;
    }
}
console.log(count); // 3

// REVERSE THE ARRAY MANUALLY
let arr4 = [1,2,3,4,5];
let n = arr4.length;
let temp = new Array(n);

for(let i = 0; i < n; i++){
    temp[i] = arr4[n-i-1];
}
console.log(`THE REVERSE OF ${arr4} ARRAY MANUALLY IS ${temp}`); // → [4,3,2,1], if using a built-in method: console.log(arr4.reverse());

// COPY ONE ARRAY INTO ANOTHER
for(let i = 0; i < n; i++){
    temp[i] = arr4[i];
}
console.log(`THE COPY OF arr4 INTO ANOTHER: ${temp}`); // 1,2,3,4,5

// REPLACE ALL NEGATIVE NUMBERS WITH 0
let arr5 = [1, -5, 3, -8, 0, 10, -2];
console.log(`BEFORE REPLACING ALL NEGATIVES: ${arr5}`)
for(let i = 0; i< arr5.length; i++){
    if(arr5[i] < 0) arr5[i] = 0;
}
console.log(`AFTER REPLACING ALL NEGATIVES: ${arr5}`); // → [1, 0, 3, 0, 0, 10, 0]

// FIND HOW MANY TIMES A SPECIFIC VALUE APPREARS
let target = 1, cnt = 0;
let arr6 = [1,1,6,4,8,1,3];

for(let i = 0; i<arr6.length; i++){
    if(arr6[i] === target){
        cnt++;
    }
}
console.log(cnt); // 3

// MERGE TWO ARRAYS
let newArray = arr.concat(arr6);
console.log(newArray); // → [1,2,3,4,1,1,6,4,8,1,3];


// CHECK IF ARRAY IS SORTED
function checkSorted(arr){
    if (arr.length === 0) return -1;
    
    let temp = [...arr].sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== temp[i]){
            return false;
        }
    }
    return true;
}
arr = [3, 2, 1, 4];
let sortedArr = [1, 2, 3, 4];
if(checkSorted(arr) === true){
    console.log(`The array ${arr} is sorted.`)
} else {
    console.log(`The array ${arr} is NOT sorted.`)
}