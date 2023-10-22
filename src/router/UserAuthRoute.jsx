import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from "lodash";

const UserAuthRoute= () => {
  const isAuth = useSelector((state) => _.get(state, 'authSlice.isLoggedIn', null));
  const role = useSelector((state) => _.get(state, 'authSlice.userRole', null));
  console.log("airline route");
  return !isAuth && role === 'user' ? <Outlet /> : <Navigate to="/login" />;
};

export default UserAuthRoute;
