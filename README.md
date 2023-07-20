![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# TypeScript Exercises 🔬

### Description 📚

TypeScript is a superset of JavaScript which offers static typing for improved code quality, early error detection and enhanced maintainability and scalability.

This repo contains exercises designed to gain familiarity with TypeScript.

### Prerequisites 🛠️

- Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Installation 📦

- Clone this repo to your local machine `git clone https://github.com/nightrunner4/typescript-exercises`

- `cd` to the project directory and run `npm install`. This will install `tsc`, the TypeScript compiler and `ts-node` as dev dependencies, as specified in the `package.json` file.

- Note: `ts-node` is not strictly necessary, but it's a handy tool that allows you to quickly and directly execute TypeScript on Node.js without precompiling, by running `ts-node <filename>.ts`

### Usage 🖊️

- Just write your solutions on each exercise file inside the `exercises` directory, `cd` inside of it and run `ts-node <filename>.ts` to execute and test if it works.

- When you are done, check the solution for the corresponding exercise inside the `solutions` directory.

### Exercises 🥵

#### 1️⃣ Function

- Define a function called `sumNumbers` that takes two parameters: `num1` and `num2`, both of type `number`.
  The function should return the sum of the two numbers.

- Implement the function body so that it correctly calculates the sum of the numbers.

- Declare two variables, `a` and `b`, and assign them any numeric values.

- Call the `sumNumbers` function with the variables `a` and `b` as arguments,
  and store the result in a variable called `result`.
- Print the value of `result` to the console.

#### 2️⃣ Person Class

- Define a class called Person with the following properties:

  - Name of type string
  - Age of type number
  - Email of type string

- Implement a constructor for the Person class that accepts values for the name, age,
  and email properties and initializes them.

- Add a method to the Person class called introduce that prints a brief introduction of the person.
  The introduction should include their name, age, and email address.

- Create an instance of the Person class with your own information.

- Call the introduce method on the created instance to print your introduction.

#### 3️⃣ Mixed Array Operations

- Create an array called `mixedArray` with the following values: "John", 25, true, "Jane", 30, false.

- Print the length of the `mixedArray` to the console.

- Access the second element of the `mixedArray` and store it in a variable called `secondElement`.

- Check if the fourth element of the `mixedArray` is a boolean. Print "It's a boolean" if it is,
  otherwise print "It's not a boolean".

- Create a new array called `numbersArray` and initialize it with the elements from `mixedArray`
  that are of type number.

- Create a new array called `stringsArray` and initialize it with the elements from `mixedArray`
  that are of type string.

- Print the `numbersArray` and `stringsArray` to the console.

#### 4️⃣ Implement a generic Queue data structure

Write a TypeScript class called Queue that represents a generic queue data structure. The class should have the following methods:

- `enqueue(item: T): void`: Adds an item of type T to the end of the queue. Note: You may assume that the method will always receive an argument of type T.

- `dequeue(): T | undefined`: Removes and returns the item at the front of the queue. If the queue is empty, return `undefined`.

- `isEmpty(): boolean`: Returns a boolean indicating whether the queue is empty or not.

- `peek(): T | undefined`: Returns the item at the front of the queue without removing it. If the queue is empty, return `undefined`.

- `size(): number`: Returns the number of items currently in the queue.

Example usage:

```TypeScript
const queue = new Queue<number>();
console.log(queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size()); // Output: 3
console.log(queue.isEmpty()); // Output: false
console.log(queue.peek()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.size()); // Output: 2
```
