import { About } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import MyWorkSection from "../components/MyWork";

import { Navbar } from "../components/Navbar";

export const Home = () => {
    return (
    <div>
        <Navbar />
       <About />
       <MyWorkSection />
        <Footer />
    </div>
    );
}