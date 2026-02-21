// JavaScript program to find binary 
// representation of a given number

function getBinaryRep(n) {

    let ans = "";
    
    // Check for each bit.
    for (let i = 31; i >= 0; i--) {
        
        // If i'th bit is set 
        if ((n & (1 << i)) !== 0) ans += '1';
        else ans += '0';
    }
    
    return ans;
}

let n = 2;
console.log(getBinaryRep(n));
