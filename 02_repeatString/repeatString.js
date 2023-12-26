const repeatString = function (string, num) {

    // check if num is negative

    if ((num < 0)) {
        var err = "ERROR";
        return err;

    } //if()


    if ((string == "")) {
        return "";
    }


    const n = num;

    let result = "";


    for (let i = 0; i < n; i++) {

        result += string;
    } // for()


    return result;

};

// Do not edit below this line
module.exports = repeatString;
