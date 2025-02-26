function maxAbsoluteSum(nums) {
    let maxSum = 0;
    let minSum = 0;
    let result = 0;

    for (const num of nums) {
        maxSum = Math.max(maxSum, 0) + num;
        minSum = Math.min(minSum, 0) + num;
        result = Math.max(result, maxSum, -minSum);
    }

    return result;
}
