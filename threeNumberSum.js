// Write a function that takes in a non - empty array of distinct integers and 
// an integer representing a target sum.
// The function should find all triplets in the array that sum up to the target sum &
// return a two - dimensional array of all these triplets.
// Numbers in each triplet should be ordered in ascending order, and 
// triplets themselves should be ordered in ascending order with respect to the numbers they hold.


// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum == targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currenSum < targetSum) {
        left++;
      } if (currentSum > targetSum) {
        right--;
      }
    }
  }
  return triplets;
}


