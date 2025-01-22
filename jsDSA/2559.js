function isVowel(char) {
    const vowels = "aeiouAEIOU";
    return vowels.includes(char);
}

var vowelStrings = function(words, queries) {
    const vowelStartEnd = words.map(word => {
        return isVowel(word[0]) && isVowel(word[word.length - 1]);
    })
    let count = 0;
    let cumulativeCount=vowelStartEnd.map(value => {
        if (value) count++;
        return count;
    });
    cumulativeCount.unshift(0)  
    console.log(cumulativeCount)
    return queries.map(query=>{
        return cumulativeCount[query[1]+1]-cumulativeCount[query[0]]
    })
};

console.log(vowelStrings(["aba","bcb","ece","aa","e"],[[0,2],[1,4],[1,1]]))

