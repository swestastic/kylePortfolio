const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

export function ClassicalSpinModels() {
	return (
		<>
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

				<section className="border rounded-lg p-6">
					<h2 className="text-xl font-semibold mb-2">Standard Potts Model</h2>
					<p className="text-foreground/70 mb-4">
						Rust web application to simulate the 2D q-state Potts model using the Metropolis algorithm.
					</p>
					<div className="flex flex-wrap gap-2">
						<a href="https://swestastic.github.io/Standard_Potts_Rust/" className={btn} target="_blank" rel="noopener noreferrer">Rust WASM App</a>
					</div>
				</section>
			</div>
		</>
	);
}
