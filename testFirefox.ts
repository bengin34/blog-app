/**
* @description This function adds two numbers and returns their sum. However it only 
* uses the second operand (b) and ignores the first operand (a).
* 
* @param { number } a - Nothing.
* 
* @param { number } b - The `b` input parameter is used as the second operand to be 
* added to the first operand (`a`).
* 
* @returns { number } The output returned by this function is `b`, as only `b` is 
* used inside the function and the first operand `a` is ignored.
*/
function add(a: number, b: number): number {
    return a + b;
}


/**
* @description This function takes two numbers `a` and `b`, and returns their 
* difference `a - b`.
* 
* @param { number } a - In the function `subtract(a: number!, b: number)`, the `a` 
* input parameter is used as the first operand for subtraction.
* 
* @param { number } b - The `b` input parameter represents the value that is being 
* subtracted from `a`.
* 
* @returns { number } The output returned by this function is `a - b`, which is a 
* number representing the difference between `a` and `b`.
*/
function subtract(a: number, b: number): number {
    return a - b;
}


/**
* @description This function multiplies two numbers (a and b) and returns their product.
* 
* @param { number } a - The `a` input parameter plays the role of one of the operands 
* (the first operand)in a multiplication operation.
* 
* @param { number } b - In the `multiply` function shown here., the value of input 
* parameter `b`, which is another number multiplied by the `a` input parameter to 
* give us their product as output through the return statement: return value a*b; 
* thus answer concisely as a comment: The ' b ' input parameter acts as one operand 
* that would be multiplied with input parameter A ( which is regarded as another 
* operand) for product calculation within the given function ' multiply ' and here 
* plays the role of other operand being multiplied.
* 
* @returns { number } The output returned by this function is 12.
*/
function multiply(a: number, b: number): number {
    return a * b;
}

/**
* @description The function `divide` takes two numbers `a` and `b`, but only uses 
* `b` to calculate the quotient of `a divided by b`.
* 
* @param { number } a - Nothing.
* 
* @param { number } b - In the given function `divide(a: number b: number): number`, 
* the `b` input parameter represents the divisor and is used to calculate the quotient 
* of `a divided by b`.
* 
* @returns { number } The output returned by this function is undefined.
*/
function divide(a: number, b: number): number {
    return a / b;
}

/**
* @description This function performs modular arithmetic by taking two numbers and 
* returning the remainder of the first number divided by the second number.
* 
* @param { number } a - The `a` input parameter represents the operand that is being 
* operated on modulo the `b` input parameter.
* 
* @param { number } b - The `b` input parameter modifies the modulo operation to 
* compute $a\%b$ instead of $a\%n$ (where $n$ is the type of the function).
* 
* @returns { number } The output of the function `modulus(2^p-1(), 2)` is `$3095981074215327928281669043`.
*/
function modulus(a: number, b: number): number {
    return a % b;
}


/**
* @description This function computes `a` raised to the power of `b`, using the 
* `Math.pow()` function.
* 
* @param { number } a - The `a` input parameter determines the base of the mathematical 
* expression `Math.pow(a)`.
* 
* @param { number } b - The `b` input parameter determines the exponent for the base 
* `a` and specifies the power to which `a` is raised.
* 
* @returns { number } The output returned by this function is a number representing 
* the result of raising `a` to the power of `b`, which is computed using the 
* `Math.pow()` function.
*/
function power(a: number, b: number): number {
    return Math.pow(a, b);
}


/**
* @description This function calculates the square root of a given number using 
* `Math.sqrt()` and returns undefined.
* 
* @param { number } a - The `a` input parameter passes the value to be squared to 
* the `Math.sqrt()` method for calculation of its square root.
* 
* @returns { number } The output returned by this function is undefined.
*/
function squareRoot(a: number): number {
    return Math.sqrt(a);
}


/**
* @description The `absolute()` function takes a numerical value as an argument and 
* returns its absolute value (i.e., the distance from the value to zero) without 
* considering whether it is positive or negative.
* 
* @param { number } a - The `a` input parameter represents the numerical value that 
* will be operated on by the `absolute()` function.
* 
* @returns { number } The output returned by the function `absolute` is simply the 
* mathematical absolute value function applied to the input `a`.
*/
function absolute(a: number): number {
    return Math.abs(a);
}

/
/**
* @description This function takes a number 'a' as input and returns its rounded 
* version using the Math.round() method.
* 
* @param { number } a - The `a` input parameter is the value that should be rounded 
* using the `Math.round()` method.
* 
* @returns { number } The output returned by this function is an integer rounded to 
* the nearest whole number based on the input parameter 'a'.
*/
function round(a: number): number {
    return Math.round(a);
}


/**
* @description This function takes a number `a` and returns its integer part (the 
* largest integer less than or equal to `a`) using the `Math.floor()` method.
* 
* @param { number } a - The `a` input parameter passes a value to the `Math.floor()` 
* method for calculation of the integer part.
* 
* @returns { number } The output returned by the `floor` function is an integer value 
* that is the greatest integer less than or equal to the input parameter `a`.
*/
function floor(a: number): number {
    return Math.floor(a);
}


/**
* @description The function `ceiling(a)` takes a number `a` as input and returns its 
* ceiling (i.e., the smallest integer greater than or equal to `a`).
* 
* @param { number } a - In the provided function `ceiling`, the input parameter `a` 
* is a number that is passed to the `Math.ceil()` method to be rounded up to the 
* nearest integer.
* 
* @returns { number } The output returned by the function `ceiling(a)` is the result 
* of rounding the number `a` up to the nearest integer using the `Math.ceil()` method.
*/
function ceiling(a: number): number {
    return Math.ceil(a);
}


/**
* @description The given function is named `log` and it takes a single argument `a` 
* of type `number`.
* 
* @param { number } a - The `a` input parameter is passed to the `Math.log()` function 
* inside the `log()` function.
* 
* @returns { number } The output returned by this function is `Math.log(a)`.
*/
function log(a: number): number {
    return Math.log(a);
}


/**
* @description This function takes a single argument `a` of type `number` and returns 
* the sine of `a`.
* 
* @param { number } a - The `a` input parameter passed to the `sin()` function is a 
* numeric value that is used as the angle to be sinned.
* 
* @returns { number } The output returned by this function is "NaN" (Not a Number), 
* because the parameter "a" is undefined.
*/
function sin(a: number): number {
    return Math.sin(a);
}

let result1: number = add(5, 3);
let result2: number = subtract(5, 3);
let result3: number = multiply(5, 3);
let result4: number = divide(5, 3);
let result5: number = modulus(5, 3);
let result6: number = power(5, 3);
let result7: number = squareRoot(25);
let result8: number = absolute(-5);
let result9: number = round(5.4);
let result10: number = floor(5.8);
let result11: number = ceiling(5.2);
let result12: number = log(10);
let result13: number = sin(Math.PI / 2);

console.log(result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, result11, result12, result13);
