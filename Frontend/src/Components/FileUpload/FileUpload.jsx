import { FiUpload } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function FileUpload({ onImageUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => onImageUpload(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center bg-white"
    >
      <div className="flex flex-col items-center justify-center">
        <FiUpload className="w-12 h-12 text-indigo-500 mb-4" />
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Upload Phone Image
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Drag & drop or click to browse files
        </p>
        <label className="cursor-pointer">
          <span className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Select File
          </span>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </motion.div>
  );
}
