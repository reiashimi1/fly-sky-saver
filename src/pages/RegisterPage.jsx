import PasswordInput from '../core/PasswordInput';
import PrimaryButton from '../core/PrimaryButton';
import React, { useState, FormEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from '../redux/spinnerSlice';
import Input from '../core/Input';
import { useNavigate } from 'react-router-dom';
import FLY from '../assets/images/fly3.png';
import AuthAPI from '../utils/AuthAPI.js';
import useValidate from '../hooks/useValidate.js';
import registerUserValidator from '../utils/validators/RegisterUserValidator.js';
import { Alert } from '@mui/material';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passportNumber, setPassportNumber] = useState('');
  const [birthday, setBirthday] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clearError, getError, validateErrors } = useValidate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const errors = validateErrors(
      { email, password, confirmPassword, birthday, passportNumber },
      registerUserValidator
    );
    if (errors) return;
    dispatch(showSpinner('Creating your account...'));
    const role = 'user';
    AuthAPI.post('/auth/register', {
      email,
      password,
      role,
      birthday,
      passportNumber
    })
      .then(() => {
        setSuccess(true);
        navigate('/login');
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
        className="flex items-center justify-center h-screen sm:w-2/5 w-4/5"
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
            <h3 className="text-center mb-2 font-lg text-gray-700 font-semibold">
              Register as user
            </h3>
            <div className="w-full mt-3">
              <div>Email</div>
              <Input
                className="w-full mb-4 "
                value={email}
                type="email"
                placeholder="Enter email"
                handleInputChange={(value) => clearError('email', value, setEmail)}
                error={getError('email')}
              />
            </div>
            <div className="flex justify-between mt-3 space-x-4">
              <div className="w-full">
                <div>Passport ID</div>
                <Input
                  className="w-full mb-4 "
                  value={passportNumber}
                  placeholder="Enter passport number"
                  handleInputChange={(value) =>
                    clearError('passportNumber', value, setPassportNumber)
                  }
                  error={getError('passportNumber')}
                />
              </div>
              <div className="w-full">
                <div>Birthday</div>
                <Input
                  className="w-full mb-4 "
                  value={birthday}
                  placeholder="Enter birthday"
                  type="date"
                  handleInputChange={(value) => clearError('birthday', value, setBirthday)}
                  error={getError('birthday')}
                />
              </div>
            </div>
            <div className="mb-3">
              <div>Password</div>
              <PasswordInput
                className="w-full mb-4 rounded"
                placeholder="Enter password"
                value={password}
                handleInputChange={(value) => clearError('password', value, setPassword)}
                error={getError('password')}
              />
            </div>
            <div className="mb-3">
              <div>Confirm password</div>
              <PasswordInput
                className="w-full mb-4 rounded"
                placeholder="Confirm password"
                value={confirmPassword}
                handleInputChange={(value) =>
                  clearError('confirmPassword', value, setConfirmPassword)
                }
                error={getError('confirmPassword')}
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
      {success && <Alert severity="success">User registerd successfully</Alert>}
      {error && <Alert severity="error">Something went wrong</Alert>}
    </div>
  );
};

export default RegisterPage;
