// sorting technique - brute force
function secondLarge1(arr){
    
    const n = arr.length;
    arr.sort((a,b) => a - b);

    for (let i = n - 2; i >= 0; i--){
        if(arr[i] !== arr[n-1]){
            return arr[i];
        }
    }
    return -1;
}
// two pass search - better approach
function secondLarge2(arr){
    let n = arr.length;

    let largest = -1, second = -1;
    for(let i = 0; i < n; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    for (let i = 0; i < n; i++){
        if(arr[i] > second && arr[i] !== largest){
            second = arr[i];
        }
    }
    return second;
}


// one pass search - optimal/expected approach
function secondLarge3(arr){
    const n = arr.length;
    let largest = -1, second = -1;

    for(let i = 0; i < n; i++){
        if (arr[i] > largest){
            second = largest;
            largest = arr[i];
        }
        
        else if(arr[i] < largest && arr[i] > second){
            second = arr[i];
        }
    }
    return second;
}

const arr = [12, 35, 1, 10, 34, 1];
console.log(secondLarge1(arr));
console.log(secondLarge2(arr));
console.log(secondLarge3(arr));


// -----------------------------------------------------------------------------------------------

// FIND THE SECOND LARGEST ELEMENT

// finding without sorting
function findSecondLargest1(arr){
    if (arr.length === 0) return -1;

    let max = arr[0]; //assuming the first element is the largest
    let max2 = arr[0];

    for(let i=0;i<arr.length; i++){
        // if the consequetive elements are larger than arr[0], then set max to that value
        if(arr[i] > max){
            second = max;
            max = arr[i];
        } else if(arr[i] > max2 && arr[i] < max){
            max2 = arr[i];
        }
    }

    return max2 === -Infinity ? -1 : max2;
}

// finding after sorting
function findSecondLargest2(arr){
    // if (arr.length === 0) return -1;
    
    if(arr.length < 2) return -1;
    let temp = arr.sort((a, b) => a - b);
    // return temp[temp.length - 2];
    for(let i = temp.length - 2; i >= 0; i--){
        if(temp[i] !== temp[temp.length - 1]){
            return temp[i];
        }
    }

    return -1; // if all elements are equal

}

const arr = [5,2,9,1]; // → 5
console.log(`The 2nd Largest in ${arr} is ${findSecondLargest1(arr)}`);
console.log(`The 2nd Largest in ${arr} is ${findSecondLargest2(arr)}`);