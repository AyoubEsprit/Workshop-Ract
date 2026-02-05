const notes = [40, 55, 30, 80, 45];
const total = notes
  .map(note => (note < 50 ? note + 15 : note))
  .filter(note => note > 50)
  .reduce((sum, note) => sum + note, 0);
console.log("Exercice 3:", total);
