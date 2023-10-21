import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute= () => {
  const isAuth = useSelector((state) => state.authSlice.isLogedin);

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default AuthRoute;
