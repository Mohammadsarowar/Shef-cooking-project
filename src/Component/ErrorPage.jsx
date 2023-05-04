import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const ErrorPage = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
     <img
        src='https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=2000'
        alt="Error Image"
        className="w-64 h-64 mb-8 mx-auto mt-20"
      />
      <div className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Error</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! Something went wrong. Please try again later.
        </p>
        <Link to='/' className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Go back
        </Link>
      </div>
      <div className="bg-gray-100 py-4">
        <p className="text-sm text-gray-600 text-center">
          © 2023 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
