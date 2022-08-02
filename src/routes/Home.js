import Editing from "../components/Editing";
import Portfolio from "../components/Portfolio";
import Showcase from "../components/Showcase";
import TextBreak from "../components/TextBreak";

const Home = () => {
    return (
        <>
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
