function findAllRecipes(recipes, ingredients, supplies) {
    const graph = {};  // Adjacency list
    const indeg = {};  // In-degree map

    // Build the graph and in-degree count
    recipes.forEach((recipe, i) => {
        ingredients[i].forEach((ingredient) => {
            if (!graph[ingredient]) graph[ingredient] = [];
            graph[ingredient].push(recipe);
        });
        indeg[recipe] = ingredients[i].length;
    });

    let queue = [...supplies]; // Queue initialized with supplies
    const result = [];

    while (queue.length > 0) {
        let n = queue.length;
        while (n-- > 0) {
            const item = queue.shift();
            if (graph[item]) {
                graph[item].forEach((recipe) => {
                    indeg[recipe]--;
                    if (indeg[recipe] === 0) {
                        result.push(recipe);
                        queue.push(recipe);
                    }
                });
            }
        }
    }
    return result;
}
