function charFrequencyMap(str) {
  return str.split("").reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
  }, {});
}

var wordSubsets = function (words1, words2) {
  const output = [];

  const combinedMap = {};
  for (let word of words2) {
    const freqMap = charFrequencyMap(word);
    for (let char in freqMap) {
      combinedMap[char] = Math.max(combinedMap[char] || 0, freqMap[char]);
    }
  }
  for (let word of words1) {
    const freqMap = charFrequencyMap(word);
    let isSubset = true;

    // Verify if freqMap satisfies combinedMap
    for (let char in combinedMap) {
      if ((freqMap[char] || 0) < combinedMap[char]) {
        isSubset = false;
        break;
      }
    }

    if (isSubset) {
      output.push(word);
    }
  }
  return output;
};

console.log(
  wordSubsets(["acaac", "cccbb", "aacbb", "caacc", "bcbbb"], ["c", "cc", "b"])
);


//alternate solution using hashTable

const isSubSet = (word, hash) => word.every((v, i) => v >= hash[i]);
