// Formula C = (°F - 32) × 5/9
const convertToCelsius = function(input) {
    let convert = (input - 32 ) * 5/9;
    const converted = Number(convert.toFixed(1));
    return converted;
};

console.log()

// Formula F = (°C × 9/5) + 32
const convertToFahrenheit = function(input) {
    let convert = (input * 9/5 ) + 32;
    const converted = Number(convert.toFixed(1));
    return converted;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
