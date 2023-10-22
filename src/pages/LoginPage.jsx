import React, { FormEventHandler, useState } from 'react';
import Input from '../core/Input';
import PrimaryButton from '../core/PrimaryButton';
import PasswordInput from '../core/PasswordInput';
import { useDispatch, useSelector } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import FLY from '../assets/images/fly3.png';
import AuthAPI from '../utils/AuthAPI.js';
import useValidate from '../hooks/useValidate.js';
import loginValidator from '../utils/validators/LoginValidator.js';
import _ from 'lodash';
import { Alert } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const accessToken = useSelector((state) => _.get(state, 'authSlice.accessToken', null));
  // const role = useSelector((state) => _.get(state, 'authSlice.userRole', null));
  // const name = useSelector((state) => _.get(state, 'authSlice.userName', null));

  const { clearError, getError, validateErrors } = useValidate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const errors = validateErrors({ email, password }, loginValidator);
    if (errors) return;
    dispatch(showSpinner('Please wait...'));
    AuthAPI.post('/auth/login', {
      email,
      password
    })
      .then((res) => {
        const { auth, user } = res.data;
        const accessToken = auth.accessToken;
        const userRole = user.role;
        let userName;
        if (user?.role === 'user') {
          userName = user.name;
          dispatch(login({ accessToken, userName, userRole }));
          navigate('/');
        } else {
          userName = user.airline.name;
          dispatch(login({ accessToken, userName, userRole }));
          navigate('/airline-home');
        }
        dispatch(login({ accessToken, userName, userRole }));
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      })
      .finally(() => dispatch(hideSpinner()));
  };

  return (
    <div className="login-bg">
      <div
        className="flex items-center justify-center h-screen w-2/5 "
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
        <form
          className="flex w-full items-center justify-center bg-white p-10 rounded-lg shadow-md rounded-lg"
          onSubmit={onSubmitForm}>
          <div className="w-full">
            <div className="flex justify-center">
              <img src={FLY} alt="FLY" className="w-2/5" />
            </div>
            <h3 className="text-center mb-2 font-lg font-bold">Sign In</h3>
            <div className="w-full mt-3">
              <div>Username</div>
              <Input
                className="w-full mb-4"
                error={getError('email')}
                placeholder="Enter email"
                handleInputChange={(value) => clearError('email', value, setEmail)}
              />
            </div>
            <div className="mb-3">
              <div>Password</div>
              <PasswordInput
                className="w-full mb-4 rounded"
                error={getError('password')}
                placeholder="Enter password"
                handleInputChange={(value) => clearError('password', value, setPassword)}
              />
            </div>
            <div className="flex w-full mt-8">
              <PrimaryButton className="flex w-full" to="" label="Submit" />
            </div>
            <div className="flex justify-between">
              <p
                className="cursor-pointer text-sm text-left my-3 text-indigo-600"
                onClick={() => navigate('/register')}>
                Register here!
              </p>
              {/*<p*/}
              {/*  className="cursor-pointer text-sm text-left my-3 text-indigo-600"*/}
              {/*  onClick={() => navigate('/login-airline')}>*/}
              {/*  Login as airline provider*/}
              {/*</p>*/}
            </div>
          </div>
        </form>
      </div>
      {error && <Alert severity="error">Something went wrong</Alert>}
    </div>
  );
};

export default LoginPage;
