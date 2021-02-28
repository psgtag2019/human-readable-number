module.exports = function toReadable (number) {
    let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let result = '';
    if (number == 0) return "zero";
    if (number < 10) return units[number];
    if (number < 20) return teen[number % 10];
    if (number < 100) {
        result += tens[Math.floor(number / 10) - 2];
        number %= 10;
        if (number > 0) {
            if (number < 10) result = result + " " + units[number];
        }
        return result;
    }
    if (number < 1000) {
        result += units[Math.floor(number / 100)];
        result += " hundred"
        number %= 100;
//        console.log("   " + number);
        if (number > 0) {
            
            if (number < 10) {
                result = result + " " +  units[number];
                return result;
            }
            if (number < 20) {
                result = result + " " +  teen[number % 10];
                return result;
            }
            if (number < 100) {
                result += ' ';
                result += tens[Math.floor(number / 10) - 2];
                number %= 10;
                if (number > 0) {
                    if (number < 10) result = result + " " + units[number];
                }
            }
        }
    }
    return result;
}


