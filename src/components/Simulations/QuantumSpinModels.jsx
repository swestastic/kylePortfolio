const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

import HubbardImage from "@/assets/Simulations/Hubbard.png";
import TFIMImage from "@/assets/Simulations/TFIM.png";

const quantumModels = [
	{
		title: "Fermi-Hubbard Model",
		description: "Simulation codes for the Fermi-Hubbard model on the 1D chain, 2D square, and 2D Kagome lattices using the determinant quantum Monte Carlo method. 1D chain is implemented by hand in Python, and others use SmoQyDQMC.jl.",
		image: HubbardImage,
		links: [
			{ label: "1D Chain", url: "https://github.com/swestastic/Hubbard_1D" },
			// { label: "2D Square Julia", url: "https://github.com/swestastic/Hubbard_2D" },
			// { label: "2D Kagome Julia", url: "https://github.com/swestastic/Hubbard_Kagome" },
		],
	},
	{
		title: "Transverse Field Ising Model",
		description: "Simulation codes for the 1D Transverse Field Ising model. This approach is implemented using exact diagonalization in Python.",
		image: TFIMImage,
		links: [
			{ label: "Python ED Notebook", url: "https://github.com/swestastic/TFIM_ED" },
			// { label: "2D Square Julia", url: "https://github.com/swestastic/TFIM_2D" },
			// { label: "2D Kagome Julia", url: "https://github.com/swestastic/TFIM_Kagome" },
		],
	},
];

export function QuantumSpinModels() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Quantum Spin Models</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{quantumModels.map((model, index) => (
					<section key={index} className="border rounded-lg overflow-hidden">
						{model.image && (
							<div className="relative h-48 overflow-hidden">
								<img
									src={model.image}
									alt={model.title}
									className="w-full h-full object-cover"
								/>
							</div>
						)}
						
						<div className="p-6">
							<h2 className="text-xl font-semibold mb-2">{model.title}</h2>
							<p className="text-foreground/70 mb-4">
								{model.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{model.links.map((link, linkIndex) => (
									<a
										key={linkIndex}
										href={link.url}
										className={btn}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.label}
									</a>
								))}
							</div>
						</div>
					</section>
				))}
			</div>
		</>
	);
}
