function putMarbles(weights, k) {
    const n = weights.length;
    const arr = [];

    // Calculate pairwise sums
    for (let i = 0; i < n - 1; i++) {
        arr.push(weights[i] + weights[i + 1]);
    }

    // Sort the array
    arr.sort((a, b) => a - b);

    let result = 0;
    for (let i = 0; i < k - 1; i++) {
        result += arr[n - i - 2] - arr[i];
    }

    return result;
}
