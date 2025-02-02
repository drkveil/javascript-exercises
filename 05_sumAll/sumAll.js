const sumAll = function(firstNumber, lastNumber) {
    deference = lastNumber - firstNumber;
    sum = 0
    for ( i = 0; i < deference; i++ ){
        let added = sum += firstNumber;
        firstNumber++;
    }
    finalSum = sum + firstNumber;
    return finalSum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
