// 最长升序子序列(难)
// 还有一种动态规划方法
function lengthOfLis (arr) {
  if (arr.length <= 1) {
    return n;
  }
  let len = 0, n = arr.length;
  let d = new Array(n);

  d[0] = arr[0];
  for(let i = 1; i < n; i++) {
    if (arr[i] > d[len]) {
      ++len;
      d[len] = arr[i];
    } else {
      let l = 0, r = len;

      while(l < r) {
        let mid = l + ((r - l) >> 1);

        if (d[mid] < arr[i]) {
          l = mid + 1;
        } else {
          r = mid;
        }
      }

      d[l] = arr[i];
    }
  }
  return len + 1;
}

console.log(lengthOfLis([10, 9, 2, 5, 3, 7, 101, 18]));