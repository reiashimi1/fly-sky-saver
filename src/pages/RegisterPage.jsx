import PasswordInput from '../core/PasswordInput';
import PrimaryButton from '../core/PrimaryButton';
import React, { useState, FormEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from '../redux/spinnerSlice';
import API from '../utils/API';
import Input from '../core/Input';
import { useNavigate } from 'react-router-dom';
import FLY from "../assets/images/fly3.png";
import AuthAPI from "../utils/AuthAPI.js";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [appUser, setAppUser] = useState('user');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nid, setNid] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const role = appUser.toUpperCase().replace(' ', '_');
    // dispatch(showSpinner('Creating your account...'));
    AuthAPI.post('/auth/signup', {
      username: email,
      password,
      role
    })
      .then((res) => {
        console.log(res.data.accessToken);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => dispatch(hideSpinner()));
  };

  const onConfirmPassword = (value) => {
    console.log(value);
    console.log(value === password);
    if (value === password) {
      setConfirmPassword(value);
    }
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
            <h3 className="text-center mb-2 font-lg text-gray-700 font-semibold">Register as {appUser}</h3>
            <div className="w-full mt-3">
              <div>Email</div>
              <Input
                className="w-full mb-4 "
                value={email}
                type="email"
                placeholder="Enter username"
                handleInputChange={setEmail}
              />
            </div>
            <div className="w-full mt-3">
              <div>Passport ID</div>
              <Input
                className="w-full mb-4 "
                value={nid}
                placeholder="Enter passport number"
                handleInputChange={setNid}
              />
            </div>
            <div className="mb-3">
              <div>Password</div>
              <PasswordInput
                className="w-full mb-4 rounded"
                placeholder="Enter password"
                value={password}
                handleInputChange={setPassword}
              />
            </div>
            <div className="mb-3">
              <div>Confirm password</div>
              <PasswordInput
                className="w-full mb-4 rounded"
                placeholder="Confirm password"
                value={confirmPassword}
                handleInputChange={onConfirmPassword}
              />
            </div>
            <div className="flex w-full mt-4">
              <PrimaryButton className="flex w-full" to="" label="Register" />
            </div>
            <div className="flex justify-between">
              <div
                className="cursor-pointer text-left my-3 text-sm text-indigo-600"
                onClick={() => navigate('/register-airline')}>
                Are you an airline provider? Register here!
              </div>
              <p
                className="cursor-pointer text-left my-3 text-sm text-indigo-600"
                onClick={() => navigate('/login')}>
                Login here!
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
