import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from '../../hoc/Footer.jsx';
import Header from '../../hoc/Header.jsx';

const Layout = ({ children }) => {
  return (
    <div id="container" className="container">
      <div className="absolute min-h-full w-full shadow-inner  bg-slate-100">
        <Header />
        <div className="relative">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
