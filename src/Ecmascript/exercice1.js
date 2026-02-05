const findLongestWord = (words) => {
  const mapped = words.map(word => ({
    mot: word,
    longueur: word.length
  }));

  const longest = mapped.reduce((max, current) =>
    current.longueur > max.longueur ? current : max
  );

  return longest;
};


const words = ["react", "javascript", "vite", "node"];
console.log("Exercice 1:", findLongestWord(words));
