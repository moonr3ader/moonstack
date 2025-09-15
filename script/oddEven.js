//Basic Logic problem
//naive approach: using mod
function isEven(n){
    // finding remainder of n
    let rem = n % 2;
    if(rem == 0){
        return true;
    }
    else{
        return false;
    }
}

//expected approach: using Bitwise AND
function isEven2(n){
    // taking bitwise and of n with 1 
    if ((n & 1) === 0) {
        return true;
    }
    else {
        return false;
    }
}

let n = 35;
if (isEven(n)) {
    console.log("isEven: true");
}
else {
    console.log("isEven: false");
}

if (isEven2(n)) {
    console.log("isEven2: true");
}
else {
    console.log("isEven2: false");
}

let ans = prompt("Enter a number:");
if ((ans % 5) === 0){
    console.log(ans + " is divicible by 5");
}
else{
    console.log(ans + " is NOT divicible by 5");
}