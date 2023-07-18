// Mixed Array Operations

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

export {};
