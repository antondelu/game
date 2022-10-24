import React, { useMemo, useState } from "react";
const options = ["Piedra", "Papel", "Tijera"];
export default function Game() {
  const [selected, setSelected] = useState("");
  const [computedSelected, setComputedSelected] = useState("");
  const play = () => {
    if (!selected) {
      return;
    }
    const computerChoiceIndex = Math.floor(Math.random() * options.length);
    setComputedSelected(options[computerChoiceIndex]);
  };
  const result = useMemo(() => {
    if (computedSelected === selected) {
      return `Empate`;
    } else {
      if (
        (computedSelected === "Piedra" && selected === "Tijera") ||
        (computedSelected === "Papel" && selected === "Piedra") ||
        (computedSelected === "Tijeta" && selected === "papel")
      ) {
        return "Gano la computadora";
      }
      return "Ganaste!";
    }
  }, [computedSelected, selected]);
  return (
    <div>
      <div>
        <button onClick={() => setSelected("Piedra")}>Piedra</button>
        <button onClick={() => setSelected("Papel")}>Papel</button>
        <button onClick={() => setSelected("Tijera")}>Tijera</button>
      </div>
      <br />

      <button onClick={play}>jugar</button>
      <p>Seleccionaste: {selected}</p>
      <p>La computadora selecciono: {computedSelected}</p>
      <div>{result}</div>
    </div>
  );
}
