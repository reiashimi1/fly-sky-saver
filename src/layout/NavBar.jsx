import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fly3 from './../assets/images/fly3.png';
import { useLocation } from 'react-router-dom';
import useActiveMenuItem from '../hooks/useActiveMenuItem';
import { Transition } from '@headlessui/react';

const NavItem = ({ title, url, exact = false }) => {
  const isActive = useActiveMenuItem(url, exact);
  return (
    <Link
      className={`font-inter text-sm mr-10 ${
        isActive ? 'text-brand-light-blue' : 'text-white'
      } text-opacity-90 hover:text-brand-light-blue transition duration-200`}
      to={url}>
      {title}
    </Link>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  const [classes, setClasses] = useState('');
  const [isMounted, setIsMounted] = useState(true);

  const changeBackground = useCallback(() => {
    if (isMounted) {
      const newClasses = window.scrollY >= 66 ? 'blur-nav' : '';
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
        <div className="relative flex items-center justify-between py-7">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/">
              <img className="h-8 transform hover:scale-110 duration-300" src={fly3} alt="Logo" />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center">
              <div className="flex">
                <NavItem title="Home" url="/" exact />
                {/* <NavItem title={t('news')} url="/news" />
                <NavItem title={t('aboutUs')} url="/about-us" />
                <NavItem title={t('ourServices')} url="/our-services" />
                <NavItem title={t('contact')} url="/contact-us" /> */}
              </div>
              {/* <LanguageSelector /> */}
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'main-nav-open' : null}`}>
        <div className="flex place-content-between p-4">
          <Link className="mr-3" to="/">
            <img className="h-8" src={fly3} alt="Logo" />
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 mt-12">
              <Link
                to="/"
                className={`text-gray-${
                  location.pathname === '/' ? '700' : '300'
                } hover:text-white block px-3 pb-7 rounded-md text-2xl font-medium main-nav-text-open`}>
                home
              </Link>
              <Link
                to="/news"
                className={`text-gray-${
                  location.pathname === '/news' ? '700' : '300'
                } hover:text-white block px-3 pb-7 rounded-md text-2xl font-medium main-nav-text-open`}>
                news
              </Link>

              <Link
                to="/about-us"
                className={`text-gray-${
                  location.pathname === '/about-us' ? '700' : '300'
                } hover:text-white block px-3 pb-7 rounded-md text-2xl font-medium main-nav-text-open`}>
                about us
              </Link>
              <div className="flex justify-center align-middle pt-12 main-nav-text-open">
                {/* <LanguageSelector /> */}
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
}

export default NavBar;
