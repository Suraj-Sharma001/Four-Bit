import { motion } from 'framer-motion';
import { FiLoader } from 'react-icons/fi';

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-8 rounded-xl shadow-xl text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="inline-block mb-4"
        >
          <FiLoader className="w-12 h-12 text-indigo-600" />
        </motion.div>
        <h3 className="text-xl font-medium text-gray-800">Analyzing Image</h3>
        <p className="text-gray-600 mt-2">Detecting phone defects...</p>
      </div>
    </motion.div>
  );
}