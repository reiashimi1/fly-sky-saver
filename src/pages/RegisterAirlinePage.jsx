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
import registerAirlineValidator from '../utils/validators/RegisterAirlineValidator.js';
import { Alert } from '@mui/material';

const RegisterAirlinePage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [airlineName, setAirlineName] = useState('');
  const [airlineCode, setAirlineCode] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { clearError, getError, validateErrors } = useValidate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const errors = validateErrors(
      { email, password, confirmPassword, airlineName, airlineCode },
      registerAirlineValidator
    );
    if (errors) return;

    const role = 'airline';
    dispatch(showSpinner('Creating your account...'));
    AuthAPI.post('/auth/airline/register', {
      email,
      password,
      role,
      airlineName,
      airlineCode
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
              Register as airline provider
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
                <div>Airline Name</div>
                <Input
                  className="w-full mb-4 "
                  value={airlineName}
                  placeholder="Enter airline name"
                  handleInputChange={(value) => clearError('airlineName', value, setAirlineName)}
                  error={getError('airlineName')}
                />
              </div>
              <div className="w-full">
                <div>Airline Code</div>
                <Input
                  className="w-full mb-4 "
                  value={airlineCode}
                  placeholder="Enter airline code"
                  handleInputChange={(value) => clearError('airlineCode', value, setAirlineCode)}
                  error={getError('airlineCode')}
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
                onClick={() => navigate('/register')}>
                Are you an airline customer? Register here!
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
      {success && <Alert severity="success">Airline user registerd successfully</Alert>}
      {error && <Alert severity="error">Something went wrong</Alert>}
    </div>
  );
};
export default RegisterAirlinePage;
