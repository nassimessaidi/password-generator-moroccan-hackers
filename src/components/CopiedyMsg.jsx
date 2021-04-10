import React from "react";
import { motion } from "framer-motion";

const CopiedyMsg = () => {
  return (
    <motion.div
      className="absolute right-8 top-3 w-14 h-6"
      initial={{ opacity: 0.5, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0.1 }}
    >
      <h1 className="text-sm text-center text-gray-400">Copied</h1>
    </motion.div>
  );
};

export default CopiedyMsg;
