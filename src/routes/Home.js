import Editing from "../components/Editing";
import Portfolio from "../components/Portfolio";
import ServicesPreview from "../components/ServicesPreview";
import Showcase from "../components/Showcase";
import TextBreak from "../components/TextBreak";

const Home = () => {
    return (
        <>
            <TextBreak />
            <Showcase />
            <ServicesPreview />
            <TextBreak />
            <Portfolio />
            <TextBreak />
            <Editing />
            <TextBreak />
        </>
    );
};

export default Home;
