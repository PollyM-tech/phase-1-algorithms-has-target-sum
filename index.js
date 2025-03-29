function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === target) return true;
      }
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
   O(n²) time, O(1) space
*/

/* 
  Add your pseudocode here
  1. Create an empty Set to track seen numbers
  2. For each number in the array:
     a. Calculate the complement (target - current number)
     b. If complement exists in Set, return true
     c. Add current number to Set
  3. If loop completes, return false
*/

/*
  Add written explanation of your solution here
   This solution efficiently checks for pairs by storing numbers we've already seen.
  For each number, we calculate what number would make the target sum (complement).
  If we've seen that complement before, we return true. Otherwise, we store the
  current number and continue. This approach only requires one pass through the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 0, 1], 0));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10], 20));
}

module.exports = hasTargetSum;
