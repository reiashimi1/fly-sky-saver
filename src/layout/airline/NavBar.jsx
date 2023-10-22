import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fly3 from '../../assets/images/fly3.png';
import { useLocation } from 'react-router-dom';
import useActiveMenuItem from '../../hooks/useActiveMenuItem.js';
import { Transition } from '@headlessui/react';
import { logout } from '../../redux/authSlice.js';
import { useDispatch } from 'react-redux';
import PrimaryButton from '../../core/PrimaryButton.jsx';

const NavItem = ({ title, url, exact = false }) => {
  const isActive = useActiveMenuItem(url, exact);
  return (
    <Link
      className={`${
        isActive ? 'font-semibold' : ''
      } text-opacity-90 transition duration-200 uppercase`}
      to={url}>
      {title}
    </Link>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: '#c3eeff',
        color: 'rgb(104 65 137)',
        boxShadow: '0 3px 6px 3px #7758a9',
        position: 'relative',
        zIndex: '1'
      }}>
      <nav className="flex justify-content-between items-center bg-white p-3 text-lg">
        <div className="flex flex-1 h-full w-full">
          {<img src={fly3} className="h-14" alt="logo" />}
        </div>

        <div className="flex flex-1 space-x-5">
          <div className="cursor-pointer" onClick={() => navigate('/airline-home')}>
            Carousel
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/airline-loyalty')}>
            Loyalty
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/airline-offers')}>
            Offers
          </div>
          <div className="cursor-pointer" onClick={() => navigate('/airline-rewards')}>
            Rewards
          </div>
          <PrimaryButton
            to="/login"
            className="flex-1 align-right"
            label="SIGN OUT"
            onClick={() => dispatch(logout())}
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
