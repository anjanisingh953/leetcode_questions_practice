function minimumIndex(nums) {
    let x = 0, cnt = 0;
    const freq = new Map();
    
    for (const v of nums) {
        freq.set(v, (freq.get(v) || 0) + 1);
        if (freq.get(v) > cnt) {
            x = v;
            cnt = freq.get(v);
        }
    }
    
    let cur = 0;
    for (let i = 1; i <= nums.length; ++i) {
        if (nums[i - 1] === x) {
            ++cur;
            if (cur * 2 > i && (cnt - cur) * 2 > nums.length - i) {
                return i - 1;
            }
        }
    }
    return -1;
}
