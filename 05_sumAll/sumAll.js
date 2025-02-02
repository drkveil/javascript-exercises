const sumAll = function(...numbers) {
    let sum =  0;
    for (i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
};

console.log(sumAll(2, 3, 5, 7, 3, 5));

// Do not edit below this line
module.exports = sumAll;
