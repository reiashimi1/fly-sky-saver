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
      className={`text-sm mr-10 ${
        isActive ? 'text-sky-800 font-semibold' : ''
      } text-opacity-90 hover:text-brand-light-blue transition duration-200 uppercase`}
      to={url}>
      {title}
    </Link>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const [classes, setClasses] = useState('');
  const [isMounted, setIsMounted] = useState(true);

  const changeBackground = useCallback(() => {
    if (isMounted) {
      const newClasses = window.scrollY >= 66 ? 'bg-blue-500' : 'bg-white';
      setClasses(newClasses);
    }
  }, [isMounted]);

  useEffect(() => {
    setIsMounted(true);
    changeBackground();
    window.addEventListener('scroll', changeBackground);

    return () => setIsMounted(false);
  }, [changeBackground]);

  return (
    <nav
      className={`${classes} transition duration-300 fixed w-full justify-around nav-depth z-20`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 3xl:px-0 hidden md:block">
        <div className="relative flex items-center justify-around py-3">
          <div className="flex items-center justify-center sm:justify-start">
            <Link to="/">
              <img className="h-16 transform hover:scale-110 duration-300" src={fly3} alt="Logo" />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center">
              <div className="flex">
                <NavItem title="Home" url="/" exact />
                <NavItem title="Offers" url="/airline-offers" />
                <NavItem title="Bookings" url="/airline-bookings" />
                <NavItem title="Profile" url="/airline-profile" />
              </div>
              {/* <LanguageSelector /> */}
            </div>
          </div>
          <p
            className="cursor-pointer text-sm text-left my-3 text-red-400 uppercase"
            onClick={() => dispatch(logout())}>
            Logout
          </p>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'main-nav-open' : null}`}>
        <div className="flex place-content-between p-4">
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-2">
              <Link
                to="/"
                className={`text-gray-${
                  location.pathname === '/' ? '700' : '300'
                } hover:text-white block px-3 pb-2 rounded-md text-2xl font-medium main-nav-text-open`}>
                Home
              </Link>
              <Link
                to="/airline-offers"
                className={`text-gray-${
                  location.pathname === '/airline-offers' ? '700' : '300'
                } hover:text-white block px-3 pb-2 rounded-md text-2xl font-medium`}>
                Offers
              </Link>

              <Link
                to="/airline-bookings"
                className={`text-gray-${
                  location.pathname === '/airline-bookings' ? '700' : '300'
                } hover:text-white block px-3 pb-2 rounded-md text-2xl font-medium`}>
                Bookings
              </Link>
              <Link
                to="/airline-profile"
                className={`text-gray-${
                  location.pathname === '/airline-profile' ? '700' : '300'
                } hover:text-white block px-3 pb-1 rounded-md text-2xl font-medium`}>
                Bookings
              </Link>
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
    </nav>
  );
}

export default NavBar;
