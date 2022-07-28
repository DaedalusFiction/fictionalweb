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
            <Portfolio />
            <TextBreak />
            <Editing />
            <TextBreak />
        </>
    );
};

export default Home;
