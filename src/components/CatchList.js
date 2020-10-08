import React from "react";

export default function CatchList(props) {
  const { catchList, dispatch } = props;
  console.log(catchList);

  function handleDelete(e) {
    const id = Number(e.target.value);
    dispatch({ type: "delete-catch", payload: { id: id } });
  }

  return (
    <div>
      this is the catch list
      {catchList.map((item) => (
        <div>
          <span>{item}</span>
          <button value={item} onClick={handleDelete}>
            Delete
          </button>
          <button>Caught</button>
        </div>
      ))}
    </div>
  );
}
