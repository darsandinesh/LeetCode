/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function (apple, capacity) {

    let totalApples = 0
    for (let i = 0; i < apple.length; i++) {
        totalApples += apple[i];
    }
    capacity.sort((a, b) => b - a);
    for (let i = 0; i < capacity.length; i++) {
        totalApples = totalApples - capacity[i]
        if (totalApples <= 0) return i + 1
    }

};