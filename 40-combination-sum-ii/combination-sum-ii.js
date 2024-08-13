/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    let result = [];
    candidates.sort((a, b) => a - b);

    function combination(start, target, currentComb) {
        if (target === 0) {
            result.push([...currentComb]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (candidates[i] > target) break;

            currentComb.push(candidates[i]);

            combination(i + 1, target - candidates[i], currentComb);

            currentComb.pop();
        }
    }
    
    combination(0, target, []);
    return result
    
};