import { Navbar } from "../components/Home/Navbar";
import { Footer } from "../components/Home/Footer";
import { ClassicalSpinModels } from "../components/Simulations/ClassicalSpinModels";
import { QuantumSpinModels } from "../components/Simulations/QuantumSpinModels";
import { QuantumComputing } from "../components/Simulations/QuantumComputing";
import { Tools } from "../components/Simulations/Tools";

export const Simulations = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-4">Condensed Matter Physics Simulations</h1>
        <p className="text-foreground/80 mb-8">
          A collection of numerical experiments and visualizations in condensed matter physics.
        </p>

        <ClassicalSpinModels />
        <QuantumSpinModels />
        <QuantumComputing />
        <Tools />
      </main>
      <Footer />
    </div>
  );
};
