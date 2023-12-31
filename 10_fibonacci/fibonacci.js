const fibonacci = function (num) {


    if ((num < 0)) {

        return "OOPS";


    }

    else if ((num == 0)) {

        return 0;
    }


    let fib = new Array(num + 2);

    fib[0] = 0;
    fib[1] = 1;

    let n = fib.length;


    for (i = 2; i <= num; i++) {


        let elem = fib[i - 1] + fib[i - 2];

        fib[i] = elem;


    } // for()



    return fib[num]



};

module.exports = fibonacci;
