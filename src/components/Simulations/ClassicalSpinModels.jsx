const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

import IsingImage from "@/assets/Simulations/Ising.png";
import XYImage from "@/assets/Simulations/XY.png";
import PottsImage from "@/assets/Simulations/Potts.png";

const classicalModels = [
	{
		title: "Ising Model",
		description: "Simulation codes and visualizations for the 2D Ising model using the Metropolis, Glauber, Heatbath, Wolff, Swendsen-Wang, Worm, and Kawasaki Monte Carlo algorithms, and a numerical linked-cluster expansion method.",
		image: IsingImage,
		links: [
			{ label: "Rust MC WASM App", url: "https://swestastic.github.io/Ising_Rust/" },
			{ label: "Python MC Notebook", url: "https://github.com/swestastic/Ising_Model" },
			{ label: "Python MC GUI", url: "https://github.com/swestastic/Ising_GUI" },
			{ label: "Python NLCE Notebook", url: "https://github.com/swestastic/Ising_NLCE/" },
		],
	},
	{
		title: "XY Model",
		description: "Simulation codes and visualizations for the 2D XY model using the Metropolis, Wolff, Worm, and Overrelaxation algorithms.",
		image: XYImage,
		links: [
			{ label: "Rust WASM App", url: "https://swestastic.github.io/XY_Rust/" },
			{ label: "Python GUI", url: "https://github.com/swestastic/XY_GUI" },
		],
	},
	{
		title: "Standard Potts Model",
		description: "Rust web application to simulate the 2D q-state Potts model using the Metropolis algorithm.",
		image: PottsImage,
		links: [
			{ label: "Rust WASM App", url: "https://swestastic.github.io/Standard_Potts_Rust/" },
		],
	},
];

export function ClassicalSpinModels() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-12 mb-4">Classical Spin Models</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{classicalModels.map((model, index) => (
					<section key={index} className="border rounded-lg overflow-hidden">
						{/* Optional Image */}
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
