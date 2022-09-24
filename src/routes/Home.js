import Editing from "../components/Editing";
import Portfolio from "../components/Portfolio";
import ServicesShowcase from "../components/ServicesShowcase";
import Showcase from "../components/Showcase";
import TextBreak from "../components/TextBreak";

const Home = () => {
    return (
        <>
            <TextBreak />
            <Showcase />
            <TextBreak />
            <Portfolio />
            <ServicesShowcase isPreview />
            <TextBreak />
            <Editing />
            <TextBreak />
        </>
    );
};

export default Home;
