function minOperations(grid, x) {
    const mod = grid[0][0] % x;
    let nums = [];

    for (const row of grid) {
        for (const v of row) {
            if (v % x !== mod) {
                return -1;
            }
            nums.push(v);
        }
    }

    nums.sort((a, b) => a - b);
    const mid = nums[Math.floor(nums.length / 2)];
    let ans = 0;

    for (const v of nums) {
        ans += Math.abs(v - mid) / x;
    }

    return ans;
}
