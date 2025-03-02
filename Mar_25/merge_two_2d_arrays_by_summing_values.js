function mergeArrays(nums1, nums2) {
    const size = 1001;
    const count = new Array(size).fill(0);

    for (const [index, value] of nums1) {
        count[index] += value;
    }
    for (const [index, value] of nums2) {
        count[index] += value;
    }

    const result = [];
    for (let i = 0; i < size; ++i) {
        if (count[i] > 0) {
            result.push([i, count[i]]);
        }
    }

    return result;
}
