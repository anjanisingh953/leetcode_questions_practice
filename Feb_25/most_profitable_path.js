function mostProfitablePath(edges, bob, amount) {
    const n = edges.length + 1;
    const graph = Array.from({ length: n }, () => []);
    const ts = new Array(n).fill(n);
    let ans = Number.MIN_SAFE_INTEGER;

    // Construct the adjacency list
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    function dfs1(node, parent, time) {
        if (node === 0) {
            ts[node] = Math.min(ts[node], time);
            return true;
        }
        for (const neighbor of graph[node]) {
            if (neighbor !== parent && dfs1(neighbor, node, time + 1)) {
                ts[neighbor] = Math.min(ts[neighbor], time + 1);
                return true;
            }
        }
        return false;
    }

    function dfs2(node, parent, time, value) {
        if (time === ts[node]) {
            value += Math.floor(amount[node] / 2);
        } else if (time < ts[node]) {
            value += amount[node];
        }

        if (graph[node].length === 1 && graph[node][0] === parent) {
            ans = Math.max(ans, value);
            return;
        }

        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                dfs2(neighbor, node, time + 1, value);
            }
        }
    }

    dfs1(bob, -1, 0);
    ts[bob] = 0;
    dfs2(0, -1, 0, 0);

    return ans;
}
