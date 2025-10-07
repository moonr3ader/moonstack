function calAverage(marks){
    let avg = 0, sum = 0;

    for(let val of marks){
        sum += marks[val];
    }
    avg = sum/marks.length;
    return avg;
}
function updatePrice(arr){
    let temp = 0;
    
    // we need to use any loop that can track the index rather than the value
    // for(let i = 0; i < arr.length; i++){
    //     temp = arr[i] * 0.10;
    //     arr[i] -= temp;
    // }
    let i = 0;
    for(let val of arr){
        temp = val / 10;
        arr[i] = arr[i] - temp;
        i++; // to track the index for each value
    }

    return arr; 
}

const marks = [85, 97, 44, 37, 76, 60];
console.log(calAverage(marks));
console.log("-------------------------");

const price = [250, 645, 300, 900, 50];
console.log(updatePrice(price));

console.log("-------------------------");
let nums = [1, 2, 3, 4];
let nums2 = [6, 8, 9];

console.log(`Array ori: ${nums}`);

nums.push(5);                           // add end
console.log(`Array after push: ${nums}`);

nums.unshift(0);                        // add start
console.log(`Array after unshift: ${nums}`);

nums.pop();                             // remove end
console.log(`Array after pop: ${nums}`);

nums.shift();                           // remove start
console.log(`Array after shift: ${nums}`);

let allnums = nums.concat(nums2);       // concat an array
console.log(`Array after concat: ${allnums}`);

const strNums = allnums.toString();     // converts array to string
console.log(`Array after toString: ${strNums}`);
 
let arr = [1, 2, 3, 4, 5, 6];
arr.splice(2, 2, 101, 102);
console.log(`Array after splice: ${arr}`);  // splice
console.log(`Array after slice: ${arr.slice(0, 2)}`);