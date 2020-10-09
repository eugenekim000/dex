import "../styles/CatchItem.css";
import React, { useState } from "react";

export default function CatchItem(props) {
  const [caught, setCaught] = useState(false);
  const { item, dispatch } = props;

  function handleDelete(e) {
    const id = Number(e.target.value);
    dispatch({ type: "delete-catch", payload: { id } });
  }

  function handleClick() {
    setCaught((prevState) => !prevState);
  }
  return (
    <div className="catch-pokemon-container">
      <img src={item.sprite} style={{ opacity: caught ? 1 : 0.3 }}></img>
      <div
        className="
      catch-button-container"
      >
        <button value={item.id} onClick={handleDelete}>
          Delete
        </button>
        <button onClick={handleClick}>Caught</button>
      </div>
    </div>
  );
}
