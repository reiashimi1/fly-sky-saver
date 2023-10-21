import React, { useState } from 'react';
import Input from '../../core/Input.jsx';
import PasswordInput from '../../core/PasswordInput.jsx';
import PrimaryButton from '../../core/PrimaryButton.jsx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { hideSpinner, showSpinner } from '../../redux/spinnerSlice.js';
import API from '../../utils/API.js';

const FirstStep = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [appUser, setAppUser] = useState('user');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const role = appUser.toUpperCase().replace(' ', '_');
    // dispatch(showSpinner('Creating your account...'));
    API.post('/auth/signup', {
      username: email,
      password,
      role
    })
      .then((res) => {
        console.log(res.data.accessToken);
        onSuccess(email, password);
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
    <div>
      <form
        className="flex w-full items-center justify-center bg-white p-10 rounded-lg shadow-md rounded-lg"
        onSubmit={onSubmitForm}>
        <div className="w-full">
          <h3 className="text-center mb-2 font-lg text-gray-700 ">Register as {appUser}</h3>
          <div className="w-full mt-3">
            <div>Username</div>
            <Input
              className="w-full mb-4 "
              value={email}
              placeholder="Enter username"
              handleInputChange={setEmail}
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
  );
};

export default FirstStep;
