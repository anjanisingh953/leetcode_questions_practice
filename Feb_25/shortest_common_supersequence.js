function shortestCommonSupersequence(string1, string2) {
    const length1 = string1.length;
    const length2 = string2.length;

    // Create a 2D array to store the longest common subsequence (LCS) lengths
    const dp = Array.from({ length: length1 + 1 }, () => Array(length2 + 1).fill(0));

    // Fill the DP table
    for (let i = 1; i <= length1; ++i) {
        for (let j = 1; j <= length2; ++j) {
            if (string1[i - 1] === string2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    let result = [];
    let i = length1, j = length2;

    // Construct the shortest common supersequence
    while (i > 0 || j > 0) {
        if (i === 0) {
            result.push(string2[--j]);
        } else if (j === 0) {
            result.push(string1[--i]);
        } else {
            if (dp[i][j] === dp[i - 1][j]) {
                result.push(string1[--i]);
            } else if (dp[i][j] === dp[i][j - 1]) {
                result.push(string2[--j]);
            } else {
                result.push(string1[--i]);
                --j;
            }
        }
    }

    return result.reverse().join('');
}
