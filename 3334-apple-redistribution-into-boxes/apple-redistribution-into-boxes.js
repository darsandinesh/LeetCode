/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {

    let totalApples = apple.reduce((acc, val) => acc + val, 0)
    capacity.sort((a, b) => b - a);
    for (let i = 0; i < capacity.length; i++) {
        totalApples = totalApples - capacity[i]
        console.log(totalApples)
        if (totalApples <= 0) return i + 1
    }

};