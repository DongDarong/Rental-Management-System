import React, { useState, useEffect } from 'react';
import NotificationHeader from '../components/notifications/NotificationHeader';
import NotificationTable from '../components/notifications/NotificationTable';
import NotificationModal from '../components/notifications/NotificationModal';
import { data } from '../components/notifications/data';

function NotificationPage() {
    // --- State Management ---
    const [notifications, setNotifications] = useState(data);
    const [selectedNotification, setSelectedNotification] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    // Sort notifications for rendering
    const sortedNotifications = [...notifications].sort((a, b) => new Date(b.date) - new Date(a.date));

    // --- Event Handlers ---

    const handleDelete = (event, id) => {
        event.stopPropagation(); // Stop click from bubbling up to the row
        
        if (window.confirm('Are you sure you want to delete this notification?')) {
            setNotifications(prevNotifications => 
                prevNotifications.filter(n => n.id !== id)
            );
        }
    };

    const handleClearAll = () => {
        if (window.confirm('Are you sure you want to clear ALL notifications?')) {
            setNotifications([]);
        }
    };

    const handleSeeDetails = (notification) => {
        setNotifications(prevNotifications =>
            prevNotifications.map(n =>
                n.id === notification.id ? { ...n, read: true } : n
            )
        );
        setSelectedNotification(notification);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    // --- Animation Effect ---
    useEffect(() => {
        if (!isModalVisible && selectedNotification) {
            const timer = setTimeout(() => {
                setSelectedNotification(null); // Clear notification *after* fade-out
            }, 200); // Must match the CSS transition duration
            
            return () => clearTimeout(timer);
        }
    }, [isModalVisible, selectedNotification]);


    // --- Render ---
    return (
        <div className="main-content flex-1 p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
            
            <NotificationHeader onClearAll={handleClearAll} />

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <NotificationTable
                    notifications={sortedNotifications}
                    onSeeDetails={handleSeeDetails}
                    onDelete={handleDelete}
                />
            </div>

            <NotificationModal
                notification={selectedNotification}
                isVisible={isModalVisible}
                onClose={handleCloseModal}
            />

        </div>
    );
}

export default NotificationPage;