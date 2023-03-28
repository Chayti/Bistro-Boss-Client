import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllUsers from '../../components/Dashboard/AllUsers';
import Dashboard from '../../components/Dashboard/Dashboard';
import MyHistory from '../../components/Dashboard/MyHistory';
import MyOrders from '../../components/Dashboard/MyOrders';
import DashboardLayout from '../../layout/DashboardLayout';
import Main from '../../layout/Main';
import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Shop from '../../pages/Shop';


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
      }


    ],
    
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children:[
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
      }

    ]
   
}

]);

export default routes;