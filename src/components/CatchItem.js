import "../styles/CatchItem.css";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import CatchList from "./CatchList";

const CatchItem = React.memo((props) => {
  const { item, dispatch } = props;

  useEffect(() => {
    console.log("render");
  }, []);

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
});

const variants = {
  false: { opacity: 1 },
  true: { opacity: 0.3 },
};

export default CatchItem;
