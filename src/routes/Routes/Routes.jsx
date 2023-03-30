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
import AddReview from '../../pages/Dashboard/AddReview';
import AdminHome from '../../pages/Dashboard/AdminHome';
import Payment from '../../pages/Dashboard/Payment';
import AddItem from '../../pages/Dashboard/AddItem';
import UpdateItem from '../../pages/Dashboard/UpdateItem';
import ManageBookings from '../../pages/Dashboard/ManageBookings';
import MyBookings from '../../pages/Dashboard/MyBookings';
import PaymentHistory from '../../pages/Dashboard/PaymentHistory';


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
        path: "/dashboard/addItem",
        element: <AddItem />,
      },
      {
        path: "/dashboard/updateItem",
        element: <UpdateItem />,
      },
      {
        path: "/dashboard/manageBookings",
        element: <ManageBookings />,
      },
      {
        path: "/dashboard/myBookings",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation />,
      },
      {
        path: "/dashboard/manageItems",
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