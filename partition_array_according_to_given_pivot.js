function pivotArray(nums, pivot) {
    const result = [];

    // Add elements smaller than pivot
    for (const num of nums) {
        if (num < pivot) {
            result.push(num);
        }
    }

    // Add elements equal to pivot
    for (const num of nums) {
        if (num === pivot) {
            result.push(num);
        }
    }

    // Add elements greater than pivot
    for (const num of nums) {
        if (num > pivot) {
            result.push(num);
        }
    }

    return result;
}
