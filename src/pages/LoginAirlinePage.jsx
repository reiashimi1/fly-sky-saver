import { FormEventHandler, useState } from 'react';
import Input from '../core/Input';
import PrimaryButton from '../core/PrimaryButton';
import PasswordInput from '../core/PasswordInput';
import API from '../utils/API';
import { useDispatch, useSelector } from 'react-redux';
import { hideSpinner, showSpinner } from '../redux/spinnerSlice';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { fetchUser } from '../redux/userSlice';
import FLY from '../assets/images/fly3.png';
import AuthAPI from "../utils/AuthAPI.js";

const LoginAirlinePage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();
    // if (!email && !password) {
    // 	console.log('im here');
    // 	showError('Please fill in the form');
    // 	return;
    // } else {
    dispatch(showSpinner('Loading data...'));
    AuthAPI.post('/auth/signin', {
      username: email,
      password
    })
      .then((res) => {
        console.log(res.data.accessToken);
        dispatch(login(res.data.accessToken));
        dispatch(fetchUser());
        navigate('/home');
      })
      .catch((error) => {
        console.error(error);
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
                className="w-full mb-4 "
                placeholder="Enter airline username"
                handleInputChange={setEmail}
              />
            </div>
            <div className="mb-3">
              <div>Password</div>
              <PasswordInput
                className="w-full mb-4 rounded"
                placeholder="Enter password"
                handleInputChange={setPassword}
              />
            </div>
            <div className="flex w-full mt-8">
              <PrimaryButton className="flex w-full" to="" label="Submit" />
            </div>
            <div className="flex justify-between">
              <p
                className="cursor-pointer text-sm text-left my-3 text-indigo-600"
                onClick={() => navigate('/register-airline')}>
                Register here!
              </p>
              <p
                className="cursor-pointer text-sm text-left my-3 text-indigo-600"
                onClick={() => navigate('/login')}>
                Login as airline customer
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginAirlinePage;
