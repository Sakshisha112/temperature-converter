function convertTemperature() {
    let temperature = parseFloat(document.getElementById('temperature').value);
    let fromUnit = document.getElementById('from').value;
    let toUnit = document.getElementById('to').value;
    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = temperature + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (temperature - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (temperature + 459.67) * 5/9;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = temperature - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = temperature * 9/5 - 459.67;
    }

    document.getElementById('result').innerHTML = `${temperature} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}





