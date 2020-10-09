import React, { useState } from "react";
import CatchItem from "./CatchItem";

export default function CatchList(props) {
  const { catchList, dispatch } = props;

  return (
    <div>
      this is the catch list
      {catchList.map((item) => (
        <CatchItem item={item} dispatch={dispatch} />
      ))}
    </div>
  );
}
