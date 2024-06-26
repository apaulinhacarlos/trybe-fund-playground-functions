// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(stringToSplit) {
  return stringToSplit.split(' ');
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(arrayOfStrings) {
  let ultimoItem = arrayOfStrings.pop();
  let primeiroItem = arrayOfStrings[0];
  return ultimoItem + ', ' + primeiroItem;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayOfNumbers) {
  let biggerNumber = arrayOfNumbers[0];
  let numberOfTimes = 0;
  for (let index = 1; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] > biggerNumber) {
      biggerNumber = arrayOfNumbers[index];
    }
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] === biggerNumber) {
      numberOfTimes += 1;
    }
  }
  return numberOfTimes;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  console.log(cat1Distance, cat2Distance);
  if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}
console.log(catAndMouse(0, 6, -5));

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let newArray = [];
  let div3 = 'fizz';
  let div5 = 'buzz';
  let div35 = 'fizzBuzz';
  let divNone = 'bug!';
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 3 !== 0 && arrayOfNumbers[index] % 5 !== 0) {
      newArray.push(divNone);
    } else if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      newArray.push(div35);
    } else if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 !== 0) {
      newArray.push(div3);
    } else if (arrayOfNumbers[index] % 3 !== 0 && arrayOfNumbers[index] % 5 === 0) {
      newArray.push(div5);
    }
  }
  return newArray;
}
console.log(fizzBuzz([15, 30, 45]));

// Desafio 9
function encode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    newString += string[index].replace(/a/, '1')
      .replace(/e/, '2')
      .replace(/i/, '3')
      .replace(/o/, '4')
      .replace(/u/, '5');
  }
  return newString;
}
console.log(encode('hi there!'));

function decode(string) {
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    newString += string[index].replace(/1/, 'a')
      .replace(/2/, 'e')
      .replace(/3/, 'i')
      .replace(/4/, 'o')
      .replace(/5/, 'u');
  }
  return newString;
}
console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
