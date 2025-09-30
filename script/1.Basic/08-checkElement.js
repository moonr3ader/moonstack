// The data structure = Array (JavaScript’s built-in list).
// The algorithm you used = Linear Search (also called Sequential Search).
// O(n) TIME AND O(1) SPACE

// ---- MY ORIGINAL CODE ----
/*
function checkElements(n){
    let arr = [10, 20, 45, 18, 91];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return console.log(`Input number ${n} is in index number ${i}`);
        } else{
            return console.log(`Input number ${n} is NOT array database.`);
        }
    }
}

ANALYSIS: 
The return is inside the loop for both cases.
- On the very first iteration (i = 0), if arr[0] !== n, your else runs immediately and exits the whole function.
- That means you’re only ever checking the first element, never the rest.
- Example: checkElements(45) → It checks 10 !== 45 → goes to else → returns wrong answer without reaching index 2.

Mixing return with console.log.
- console.log just prints something but returns undefined.
- So console.log(checkElements(15)) ends up printing your message and printing undefined because your function doesn’t return anything useful.

Not separating “logic” from “output”.
- Best practice is to let your function return data (boolean, index, object, etc.) and only console.log outside if you want to display it.
*/

function checkElements(n){
    let arr = [10, 20, 45, 18, 91];

    for (let i = 0; i < arr.length; i++){
        if(arr[i] === n)
            return i;
    }
    return -1; // not found
}

// Inline with a Ternary Operator
// Here we also use .forEach to iterate through multiple test values.
function printCheck(n) {
    let idx = checkElements(n);
    console.log(
        idx !== -1
            ? `Input number ${n} is at index ${idx}`
            : `Input number ${n} is NOT in array database.`
    );
}

// Usage
[15, 45].forEach(printCheck);