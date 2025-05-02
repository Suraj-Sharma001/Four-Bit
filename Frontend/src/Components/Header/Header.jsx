import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold text-indigo-800 mb-2">PhoneDefect</h1>
      <p className="text-lg text-indigo-600">
        Detect phone defects with AI-powered analysis
      </p>
    </motion.header>
  );
}