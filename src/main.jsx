import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  Navigate,
  redirect,
  RouterProvider,
} from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <Navigate to="/not-found" />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    errorElement: <Navigate to="/not-found" />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Navigate to="/not-found" />,
  },

  // {
  //   path: '/real-estate',
  //   element: <RealEstate />,
  // },
  // {
  //   path: '/real-estate-manual',
  //   element: <RealEstateManual />,
  // },
  // {
  //   path: '/customer-trends',
  //   element: <CustomerTrends />,
  // },
  // {
  //   path: '/manufacturers',
  //   element: <Manufacturers />,
  // },
  // {
  //   path: '/admin/dashboard',
  //   element: (
  //     <ProtectedRoute>
  //       <Dashboard />
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: '/admin/login',
  //   element: <AdminLogin />,
  // },
  // {
  //   path: '/invite/:inviteId',
  //   element: <InvitePage />,
  // },
  {
    path: '/not-found',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
