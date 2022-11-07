import { useState, useRef, useEffect } from "react";
export function useTodo() {
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

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current.value === "") {
      return;
    }
    setData((prev) => [...prev, e.target.elements.form.value]);

    setForm("");
  }

  function handleChange(e) {
    setForm(e.target.value);
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
      return outputRef.current.focus();
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

  return {
    data,
    lista,
    revision,
    inProgress,
    form,
    handleSubmit,
    modifica,
    mod,
    inCorso,
    notDone,
    Done,
    daFare,
    rifai,
    progress,
    modifichiamo,
    meanwhile,
    inputRef,
    outputRef,
    handleChange,
  };
}
