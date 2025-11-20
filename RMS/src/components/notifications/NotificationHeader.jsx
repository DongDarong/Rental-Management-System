import React from 'react';

function NotificationHeader({ onClearAll }) {
    return (
        <header className="main-header bg-white shadow-lg rounded-xl p-4 flex items-center justify-between mb-8">
            <div className="flex items-center">
                <button 
                    className="menu-button text-primary-dark mr-2 md:mr-4" 
                    onClick={() => window.history.back()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-primary-dark">Notifications 📩</h1>
            </div>
            
            <button 
                onClick={onClearAll} 
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 sm:px-4 rounded-full shadow-md transition duration-200 text-sm flex items-center space-x-2"
            >
                <span className="sm:block">Clear All</span>
            </button>
        </header>
    );
}

export default NotificationHeader;