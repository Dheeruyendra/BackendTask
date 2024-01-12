const analyzePostContent = (content) => {
    const words = content.split(" ");

    //calculating the word count and average word length
    const wordCount = words.length;
    const averageWordLength =
        words.reduce((total, word) => total + word.length, 0) / wordCount;

    //returning calculated analysis
    return { wordCount, averageWordLength };
};

module.exports = { analyzePostContent };
