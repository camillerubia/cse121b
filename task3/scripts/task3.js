/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named 
// add that takes two arguments, number1 and number2
function add(number1, number2) {

// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}
// Step 3: Step 3: Using function declaration, define another function named 
// addNumbers that gets the values of two HTML form controls with IDs of addend1 
// and addend2. Pass them to the add function
function addNumbers() {
    const add1 = parseInt(document.getElementById('addend1').value);
    const add2 = parseInt(document.getElementById('addend2').value);


// Step 4: Assign the return value to an HTML form element with an ID of sum
    let sum = document.getElementById('sum');
    sum.value = add(add1, add2);
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers 
// that calls the addNumbers function
const addNumbersElement = document.getElementById('addNumbers');
addNumbersElement.addEventListener('click', addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named 
// subtract and subtractNumbers and HTML form controls with IDs of minuend, 
// subtrahend, difference and subtractNumbers
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    const sub1 = parseInt(document.getElementById('minuend').value);
    const sub2 = parseInt(document.getElementById('subtrahend').value);
    let difference = document.getElementById('difference');
    difference.value = subtract(sub1, sub2);
}

const subtractNumbersElement = document.getElementById('subtractNumbers');
subtractNumbersElement.addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named
// multiply and mulitplyNumbers and HTML form controls with IDs of factor1, 
// factor2, product and multiplyNumbers

let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
    const factor1 = parseInt(document.getElementById('factor1').value);
    const factor2 = parseInt(document.getElementById('factor2').value);
    let product = document.getElementById('product');
    product.value = multiply(factor1, factor2);
}

const multiplyNumbersElement = document.getElementById('multiplyNumbers');
multiplyNumbersElement.addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat 
// Steps 1-5 with new functions named divide and divideNumbers and HTML 
// form controls with IDs of dividend, divisor, quotient and divideNumbers
let divide = (number1, number2) => number1 / number2;

let divideNumbers = function () {
    const dividend = parseInt(document.getElementById('dividend').value);
    const divisor = parseInt(document.getElementById('divisor').value);
    let quotient = document.getElementById('quotient');
    quotient.value = divide(dividend, divisor);
}

const divideNumbersElement = document.getElementById('divideNumbers');
divideNumbersElement.addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const dateNow = new Date();

// Step 2: Declare a variable to hold the current year
let year = 0;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() 
// method/function and assign it to the variable declared in Step 2
year = dateNow.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
let yearnow = document.getElementById('year');
yearnow.innerText = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numberArray = [];

for (let n = 1; n <= 25; n++) {
    numberArray.push(n);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
let numArray = document.getElementById('array');
numArray.innerText = numberArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array 
// variable and assign the result to the HTML element with an ID of "odds" 
// ( hint: % (modulus operator) )
const oddNums = numberArray.filter ((num) => num % 2);
let odds = document.getElementById('odds');
odds.innerText = oddNums;

// Step 4: Use the filter array method to find all of the even numbers of the array 
// variable and assign the result to the HTML element with an ID of "evens"
const evenNums = numberArray.filter ((num) => {
    let rem = num % 2;
    if (rem === 0) {
        return num;
    }
});
let evens = document.getElementById('evens');
evens.innerText = evenNums;

// Step 5: Use the reduce array method to sum the array variable elements and assign 
// the result to the HTML element with an ID of "sumOfArray"
let arraySum = numberArray.reduce((x, y) => x + y);
let sumOfArray = document.getElementById('sumOfArray');
sumOfArray.innerText = arraySum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 
// and assign the result to the HTML element with an ID of "multiplied"
let arrayProduct = numberArray.map((x) => x * 2);
let multiplied = document.getElementById('multiplied');
multiplied.innerText = arrayProduct;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying 
// each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let multipliedSum = arrayProduct.reduce((x, y) => x + y);
let sumOfMultiplied = document.getElementById('sumOfMultiplied');
sumOfMultiplied.innerText = multipliedSum;