function main(numOne, numTwo) {

    var numOne;
    var numTwo;
    var myQuotient = numOne / numTwo;
    return myQuotient;

}
console.log(main(parseFloat(5.0), parseFloat(2.0)).toFixed(1));
console.log(main(parseFloat(16.5), parseFloat(5.5)).toFixed(2));
console.log(main(parseFloat(102.0), parseFloat(25.5)).toFixed(1));
module.exports = main;