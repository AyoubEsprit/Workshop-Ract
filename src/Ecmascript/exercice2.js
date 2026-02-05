const countOccurrences = (arr) => {
  return arr
    .flat()
    .reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
};
const input = [
  ["a", "b", "c"],
  ["a", "c"],
  ["b", "c", "c"]
];
console.log("Exercice 2:", countOccurrences(input));