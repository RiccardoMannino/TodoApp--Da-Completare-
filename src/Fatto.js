export function Fatto({ prop }) {
  return (
    <>
      <ul>
        <p>Fatte : {prop.lista.length} Task</p>
        {prop.lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={prop.rifai} id={item}>
              Da Fare
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
