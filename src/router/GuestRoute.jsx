import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import {Navigate, Outlet} from "react-router-dom";

export const GuestRoute = () => {
  const isAuth = useSelector((state) => _.get(state, 'authSlice.isLoggedIn', null));
  const role = useSelector((state) => _.get(state, 'authSlice.userRole', null));

  if (isAuth) {
    console.log('guest');
    if (role === 'user') {
      console.log('user');
      return <Navigate to="/" />;
    }
    console.log('airline');
    return <Navigate to="/airline-home" />;
  }

  return <Outlet />;
};

export default GuestRoute;
