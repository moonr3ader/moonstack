function rotateArr2(arr, d){
    let n = arr.length;
    d %= n;
    let temp = new Array(n);
    for(let i=0;i<n-d;i++){
        temp[i] = arr[d+i];
    }
    for(let i=0; i<d;i++){
        temp[n-d+i]  =arr[i];
    }
    return temp;
}

function rotateArr3(arr, d) {
  let n = arr.length;

  // Repeat the rotation d times
  for (let i = 0; i < d; i++) {
    // Left rotate the array by one position
    let first = arr[0];
    for (let j = 0; j < n - 1; j++) {
        arr[j] = arr[j + 1];
    //   console.log(`When J is: ${j}: arr[j] = arr[j+1] ${arr[j] = arr[j + 1]}`);
    //   console.log(arr);
    }
    arr[n - 1] = first;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6];
let d = 2;
console.log("before rotation: " + arr);
console.log("after rotation by d=" + d);
console.log(rotateArr2(arr, d));
console.log(rotateArr3(arr, d));