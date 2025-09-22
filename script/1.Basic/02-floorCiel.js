/*
Given two integers a and b (where b ≠ 0). The objective is to find:
- Floor: ⌊a / b⌋ — the greatest integer less than or equal to a / b.
- Ceil: ⌈a / b⌉ — the smallest integer greater than or equal to a / b.

Approach 1: Using only integer arithmatic to calculate - O(1) Time and O(1) Space
Approach 2: Using built-in functiona - O(1) Time and O(1) Space
*/

function calFloor(a,b){
    let q = Math.trunc(a/b);

    if((a^b) < 0 && a%b!==0){
        q--;
    }
    return q;
}

function calCeil(a,b){
    let q = Math.trunc(a/b);

    if((a^b) > 0 && a%b!==0){
        q++;
    }
    return q;
}

function calFloorCeil(a,b){
    let res = [];
    res.push(calFloor(a,b));
    res.push(calCeil(a,b));
    return res;
}

// Approach 2
function divFloorCeil(a,b){
    let floorv = Math.floor(a/b);
    let ceilv = Math.ceil(a/b);

    return [floorv, ceilv];
}
let a = -7, b = 2;

let res1 = calFloorCeil(a,b);
console.log(res1[0], res1[1]);

let res2 = divFloorCeil(a,b);
console.log(res2[0], res2[1]);