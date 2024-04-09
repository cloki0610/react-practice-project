import {
    About,
    Experience,
    Hero,
    StarsCanvas,
    Tech,
    Work,
    Contact,
} from "../HomePage";

export const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Experience />
            <Tech />
            <Work />
            <div className="relative z-0">
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
};
