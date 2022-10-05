import { useState } from "react";

export function Api() {
  const [data, setData] = useState([]);
  const [lista, setLista] = useState([]);

  async function math() {
    const dati = await fetch(`http://numbersapi.com/random/math`);
    const response = await dati.text();
    setData((prev) => [...prev, response]);
  }

  function handleButton(e) {
    setLista((prev) => [...prev, e.target.id]);
    setData(data.filter((prev) => prev !== e.target.id));
  }

  function rifai(e) {
    setData((prev) => [...prev, e.target.id]);
    setLista(lista.filter((prev) => prev !== e.target.id));
  }

  return (
    <>
      <button onClick={math}>Submit</button>
      <ul>
        <p>Da Fare</p>
        {data.map((todos, index) => (
          <li key={index}>
            {todos}
            <button onClick={handleButton} id={todos}>
              Completa
            </button>
          </li>
        ))}
      </ul>
      <ul>
        <p>Fatto</p>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={rifai} id={item}>
              Da Fare
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
