import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Info from "../components/Info";
import TextBreak from "../components/TextBreak";

const Home = () => {
    return (
        <>
            <Hero />
            <Header />
            <TextBreak />
            <Info />
            <TextBreak />
        </>
    );
};

export default Home;
