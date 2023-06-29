// Exercise: TypeScript Function

/* 

1. Define a function called `sumNumbers` that takes two parameters: `num1` and `num2`, both of type `number`.
The function should return the sum of the two numbers.

2. Implement the function body so that it correctly calculates the sum of the numbers.

3. Declare two variables, `a` and `b`, and assign them any numeric values.

4. Call the `sumNumbers` function with the variables `a` and `b` as arguments, 
and store the result in a variable called `result`.

5. Print the value of `result` to the console.

*/

// Solution:

function sumNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

const a: number = 2;
const b: number = 5;

const result: number = sumNumbers(a, b);

console.log(result);

// Exercise: Create a Person Class

/* 

1. Define a class called Person with the following properties:

- name of type string
- age of type number
- email of type string

2. Implement a constructor for the Person class that accepts values for the name, age, 
and email properties and initializes them.

3. Add a method to the Person class called introduce that prints a brief introduction of the person. 
The introduction should include their name, age, and email address.

4. Create an instance of the Person class with your own information.

5. Call the introduce method on the created instance to print your introduction.

*/

// Solution:

class Person {
  name: string;
  age: number;
  email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // void: the function doesn't return any value;
  introduce(): void {
    console.log(
      `Hi, my name is ${this.name}. I'm ${this.age} years old, and my email address is ${this.email}.`
    );
  }
}

const person = new Person("John Doe", 64, "johndoe@example.com");
person.introduce();

// Exercise: Mixed Array Operations

/*

1. Create an array called `mixedArray` with the following values: "John", 25, true, "Jane", 30, false.

2. Print the length of the `mixedArray` to the console.

3. Access the second element of the `mixedArray` and store it in a variable called `secondElement`.

4. Check if the fourth element of the `mixedArray` is a boolean. Print "It's a boolean" if it is, 
otherwise print "It's not a boolean".

5. Create a new array called `numbersArray` and initialize it with the elements from `mixedArray` 
that are of type number.

6. Create a new array called `stringsArray` and initialize it with the elements from `mixedArray` 
that are of type string.

7. Print the `numbersArray` and `stringsArray` to the console.

*/

// Solution:

let mixedArray: (string | number | boolean)[] = [
  "John",
  25,
  true,
  "Jane",
  30,
  false,
];

console.log("Length of mixedArray:", mixedArray.length);

let secondElement: number | string | boolean = mixedArray[1];

if (typeof mixedArray[3] === "boolean") {
  console.log("It's a boolean");
} else {
  console.log("It's not a boolean");
}

let numbersArray: number[] = mixedArray.filter(
  (element) => typeof element === "number"
) as number[];

let stringsArray: string[] = mixedArray.filter(
  (element) => typeof element === "string"
) as string[];

console.log("numbersArray:", numbersArray);
console.log("stringsArray:", stringsArray);
