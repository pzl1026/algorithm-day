// 最长升序子序列
// 还有一种二分法方法
function lengthOfLis (arr) {
  if (arr.length == 0) {
    return 0;
  }
  let dp = new Array(arr.length);

  dp[0] = 1;
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    dp[i] = 1;
    for(let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max =  Math.max(max, dp[i]);
  }

  return max;
}

console.log(lengthOfLis([10, 9, 2, 5, 3, 7, 101, 18]));