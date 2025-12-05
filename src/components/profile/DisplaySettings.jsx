import React from "react";

function DisplaySettings({ isDarkMode, onToggle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-blue-900 mb-4 border-b pb-2">Display Settings</h2>
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-700 font-medium">Toggle Dark Mode</span>
        
        <div className="flex items-center gap-3">
          {/* Custom Toggle Switch */}
          <button 
            onClick={onToggle}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </button>
          <span className="text-sm text-gray-600">{isDarkMode ? "Dark" : "Light"}</span>
        </div>
      </div>
    </div>
  );
}

export default DisplaySettings;