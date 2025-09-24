//Basic Logic problem: Finding if a given number is odd or even

/*
------------------------------- Naive Approach -------------------------------
Using Mod (%) to check
 let rem = n % 2;
 
 if(rem == 0){ return true; }
 else { return false; }

------------------------------- Expected Approach -------------------------------
Using Bitwise AND to check
- every even number in binary ends with 0
- every odd number in binary ends with 1
- using that logic we check if a number is even or odd.

return ((n & 1) === 0);

------------------------------- Doubts -------------------------------
What's the logic behind this?
How does this help in DSA?
*/

//NAIVE APPROACH: USING MOD TO CHECK
function isEven1(n){
    if((n % 2) == 0){
        return true;
    }
    else{
        return false;
    }
}

//EXPECTED APPROACH: USING BITWISE AND TO CHECK
function isEven2(n){
    if ((n & 1) === 0) {
        return true;
    }
    else {
        return false;
    }
}

let n = 35;                 // GETTING USER INPUT: use - n = prompt("Enter a number:");
console.log(`Given number: ${n} \nMethod used: Mod Operator, isEven: ${isEven1(n)}`);
n = 20;
console.log(`Given number: ${n} \nMethod used: Bitwise AND, isEven: ${isEven2(n)}`);