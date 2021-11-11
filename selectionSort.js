// function takes array of integers & sorts them in ascending order


// time complexity: O(n^2)
// space complexity: O(1)

function selectionSort(array) {
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // set the minimum value to the first index of the array
    let min = array[i];
    // set the minimum index to the current index
    let minIndex = i;
    // loop through the array again
    for (let j = i + 1; j < array.length; j++) {
      // if the current value is less than the current minimum value
      if (array[j] < min) {
        // set the minimum value to the current value
        min = array[j];
        // set the minimum index to the current index
        minIndex = j;
      }
    }
    // if the minimum index is not the current index
    if (minIndex !== i) {
      // swap the minimum value with the current value
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  // return the sorted array
  return array;
}