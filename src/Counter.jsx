import { useState } from "react";

function Counter({ initialCount, step }) {
  // state initialisé avec la prop initialCount
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return (
    <div>
      <h2>Compteur</h2>
      <p>Valeur actuelle : {count}</p>

      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
    </div>
  );
}

export default Counter;
