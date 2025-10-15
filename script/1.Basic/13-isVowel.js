function isVowel(ch){
    // let s = str.toUpperCase();
    // if(s === 'A' || s === 'E' || s === 'I' || s === 'O' || s ==='U'){
    //     return true;
    // } else{
    //     return false;
    // }
    return ['A', 'E', 'I', 'O', 'U'].includes(ch.toUpperCase());
}
function countVowel(str){
    
    let count = 0;
    for(let ch of str){
        if(isVowel(ch))
            count++;
    }
    return count;
}

// ✅ Local Online Judge
function runTests() {
    const testCases = [
        { input: "GeeksForGeeks", expected: 5 },
        { input: "Sky", expected: 0 },
        { input: "Education", expected: 5 },
        { input: "APPLE", expected: 2 },
        { input: "rhythm", expected: 0 },
        { input: "Beautiful", expected: 5 },
    ];

    console.log("🧠 Running test cases for countVowel()\n");
    let passed = 0;

    for (let i = 0; i < testCases.length; i++) {
        const { input, expected } = testCases[i];
        const result = countVowel(input);
        const status = result === expected ? "✅ PASS" : "❌ FAIL";
        console.log(`Test ${i + 1}: "${input}" → Output: ${result}, Expected: ${expected} → ${status}`);

        if (result === expected) passed++;
    }

    console.log(`\n🎯 Result: ${passed}/${testCases.length} test cases passed.`);
}

// ✅ Run the local judge
runTests();