/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {

    let seat = seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    return seats.reduce((acc, val, index) => {
        return acc + Math.abs(val - students[index]);
    }, 0)


};