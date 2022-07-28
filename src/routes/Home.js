import React from "react";
import BlockQuote from "../components/BlockQuote";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Showcase from "../components/Showcase";
import TextBreak from "../components/TextBreak";

const Home = () => {
    return (
        <>
            <Hero />
            <Header />
            <TextBreak />
            <Showcase />
            <TextBreak />
            <BlockQuote />
            <TextBreak />
            <Portfolio />
        </>
    );
};

export default Home;
