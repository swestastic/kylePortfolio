import { Github, ExternalLink } from "lucide-react";
import HubbardImage from "@/assets/Simulations/Hubbard.png";
import TFIMImage from "@/assets/Simulations/TFIM.png";

const quantumModels = [
	{
		title: "Fermi-Hubbard Model",
		description: "Simulation codes for the Fermi-Hubbard model on the 1D chain, 2D square, and 2D Kagome lattices using the determinant quantum Monte Carlo method. 1D chain is implemented by hand in Python, and others use SmoQyDQMC.jl.",
		image: HubbardImage,
		tags: ["Python", "Julia", "DQMC", "Quantum Monte Carlo"],
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
		tags: ["Python", "Exact Diagonalization", "Quantum Mechanics"],
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{quantumModels.map((model, index) => (
					<div key={index} className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover">
						<div>
							<img 
								src={model.image} 
								alt={model.title} 
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>

						<div className="p-6">
							<div className="flex flex-wrap gap-2 mb-4">
								{model.tags.map((tag, tagIndex) => (
									<span 
										key={tagIndex}
										className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
									>
										{tag}
									</span>
								))}
							</div>

							<h3 className="text-xl font-semibold mb-1">{model.title}</h3>
							<p className="text-sm mb-4">{model.description}</p>
							<div className="flex flex-col space-y-2">
								{model.links.map((link, linkIndex) => (
									<a
										key={linkIndex}
										href={link.url}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 hover:bg-background/80"
									>
										<Github className="size-4"/>{link.label}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
