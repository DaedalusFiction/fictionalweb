import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = () => {
    const location = useLocation();
    useEffect(() => {
        return () => {};
    }, [location]);

    return (
        <>
            {location.pathname === "/" && <Hero />}
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
