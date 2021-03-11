function main (){

    var myX = 12;
    myX += 3;
    var myY = 19;
    myY += 17;
    var myZ = 24;
    myZ -= 20;
    
    return {
        myX,
        myY,
        myZ
    };

}
console.log(main());
module.exports = main;