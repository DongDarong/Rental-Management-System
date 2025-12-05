import React from "react";

function AccountInformation({ profile, onChange, onSave }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-blue-900 mb-6 border-b pb-2">Account Information</h2>
      
      <div className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Login)</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Role (Read Only) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Current Role</label>
          <input
            type="text"
            value={profile.role}
            readOnly
            className="w-full border border-gray-200 bg-gray-100 text-gray-500 rounded-lg p-3 cursor-not-allowed"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            onClick={onSave}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-sm transition-transform active:scale-95"
          >
            Save Profile Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;