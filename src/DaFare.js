export function DaFare({ prop }) {
  return (
    <>
      <ul>
        <p>Da Fare : {prop.data.length} Task</p>
        {prop.data.map((todos, index) => (
          <li key={index}>
            {todos}
            <button onClick={prop.daFare} id={todos}>
              Completa
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
