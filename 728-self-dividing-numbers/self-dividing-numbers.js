/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

    let arr = [];
    for(let i=left;i<= right;i++){
        let num = i;
        let div = true;
        while(num > 0){
            let rem = num%10;
            if(rem == 0 || i% rem != 0){
                div = false;
            }
            num = Math.floor(num/10)
        }
        if(div){
            arr.push(i)
        }

    }

    return arr
    
};