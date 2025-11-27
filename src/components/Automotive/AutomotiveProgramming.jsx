import { useState } from "react";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "../OptimizedImage";
import PyConsultImage from "@/assets/PyConsult.png";
import PiConsultImage from "@/assets/Project2.png";
import FlockConsultImage from "@/assets/Project2.png";

const automotiveProgramming = [
	{
		title: "PyConsult",
		description: "Python GUI application for interacting with Nissan Datascan I devices. Allows real-time data logging, graphing, and analysis of vehicle parameters such as speed, RPM, temperature, and more.",
		images: [PyConsultImage],
		tags: ["Python", "RS232 Serial", "Automotive Diagnostics"],
		links: [
			{ label: "GitHub Repository", url: "https://github.com/swestastic/PyConsult" },
		],
	},
	{
		title: "PiConsult",
		description: "Standalone Raspberry Pi application for interfacing with Nissan Datascan I devices. Provides similar functionality to PyConsult but optimized for the Raspberry Pi platform as a dedicated in-vehicle diagnostics tool.",
		images: [PiConsultImage],
		tags: ["Python", "RS232 Serial", "Raspberry Pi", "SolidWorks", "SPI Display"],
		links: [
			{ label: "GitHub Repository", url: "https://github.com/swestastic/PiConsult" },
		],
	},
	{
		title: "FlockConsult",
		description: "Allows automotive gauges produced by Flock Mfg. to interface with Nissan Datascan I devices for real-time data display and logging.",
		images: [FlockConsultImage],
		tags: ["Python", "RS232 Serial", "Raspberry Pi"],
		links: [],
	},
];

export function AutomotiveProgramming() {
	const [currentImageIndex, setCurrentImageIndex] = useState(
		automotiveProgramming.reduce((acc, _, index) => {
			acc[index] = 0;
			return acc;
		}, {})
	);
	
	const [hoveredCard, setHoveredCard] = useState(null);

	const handlePrevImage = (projectIndex, e) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex(prev => ({
			...prev,
			[projectIndex]: prev[projectIndex] === 0 
				? automotiveProgramming[projectIndex].images.length - 1 
				: prev[projectIndex] - 1
		}));
	};

	const handleNextImage = (projectIndex, e) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex(prev => ({
			...prev,
			[projectIndex]: prev[projectIndex] === automotiveProgramming[projectIndex].images.length - 1 
				? 0 
				: prev[projectIndex] + 1
		}));
	};

	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Automotive Programming</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{automotiveProgramming.map((project, index) => (
					<div 
						key={index} 
						className="bg-card overflow-hidden rounded-lg shadow-xs card-hover group"
						onMouseEnter={() => setHoveredCard(index)}
						onMouseLeave={() => setHoveredCard(null)}
					>
						<div className="relative aspect-video bg-muted overflow-hidden">
							<OptimizedImage 
								src={project.images[currentImageIndex[index]]} 
								alt={project.title} 
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							{project.images.length > 1 && (
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
										{project.images.map((_, imgIndex) => (
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
								{project.tags.map((tag, tagIndex) => (
									<span 
										key={tagIndex}
										className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
									>
										{tag}
									</span>
								))}
							</div>

							<h3 className="text-xl font-semibold mb-1">{project.title}</h3>
							<p className="text-sm mb-4">{project.description}</p>
							<div className="flex flex-col space-y-2">
								{project.links.map((link, linkIndex) => (
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
