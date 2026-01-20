// utility function to swap two elements
function swap(arr, x, y) {
    let temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}

function sortInWave(arr) {

    // swap adjacent elements
    for (let i = 0; i < arr.length - 1; i += 2) {
        swap(arr, i, i + 1);
    }
}

// Driver code
let arr = [1, 2, 3, 4, 5];
sortInWave(arr);
console.log(arr.join(" "));