import { motion, AnimatePresence } from 'framer-motion';
import DefectCard from './DefectCard';

export default function DefectResults({ defects, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-md">
          <img 
            src={image} 
            alt="Uploaded phone" 
            className="w-full h-auto object-contain max-h-80"
          />
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detection Results</h3>
          
          {defects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-green-500 font-medium">No defects detected!</p>
              <p className="text-gray-500 mt-2">Your phone appears to be in good condition.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {defects.map((defect, index) => (
                  <DefectCard 
                    key={index}
                    defect={defect}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}