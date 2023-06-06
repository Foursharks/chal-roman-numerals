// Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// For reference, these are the building blocks for how we encode numbers with Roman numerals:

const toRoman = (num) => {
    const romanNumeralMap = [
      {value: 1000, symbol: 'M'},
      {value: 900, symbol: 'CM'},
      {value: 500, symbol: 'D'},
      {value: 400, symbol: 'CD'},
      {value: 100, symbol: 'C'},
      {value: 90, symbol: 'XC'},
      {value: 50, symbol: 'L'},
      {value: 40, symbol: 'XL'},
      {value: 10, symbol: 'X'},
      {value: 9, symbol: 'IX'},
      {value: 5, symbol: 'V'},
      {value: 4, symbol: 'IV'},
      {value: 1, symbol: 'I'}
    ];

    let romanNumeral = '';

    for (let i = 0; i < romanNumeralMap.length; i++) {
      while (num >= romanNumeralMap[i].value) {
        romanNumeral += romanNumeralMap[i].symbol;
        num -= romanNumeralMap[i].value;
      }
    }
return  romanNumeral
}

console.log(toRoman(11))
console.log(toRoman(267))
console.log(toRoman(99))