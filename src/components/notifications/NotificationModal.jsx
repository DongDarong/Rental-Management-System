import React from 'react';
 import { getNotificationIcon } from './data';

function NotificationModal({ notification, isVisible, onClose }) {
    // We don't render anything if there's no notification
    if (!notification) {
        return null; 
    }

    const icon = getNotificationIcon(notification.type);

    return (
        <div id="details-modal" className="modal-overlay">
            <div 
                id="modal-content" 
                className={`bg-white rounded-xl shadow-2xl w-full max-w-lg m-4 transform transition-all duration-300 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                }`}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="text-xl font-semibold text-primary-dark">
                        <span className="mr-2">{icon}</span>
                        Notification from {notification.username}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2"><strong>Date:</strong> {notification.date}</p>
                    <p className="text-base text-gray-800">{notification.text}</p>
                </div>
                {/* Modal Footer */}
                <div className="p-4 bg-gray-50 rounded-b-xl text-right">
                    <button onClick={onClose} className="bg-primary-dark hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded-lg transition duration-150">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotificationModal;