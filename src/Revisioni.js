export function Revisioni({ prop }) {
  return (
    <>
      <ul>
        <p>Modifica Task: {prop.revision.length}</p>
        {prop.revision.map((rev, index) => (
          <>
            <input type="text" value={rev}></input>
            <br />
          </>
        ))}
      </ul>
    </>
  );
}
