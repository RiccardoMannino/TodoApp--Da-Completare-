import { useState, useRef } from "react";
import { DaFare } from "./DaFare";
import { Fatto } from "./Fatto";
import { Revisioni } from "./Revisioni";
import { InProgress } from "./InProgress";

export function Api() {
  const [data, setData] = useState([]);
  const [lista, setLista] = useState([]);
  const [revision, setRevision] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [form, setForm] = useState([]);

  const inputRef = useRef();
  const outputRef = useRef();

  // async function math() {
  //   const dati = await fetch(`http://numbersapi.com/random/math`);
  //   const response = await dati.text();
  //   setData((prev) => [...prev, response]);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return;
    }
    setData((prev) => [...prev, e.target.elements.form.value]);

    setForm("");
  }

  function modifica(e) {
    setRevision((prev) => [...prev, e.target.id]);
    setData(data.filter((prev) => prev !== e.target.id));
  }
  function mod(e) {
    setRevision((prev) => [...prev, e.target.id]);
    setInProgress(inProgress.filter((prev) => prev !== e.target.id));
  }

  function inCorso(e) {
    setInProgress((prev) => [...prev, e.target.id]);
    setData(data.filter((prev) => prev !== e.target.id));
  }

  function notDone(e) {
    setData((prev) => [...prev, e.target.id]);
    setInProgress(inProgress.filter((prev) => prev !== e.target.id));
  }
  function Done(e) {
    setLista((prev) => [...prev, e.target.id]);
    setInProgress(inProgress.filter((prev) => prev !== e.target.id));
  }

  function daFare(e) {
    setLista((prev) => [...prev, e.target.id]);
    setData(data.filter((prev) => prev !== e.target.id));
  }

  function rifai(e) {
    setData((prev) => [...prev, e.target.id]);
    setLista(lista.filter((prev) => prev !== e.target.id));
  }
  function progress(e) {
    setInProgress((prev) => [...prev, e.target.id]);
    setLista(lista.filter((prev) => prev !== e.target.id));
  }

  function modifichiamo(e) {
    e.preventDefault();
    if (outputRef.current.value === "") {
      return;
    }

    setData((prev) => [...prev, e.target.elements.modificalo.value]);
    setRevision(
      revision.filter((prev) => prev === !!e.target.elements.modificalo.value)
    );
  }

  function meanwhile(e) {
    e.preventDefault();
    setInProgress((prev) => [...prev, e.target.elements.modificalo.value]);
    setRevision(
      revision.filter((prev) => prev === !!e.target.elements.modificalo.value)
    );
  }

  return (
    <>
      <form className="ml-2 font-semibold" onSubmit={handleSubmit}>
        <label className="mb-2">Inserisci qui il tuo Promemoria</label>
        <br />
        <input
          className="p-1 rounded mt-2"
          type="text"
          name="form"
          value={form}
          ref={inputRef}
          onChange={(e) => setForm(e.target.value)}
        />{" "}
        <button className="bg-slate-300 ml-1 p-1 rounded" type="submit">
          Submit
        </button>
      </form>
      <div
        className="flex   justify-between font-semibold
      "
      >
        <DaFare prop={{ daFare, data, modifica, inCorso }} />
        <InProgress prop={{ inProgress, modifica, notDone, Done, mod }} />
        <Fatto prop={{ rifai, lista, progress }} />
        <Revisioni
          prop={{ revision, modifichiamo, data, outputRef, meanwhile }}
        />
      </div>
    </>
  );
}
