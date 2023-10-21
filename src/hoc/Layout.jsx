/** @format */

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div
      className="grid grid-cols-1 max-h-screen h-screen relative "
      style={{
        gridTemplateRows: '72px calc(100vh - (72px + 61px)) 61px',
        backgroundImage: 'linear-gradient(#312d2d, #000 0%, #000 5%, #9069ff 32%, #000 91%, #000)'
      }}>
      <Header />
      <div className="overflow-auto">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
