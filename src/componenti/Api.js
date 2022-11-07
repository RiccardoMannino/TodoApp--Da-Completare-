import { DaFare } from "./DaFare";
import { Fatto } from "./Fatto";
import { Revisioni } from "./Revisioni";
import { InProgress } from "./InProgress";
import { useTodo } from "../hooks/useTodo";

export function Api() {
  const {
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
  } = useTodo();
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
          onChange={handleChange}
        />{" "}
        <button className="bg-slate-300 ml-1 p-1 rounded" type="submit">
          Submit
        </button>
      </form>
      <div
        className="flex justify-between font-semibold
      "
      >
        <DaFare prop={{ daFare, data, modifica, inCorso }} />
        <InProgress prop={{ inProgress, modifica, notDone, Done, mod }} />
        <Fatto prop={{ rifai, lista, progress }} />
        <Revisioni
          prop={{ revision, modifichiamo, data, meanwhile, outputRef }}
        />
      </div>
    </>
  );
}
