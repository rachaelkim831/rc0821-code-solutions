/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 0;
  while (currentNumber < 10) {
    currentNumber++;
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 0;
  while (currentNumber < 20) {
    currentNumber += 2;
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 0;
  var repeated = '';
  while (times >= count) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    var timesTwo = numbers[i] * 2;
    doubled.push(timesTwo);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
