import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// 1. IMPORT MODALS
import AlertModal from './modals/AlertModal';
import LoadingModal from './modals/LoadingModal';

// --- Icon Components ---
const Icon = ({ children, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5 flex-shrink-0"
    viewBox="0 0 20 20" 
    fill="currentColor" 
    {...props}
  >
    {children}
  </svg>
);

const HomeIcon = (props) => (
  <Icon {...props}><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></Icon>
);
const TenantsIcon = (props) => (
  <Icon {...props}><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></Icon>
);
const PaymentIcon = (props) => (
  <Icon {...props}><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/><path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 11a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd"/></Icon>
);
const ContractIcon = (props) => (
  <Icon {...props}><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13z" clipRule="evenodd"/></Icon>
);
const MaintenanceIcon = (props) => (
  <Icon {...props}><path fillRule="evenodd" d="M11.49 3.17c-.38-.21-.8-.38-.8-.38a1 1 0 10-1.02.39L14.7 13.5a1 1 0 00.99.6h1.01c.55 0 1-.45 1-1l-3.23-9.67zM7.74 3.17c.38-.21.8-.38.8-.38a1 1 0 111.02.39L4.3 13.5a1 1 0 01-.99.6H2.3c-.55 0-1-.45-1-1l3.23-9.67zM10 5a1 1 0 011 1v7a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd"/></Icon>
);
const ReportsIcon = (props) => (
  <Icon {...props}><path d="M2 10a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H2z"/></Icon>
);
const UsersIcon = (props) => (
  <Icon {...props}><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></Icon>
);
const SettingsIcon = (props) => (
  <Icon {...props}><path d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zm4 11a1 1 0 01-1 1H7a1 1 0 01-1-1v-1a1 1 0 011-1h6a1 1 0 011 1v1zm3-7a1 1 0 000 2h1a1 1 0 100-2h-1zM3 9a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm9-5h2a1 1 0 010 2h-2a1 1 0 010-2zM6 4h2a1 1 0 010 2H6a1 1 0 010-2z"/></Icon>
);
const LogoutIcon = (props) => (
  <Icon {...props}><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V5h10a1 1 0 100-2H4a1 1 0 00-1-1zM10 11a1 1 0 100 2h4a1 1 0 100-2h-4zM11 7a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z" clipRule="evenodd" /><path fillRule="evenodd" d="M17 14a1 1 0 01-1 1h-4a1 1 0 110-2h4a1 1 0 011 1z" clipRule="evenodd" /></Icon>
);

// --- Navigation Items Array ---
const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: <HomeIcon /> },
  { to: "/properties", label: "Properties", icon: <HomeIcon /> },
  { to: "/tenants", label: "Tenants", icon: <TenantsIcon /> },
  { to: "/payments", label: "Payments", icon: <PaymentIcon /> },
  { to: "/contracts", label: "Contracts", icon: <ContractIcon /> },
  { to: "/maintenance", label: "Maintenance", icon: <MaintenanceIcon /> },
  { to: "/reports", label: "Reports", icon: <ReportsIcon /> },
  { to: "/users", label: "Users", icon: <UsersIcon /> },
  { to: "/myprofile", label: "Profile & Settings", icon: <SettingsIcon /> },
];

// --- Sidebar Component ---
function Sidebar({ isOpen = false, onClose = () => {} }) {
  const mobileClasses = isOpen ? 'fixed inset-0 z-40 flex' : 'hidden sm:flex';
  const location = useLocation();
  const navigate = useNavigate();

  // 2. MODAL STATE
  const [alertOpen, setAlertOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 3. LOGOUT HANDLERS
  const handleLogoutClick = () => {
    setAlertOpen(true); // Open the question modal
  };

  const confirmLogout = () => {
    setIsLoading(true); // Show loading spinner

    // Simulate a brief delay for smoother UX
    setTimeout(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        
        setIsLoading(false);
        navigate("/"); // Redirect to Login page
    }, 1000);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="sm:hidden fixed inset-0 z-30 bg-black/60"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar Container */}
      <div className={`${mobileClasses} fixed flex-col gap-2 p-4 bg-gray-800 text-white sm:h-screen w-full sm:w-56 z-40`}>
        {/* Mobile close button */}
        {isOpen && (
          <div className="sm:hidden absolute top-4 right-4 z-50">
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="p-2 rounded-md bg-gray-900 text-white cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold mb-6 px-2">RMS</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={onClose}
                className={`
                  flex items-center gap-3 text-white font-semibold p-3 rounded-md transition-colors
                  ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}
                `}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        {/* Logout Button */}
        <div className="border-t border-gray-700 pt-4 mt-auto w-full">
          <button 
            onClick={handleLogoutClick} // Trigger the Modal
            className="button text-white font-semibold p-3 rounded-md hover:bg-gray-700 bg-gray-900 transition-colors w-full flex items-center gap-3"
          >
            <LogoutIcon />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* 4. RENDER MODALS */}
      <AlertModal
        isOpen={alertOpen}
        onClose={() => setAlertOpen(false)}
        onConfirm={confirmLogout}
        title="Log Out?"
        message="Are you sure you want to log out of your account?"
        confirmText="Yes, Log Out"
        type="danger" // Red button
      />

      <LoadingModal
        isOpen={isLoading}
        message="Logging out..."
      />
    </>
  );
}

// --- Layout Component ---
function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-layout flex flex-col sm:flex-row min-h-screen">
      <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex-1 flex flex-col sm:ml-56"> 
        
        {/* Mobile-only header */}
        <div className="sm:hidden p-4 bg-white shadow-md flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Page content */}
        <main className="app-container flex-1 p-4 sm:p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;