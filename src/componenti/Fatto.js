export function Fatto({ prop }) {
  return (
    <>
      <div className="w-56 m-4 bg-yellow-200 rounded-lg p-1">
        <p>Fatte : {prop.lista.length} Task</p>
        {prop.lista.map((item, index) => (
          <div key={index}>
            {item}
            <br />
            <button
              className="bg-slate-300 my-2 p-1 rounded"
              onClick={prop.rifai}
              id={item}
            >
              Da Fare
            </button>
            <button
              className="bg-slate-300 my-2 ml-2 p-1 rounded"
              onClick={prop.progress}
              id={item}
            >
              In Progress
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
