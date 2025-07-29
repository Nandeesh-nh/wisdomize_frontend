import React from 'react';
import { Loader2 } from 'lucide-react';

const SectionLoader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-500">
      <Loader2 className="animate-spin h-8 w-8 text-blue-600 mb-3" />
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default SectionLoader;
