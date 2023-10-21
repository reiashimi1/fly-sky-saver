/** @format */

import PasswordInput from '../core/PasswordInput';
import PrimaryButton from '../core/PrimaryButton';
import { useState, FormEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from '../redux/spinnerSlice';
import API from '../utils/API';
import Input from '../core/Input';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [appUser, setAppUser] = useState('user');
	const [confirmPassword, setConfirmPassword] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmitForm = (e) => {
		e.preventDefault();
		const role = appUser.toUpperCase().replace(' ', '_');
		dispatch(showSpinner('Creating your account...'));
		API.post('/auth/signup', {
			username: email,
			password,
			role,
		})
			.then((res) => {
                navigate('/signin')
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
					transform: 'translate(-50%, -50%)',
				}}>
				<form
					className="flex w-full items-center justify-center bg-white p-10 rounded-lg shadow-md rounded-lg"
					onSubmit={onSubmitForm}>
					<div className="w-full">
						<h3 className="text-center mb-2 font-lg text-gray-700 ">
							Register as {appUser}
						</h3>
						<div className="w-full mt-3">
							<div>Username</div>
							<Input
								className="w-full mb-4 "
								placeholder="Enter username"
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
						<div className="mb-3">
							<div>Confirm password</div>
							<PasswordInput
								className="w-full mb-4 rounded"
								placeholder="Confirm password"
								handleInputChange={onConfirmPassword}
							/>
						</div>
						<div className="flex w-full mt-4">
							<PrimaryButton className="flex w-full" to="" label="Register" />
						</div>
						<div className="flex justify-between">
							<div
								className="cursor-pointer text-left my-3 text-sm text-indigo-600"
								onClick={() =>
									appUser === 'user'
										? setAppUser('parking owner')
										: setAppUser('user')
								}>
								{appUser === 'user'
									? 'Are you a parking space owner? Register here!'
									: 'Register as a user here!'}
							</div>
							<p
								className="cursor-pointer text-left my-3 text-sm text-indigo-600"
								onClick={() => navigate('/signin')}>
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
