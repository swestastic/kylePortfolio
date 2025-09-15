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
                Simulation codes for the 2D Ising model using the 
                Metropolis, Glauber, Heatbath, Wolff, Swendsen-Wang, Worm, and Kawasaki algorithms.
                <br />
                Python code is available as a Jupyter Notebook, in addition to a Tkinter GUI application.
                <br />
                Rust code is available as a compiled Web Assembly app.
            </p>
            <div className="flex flex-wrap gap-2">
              {/* Replace '#' with actual links */}
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">Python Notebook</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">Python GUI</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">Rust WASM App</a>
            </div>
          </section>

          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">XY Model</h2>
            <p className="text-foreground/70 mb-4">
              Simulation codes for the 2D XY model using the
              Metropolis, Glauber, Heatbath, Wolff, Swendsen-Wang, Worm, and Kawasaki algorithms.
              <br />
              Python code is available as a Jupyter Notebook, in addition to a Tkinter GUI application.
              <br />
              Rust code is available as a compiled Web Assembly app.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">Python Notebook</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">Python GUI</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">Rust WASM App</a>
            </div>
          </section>
        </div>

        {/* Quantum Spin Models */}
        <h2 className="text-2xl font-bold mt-16 mb-4">Quantum Spin Models</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Fermi-Hubbard Model</h2>
            <p className="text-foreground/70 mb-4">
                Simulation codes for the Fermi-Hubbard model on the 1D chain, 2D square, and 2D Kagome lattices.
                <br />
                For the 1D chain implementation, Python code is available as a Jupyter Notebook 
                and Julia code is available as a script using the SmoQyDQMC.jl package.
                <br />
                For the 2D square and Kagome lattice implementations, Julia code is available as a script using the SmoQyDQMC.jl package.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">1D Python Notebook</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">1D Julia Script</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">2D Square Julia</a>
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">2D Kagome Julia</a>
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
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
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
              <a href="#" className={btn} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
