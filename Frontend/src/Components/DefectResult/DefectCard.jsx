import { motion } from 'framer-motion';
import { FiAlertTriangle } from 'react-icons/fi';

export default function DefectCard({ defect, index }) {
  const severityColor = defect.confidence > 80 ? 'red' : defect.confidence > 60 ? 'orange' : 'yellow';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`border-l-4 border-${severityColor}-500 p-4 bg-${severityColor}-50 rounded-r-lg`}
    >
      <div className="flex items-start">
        <div className={`flex-shrink-0 text-${severityColor}-500`}>
          <FiAlertTriangle className="w-5 h-5" />
        </div>
        <div className="ml-3">
          <h4 className="text-sm font-medium text-gray-800">{defect.type}</h4>
          <p className="text-xs text-gray-500 mt-1">{defect.description}</p>
          <div className="mt-2">
            <div className="flex items-center">
              <span className="text-xs font-medium text-gray-500 mr-2">
                Confidence: {defect.confidence}%
              </span>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-${severityColor}-500`}
                  style={{ width: `${defect.confidence}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
