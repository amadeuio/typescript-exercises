// Is Palindrome

// Solution:

function isPalindrome(input: string): Boolean {
  // regex to match any punctuation or whitespace character
  const regex: RegExp = /[\p{P}\s]/gu;

  // remove any punctuation or whitespace character & convert to lowercase
  let cleanInput: string = input.replace(regex, "").toLowerCase();

  // reverse the cleaned input
  let cleanReversedInput: string = cleanInput.split("").reverse().join("");

  // compare the cleaned string with its reversed version to check if it's a palindrome
  return cleanInput === cleanReversedInput;
}

console.log(isPalindrome("racecar")); // true

console.log(isPalindrome("hello")); // false

console.log(isPalindrome("rACeCaR")); // true

export {};
