import React from 'react';
import NavBar from "@hoc/layout/NavBar";
import Footer from "@hoc/layout/Footer";

const Layout = ({ children }) => {
    return (
        <div id="container" className="container">
            <div className="absolute h-full w-full shadow-inner">
                <NavBar/>
                <div className="relative">
                  {children}
                  <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Layout;
