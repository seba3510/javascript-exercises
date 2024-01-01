const getTheTitles = function (books) {


    // method 1
    // let titles = books.map(book => book.title);

    // method 2

    let result = [];

    let n = books.length;


    for (i = 0; i < n; i++) {


        let elem = books[i].title;


        result.push(elem);


    } // for()

    return result;
};

// Do not edit below this line

module.exports = getTheTitles;
