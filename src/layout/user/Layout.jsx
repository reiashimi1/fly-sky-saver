import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from '../../hoc/Footer.jsx';
import Header from '../../hoc/Header.jsx';

const Layout = ({ children }) => {
  return (
    <div id="container" className="container">
      <div className="absolute h-full w-full shadow-inner">
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
