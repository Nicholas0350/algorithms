// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should
// return them in an array, in any order.
// If no two numbers sum up to the target sum, the function should return empty array.

// Note that the target sum has to be obtained by summing two different integers
// in the array; you can't add a single integer to itself in order to obtain the
// target sum.

// You can assume that there will be at most one pair of numbers summing up to
// the target sum.

// 0(n^2) time | 0(1) space

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum];
      }
    }
  }
  return []
}

// If you value space
// 0(n) time | 0(n) space
// with hashtable ( stores sum of pairs in array)
function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return []
}

// If you value time
// o(nLog(n)) | 0(1) space
// with pointers
function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left - right) {
    const currentSum = array[left] + array[right];
    if (currentSum == targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right++;
    }
  }
  return []
}