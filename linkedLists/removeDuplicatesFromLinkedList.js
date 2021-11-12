// linkedlist where nodes are sorted relative to their values
// function returns modified linkedlist with no duplicates modified in place



// time complexity: O(n)
// space complexity: O(1)
function removeDuplicatesFromLinkedList(linkedList) {
  // edge cases
  if (!linkedList) {
    return linkedList;
  }

  // pointers
  let currentNode = linkedList;
  let nextNode = linkedList.next;

  // iterate through linked list
  while (nextNode) {
    // check if currentNode.value is equal to nextNode.value
    if (currentNode.value === nextNode.value) {
      // if so, move nextNode to the next node
      nextNode = nextNode.next;
      // remove currentNode from linked list
      currentNode.next = nextNode;
    } else {
      // if not, move currentNode to next node and nextNode to next next node
      currentNode = nextNode;
      nextNode = nextNode.next;
    }
  }
  return linkedList;
}