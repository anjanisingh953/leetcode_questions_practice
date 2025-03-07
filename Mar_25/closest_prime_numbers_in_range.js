function closestPrimes(left, right) {
    let cnt = 0;
    let st = new Array(right + 1).fill(false);
    let prime = new Array(right + 1);

    for (let i = 2; i <= right; i++) {
        if (!st[i]) {
            prime[cnt] = i;
            cnt++;
        }
        for (let j = 0; prime[j] <= right / i; j++) {
            st[prime[j] * i] = true;
            if (i % prime[j] === 0) {
                break;
            }
        }
    }

    let i = -1;
    let j = -1;

    for (let k = 0; k < cnt; k++) {
        if (prime[k] >= left && prime[k] <= right) {
            if (i === -1) {
                i = k;
            }
            j = k;
        }
    }

    let ans = [-1, -1];

    if (i === j || i === -1) {
        return ans;
    }

    let mi = 2147483647; // Equivalent to 1 << 30

    for (let k = i; k < j; k++) {
        let d = prime[k + 1] - prime[k];
        if (d < mi) {
            mi = d;
            ans[0] = prime[k];
            ans[1] = prime[k + 1];
        }
    }

    return ans;
}