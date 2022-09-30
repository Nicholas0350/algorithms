// function that takes a binary search tree and
// a target value and returns the closest value to the target.


//time complexity: O(log(n))
//space complexity: O(1)

function findClosestValueInBst(tree, target) {

  let currentNode = tree;
  let closest = null;
  while (currentNode) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return closest;
}