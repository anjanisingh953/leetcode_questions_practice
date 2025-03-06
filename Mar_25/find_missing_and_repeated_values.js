function findMissingAndRepeatedValues(grid) {
    const n = grid.length;
    const count = new Array(n * n + 1).fill(0);
    const result = new Array(2).fill(0);

    for (const row of grid) {
        for (const num of row) {
            if (++count[num] === 2) {
                result[0] = num; // Repeated number
            }
        }
    }

    for (let num = 1; ; ++num) {
        if (count[num] === 0) {
            result[1] = num; // Missing number
            return result;
        }
    }
}
