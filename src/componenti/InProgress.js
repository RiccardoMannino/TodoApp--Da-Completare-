export function InProgress({ prop }) {
  return (
    <>
      <div className="m-3 flex flex-col">
        In Corso : {prop.inProgress.length} Task
        <div className="w-fit m-4 bg-yellow-200 rounded-lg">
          {prop.inProgress.map((todos, index) => (
            <div className="font-semibold m-2" key={index}>
              {todos}
              <br />
              <div className="my-3">
                <button
                  className="bg-slate-300 ml-1 p-2 rounded"
                  onClick={prop.notDone}
                  id={todos}
                >
                  Da Fare
                </button>
                <button
                  className="bg-slate-300 ml-1 p-2 rounded"
                  onClick={prop.Done}
                  id={todos}
                >
                  Fatto
                </button>
                <button
                  className="bg-slate-300 ml-1 p-2 rounded"
                  onClick={prop.mod}
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
