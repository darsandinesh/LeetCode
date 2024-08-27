/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {

   let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(5, 7));
    const day = Number(date.slice(8, 10));

    if (((year % 400) === 0) || ((year % 4 === 0) & (year % 100 != 0)) ) {
        days[1] = 29;
    } 

    let number = 0
    if (month === 01) {
        return day;
    } else {
        for (let i = 0; i < month-1; i++) {
            number += days[i];
        }   
    }
    return number+day

};