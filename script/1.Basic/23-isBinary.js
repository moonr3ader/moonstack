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

function isBinaryStringUsingSet(str) {
    // Create a set from the characters of the string
    const charSet = new Set(str);

    // Check if the set contains only '0' and '1'
    for (let char of charSet) {
        if (char !== '0' && char !== '1') {
            return false;
        }
    }

    return true;
}

console.log(isBinaryStringUsingSet("101010")); // Output: true
console.log(isBinaryStringUsingSet("10102"));  // Output: false
