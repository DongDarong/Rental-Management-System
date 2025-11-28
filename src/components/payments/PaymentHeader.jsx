import React from "react";

function PaymentHeader({ onOpenDrawer }) {
  return (
    <header className="bg-white shadow-lg rounded-xl p-4 flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-blue-700">Payments Management</h1>

      <div className="flex items-center gap-3">
        
        {/* Button triggers drawer */}
        <button
          onClick={onOpenDrawer}
          className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
          </svg>
          Record Payment
        </button>
      </div>
    </header>
  );
}

export default PaymentHeader;
