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

// console.log(upDown([6,3,5,4,3,4,4,5]));

// Longest String

function longestString(arr) {
  var result = {};
  for(var i = 0; i < arr.length - 1; i++) {
    if(arr[i].length < arr[i + 1].length) {
      result = {};
      result[arr[i + 1]] = arr[i + 1].length;
    } else if(arr[i].length > arr[i + 1].length) {
      result = {};
      result[arr[i]] = arr[i].length;
    }
  }
  return result;
}

// console.log(longestString(["truck", "sidewalk", "book"]))

// Find greater

function findGreater(arr, num) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(findGreater([1, 2, 3, 4, 5, 6, 7, 8], 5));

// Combine & sort

function comSort(array1, array2) {
  return array1.concat(array2).sort();
}

// console.log(comSort(["cat", "dog", "fish", "zebra"], ["lion", "aardvark", "gorilla"]));

// Diagonal sum

function diagonalSum(arr) {
  var sum = 0;
  var index = arr.length - 1;
  for(var i = arr.length - 1; i >= 0; i--) {
    sum += arr[i][index];
    index--;
  }
  return sum;
}

// console.log(diagonalSum([[2, 5, 1, 3, 9],
//
//           [4, 1, 3, 0, 8],
//
//           [1, 0, 9, 7, 6],
//
//           [1, 7, 7, 3, 0],
//
//           [3, 3, 8, 2, 4]]))

// Parens Checker

// function parensChecker(parenString) {
//   var parenArray = parenString.split("");
//   var left = 0;
//   var right = 0;
//   for(var i = 0; i < parenArray.length; i++) {
//     if(parenArray[i] === ")") {
//       return false;
//     } else if(parenArray[parenArray.length - 1] === "(") {
//       return false;
//     }
//   }
// }

// Matrix Rotation

function rotateMatrix(matrix) {
  var rows = matrix.length;
  var columns = matrix[0].length;
  var dimensions = rows + "x" + columns;

  var newMatrix = [];
  var counter;

  for(var i = 0; i < columns; i++) {
    newMatrix.push([]);
    counter = 0;
    for(var j = rows - 1; j >= 0; j--) {
      newMatrix[i][counter] = matrix[j][i];
      counter += 1;
    }
  }
  console.log(dimensions);
  return newMatrix;
}

console.log(rotateMatrix([[1, 64, 23],
              [22, 50, 2]]));
