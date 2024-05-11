/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {

   let result = [];
    for (let i = 0; i < nums1.length; i++) {
        index = nums2.indexOf(nums1[i]);
        let flag = 0
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                flag = 1
                result.push(nums2[j])
                break;
            }
        }
        if (flag == 0) result.push(-1)
    }
    return result

};