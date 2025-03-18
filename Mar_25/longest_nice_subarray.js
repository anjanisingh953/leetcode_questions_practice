function longestNiceSubarray(nums) {
    let ans = 0, mask = 0;
    for (let l = 0, r = 0; r < nums.length; ++r) {
        while (mask & nums[r]) {
            mask ^= nums[l++];
        }
        mask |= nums[r];
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
}
