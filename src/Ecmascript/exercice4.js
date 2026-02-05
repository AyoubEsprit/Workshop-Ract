let lastId = 0;
const Tab = [];
const addElement = (name, age) => {
  lastId++;
  Tab.push({
    id: lastId,
    name,
    age
  });
};
addElement("Ali", 22);
addElement("Sami", 25);
addElement("Nour", 20);
console.log("Exercice 4 - Tab:", Tab);
