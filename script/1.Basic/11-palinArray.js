function checkPalin(arr){
    let temp = arr;
    let reversed = 0;
        
    while(temp !== 0){
        reversed = (reversed * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return arr === reversed;
}
    
function palinArray(arr){
    for(let num of arr){
        if(! checkPalin(num)){
            return false;
        }
    }
    return true;
}

let arr = [111, 222, 333, 444, 555];
console.log(palinArray(arr));

let arr2 = [111, 121, 252, 20];
console.log(palinArray(arr2));