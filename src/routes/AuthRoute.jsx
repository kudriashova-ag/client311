import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const AuthRoute = ({ children }) => {
    const isAuth = useAuth();
    return isAuth ? children : <Navigate to="/login" />;
}

export default AuthRoute;
