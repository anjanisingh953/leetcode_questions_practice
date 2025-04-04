function countDays(days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);
    let ans = 0, last = 0;

    for (const [st, ed] of meetings) {
        if (last < st) {
            ans += st - last - 1;
        }
        last = Math.max(last, ed);
    }

    ans += days - last;
    return ans;
}
