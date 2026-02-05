import Counter from "./Counter";
import ListManager from "./ListManager";
import ColorBox from "./ColorBox";

function App() {
  return (
    <div>
      <h1>Atelier React - State & Props</h1>

      <h2>Exercice 1 : Compteur</h2>
      <Counter initialCount={0} step={1} />
      <Counter initialCount={10} step={5} />

      <hr />

      <h2>Exercice 2 : Gestion de liste</h2>
      <ListManager
        initialItems={["React", "Angular", "VueJs"]}
        placeholder="Ajouter une technologie"
      />

      <hr />

      <h2>Exercice 3 : Changement de couleur</h2>
      <ColorBox
        initialColor="#3498db"
        colorOptions={["#e74c3c", "#2ecc71", "#9b59b6"]}
      />
    </div>
  );
}

export default App;
