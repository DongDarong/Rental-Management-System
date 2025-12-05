import React from "react";

function ProfileHeader() {
  return (
    <div className="bg-white shadow-sm rounded-xl p-6 mb-6">
      <h1 className="text-3xl font-bold text-blue-900 flex items-center gap-2">
        Profile & Settings <span className="text-4xl">👨‍💼</span>
      </h1>
    </div>
  );
}

export default ProfileHeader;