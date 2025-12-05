import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Users from './pages/Users.jsx';
import Properties from './pages/Properties.jsx';
import Tenants from './pages/Tenants.jsx';
import Maintenance from './pages/Maintenance.jsx';
import Payments from './pages/Payments.jsx';
import Reports from './pages/Reports.jsx';
import MyProfile from './pages/MyProfile.jsx';
import Notifications from './pages/Notifications.jsx';
import Contracts from './pages/Contracts.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The parent layout (Navbar, Footer)
    children: [
      {
        path: '/', // The "Login" page
        element: <Login />,
      },
      {
        path: '/dashboard', // The default page
        element: <Dashboard />,
      },
      
      {
        path: '/users', // The "Users" page
        element: <Users />,
      },
      {
        path: '/properties', // The "Properties" page
        element: <Properties />,
      },
      {
        path: '/tenants', // The "Tenants" page
        element: <Tenants />,
      },
      {
        path: '/maintenance', // The "Maintenance" page
        element: <Maintenance />,
      },
      {
        path: '/payments', // The "Payments" page
        element: <Payments />,
      },
      {
        path: '/reports', // The "Reports" page
        element: <Reports />,
      },
      {
        path: '/myprofile', // The "MyProfile" page
        element: <MyProfile />,
      },
      {
        path: '/notifications', // The "Notifications" page
        element: <Notifications />,
      },
            {
        path: '/contracts', // The "Contracts" page
        element: <Contracts />,
      },
    ],
  },
]);

// 3. Render the <RouterProvider> instead of <App />
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
