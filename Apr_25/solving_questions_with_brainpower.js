function mostPoints(questions) {
    const n = questions.length;
    const f = new Array(n + 1).fill(0);
    
    for (let i = n - 1; i >= 0; --i) {
        const [p, b] = questions[i]; // Extract points and brainpower
        const j = i + b + 1; // Next question index after skipping b questions
        f[i] = Math.max(f[i + 1], p + (j > n ? 0 : f[j]));
    }
    
    return f[0];
}
