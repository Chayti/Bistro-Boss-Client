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
import AddRecipe from '../../pages/Dashboard/AddRecipe';
import UpdateRecipe from '../../pages/Dashboard/UpdateRecipe';
import PaymentHistory from '../../pages/Dashboard/PaymentHistory';
import MyBookings from '../../pages/Dashboard/MyBookings';
import ManageBookings from '../../pages/Dashboard/ManageBookings';


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
        path: "/dashboard/addRecipe",
        element: <AddRecipe />,
      },
      {
        path: "/dashboard/updateRecipe",
        element: <UpdateRecipe />,
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
      }

    ]

  }


]);

export default routes;