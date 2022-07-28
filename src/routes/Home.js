import React from "react";
import BlockQuote from "../components/BlockQuote";
import Editing from "../components/Editing";
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
            <TextBreak />
            <Editing />
        </>
    );
};

export default Home;
