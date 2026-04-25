const DuoEngine = {
    matchmakingTime: 10000,
    botResponseTime: 4000,

    startSearch(callback) {
        console.log("Searching for opponent...");
        setTimeout(() => {
            const isBot = Math.random() > 0.3;
            callback({ 
                opponent: isBot ? "BionicBot_v4" : "Sovereign_User_" + Math.floor(Math.random()*1000), 
                isBot: isBot 
            });
        }, this.matchmakingTime);
    },

    botLogic(correctIndex) {
        // Bot responds after 4s with 33% accuracy
        return new Promise(resolve => {
            setTimeout(() => {
                const isCorrect = Math.random() < 0.33;
                const chosen = isCorrect ? correctIndex : (correctIndex + 1) % 4;
                resolve(chosen);
            }, this.botResponseTime);
        });
    },

    calculateDifficulty(countriesCount) {
        // Harder questions as territory expands
        return Math.min(100, Math.floor(countriesCount / 2) + 1);
    },

    checkConquestOverlap(answers) {
        // 2/3 correct to take a country from another player
        const correctCount = answers.filter(a => a.isCorrect).length;
        return correctCount >= 2;
    }
};