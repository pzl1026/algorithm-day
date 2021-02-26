// 最小数组
function minArray (nums) {
  let left = 0, right = nums.length - 1;

  while(left < right) {
    let mid = left + parseInt((right - left) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      return Math.min(nums[left], nums[right]);
    }
  }
  return nums[left];
}

console.log(minArray([3, 4, 5, 1, 2]));