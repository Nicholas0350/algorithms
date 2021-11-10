// Write a function that takes in a sorted array of integers as well as a target integer.
// The function should use the Binary Search algorithm to determine if
// the target integer is contained in the array and 
// should return its index if it is, otherwise -1



// O(log n)
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  let middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return middle;

  } else if (arr[middle] > target) {
    end = middle - 1;
  }
  else if (arr[middle] < target) {
    start = middle + 1;
  }
  return -1;
}