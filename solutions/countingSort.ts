// Couting Sort

// Solution:

function countingSort(arr: number[]): number[] {
  // find the minimum and maximum values in the array
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  // create a counting array with size (max - min + 1) initialized to 0
  const countArraySize = max - min + 1;
  const count = new Array(countArraySize).fill(0);

  // count the occurrences of each element in the array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }

  // modify the counting array to accumulate counts
  for (let i = 1; i < countArraySize; i++) {
    count[i] += count[i - 1];
  }

  // build the sorted output array
  const sorted = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sorted[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  return sorted;
}

const inputArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(inputArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]

export {};
