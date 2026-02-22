// JavaScript Program to check if a string is 
// binary string or not

function isBinary(s) {
    for (let i = 0; i < s.length; i++) {
      
        // Check if the character is neither 
        // '0' nor '1'
        if (s[i] !== '0' && s[i] !== '1') {
            return false;
        }
    }
    return true;
}

let s = "01010101010";
console.log(isBinary(s));
