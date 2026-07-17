// FizzBuzz program
// Prints numbers from 1 to 100 with special words for multiples of 3 and 5
for (let number = 1; number <= 100; number++) {
    let result = "";

    if (number % 3 === 0) {
        result += "Fizz";
    }

    if (number % 5 === 0) {
        result += "Buzz";
    }

    if (result === "") {
        result = number;
    }

    console.log(result);
}
