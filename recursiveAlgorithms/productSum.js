// function taking a special array & returns its product sum
// special array is a non empty array that contains either integers or other special arrays
// empty arrays are considered to have a product of 1
// the product sum of a special array is the sum of its elements
// and multiplied by the product sum of all elements of any nested arrays

// O(n) time complexity because we are iterating through the array once we have the sum of the array,
// we multiply it by the multiplier and return the sum of the array multiplied by the multiplier
// space complexity: O(n)


function productSum(array, multiplier = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], multiplier + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * multiplier;
}

// test cases
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])); // 12
console.log(productSum([5, 2, [], 3, [6, [-13, 8], 4]])); // 18
console.log(productSum([1, 2, 3, 4, 5])); // 15
console.log(productSum([1, [2], 3, 4, 5])); // 15
console.log(productSum([[[[[5]]]]])); // 6