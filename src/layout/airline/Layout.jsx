import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from '../../hoc/Footer.jsx';
import Header from '../../hoc/Header.jsx';

const Layout = ({ children }) => {
  return (
    <div id="container">
      <div
        className="absolute h-full w-full shadow-inner bg-slate-100"
        style={{
          backgroundImage: 'linear-gradient(#845EC2, #DCB0FF)'
        }}>
        <Header />
        <div className="relative mb-10 mt-10">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
