const add = function (a, b) {

  return a + b;
};

//============================================================


const subtract = function (a, b) {

  let diff = a - b;

  return diff;

};

//============================================================


const sum = function (array) {


  let sum = 0;

  let n = array.length;


  for (let index = 0; index < n; index++) {
    const element = array[index];

    sum += element;

  } // for()

  return sum;
};

//============================================================


const multiply = function (arr) {


  let n = arr.length;

  let result = 1;

  for (let index = 0; index < n; index++) {
    const element = arr[index];

    result *= element;

  } // for()


  return result;

};


//============================================================


const power = function (base, exponent) {

  return Math.pow(base, exponent);
};

//============================================================


const factorial = function (num) {

  if ((num == 0)) {

    return 1;

  }

  else {

    return num * factorial((num - 1));
  }
};

//============================================================









//============================================================














// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
