export default function Tabs({ activeTab, setActiveTab }) {
    return (
      <div className="flex border-b border-gray-200">
        <button
          className={`py-4 px-6 font-medium text-sm focus:outline-none ${
            activeTab === 'upload'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-indigo-500'
          }`}
          onClick={() => setActiveTab('upload')}
        >
          Upload Image
        </button>
        <button
          className={`py-4 px-6 font-medium text-sm focus:outline-none ${
            activeTab === 'camera'
              ? 'text-indigo-600 border-b-2 border-indigo-600'
              : 'text-gray-500 hover:text-indigo-500'
          }`}
          onClick={() => setActiveTab('camera')}
        >
          Use Camera
        </button>
      </div>
    );
  } 