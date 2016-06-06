// Count Letters no edge cases

function countLetters(str) {
  var stringArray = str.split("");
  var result = {};
  for(var i = 0; i < stringArray.length; i++) {
    if(result.hasOwnProperty(stringArray[i])) {
      result[stringArray[i]] += 1;
    } else {
      result[stringArray[i]] = 1;
    }
  }
  return result;
}
// console.log(countLetters("hello"));

// Ramp Number

function rampNumber(n) {
  var numberArray = n.toString().split("").map(function(t){return parseInt(t)});
  for(var i = 0; i < numberArray.length; i++) {
    if(numberArray[i] > numberArray[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(rampNumber(1234));
console.log(rampNumber(1131));
