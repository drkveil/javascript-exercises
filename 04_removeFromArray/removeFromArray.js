const removeFromArray = function(array, ...toRemove) {
    //Filter loops through array and includes checkes if numberis in romoveItem
    return array.filter(removeItem => !toRemove.includes(removeItem));
};

// Do not edit below this line
module.exports = removeFromArray;
