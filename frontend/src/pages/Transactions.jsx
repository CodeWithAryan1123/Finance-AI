import React from 'react';
import { motion } from 'framer-motion';

const Transactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Transactions</h1>
      <p>Transaction management coming soon...</p>
    </motion.div>
  );
};

export default Transactions;