import React, { useState } from "react";

function ChangePassword({ passwords, onChange, onUpdate }) {
  // State to track visibility of each field independently
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  // Helper to toggle specific field
  const toggleVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Reusable Eye Icons (No library needed)
  const EyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );

  const EyeSlashIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">Change Password</h2>
      
      <div className="space-y-4">
        
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
          <div className="relative">
            <input
              type={showPassword.current ? "text" : "password"}
              name="current"
              value={passwords.current}
              onChange={onChange}
              className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <button
              type="button"
              onClick={() => toggleVisibility('current')}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700 focus:outline-none"
            >
              {showPassword.current ? EyeSlashIcon : EyeIcon}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <div className="relative">
            <input
              type={showPassword.new ? "text" : "password"}
              name="new"
              value={passwords.new}
              onChange={onChange}
              className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <button
              type="button"
              onClick={() => toggleVisibility('new')}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700 focus:outline-none"
            >
              {showPassword.new ? EyeSlashIcon : EyeIcon}
            </button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <div className="relative">
            <input
              type={showPassword.confirm ? "text" : "password"}
              name="confirm"
              value={passwords.confirm}
              onChange={onChange}
              className="w-full border border-gray-300 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <button
              type="button"
              onClick={() => toggleVisibility('confirm')}
              className="absolute right-3 top-1/2 -translate-y-1/2 hover:text-gray-700 focus:outline-none"
            >
              {showPassword.confirm ? EyeSlashIcon : EyeIcon}
            </button>
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={onUpdate}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-sm transition-transform active:scale-95"
          >
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;