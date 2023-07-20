// Find First Non Repeated Character

// Solution:

function findFirstNonRepeatedCharacter(input: string): string | null {
  const charCount: { [key: string]: number } = {};

  // Count the occurrences of each character in the input string and store in charCount object
  for (const char of input) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (const char of input) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character found, return null
  return null;
}

console.log(findFirstNonRepeatedCharacter("abacddbec"));

export {};
