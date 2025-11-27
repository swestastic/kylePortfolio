import { useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "../OptimizedImage";
import IsingImage from "@/assets/Simulations/Ising.gif";
import XYImage1 from "@/assets/Simulations/XY1.gif";
import XYImage2 from "@/assets/Simulations/XY2.gif";
import PottsImage from "@/assets/Simulations/Potts.gif";

const classicalModels = [
	{
		title: "Ising Model",
		description: "Simulation codes and visualizations for the 2D Ising model using the Metropolis, Glauber, Heatbath, Wolff, Swendsen-Wang, Worm, and Kawasaki Monte Carlo algorithms, and a numerical linked-cluster expansion method.",
		images: [IsingImage],
		tags: ["Rust", "Python", "WebAssembly", "Monte Carlo", "NLCE"],
		demoUrl: "https://swestastic.github.io/Ising_Rust/",
		links: [
			{ label: "Python Interactive App", url: "https://github.com/swestastic/Ising_GUI" },
			{ label: "Python MC Notebook", url: "https://github.com/swestastic/Ising_Model" },
			{ label: "Python NLCE Notebook", url: "https://github.com/swestastic/Ising_NLCE/" },
		],
	},
	{
		title: "XY Model",
		description: "Simulation codes and visualizations for the 2D XY model using the Metropolis, Wolff, Worm, and Overrelaxation algorithms.",
		images: [XYImage1, XYImage2],
		tags: ["Rust", "Python", "WebAssembly", "Monte Carlo"],
		demoUrl: "https://swestastic.github.io/XY_Rust/",
		links: [
			{ label: "Python Interactive App", url: "https://github.com/swestastic/XY_GUI" },
		],
	},
	{
		title: "Standard Potts Model",
		description: "Rust web application to simulate the 2D q-state Potts model using the Metropolis algorithm.",
		images: [PottsImage],
		tags: ["Rust", "WebAssembly", "Monte Carlo"],
		demoUrl: "https://swestastic.github.io/Standard_Potts_Rust/",
		links: [],
	},
];

export function ClassicalSpinModels() {
	const [currentImageIndex, setCurrentImageIndex] = useState(
		classicalModels.reduce((acc, _, index) => {
			acc[index] = 0;
			return acc;
		}, {})
	);
	
	const [hoveredCard, setHoveredCard] = useState(null);

	const handlePrevImage = (modelIndex, e) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex(prev => ({
			...prev,
			[modelIndex]: prev[modelIndex] === 0 
				? classicalModels[modelIndex].images.length - 1 
				: prev[modelIndex] - 1
		}));
	};

	const handleNextImage = (modelIndex, e) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex(prev => ({
			...prev,
			[modelIndex]: prev[modelIndex] === classicalModels[modelIndex].images.length - 1 
				? 0 
				: prev[modelIndex] + 1
		}));
	};

	return (
		<>
			<h2 className="text-2xl font-bold mt-12 mb-4">Classical Spin Model Simulations</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{classicalModels.map((model, index) => (
					<div 
						key={index} 
						className="bg-card overflow-hidden rounded-lg shadow-xs card-hover group"
						onMouseEnter={() => setHoveredCard(index)}
						onMouseLeave={() => setHoveredCard(null)}
					>
						<div className="relative aspect-video bg-muted overflow-hidden">
							<OptimizedImage 
								src={model.images[currentImageIndex[index]]} 
								alt={model.title} 
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							{model.images.length > 1 && (
								<div 
									className="absolute inset-0 z-30 transition-opacity duration-300"
									style={{ opacity: hoveredCard === index ? 1 : 0.15 }}
								>
									<button
										onClick={(e) => handlePrevImage(index, e)}
										className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black rounded-full p-3 shadow-xl border-2 border-gray-200"
										aria-label="Previous image"
									>
										<ChevronLeft className="size-5" />
									</button>
									<button
										onClick={(e) => handleNextImage(index, e)}
										className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-black rounded-full p-3 shadow-xl border-2 border-gray-200"
										aria-label="Next image"
									>
										<ChevronRight className="size-5" />
									</button>
									<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full backdrop-blur-sm">
										{model.images.map((_, imgIndex) => (
											<div
												key={imgIndex}
												className={`h-2 w-2 rounded-full transition-all ${
													imgIndex === currentImageIndex[index]
														? 'bg-white w-6'
														: 'bg-white/60'
												}`}
											/>
										))}
									</div>
								</div>
							)}
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
								{model.demoUrl && (
									<a
										href={model.demoUrl}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 transition-transform duration-200 hover:scale-[1.02]"
									>
										<ExternalLink className="size-4"/>Live Webapp Demo
									</a>
								)}
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
