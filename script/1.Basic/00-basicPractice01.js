// CHECK IF ARRAY IS SORTED

function checkSorted(arr){
    if (arr.length === 0) return -1;
    
    let temp = [...arr].sort((a, b) => a - b);
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== temp[i]){
            return -1;
        }
    }

    return 0;
}

let arr = [3, 2, 1, 4];
let sortedArr = [1, 2, 3, 4];

if(checkSorted(arr) === true){
    console.log(`The array ${arr} is sorted.`)
} else {
    console.log(`The array ${arr} is NOT sorted.`)
}