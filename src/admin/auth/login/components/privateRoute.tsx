import React from 'react';
import {useAuth} from "./author.provider";
import {Navigate, Outlet} from "react-router-dom";

PrivateRoute.propTypes = {
    
};

function PrivateRoute() {
    const user: any = useAuth();
    console.log(user)
    if (!user.token || !user.user) return <Navigate to="/admin/auth/login" />;
    return <Outlet />;
}

export default PrivateRoute;