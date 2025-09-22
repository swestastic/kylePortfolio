import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Simulations = () => {
  const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container py-12">
        <h1 className="text-3xl font-bold mb-4">Condensed Matter Physics Simulations</h1>
        <p className="text-foreground/80 mb-8">
          A collection of numerical experiments and visualizations in condensed matter physics.
        </p>

        {/* Classical Spin Models */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Classical Spin Models</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Ising Model</h2>
            <p className="text-foreground/70 mb-4">
                Simulation codes and visualizations for the 2D Ising model using the
                Metropolis, Glauber, Heatbath, Wolff, Swendsen-Wang, Worm, and Kawasaki Monte Carlo algorithms,
                and a numerical linked-cluster expansion method.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Replace '#' with actual links */}
              <a href="https://github.com/swestastic/Ising_Model" className={btn} target="_blank" rel="noopener noreferrer">Python MC Notebook</a>
              <a href="https://github.com/swestastic/Ising_GUI" className={btn} target="_blank" rel="noopener noreferrer">Python MC GUI</a>
              <a href="https://swestastic.github.io/Ising_Rust/" className={btn} target="_blank" rel="noopener noreferrer">Rust MC WASM App</a>
              <a href="https://github.com/swestastic/Ising_NLCE/" className={btn} target="_blank" rel="noopener noreferrer">Python NLCE Notebook</a>
            </div>
          </section>

          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">XY Model</h2>
            <p className="text-foreground/70 mb-4">
              Simulation codes and visualizations for the 2D XY model using the
              Metropolis, Wolff, Worm, and Overrelaxation algorithms.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* <a href="https://github.com/swestastic/XY-Model" className={btn} target="_blank" rel="noopener noreferrer">Python Notebook</a> */}
              <a href="https://github.com/swestastic/XY_GUI" className={btn} target="_blank" rel="noopener noreferrer">Python GUI</a>
              <a href="https://swestastic.github.io/XY_Rust/" className={btn} target="_blank" rel="noopener noreferrer">Rust WASM App</a>
            </div>
          </section>
        </div>

        {/* Quantum Spin Models */}
        <h2 className="text-2xl font-bold mt-16 mb-4">Quantum Spin Models</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Fermi-Hubbard Model</h2>
            <p className="text-foreground/70 mb-4">
                Simulation codes for the Fermi-Hubbard model on the 1D chain, 2D square, and 2D Kagome lattices
                using the determinant quantum Monte Carlo method. 1D chain is implemented by hand in Python, and others use SmoQyDQMC.jl.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://github.com/swestastic/Hubbard_1D" className={btn} target="_blank" rel="noopener noreferrer">1D Chain</a>
              {/* <a href="https://github.com/swestastic/Hubbard_2D" className={btn} target="_blank" rel="noopener noreferrer">2D Square Julia</a>
              <a href="https://github.com/swestastic/Hubbard_Kagome" className={btn} target="_blank" rel="noopener noreferrer">2D Kagome Julia</a> */}
            </div>
          </section>
        </div>

        {/* Tools */}
        <h2 className="text-2xl font-bold mt-16 mb-4">Tools</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">SmoQyDQMC.jl LessIO</h2>
            <p className="text-foreground/70 mb-4">
              Modified version of the SmoQyDQMC.jl package with reduced input/output overhead.
              Ideal for running large parameter sweeps or long simulations where frequent disk writes are unnecessary.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://github.com/swestastic/SmoQyDQMC.jl" className={btn} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </section>

          {/* New: SmoQySaver */}
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">SmoQySaver</h2>
            <p className="text-foreground/70 mb-4">
              A lightweight Python utility for managing SmoQyDQMC outputs. 
              Calculate the binned average and standard error of the mean for observables over multiple runs,
                and save finalized results for easy lookup and plotting.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="https://github.com/swestastic/SmoQy_Saver" className={btn} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
