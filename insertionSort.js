
// function that takes an array of integers returning the sorted array. 
// Use the Insertion Sort algorithm to sort the array.

// function that array of integers & returns sorted array

function insertionSort(arr) {
    // loop through the array
    for (let i = 1; i < arr.length; i++) {
        // set a variable to hold the current element
        let currentVal = arr[i];
        // set a variable to hold the index of the current element
        let currentIndex = i;
        // loop backwards through the array
        while (currentIndex > 0 && arr[currentIndex - 1] > currentVal) {
            // move the element to the right
            arr[currentIndex] = arr[currentIndex - 1];
            // decrement the index
            currentIndex--;
        }
        // insert the current element into the array
        arr[currentIndex] = currentVal;
    }
    return arr;
}