/**
 * @param {string} str
 * @returns {void}
 */

class Solution {
    printPattern(str) {
        let mid = Math.floor(str.length / 2);
        let res = "";
        let ans = "";

        for (let i = 0; i < str.length; i++) {
            res += str[(i + mid) % str.length]; // keep adding next character
            ans += res + "$ "; // add current pattern
        }

        console.log(ans.trim());
    }
}

// ----------------------------
// 🧪 TEST CASES
// ----------------------------
let obj = new Solution();

console.log("Input: PROGRAM");
obj.printPattern("PROGRAM");
// Expected Output: G$ GR$ GRA$ GRAM$ GRAMP$ GRAMPR$ GRAMPRO$

console.log("\nInput: RAT");
obj.printPattern("RAT");
// Expected Output: A$ AT$ ATR$

console.log("\nInput: VID");
obj.printPattern("VID");
// Expected Output: I$ ID$ IDV$

console.log("\nInput: VAPDYEFNWCE");
obj.printPattern("VAPDYEFNWCE");
// Expected Output: E$ EF$ EFN$ EFNW$ EFNWC$ EFNWCE$ EFNWCEV$ EFNWCEVA$ EFNWCEVAP$ EFNWCEVAPD$ EFNWCEVAPDY$
