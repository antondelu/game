import React, { useMemo, useState } from "react";
const options = ["Piedra", "Papel", "Tijera"];
export default function Game() {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
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
        <label htmlFor=""> Jugador uno</label>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setPlayerOne(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Jugador dos</label>
        <input
          type="text"
          placeholder="Nombre"
          onChange={(e) => setPlayerTwo(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => setSelected("Piedra")}>Piedra</button>
        <button onClick={() => setSelected("Papel")}>Papel</button>
        <button onClick={() => setSelected("Tijera")}>Tijera</button>
      </div>
      <br />

      <button onClick={play}>jugar</button>
      <p>
        <strong> Jugardor 1 {playerOne}:</strong> {selected}
      </p>
      <p>
        {" "}
        <strong> Jugardor 2 {playerTwo}:</strong> {computedSelected}
      </p>
      <div>{result}</div>
    </div>
  );
}
