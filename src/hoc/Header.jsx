/** @format */

import PrimaryButton from '../core/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
// import ParkonLogo from '../assets/images/parking2.png';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state?.userSlice?.user); // get user

	const goTo = () => {
		navigate('/signin');
	};
	return (
		<div>
			<nav className="flex justify-between items-center align-content-center bg-green-500 p-3">
				<div className="flex">
					{/*<img src={ParkonLogo} className="w-14 h-12" />*/}
				</div>
				<div className="flex items-center cursor-pointer space-x-4">
					<div className="flex space-x-8 text-white text-sm">
						<div onClick={() => navigate('/home')}>Home</div>
						<div onClick={() => navigate('/profile')}>Profile</div>
						{user?.role === 'PARKING_OWNER' && (
							<div onClick={() => navigate('/parking-spaces')}>
								Parking Spaces
							</div>
						)}
					</div>
					<PrimaryButton
						to="/signin"
						label="SIGN OUT"
						onClick={() => dispatch(logout())}
					/>
				</div>
			</nav>
		</div>
	);
};
export default Header;
