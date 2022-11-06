export function DaFare({ prop }) {
  return (
    <>
      <div className="m-3 flex flex-col">
        Da Fare : {prop.data.length} Task
        <div className="w-fit m-4 bg-yellow-200 rounded-lg">
          {prop.data.map((todos, index) => (
            <div className="font-semibold m-2" key={index}>
              {todos}
              <br />
              <div className="my-3">
                <button
                  className="bg-slate-300 ml-1 p-2 rounded"
                  onClick={prop.daFare}
                  id={todos}
                >
                  Completa
                </button>
                <button
                  className="bg-slate-300 ml-1 p-2 rounded"
                  onClick={prop.inCorso}
                  id={todos}
                >
                  In Progress
                </button>
                <button
                  className="bg-slate-300 ml-1 p-2 rounded"
                  onClick={prop.modifica}
                  id={todos}
                >
                  Revisiona
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
