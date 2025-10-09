import { About } from "../components/Home/AboutSection";
import { Footer } from "../components/Home/Footer";
import MyWorkSection from "../components/Home/MyWork";

import { Navbar } from "../components/Home/Navbar";

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