//ES5 Map callback
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//ES2015 arrow function shorthand
const arr = [1, 2, 3, 4, 5, 6]; 

const double = arr => arr.map(val => val * 2);

//Refactor the following function to use arrow functions:
//Replace all functions with arrow functions
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

//My reFactored code
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);