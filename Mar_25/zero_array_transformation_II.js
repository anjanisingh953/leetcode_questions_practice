function minZeroArray(nums, queries) {
    const n = nums.length, m = queries.length;
    const d = Array(n + 1).fill(0);
    let l = 0, r = m + 1;

    const check = (k) => {
        d.fill(0);
        for (let i = 0; i < k; ++i) {
            const [left, right, val] = queries[i];
            d[left] += val;
            d[right + 1] -= val;
        }
        let sum = 0;
        for (let i = 0; i < n; ++i) {
            sum += d[i];
            if (nums[i] > sum) {
                return false;
            }
        }
        return true;
    };

    while (l < r) {
        const mid = Math.floor((l + r) / 2);
        if (check(mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return l > m ? -1 : l;
}
