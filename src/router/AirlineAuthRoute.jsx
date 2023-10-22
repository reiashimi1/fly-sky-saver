import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const AirlineAuthRoute= () => {
  const isAuth = useSelector((state) => _.get(state, 'authSlice.isLoggedIn', null));
  const role = useSelector((state) => _.get(state, 'authSlice.userRole', null));
  console.log("airline route");
  return !isAuth && role === 'airline' ? <Outlet /> : <Navigate to="/login" />;
};

export default AirlineAuthRoute;
