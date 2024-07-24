/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    let res = [];

    const combination = (start, comb, total) => {
        if (total == target) {
            res.push([...comb]);
        }

        if (total > target) {
            return
        }

        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            combination(i, comb, total + candidates[i]);
            comb.pop();
        }
    }

    combination(0, [], 0)
    return res;

};