const IQMatrixEngine = {
    totalTests: 33,
    
    calculateIQ(results) {
        let score = 100; // Base IQ
        results.forEach(res => {
            if(res.correct) {
                score += (3 * res.difficultyMultiplier); // High weight for complex logic
            } else {
                score -= 1;
            }
        });
        return Math.min(200, Math.max(70, score)); // Range 70-200
    },

    getPatternTest(index) {
        // Logic for generating visual/abstract patterns for the 33 tests
        return { id: index, type: "matrix-pattern", difficulty: (index/33) + 1 };
    }
};