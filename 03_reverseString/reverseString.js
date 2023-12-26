const reverseString = function (str) {

    let result = "";

    let n = str.length;

    for (let index = n - 1; index >= 0; index--) {

        const curr = str.charAt(index);

        result += curr;
    } // for()

    return result;
};
// Do not edit below this line
module.exports = reverseString;
