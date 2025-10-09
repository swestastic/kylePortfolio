const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

export function QuantumSpinModels() {
	return (
		<>
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

				<section className="border rounded-lg p-6">
					<h2 className="text-xl font-semibold mb-2">Transverse Field Ising Model</h2>
					<p className="text-foreground/70 mb-4">
						Simulation codes for the 1D Transverse Field Ising model.
						This approach is implemented using exact diagonalization in Python.
					</p>
					<div className="flex flex-wrap gap-2">
						<a href="https://github.com/swestastic/TFIM_ED" className={btn} target="_blank" rel="noopener noreferrer">Python ED Notebook</a>
						{/* <a href="https://github.com/swestastic/TFIM_2D" className={btn} target="_blank" rel="noopener noreferrer">2D Square Julia</a>
						<a href="https://github.com/swestastic/TFIM_Kagome" className={btn} target="_blank" rel="noopener noreferrer">2D Kagome Julia</a> */}
					</div>
				</section>
			</div>
		</>
	);
}
