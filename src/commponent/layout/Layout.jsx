import React from 'react';
import Navbar from "../navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer.jsx";

function Layout(props) {
    return (
        <>
         <Navbar></Navbar>
            <div className="container">
                <Outlet></Outlet>
            </div>

         <Footer></Footer>
        </>
    );
}

export default Layout;