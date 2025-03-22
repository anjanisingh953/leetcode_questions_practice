function countCompleteComponents(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    const visited = Array(n).fill(false);

    // Build adjacency list
    edges.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    function dfs(node) {
        visited[node] = true;
        let nodesCount = 1;
        let edgesCount = graph[node].length;

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                const [childNodes, childEdges] = dfs(neighbor);
                nodesCount += childNodes;
                edgesCount += childEdges;
            }
        }
        return [nodesCount, edgesCount];
    }

    let count = 0;
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const [nodes, edges] = dfs(i);
            if (nodes * (nodes - 1) === edges) {
                count++;
            }
        }
    }

    return count;
}
