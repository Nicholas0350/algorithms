// take in binary tree and returns list of branch sums ordered from left to right
// a branch sum is the sum of all values in a branch
// binary tree is represented as an array of arrays


//time complexity: O(n)
//space complexity: O(n)

function branchSums(tree) {
  const sums = [];
  sums.push(tree[0]);

  // create a helper function to recursively traverse the tree
  const traverse = (node, sum) => {
    // base case: if node has no children, return sum
    if (node.length === 0) return sum;

    // recursive case: add node value to sum, then traverse left and right children
    sum += node[0];
    return traverse(node[1], sum) + traverse(node[2], sum);
  };

  // traverse the tree and add the sums to the sums array
  for (let i = 1; i < tree.length; i++) {
    const sum = traverse(tree[i], 0);
    sums.push(sum);
  }

  return sums;
}