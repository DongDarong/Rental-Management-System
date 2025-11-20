import React from 'react';
import { getNotificationIcon } from './data';

function NotificationRow({ notification, onSeeDetails, onDelete }) {
    const icon = getNotificationIcon(notification.type);
    const listText = notification.text.length > 40 
        ? notification.text.substring(0, 40) + '...' 
        : notification.text;

    return (
        <tr 
            onClick={() => onSeeDetails(notification)}
            className={`notification-row text-xs sm:text-sm cursor-pointer ${
                notification.read 
                    ? 'text-gray-500' 
                    : 'unread text-gray-900'
            }`}
        >
            <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{notification.date}</td>
            <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap">{notification.username}</td>
            <td className="px-3 py-3 sm:px-6 sm:py-4">
                <span className="mr-2">{icon}</span>{listText}
            </td>
            <td className="px-3 py-3 sm:px-6 sm:py-4 whitespace-nowrap text-center space-x-2">
                <button 
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent row click
                        onSeeDetails(notification);
                    }} 
                    className="text-primary-light hover:text-indigo-700 transition duration-150 font-semibold cursor-pointer"
                >
                    See details
                </button>
                <button 
                    onClick={(e) => onDelete(e, notification.id)} 
                    className="text-red-600 hover:text-red-900 transition duration-150 font-semibold cursor-pointer"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default NotificationRow;