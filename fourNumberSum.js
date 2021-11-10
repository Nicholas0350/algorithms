
// Write a function that takes in a non-empty array of distinct integers and 
// integer representing a target sum. 
// The function should find all quadruplets in the array that sum up to the target sum & 
// return a two-dimensional array of all quadruplets in no particular order.


function fourNumberSum(array, targetSum) {
  const allPairSums = {};
  const quadruplets = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      const currentSum = array[i] + array[j]
      const difference = targetSum - currentSum;
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]))
        }
      }
    }
    for (let k = 0; k < array.length; k++) {
      const currenSum = array[i] + array[k];
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else{
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
}

exports.fourNumberSum = fourNumberSum;
