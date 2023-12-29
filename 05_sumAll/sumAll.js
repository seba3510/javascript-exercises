const sumAll = function (a, b) {


    let min = a;
    let max = b;


    if ((typeof (min) != "number") || (typeof (max) != "number")) {
        return "ERROR";
    } // if()

    if ((max < 0) || (min < 0)) {
        return "ERROR";
    }// if()

    if ((min > max)) {
        let temp = a;
        min = max;
        max = temp;
    } // if()

    let sum = 0;



    let curr = min;
    while ((curr <= max)) {

        sum += curr;
        curr++;
    } // while()

    return sum;
};




// Do not edit below this line
module.exports = sumAll;
