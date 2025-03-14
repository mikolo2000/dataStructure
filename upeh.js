function longestEqualSubarray(nums, x, y) {
  let indexMap = new Map();
  indexMap.set(0, -1); // Maps (countX - countY) to first occurrence index
  let countX = 0, countY = 0, maxLength = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === x) countX++;
      if (nums[i] === y) countY++;
      
      let diff = countX - countY;
      
      if (indexMap.has(diff)) {
          maxLength = Math.max(maxLength, i - indexMap.get(diff));
      } else {
          indexMap.set(diff, i);
      }
  }
  
  return maxLength;
}

// Example Usage:
const nums1 = [1, 2, 3, 2, 3, 1, 3, 2, 1];
const x1 = 2, y1 = 3;
console.log(longestEqualSubarray(nums1, x1, y1)); // Output: 6

const nums2 = [4, 5, 6, 4, 5, 5, 4, 6, 5, 4, 6];
const x2 = 4, y2 = 5;
console.log(longestEqualSubarray(nums2, x2, y2)); // Output: 8

function longestEqualSubarray1(nums, x, y) {
  let indexMap = new Map();
  indexMap.set(0, -1); // Maps (countX - countY) to first occurrence index
  let countX = 0, countY = 0, maxLength = 0, startIdx = -1, endIdx = -1;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === x) countX++;
      if (nums[i] === y) countY++;
      
      let diff = countX - countY;
      
      if (indexMap.has(diff)) {
          let prevIdx = indexMap.get(diff);
          if (i - prevIdx > maxLength) {
              maxLength = i - prevIdx;
              startIdx = prevIdx + 1;
              endIdx = i;
          }
      } else {
          indexMap.set(diff, i);
      }
  }
  
  return startIdx !== -1 ? nums.slice(startIdx, endIdx + 1) : [];
}

// Example Usage:


const nums4 = [4, 5, 6, 4, 5, 5, 4, 6, 5, 4, 6];
const x4 = 4, y4 = 5;
console.log(longestEqualSubarray1(nums4, x4, y4)); // Output: [5, 6, 4, 5, 5, 4, 6, 5]

const num5 = [4, 5, 4, 6, 4, 5, 5, 4, 5, 6, 5, 4, 6, 1, 2, 7, 5, 4, 5, 4, 6, 4, 5, 4, 5, 5, 6, 5, 7, 8, 9, 5];
const x5 = 4, y5 =5;
console.log(longestEqualSubarray(num5, x5, y5));
console.log(longestEqualSubarray1(num5, x5, y5));
