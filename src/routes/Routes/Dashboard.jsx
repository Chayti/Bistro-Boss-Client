import React from 'react';

import useAdmin from '../../Hooks/useAdmin';
import useAuth from '../../Hooks/useAuth';
import { redirect } from 'react-router-dom';
import AdminHome from '../../pages/Dashboard/AdminHome';
import UserHome from '../../pages/Dashboard/UserHome';
import Spinner2 from '../../components/shared/Spinner/Spinner2';

const Dashboard = () => {
    const {user} = useAuth();
    const [isAdmin,loading] = useAdmin(user?.email)
    if(loading){
        return <Spinner2></Spinner2>
    }
    return (
        <>
        {
            isAdmin? <AdminHome></AdminHome>:
            <UserHome></UserHome>
        }
        </>
        
    );
};

export default Dashboard;