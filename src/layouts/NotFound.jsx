import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-7xl font-extrabold text-blue-600 mb-4 animate-bounce">404</div>
      <p className="text-2xl font-semibold text-gray-800 mb-2 animate-pulse">
        Page Not Found
      </p>
      <p className="text-gray-500 max-w-md mb-6 transition duration-300">
        The page you are trying to reach doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
