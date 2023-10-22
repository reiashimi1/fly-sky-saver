import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fly3 from '../../assets/images/fly3.png';
import { useLocation } from 'react-router-dom';
import useActiveMenuItem from '../../hooks/useActiveMenuItem.js';
import { Transition } from '@headlessui/react';
import { logout } from '../../redux/authSlice.js';
import { useDispatch } from 'react-redux';

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

  return (
    <div>
      <div
        style={{
          color: 'rgb(104 65 137)',
          position: 'relative',
          zIndex: '1'
        }}
        className="md:block hidden">
        <nav className="flex justify-between items-center bg-white p-3 text-lg">
          <div className="flex flex-1 h-full w-full">
            {<img src={fly3} className="h-12" alt="logo" />}
          </div>

          <div className="flex flex-1 space-x-10">
            <NavItem title="Roulette" url="/airline-home" />
            <NavItem title="Loyalty" url="/airline-loyalty" />
            <NavItem title="Offers" url="/airline-offers" />
            <NavItem title="Rewards" url="/airline-rewards" />
            {/*<NavItem title="Bookings" url="/airline-bookings" />*/}
            {/*<NavItem title="Profile" url="/airline-profile" />*/}
          </div>
          <p
            className="text-red-400 hover:text-white block px-3 rounded-md font-medium cursor-pointer"
            onClick={() => dispatch(logout())}>
            LOGOUT
          </p>
        </nav>
      </div>

      <div
        className="md:hidden bg-white"
        style={{
          color: 'rgb(104 65 137)',
          position: 'relative',
          zIndex: '1'
        }}>
        <div className="flex place-content-between px-4 py-2 bg-white">
          <Link className="mr-3" to="/">
            <img className="h-16" src={fly3} alt="Logo" />
          </Link>
          <button
            id="mobile-menu"
            className="focus:outline-none mt-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="mobile-menu"
            aria-expanded="false">
            <div className={`${isOpen ? 'open-burger' : 'burger'}`} />
          </button>
        </div>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="md:hidden" id="mobile-menu">
            <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-2">
              <Link
                to="/airline-home"
                className={`${
                  location.pathname === '/airline-home' ? 'text-indigo-400 font-bold' : ''
                } text-opacity-90 transition duration-200 uppercase text-2xl hover:font-semibold pt-2`}>
                Roulette
              </Link>
              <Link
                to="/airline-loyalty"
                className={`${
                  location.pathname === '/airline-home' ? 'text-indigo-400 font-bold' : ''
                } text-opacity-90 transition duration-200 uppercase text-2xl hover:font-semibold pt-2`}>
                Loyalty
              </Link>
              <Link
                to="/airline-offers"
                className={`${
                  location.pathname === '/' ? 'text-indigo-400 font-bold' : ''
                } text-opacity-90 transition duration-200 uppercase text-2xl hover:font-semibold pt-2`}>
                Offers
              </Link>
              <Link
                to="/airline-rewards"
                className={`${
                  location.pathname === '/' ? 'text-indigo-400 font-bold' : ''
                } text-opacity-90 transition duration-200 uppercase text-2xl hover:font-semibold pt-2`}>
                Rewards
              </Link>

              {/*<Link*/}
              {/*  to="/airline-bookings"*/}
              {/*  className={`${*/}
              {/*    location.pathname === '/' ? 'text-indigo-400 font-bold' : ''*/}
              {/*  } text-opacity-90 transition duration-200 uppercase text-2xl hover:font-semibold pt-2`}>*/}
              {/*  Bookings*/}
              {/*</Link>*/}
              {/*<Link*/}
              {/*  to="/airline-profile"*/}
              {/*  className={`${*/}
              {/*    location.pathname === '/' ? 'text-indigo-400 font-bold' : ''*/}
              {/*  } text-opacity-90 transition duration-200 uppercase text-2xl hover:font-semibold pt-2`}>*/}
              {/*  Bookings*/}
              {/*</Link>*/}
              <p
                className="text-red-400 hover:text-white block px-3 pb-1 rounded-md text-2xl font-medium cursor-pointer pt-4"
                onClick={() => dispatch(logout())}>
                Logout
              </p>
              <div className="flex justify-center align-middle pt-12 main-nav-text-open"></div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default NavBar;
