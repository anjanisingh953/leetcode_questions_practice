function numberOfAlternatingGroups(colors, k) {
    const n = colors.length;
    let ans = 0;
    let cnt = 0;

    for (let i = 0; i < n << 1; ++i) {
        if (i && colors[i % n] === colors[(i - 1) % n]) {
            cnt = 1;
        } else {
            cnt++;
        }
        ans += i >= n && cnt >= k ? 1 : 0;
    }

    return ans;
}
