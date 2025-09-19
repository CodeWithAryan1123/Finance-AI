import React from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Analytics</h1>
      <p>Advanced analytics coming soon...</p>
    </motion.div>
  );
};

export default Analytics;