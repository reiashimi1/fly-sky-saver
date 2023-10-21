import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from '../../hoc/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div id="container">
      <div className="absolute h-full w-full shadow-inner bg-slate-100">
        <NavBar />
        <div className="relative my-10">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
