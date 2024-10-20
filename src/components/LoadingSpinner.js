import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen bg-indigo-300	">
    <div className="sk-chase">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  </div>
);

export default LoadingSpinner;
