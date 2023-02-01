symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

function RomanToInteger(num) {
    let value = 0;
    for (let i = 0; i < num.length; i += 1) {
        symbols[num[i]] < symbols[num[i + 1]] ?
            value -= symbols[num[i]] : value += symbols[num[i]]
    }
    console.log(value);
}
RomanToInteger("MCMXCIV");