/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {

    return searchData(nums.sort((a,b)=>a-b),target,0,nums.length)
    
};

function searchData(arr,target,left,right){
    if(left > right){
        return false
    }
    let mid = Math.floor((left+right)/2);
    if(arr[mid]===target){
        return true
    }
    if(arr[mid]<target){
        return searchData(arr,target,mid+1,right)
    }else{
        return searchData(arr,target,left,mid-1)
    }
}