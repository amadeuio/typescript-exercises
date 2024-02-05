![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# TypeScript Exercises 🔷

### Description 📚

TypeScript is a superset of JavaScript which offers static typing for improved code quality, early error detection and enhanced maintainability and scalability.

This repo contains exercises designed to gain familiarity with TypeScript.

### Resources Used 💡

- [GPT](https://chat.openai.com)

### Prerequisites 🛠️

- Make sure you have [Node.js](https://nodejs.org) installed on your system.

### Installation 📦

- Clone this repo to your local machine `git clone git@github.com:amadeuio/typescript-exercises.git`

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

#### 4️⃣ Is Palindrome

Write a function called `isPalindrome` that takes a string as its argument and returns `true` if the string is a palindrome and `false` otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

📝 Notes:

- The function should be case-insensitive, meaning "Racecar" or "rACeCaR" should still be considered a palindrome.

- The function should ignore spaces and punctuation when checking for a palindrome. Only consider alphanumeric characters.

#### Example Usage:

```TypeScript
Input: "racecar"
Output: true // since "racecar" reads the same forward and backward
```

```TypeScript
Input: "hello"
Output: false // since "hello" does not read the same backward
```

#### 5️⃣ Find First Non Repeated Character

Write a function called `findFirstNonRepeatedCharacter` that takes a string as its argument and returns the first non-repeated character in the string. If all characters are repeated, the function should return `null`.

📝 Notes:

- The input string will contain only lowercase alphabets (a-z).

- The function should be case-sensitive, meaning 'a' and 'A' are considered different characters.

#### Example Usage:

```TypeScript
Input: "abacddbec"
Output: "e" // The first non-repeated character is "e" as it appears only once
```

#### 6️⃣ Queue Data Structure

Write a TypeScript class called Queue that represents a generic queue data structure. The class should have the following methods:

- `enqueue(item: T): void`: Adds an item of type T to the end of the queue. 📝 Note: You may assume that the method will always receive an argument of type T.

- `dequeue(): T | undefined`: Removes and returns the item at the front of the queue. If the queue is empty, return `undefined`.

- `isEmpty(): boolean`: Returns a boolean indicating whether the queue is empty or not.

- `peek(): T | undefined`: Returns the item at the front of the queue without removing it. If the queue is empty, return `undefined`.

- `size(): number`: Returns the number of items currently in the queue.

#### Example Usage:

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

#### 7️⃣ Stack Data Structure

Write a class called `Stack` that represents a generic stack data structure. The class should have the following methods:

- `push(item: T): void`: Adds an item of type T to the top of the stack. 📝 Note: You may assume that the method will always receive an argument of type T.

- `pop(): T | undefined`: Removes and returns the item from the top of the stack. If the stack is empty, return `undefined`.

- `isEmpty(): boolean`: Returns a boolean indicating whether the stack is empty or not.

- `peek(): T | undefined`: Returns the item from the top of the stack without removing it. If the stack is empty, return `undefined`.

- `size(): number`: Returns the number of items currently in the stack.

#### Example Usage:

```TypeScript
const stack = new Stack<number>();
console.log(stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Output: 3
console.log(stack.isEmpty()); // Output: false
console.log(stack.peek()); // Output: 30

console.log(stack.pop()); // Output: 30
console.log(stack.size()); // Output: 2
```

#### 8️⃣ Counting Sort

Write a function called `countingSort` that takes an array of non-negative integers as input and returns the sorted array using Counting Sort algorithm.

📝 Note:

- You can assume that the input array will contain only non-negative integers.

#### Example Usage:

```TypeScript
const inputArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]
```
