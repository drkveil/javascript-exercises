const repeatString = function(string, num) {
    addString = "";
    if (num < 0){
        return "ERROR";
    }else if (string === null){
        return null;
    }
    for (let i = 1; i <= num; i++) {
        addString += string;
    }
    return addString;
};

// Do not edit below this line
module.exports = repeatString;
