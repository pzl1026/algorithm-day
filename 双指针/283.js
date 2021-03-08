// 移动0

function moveZore (nums) {
  let [n, left, right] = [nums.length, 0, 0];

  while(right < n) {
    if (nums[right] != 0) {
      let temp = nums[right];

      nums[right] =  nums[left];
      nums[left] =  temp;
      left++;
    }
    right++;
  }
  return nums;
}

const nums = [0, 1, 0, 3, 12];

console.log(moveZore(nums));