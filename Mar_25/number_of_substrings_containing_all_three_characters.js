function numberOfSubstrings(s) {
    let ans = 0;
    let d = [-1, -1, -1];

    for (let i = 0; i < s.length; i++) {
        d[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
        ans += Math.min(...d) + 1;
    }

    return ans;
}
