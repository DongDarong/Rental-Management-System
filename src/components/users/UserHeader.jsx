import React from "react";
import { UserPlusIcon, PrinterIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

function UsersHeader({ onAddUser, onDownloadReport }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-6">
      {/* Header Content */}
      <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-gray-800">Users Management</h1>
          <Cog6ToothIcon className="h-7 w-7 text-gray-400" />
        </div>

        <div className="flex gap-3 w-full sm:w-auto">
          <button
            onClick={onAddUser}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 w-full sm:w-auto font-medium"
          >
            <UserPlusIcon className="h-5 w-5" />
            Add New User
          </button>
          <button
            onClick={onDownloadReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 w-full sm:w-auto font-medium"
          >
            <PrinterIcon className="h-5 w-5" />
            Download Report
          </button>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-sm font-medium">
        <p>This page is restricted to **Super Administrators** for access control.</p>
      </div>
    </div>
  );
}

export default UsersHeader;