// 两数之和
//  使用map可以更好的记录之前的key和值，
function twoSum (nums, target) {
  let len = nums.length;
  const m = new Map();

  m.set(nums[0], 0);
  for(let i = 1; i < len; i++) {
    let other = target - nums[i];

    if (m.get(other) != undefined) {
      return [m.get(other), i];
    }
    m.set(nums[i], i);
  }
}

const nums = [3, 2, 4], target = 6;

console.log(twoSum(nums, target));