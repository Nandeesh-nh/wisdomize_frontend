import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 30); // adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="text-3xl md:text-5xl font-bold text-blue-700 mb-6 animate-pulse">
        Loading Wisdomize...
      </div>
      <div className="text-4xl font-mono text-gray-700">
        {progress}%
      </div>

      {/* Progress Bar (optional) */}
      <div className="w-2/3 h-2 mt-6 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
