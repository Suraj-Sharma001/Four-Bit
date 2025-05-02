import { FiCamera } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CameraCapture({ onCapture }) {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        setError("Unable to access camera");
        console.error(err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  const captureImage = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    onCapture(canvas.toDataURL("image/png"));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-md"
    >
      {error ? (
        <div className="text-red-500 text-center p-8">{error}</div>
      ) : (
        <>
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-auto max-h-96 object-contain"
            />
            <button
              onClick={captureImage}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
            >
              <FiCamera className="w-6 h-6" />
            </button>
          </div>
          <div className="p-4 text-center text-sm text-gray-500">
            Position your phone in the frame and click the camera button
          </div>
        </>
      )}
    </motion.div>
  );
}
