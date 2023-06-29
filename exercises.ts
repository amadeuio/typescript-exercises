// Exercise: TypeScript Function

// This exercise focuses on creating a basic TypeScript function.
// Follow the steps below to complete the exercise:

// 1. Define a function called `sumNumbers` that takes two parameters: `num1` and `num2`, both of type `number`.
//    The function should return the sum of the two numbers.
// 2. Implement the function body so that it correctly calculates the sum of the numbers.
// 3. Declare two variables, `a` and `b`, and assign them any numeric values.
// 4. Call the `sumNumbers` function with the variables `a` and `b` as arguments, and store the result in a variable called `result`.
// 5. Print the value of `result` to the console.

// Solution:

function sumNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

const a: number = 2;
const b: number = 5;

const result: number = sumNumbers(a, b);

console.log(result);
