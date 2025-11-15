import React from 'react';

function DeleteAlert({ isOpen = false, title = 'Delete Item', message = 'Are you sure?', onConfirm = () => {}, onCancel = () => {} }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />

      {/* modal */}
      <div className="relative bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm w-full mx-4 text-gray-100">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 mb-6">{message}</p>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 text-gray-100 font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded bg-red-600 hover:bg-red-500 text-white font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAlert;
