// 经典二分查找

// function binarySearch(nums, target) {
//   let left = 0, right = ...;

//   while(...) {
//       int mid = left + (right - left) / 2;
//       if (nums[mid] == target) {
//           ...
//       } else if (nums[mid] < target) {
//           left = ...
//       } else if (nums[mid] > target) {
//           right = ...
//       }
//   }
//   return ...;
// }

function binarySearch (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    let mid = left + parseInt((right - left) / 2);

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
const nums = [-1, 0, 3, 5, 9, 12], target = 9;

const index = binarySearch(nums, target);

console.log(index); 