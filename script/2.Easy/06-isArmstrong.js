

// function isArmstrong(n){
//     let sum = 0;
//     let temp = Math.abs(n);
//     while(temp !== 0){
//         sum += ((temp % 10) ^ 3);
//         temp = Math.floor(temp / 10);
//     }
//     return (sum === Math.abs(n));
// }

function isArmstrong(n){
    let num = n.toString();
    let len = num.length;
    let out = 0;

    for (let i of num){
        out += Math.pow(parseInt(i), len);
    }

    return (out === parseInt(num));
}

let n = [153, 372, 100];
for(let val of n){
    console.log(`Is ${val} a palindrome? ${isArmstrong(val)}`);
}