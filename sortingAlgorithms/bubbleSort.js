// function that takaes an array of integers and sorts it
// using bubble sort algorithm

function bubbleSort(arr) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // loop through the array again because ?
    for (let j = 0; j < arr.length; j++) {
      // if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  let noSwaps;
  // loop through the array
  for (let i = arr.length; i > 0; i--) {
    // set the noSwaps variable to true
    noSwaps = true;
    // loop through the array again
    for (let j = 0; j < i - 1; j++) {
      // if the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // swap the elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // set noSwaps to false
        noSwaps = false;
      }
    }
    // if noSwaps is true, the array is sorted
    if (noSwaps) break;
  }
  return arr;
}