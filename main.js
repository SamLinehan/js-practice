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

// console.log(rampNumber(1234));
// console.log(rampNumber(1131));

// Palindrome

function isPalindrome(str) {
    var reversedString = "";
    var splitString = str.split("");
    for(var i = splitString.length - 1; i >= 0; i--) {
      reversedString += splitString[i];
    }
    if(str === reversedString) {
      return true;
    } else {
      return false;
    }
}

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("hello"));

// Anagrams

function isAnagram(str1, str2) {
  var sorted1 = str1.split("").sort().join("");
  var sorted2 = str2.split("").sort().join("");

  console.log(sorted1);
  console.log(sorted2);

  if(sorted1 === sorted2) {
    return true;
  } else {
    return false;
  }
}

// console.log(isAnagram("examples", "selpmaxe"))

// Up down

function upDown(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < arr[i + 1]) {
      result.push("up");
    } else if(arr[i] > arr[i + 1]) {
      result.push("down");
    } else if(arr[i] === arr[i + 1]) {
      result.push("even");
    }
  }
  return result;
}

console.log(upDown([6,3,5,4,3,4,4,5]));
