import PrimaryButton from '../core/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import fly3 from '../assets/images/fly3.png';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.userSlice?.user); // get user

  const goTo = () => {
    navigate('/signin');
  };
  return (
    <div
      style={{
        background: '#c3eeff',
        color: 'rgb(104 65 137)',
        boxShadow: '0 3px 6px 3px #7758a9',
        position: 'relative',
        zIndex: '1'
      }}>
      <nav className="flex justify-between items-center bg-white p-3 text-lg">
        <div className="flex flex-1 h-full w-full">
          {<img src={fly3} className="w-14 h-12" alt="logo" />}
        </div>

        <div className="flex flex-1 space-x-10">
          <div onClick={() => navigate('/home')}>Home</div>
          <div onClick={() => navigate('/offers')}>Offers</div>
          <div onClick={() => navigate('/bookings')}>Bookings</div>
          <div onClick={() => navigate('/profile')}>My profile</div>
        </div>
        <PrimaryButton
          to="/login"
          className="flex-1 align-right"
          label="SIGN OUT"
          onClick={() => dispatch(logout())}
        />
      </nav>
    </div>
  );
};
export default Header;
