import React, { useState } from "react";
import CatchItem from "./CatchItem";

export default function CatchList(props) {
  const { catchList, dispatch } = props;
  //   const [caught, setCaught] = useState(false);

  //   function handleDelete(e) {
  //     const id = Number(e.target.value);
  //     dispatch({ type: "delete-catch", payload: { id } });
  //   }

  //   function handleClick() {
  //     setCaught((prevState) => !prevState);
  //   }

  return (
    <div>
      this is the catch list
      {catchList.map((item) => (
        // <div>
        //   <img src={item.sprite} style={{ opacity: caught ? 1 : 0.3 }}></img>
        //   <button value={item.id} onClick={handleDelete}>
        //     Delete
        //   </button>
        //   <button onClick={handleClick}>Caught</button>
        // </div>
        <CatchItem item={item} dispatch={dispatch} />
      ))}
    </div>
  );
}
