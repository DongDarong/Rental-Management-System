import React from "react";

function ReportHeader({ onDownload }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">Reports</h1>
        <p className="text-gray-500 mt-1">Financial overview and performance metrics</p>
      </div>

      <button
        onClick={onDownload}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>
        Download PDF
      </button>
    </div>
  );
}

export default ReportHeader;