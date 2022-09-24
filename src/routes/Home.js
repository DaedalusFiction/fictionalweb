import Editing from "../components/Editing";
import Portfolio from "../components/Portfolio";
import ServicesShowcase from "../components/ServicesShowcase";
import Showcase from "../components/Showcase";
import TextBreak from "../components/TextBreak";
import { services } from "../siteInfo";

const Home = () => {
    return (
        <>
            <TextBreak />
            <Showcase />
            <TextBreak />
            <Portfolio />
            <ServicesShowcase services={services} isPreview />
            <TextBreak />
            <Editing />
            <TextBreak />
        </>
    );
};

export default Home;
