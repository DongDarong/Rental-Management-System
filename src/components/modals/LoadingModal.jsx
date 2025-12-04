import React from "react";

function LoadingModal({ 
  isOpen, 
  message = "Processing, please wait..." 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-xl shadow-2xl p-8 flex flex-col items-center justify-center min-w-[250px] animate-fade-in">
        
        {/* Animated Spinner */}
        <div className="relative mb-4">
            <div className="w-12 h-12 rounded-full absolute border-4 border-gray-200"></div>
            <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-teal-600 border-t-transparent"></div>
            <div className="w-12 h-12"></div> {/* Spacer */}
        </div>

        {/* Message */}
        <h3 className="text-lg font-semibold text-gray-800 mt-2 animate-pulse">
          {message}
        </h3>
      </div>
    </div>
  );
}

export default LoadingModal;