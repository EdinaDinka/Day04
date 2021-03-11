function main(numOne, numTwo) {

    var numOne;
    var numTwo;
    var product = numOne * numTwo;
    return product;

}
console.log(main(parseFloat(2.5), parseFloat(2.0)).toFixed(1));
console.log(main(parseFloat(5.5), parseFloat(5.5)).toFixed(2));
console.log(main(parseFloat(100.25), parseFloat(43.2)).toFixed(1));
module.exports = main;