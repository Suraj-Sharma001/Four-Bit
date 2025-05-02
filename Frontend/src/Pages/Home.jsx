import { useState } from 'react';
import Header from '../Components/Header/Header.jsx';
import Tabs from '../Components/Tabs/Tabs.jsx';
import FileUpload from '../Components/FileUpload/FileUpload.jsx';
import CameraCapture from '../Components/CameraCapture/CameraCapture.jsx';
import DefectResults from '../Components/DefectResult/DefectResult.jsx';
import Loading from '../Components/Loading/Loading.jsx';

export default function Home() {
  const [activeTab, setActiveTab] = useState('upload');
  const [image, setImage] = useState(null);
  const [defects, setDefects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDefectDetection = async (img) => {
    setIsLoading(true);
    // Your ML model integration here
    // For demonstration, we will use a mock function to simulate defect detection
    // In a real-world scenario, you would send the image to your backend for processing
    // and receive the defect results.
    

    setTimeout(() => {
      setDefects(mockDefects);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="mt-8">
        {activeTab === 'upload' ? (
          <FileUpload 
            onImageUpload={(img) => {
              setImage(img);
              handleDefectDetection(img);
            }}
          />
        ) : (
          <CameraCapture 
            onCapture={(img) => {
              setImage(img);
              handleDefectDetection(img);
            }}  
          />
        )}
      </div>

      {isLoading && <Loading />}

      {defects.length > 0 && !isLoading && (
        <DefectResults defects={defects} image={image} />
      )}
    </div>
  );
}

const mockDefects = [
  { type: 'Cracked Screen', confidence: 92, description: 'Multiple cracks detected on display surface' },
  { type: 'Water Damage', confidence: 87, description: 'Liquid contact indicators triggered' }
];