import { About } from "../components/Home/AboutSection";
import { Footer } from "../components/Home/Footer";
import MyWorkSection from "../components/Home/MyWork";
import { Navbar } from "../components/Home/Navbar";
import { ClassicalSpinModels } from "../components/Simulations/ClassicalSpinModels";
import { QuantumSpinModels } from "../components/Simulations/QuantumSpinModels";
import { QuantumComputing } from "../components/Simulations/QuantumComputing";
import { MachineLearning } from "../components/Simulations/MachineLearning";
import { Tools } from "../components/Simulations/Tools";
import { AutomotiveProgramming } from "../components/Automotive/AutomotiveProgramming";
import { AutomotiveDesign } from "../components/Automotive/AutomotiveDesign";
import { ProjectsGrid } from "../components/Automotive/ProjectsGrid";

export const Home = () => {
    return (
    <div>
        <Navbar />
       <About />
       {/* <MyWorkSection /> */}
       
       <section id="physics" className="container py-12">
         <h2 className="text-3xl font-bold mb-4">Condensed Matter Physics</h2>
         <p className="text-foreground/80 mb-8">
           A collection of numerical experiments, visualizations, and tools for condensed matter physics.
         </p>

         <ClassicalSpinModels />
         <MachineLearning />
         <QuantumSpinModels />
         <QuantumComputing />
         <Tools />
       </section>

       <section id="automotive" className="container py-12">
         <h2 className="text-3xl font-bold mb-4">Automotive Projects</h2>
         <p className="text-foreground/80 mb-8">
           A collection of automotive programming projects, diagnostic tools, and custom designs.
         </p>
         
         <ProjectsGrid />
         <AutomotiveProgramming />
         <AutomotiveDesign />
       </section>

        <Footer />
    </div>
    );
}