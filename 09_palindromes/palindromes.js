const palindromes = function (str) {


    str = removePunctuations(str.trim());

    let rev = reverseString(str.trim());






    return ((rev.toLowerCase() === str.toLowerCase()));


};






function reverseString(str) {


    let result = "";



    let n = str.length - 1;

    for (let i = n; i >= 0; i--) {


        result += str.charAt(i);


    } // for()




    return result.trim();
} // reverseString()



function removePunctuations(str) {

    return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

} // removePunctuations()





// Do not edit below this line
module.exports = palindromes;



