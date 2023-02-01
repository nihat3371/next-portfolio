import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 4.0 }}
      className="relative flex justify-center items-center "
    >
      <div className="text-3xl animate-pulse bg-white/5 text-[#fe2d5b]">
        Lookin for intership!
      </div>
    </motion.div>
  );
}

export default BackgroundCircles;
