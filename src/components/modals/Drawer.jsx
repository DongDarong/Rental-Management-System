import React from "react";

function Drawer({ isOpen, onClose, title, children }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-xl p-6 z-50 w-80 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-600 text-2xl">
            ×
          </button>
        </div>

        {children}
      </div>
    </>
  );
}

export default Drawer;
