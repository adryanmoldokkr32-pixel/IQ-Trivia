const SoloEngine = {
    calculateStarsNeeded(level) {
        // Formula: 5% increase per level starting from a base of 10
        return Math.floor(10 * Math.pow(1.05, level - 1));
    },

    checkConquest(currentCountry, targetCountry) {
        const countryData = COUNTRIES_MAP[currentCountry];
        return countryData.neighbors.includes(targetCountry);
    },

    getNextQuestions(category, currentLevel) {
        return QUESTIONS_DATABASE.filter(q => q.category === category && q.level <= currentLevel + 5);
    }
};