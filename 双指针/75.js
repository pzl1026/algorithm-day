// 颜色分类

// 解题思路，头尾指针，像中间移动，遇到0，将left++，遇到2将right--，同时将i也--

function sortColor (nums) {
  let left = 0;

  let right = nums.length - 1;

  for (let i = left; i < right; i++ ) {
    if (nums[i] == 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    } else if(nums[i] == 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      // 这里和 0 不同是因为从左到右
      // 左边不可能还有我们忽略的 0，右边却有 2
      i--;
    }
  }

  return nums;
}
const nums = [2, 0, 2, 1, 1, 0];

console.log(sortColor(nums));