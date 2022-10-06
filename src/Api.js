import { useState } from "react";
import { DaFare } from "./DaFare";
import { Fatto } from "./Fatto";

export function Api() {
  const [data, setData] = useState([]);
  const [lista, setLista] = useState([]);

  async function math() {
    const dati = await fetch(`http://numbersapi.com/random/math`);
    const response = await dati.text();
    setData((prev) => [...prev, response]);
  }

  function daFare(e) {
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
      <DaFare prop={{ daFare, data }} />
      <Fatto prop={{ rifai, lista }} />
    </>
  );
}
