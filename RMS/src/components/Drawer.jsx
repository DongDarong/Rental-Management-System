import React from 'react';

function Drawer({ isOpen = false, onClose = () => {}, side = 'right', children, width = 'w-full sm:w-96' }) {
  // side: 'right' or 'left'
  const translateClass = side === 'left' ? '-translate-x-full' : 'translate-x-full';
  const translateOpen = 'translate-x-0';

  return (
    // overlay
    <div className={`fixed inset-0 z-50 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`} aria-hidden={!isOpen}>
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} z-40`}
        onClick={onClose}
      />

      {/* panel */}
      <aside
        className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full bg-gray-800 text-gray-100 shadow-xl transform ${isOpen ? translateOpen : translateClass} transition-transform duration-300 ease-in-out ${width} z-50 pointer-events-auto`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div />
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-100"
          >
            ✕
          </button>
        </div>

        <div className="p-4 overflow-auto h-full">{children}</div>
      </aside>
    </div>
  );
}

export default Drawer;
