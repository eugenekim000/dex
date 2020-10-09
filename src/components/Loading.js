import React from "react";
import icon from "../assets/pokeball-icon.png";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      animate={{
        scale: [0.5, 0.6, 0.6, 0.5, 0.5],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        loop: Infinity,
        duration: 2,
      }}
    >
      <img src={icon} alt="catch list" />
    </motion.div>
  );
}
