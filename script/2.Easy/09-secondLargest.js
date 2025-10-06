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