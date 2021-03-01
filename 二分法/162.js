// 寻找峰值
function findPeakElement (nums) {
  let left = 0, right = nums.length - 1;

  while(left < right) {
    let mid = left + parseInt((right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
}

const nums = [1, 2, 3, 1];

console.log(findPeakElement(nums));