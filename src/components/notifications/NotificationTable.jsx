import React from 'react';
import NotificationRow from './NotificationRow';

const NoNotifications = () => (
    <div id="no-notifications" className="text-center p-12 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 5.71 6 8.368 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <p className="mt-2 text-lg font-medium">All caught up!</p>
        <p className="text-sm">You have no new notifications.</p>
    </div>
);

function NotificationTable({ notifications, onSeeDetails, onDelete }) {
    if (notifications.length === 0) {
        return <NoNotifications />;
    }

    return (
        <div className="table-container overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary-dark text-white">
                    <tr>
                        <th className="px-3 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
                        <th className="px-3 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium uppercase tracking-wider">Username</th>
                        <th className="px-3 py-3 sm:px-6 sm:py-3 text-left text-xs font-medium uppercase tracking-wider">Information</th>
                        <th className="px-3 py-3 sm:px-6 sm:py-3 text-center text-xs font-medium uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {notifications.map(notification => (
                        <NotificationRow
                            key={notification.id}
                            notification={notification}
                            onSeeDetails={onSeeDetails}
                            onDelete={onDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NotificationTable;