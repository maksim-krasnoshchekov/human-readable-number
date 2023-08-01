module.exports = function toReadable (number) {
    const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const dozens = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const hundreds = ["hundred"];
    number = String(number);
    let concat = number[1] + number[2];
    if (number < 20) {
        return units[number];
    } else if (number >= 20 && number < 100) {
        
        if (number[1] === "0") {
        return dozens[number[0]];
        } else {
        return `${dozens[number[0]]} ${units[number[1]]}`;
        }
        
    } else if (number >= 100) {
        if (concat === "00") {
        return `${units[number[0]]} ${hundreds}`
        } else if (number[1] === '0') {
        return `${units[number[0]]} ${hundreds} ${units[number[2]]}`
        } else if (number[1] <= "2") {
        
        if (number[2] === "0") {
            return `${units[number[0]]} ${hundreds} ${dozens[number[1]]}`;
        } else if (concat > "20") {
        return `${units[number[0]]} ${hundreds} ${dozens[number[1]]} ${units[number[2]]}`
        } else {
            return `${units[number[0]]} ${hundreds} ${units[concat]}`
        }
        
        } else if (number[2] === "0") {
            return `${units[number[0]]} ${hundreds} ${dozens[number[1]]}`;
        } else {
            return `${units[number[0]]} ${hundreds} ${dozens[number[1]]} ${units[number[2]]}`
        }
    }
}
