import { useState } from "react";

function ListManager({ initialItems, placeholder }) {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    if (newItem.trim() === "") return;

    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <div>
      <h2>Liste</h2>

      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder={placeholder}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button>Ajouter</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListManager;
