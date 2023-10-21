import React from 'react';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import {Navigate, Outlet} from "react-router-dom";

export const GuestRoute = () => {
  const accessToken = useSelector((state) => _.get(state, 'authSlice.access_token', null));
  const role = useSelector((state) => _.get(state, 'authSlice.userRole', null));

  if (accessToken) {
    if (role === 'user') {
      return <Navigate to="/" />;
    }
    return <Navigate to="/airline-home" />;
  }

  return <Outlet />;
};

export default GuestRoute;
