// function that takes array of integers and sorts them in ascending order

function selectionSort(arr) {
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // set the current index as the smallest value
        let min = i;
        // loop through the array again
        for (let j = i + 1; j < arr.length; j++) {
            // if the current value is smaller than the smallest
            if (arr[j] < arr[min]) {
                // set the current index as the smallest
                min = j;
            }
        }
        // if the smallest value is not the current index
        if (min != i) {
            // swap the values
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    // return the sorted array
    return arr;
}