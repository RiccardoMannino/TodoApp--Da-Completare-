import { useRef, useState } from "react";

export function Revisioni({ prop }) {
  const modRef = useRef();

  return (
    <>
      <ul>
        <p>Modifica Task: {prop.revision.length}</p>
        {prop.revision.map((rev, index) => (
          <>
            <li key={index}>
              <form onSubmit={prop.modifichiamo}>
                <input
                  ref={modRef}
                  type="text"
                  name="modificalo"
                  defaultValue={rev}
                ></input>
                <button type="submit">Modifica</button>
                <br />
              </form>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
