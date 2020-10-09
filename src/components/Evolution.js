import React from "react";

export default function Evolution(props) {
  const { evolution } = props;
  return (
    <div>
      <span>{evolution.name}</span>
      <span>{evolution.level || evolution.trigger}</span>
    </div>
  );
}
