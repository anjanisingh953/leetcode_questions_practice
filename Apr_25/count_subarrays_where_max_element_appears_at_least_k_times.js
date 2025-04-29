function countSubarrays(nums, k) {
    const mx = Math.max(...nums);
    const n = nums.length;
    let cnt = 0, j = 0;
    let ans = 0;

    for (const x of nums) {
        while (j < n && cnt < k) {
            if (nums[j] === mx) {
                cnt++;
            }
            j++;
        }
        if (cnt < k) {
            break;
        }
        ans += n - j + 1;
        if (x === mx) {
            cnt--;
        }
    }

    return ans;
}
