import { useState } from "react";

function ColorBox({ initialColor, colorOptions }) {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    setColor(colorOptions[randomIndex]);
  };

  return (
    <div>
      <div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: color,
          marginBottom: "10px",
        }}
      ></div>

      <button onClick={changeColor}>Changer de couleur</button>
    </div>
  );
}

export default ColorBox;
