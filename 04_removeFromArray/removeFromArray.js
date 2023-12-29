const removeFromArray = function (arr, ...args) {


    if ((!contains(arr, args))) {
        return arr;

    } // if()



    const n = arr.length;


    // create copy of array
    let copy = [];



    for (let i = 0; i < n; i++) {


        const elem = arr[i];

        if ((!args.includes())) {

            copy.push(elem);

        }// if()



    } // for()


    return copy;

};

function contains(arr, key) {

    const index = search(arr, key);

    return ((index != -1));
} // contains()

function search(arr, key) {


    const n = arr.length;



    for (let index = 0; index < n; index++) {
        const element = arr[index];

        if ((element == key)) {
            return index; // key found
        } // if()


    } //for()

    return -1; // key not found
} // search()

// Do not edit below this line
module.exports = removeFromArray;
