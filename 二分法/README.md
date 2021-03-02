二分法常用代码模版与常用逻辑
```javascript
  function search(nums) {
    let left = 0, right = nums.length -1;
    
    // 这边while是否需要=, 看题目是需要求的是索引还是目标值，索引=
    while(left < right>) {
       let mid = left + parseInt((right - left) / 2);
      //  查找目标值索引，通过target == nums[mid]判断，返回 mid
       if（target >= nums[mid]）{
         return mid;
       }

      // 根据mid判断，left和right的指针，以下是最简单的判断逻辑，如果复杂逻辑，则需要在内部还需判断，参考33.js
      if (nums[mid] > nums[mid + 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }

    }

    // 返回值，如果是目标值，返回nums[left]
    return nums[left];
    // 如果是判断索引是否存在则返回left, mid,或这-1
    return -1;
  }
```