// Split an array into two equal Sum subarrays

class Solution {
    findSplitPoint(arr, n){
        let leftSum = 0;
        for(let i=0; i<n; i++){
            leftSum += arr[i];
        }
        
        let rightSum = 0;
        for(let i=n-1; i>=0; i--){
            rightSum += arr[i];
            leftSum -= arr[i];
            
            if(rightSum == leftSum){
                return i;
            }
        }
        return -1;
    }
    
    canSplit(arr) {
        // code here
        let n = arr.length;
        let splitPoint = this.findSplitPoint(arr, n);
        if(splitPoint == -1 || splitPoint == n){
            return false;
        }else{
            return true;
        }
    }
}