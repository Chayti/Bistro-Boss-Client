import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllUsers from '../../pages/Dashboard/AllUsers';
import Dashboard from '../../pages/Dashboard/UserHome';
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
import PaymentHistory from '../../pages/Dashboard/PaymentHistory';
import UserHome from '../../pages/Dashboard/UserHome';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import NotFound from '../../pages/NotFound';
import MyBookings from '../../pages/Dashboard/MyBookings';


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
        element: <PrivateRoute><Shop /></PrivateRoute>,
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
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/user-home",
        element: <UserHome />,
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
        path: "/dashboard/updateItem/:id",
        element: <UpdateItem />,
      },
      {
        path: "/dashboard/manageBookings",
        element: <ManageBookings />,
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
        path: "/dashboard/mybookings",
        element: <MyBookings />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      }

    ]

  },
  {
    path: "*",
    element: <NotFound />,
  },


]);

export default routes;