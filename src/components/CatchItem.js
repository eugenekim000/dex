import "../styles/CatchItem.css";
import React from "react";
import { motion } from "framer-motion";

export default function CatchItem(props) {
  const { item, dispatch } = props;

  function handleDelete(e) {
    const id = Number(e.target.value);
    dispatch({ type: "delete-catch", payload: { id } });
  }

  function handleClick(e) {
    console.log(props, "this is caught pased");
    const id = Number(e.target.value);
    dispatch({ type: "toggle-catch", payload: { id } });
  }

  return (
    <div className="catch-pokemon-container">
      <motion.div
        initial={`${item.caught}`}
        animate={`${!item.caught}`}
        variants={variants}
      >
        <img src={item.sprite}></img>
      </motion.div>

      <div
        className="
      catch-button-container"
      >
        <button value={item.id} onClick={handleDelete}>
          Delete
        </button>
        <button value={item.id} onClick={handleClick}>
          Caught
        </button>
      </div>
    </div>
  );
}

const variants = {
  true: { opacity: 1 },
  false: { opacity: 0.3 },
};
