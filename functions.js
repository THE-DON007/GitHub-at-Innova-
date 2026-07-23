// 1. Checks whether a given number is even or odd
function isEven(number) {
    return number % 2 === 0;
}

// 2. Finds the largest value among three numbers
function findLargest(firstNumber, secondNumber, thirdNumber) {
    return Math.max(firstNumber, secondNumber, thirdNumber);
}

// 3. Reverses the characters in a given string
function reverseString(text) {
    return text.split("").reverse().join("");
}

/*
  Testing the functions with different inputs
  to confirm that they work correctly.
*/

// Testing isEven()
console.log("Is 10 even?", isEven(10)); 
console.log("Is 7 even?", isEven(7));

// Testing findLargest()
console.log("Largest number:", findLargest(15, 8, 22));
console.log("Largest number:", findLargest(3, 19, 12));

// Testing reverseString()
console.log("Reversed word:", reverseString("hello"));
console.log("Reversed word:", reverseString("javascript"));

