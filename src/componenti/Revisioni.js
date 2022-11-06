export function Revisioni({ prop }) {
  return (
    <>
      <div className=" ml-2 mr-2">
        Modifica Task: {prop.revision.length}
        {prop.revision.map((rev, index) => (
          <form onSubmit={prop.modifichiamo} key={index}>
            <input
              type="text"
              name="modificalo"
              defaultValue={rev}
              ref={prop.outputRef}
              className=" ml-1 p-2 rounded my-2"
            ></input>
            <button type="submit" className="bg-slate-300 mx-3 p-2 rounded">
              Rifai
            </button>

            <br />
          </form>
        ))}
      </div>
    </>
  );
}
