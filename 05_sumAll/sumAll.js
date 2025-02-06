const sumAll = function(biggerNumber , smallerNumber) {
    if (!Number.isInteger(biggerNumber) || !Number.isInteger(smallerNumber)){
        return "ERROR";
    }else if (smallerNumber > biggerNumber){
        [smallerNumber, biggerNumber] = [biggerNumber, smallerNumber];
    }

    let sum = 0;
    sum.t
    console.log;

    for (let i = smallerNumber; i <= biggerNumber; i++){
        sum += i;
    }

    if (sum < 0){
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
