import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllUsers from '../../pages/Dashboard/AllUsers';
import Dashboard from '../../pages/Dashboard/Dashboard';
import MyHistory from '../../pages/Dashboard/MyHistory';
import MyOrders from '../../pages/Dashboard/MyOrders';
import Reservation from '../../pages/Dashboard/Reservation';
import DashboardLayout from '../../layout/DashboardLayout';
import Main from '../../layout/Main';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Menu from '../../pages/Menu';
import Registration from '../../pages/Registration';
import Shop from '../../pages/Shop';
import ManageItems from '../../pages/Dashboard/ManageItems';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      }

    ],

  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/history",
        element: <MyHistory />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/manage-items",
        element: <ManageItems />,
      },

    ]

  }

]);

export default routes;