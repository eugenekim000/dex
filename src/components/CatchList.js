import React from "react";
import CatchItem from "./CatchItem";
import "../styles/CatchList.css";

export default function CatchList(props) {
  const { catchList, dispatch } = props;

  return (
    <div className="catch-list-container">
      {catchList.map((item) => (
        <CatchItem item={item} dispatch={dispatch} key={item.timestamp} />
      ))}
    </div>
  );
}
