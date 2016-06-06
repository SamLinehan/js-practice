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

console.log(countLetters("hello"));
