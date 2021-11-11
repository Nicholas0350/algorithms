// non empty array of integers representing amount of time a query takes to be answered. one query at a time and queries execute in any order.
// waiting time is the time it takes to answer the next query.
// function that returns the minimum waiting time for all queries.


// Time Complexity: O(n) where n is the number of queries.
// Space Complexity: O(1) constant space.
function minWaitingTime(queries) {
  let min = 0;
  let max = 0;
  let result = 0;
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] > max) {
      max = queries[i];
    }
  }
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] < min) {
      min = queries[i];
    }
  }
  result = max - min;
  return result;
}