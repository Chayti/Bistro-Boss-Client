import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllUsers from '../../pages/Dashboard/AllUsers';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Reservation from '../../pages/Dashboard/Reservation';
import DashboardLayout from '../../layout/DashboardLayout';
import Main from '../../layout/Main';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Menu from '../../pages/Menu';
import Registration from '../../pages/Registration';
import Shop from '../../pages/Shop';
import MyCart from '../../pages/Dashboard/MyCart';
import ManageItems from '../../pages/Dashboard/ManageItems';
import AddFood from '../../pages/Dashboard/AddFood';
import AddReview from '../../pages/Dashboard/AddReview';
import UpdateFood from '../../pages/Dashboard/UpdateFood';
import AdminHome from '../../pages/Dashboard/AdminHome';
import Payment from '../../pages/Dashboard/Payment';


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
        path: "/dashboard/user-home",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/admin-home",
        element: <AdminHome />,
      },
      {
        path: "/dashboard/addFood",
        element: <AddFood />,
      },
      {
        path: "/dashboard/updateFood",
        element: <UpdateFood />,
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview />,
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
      {
        path: "/dashboard/mycart",
        element: <MyCart />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      }

    ]

  }


]);

export default routes;