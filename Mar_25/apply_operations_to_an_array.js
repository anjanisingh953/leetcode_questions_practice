function applyOperations(numbers) {
    const length = numbers.length;

    // Perform the merging operation
    for (let i = 0; i < length - 1; ++i) {
        if (numbers[i] === numbers[i + 1]) {
            numbers[i] *= 2;  // Double the value
            numbers[i + 1] = 0; // Set next element to 0
        }
    }

    // Move nonzero elements to the front
    const result = Array(length).fill(0);
    let index = 0;
    for (const num of numbers) {
        if (num !== 0) {
            result[index++] = num;
        }
    }

    return result;
}
