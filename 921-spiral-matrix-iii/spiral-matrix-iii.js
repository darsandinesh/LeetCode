/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {

    const result = [[rStart, cStart]];
    const d = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dir = 0, step = 1;
    while (result.length < rows * cols) {
        for (let i = 0; i < step; i++) {
            rStart += d[dir][0];
            cStart += d[dir][1];
            if (rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols) {
                result.push([rStart, cStart]);
            }
        }
        dir = (dir + 1) % 4;
        if (dir % 2 == 0) step++;
    }
    return result;

};