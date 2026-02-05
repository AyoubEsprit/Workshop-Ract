import { useState } from "react";

function NotesManager({ initialNotes }) {
  const [notes, setNotes] = useState(initialNotes);
  const [note, setNote] = useState("");

  const addNote = () => {
    const value = Number(note);

    if (value < 0 || value > 20 || isNaN(value)) return;

    setNotes([...notes, value]);
    setNote("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const average =
    notes.length === 0
      ? 0
      : (notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(2);

  return (
    <div>
      <h2>Notes</h2>

      <input
        type="number"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button onClick={addNote}>Ajouter</button>

      <ul>
        {notes.map((n, i) => (
          <li key={i}>
            {n} <button onClick={() => deleteNote(i)}>❌</button>
          </li>
        ))}
      </ul>

      <p>Moyenne : {average}</p>
    </div>
  );
}

export default NotesManager;
