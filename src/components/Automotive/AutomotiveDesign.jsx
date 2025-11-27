import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedImage } from "../OptimizedImage";
import SR20IntakeImage from "@/assets/Automotive/SR20/pipe.gif";
import SR20MAFAdapterImage from "@/assets/Automotive/SR20/maf.gif";
import SR20ThrottleBracketImage from "@/assets/Automotive/SR20/throttle.gif";

import AE86BlankImage from "@/assets/Automotive/AE86/Interior/dashblank.gif";
import AE86GaugePodImage from "@/assets/Automotive/AE86/Interior/gaugepod.gif";
import AE86SwitchPanelImage from "@/assets/Automotive/AE86/Interior/switchpanel.gif";

import AE86FrontGrilleImage from "@/assets/Automotive/AE86/Exterior/usdmgrill.gif";
import AE86FrontEmblemImage from "@/assets/Automotive/AE86/Exterior/emblem.gif";
import AE86GanadorMountsImage from "@/assets/Automotive/AE86/Exterior/frontbumpermount.gif";

import Z32AntennaDeleteImage from "@/assets/Automotive/Z32/Exterior/antennadelete.gif";
import Z32RoofSpoilerImage from "@/assets/Automotive/Z32/Exterior/roofspoiler.gif";

import Z32GaugePodImage from "@/assets/Automotive/Z32/Interior/gaugepod.gif";

const automotiveDesign = [
	{
		title: "AE86 SR20DE Swap",
		description: "Original designs created for installation of a Nissan SR20DE engine into a Toyota AE86, including the intake system and various brackets and adapters.",
		images: [SR20IntakeImage, SR20MAFAdapterImage, SR20ThrottleBracketImage],
		tags: ["SolidWorks", "3D Modeling", "Automotive Design", "CFD"],
		links: [
			{ label: "Short Ram Intake", url: "https://www.yayracing.com/design/sr20/short-ram-intake" },
			{ label: "MAF Filter Adapter", url: "https://www.yayracing.com/design/sr20/maf-filter-adapter" },
			{ label: "Throttle Cable Bracket", url: "https://www.yayracing.com/design/sr20/throttle-cable-bracket" },
			// { label: "Radiator Brackets", url: "https://yayracing.com/" },
		],
	},
	{
		title: "AE86 Interior",
		description: "Reproductions of some difficult to source interior parts for the Toyota AE86, as well as some custom designed components to enhance functionality and aesthetics.",
		images: [AE86BlankImage, AE86GaugePodImage, AE86SwitchPanelImage],
		tags: ["SolidWorks", "3D Modeling", "Interior Design"],
		links: [
			{ label: "Dashboard Blank", url: "https://www.yayracing.com/design/ae86/interior/oem-replacement/dashboard-switch-blank" },
			{ label: "Gauge Pod", url: "https://www.yayracing.com/design/ae86/interior/original-design/ash-tray-gauge-pod" },
			// { label: "Drift Buttons", url: "https://yayracing.com/" },
			// { label: "Seat Pull Knobs", url: "https://yayracing.com/" },
			// { label: "Mirror Knobs", url: "https://yayracing.com/" },
			// { label: "Cigarette Lighter Blank", url: "https://yayracing.com/" },
			{ label: "Switch Panel", url: "https://yayracing.com/" },
		],
	},
	{
		title: "AE86 Exterior",
		description: "Reproductions of some NLA exterior parts for the Toyota AE86, in addition to custom designed components for optimal exterior fit and finish.",
		images: [AE86FrontGrilleImage, AE86FrontEmblemImage, AE86GanadorMountsImage],
		tags: ["SolidWorks", "3D Modeling", "Manufacturing"],
		links: [
			// { label: "Antenna Delete Plug", url: "https://yayracing.com/" },
			{ label: "Front Grille", url: "https://yayracing.com/" },
			{ label: "Front Emblem", url: "https://yayracing.com/" },
			{ label: "Front Bumper Mounts", url: "https://yayracing.com/" },
		],
	},
	{
		title: "Z32 Interior",
		description: "Original designs for Nissan 300ZX (Z32) interior components, providing new functionality while maintaining the classic aesthetic.",
		images: [Z32GaugePodImage],
		tags: ["SolidWorks", "3D Modeling", "Manufacturing"],
		links: [
			{ label: "Triple Gauge Pod", url: "https://yayracing.com/" },
		],
	},
	{
		title: "Z32 Exterior",
		description: "Original designs for Nissan 300ZX (Z32) exterior components, providing a modern touch to aesthetics while maintaining the timeless look of the platform.",
		images: [Z32AntennaDeleteImage, Z32RoofSpoilerImage],
		tags: ["SolidWorks", "3D Modeling", "Manufacturing"],
		links: [
			{ label: "Antenna Delete Plug", url: "https://yayracing.com/" },
			{ label: "Roof Spoiler", url: "https://www.yayracing.com/design/z32/exterior/roof-spoiler" },
		],
	},
];

export function AutomotiveDesign() {
	const [currentImageIndex, setCurrentImageIndex] = useState(
		automotiveDesign.reduce((acc, _, index) => {
			acc[index] = 0;
			return acc;
		}, {})
	);
	
	const [hoveredCard, setHoveredCard] = useState(null);
	const [loadedImages, setLoadedImages] = useState({});

	const handlePrevImage = (projectIndex, e) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex(prev => ({
			...prev,
			[projectIndex]: prev[projectIndex] === 0 
				? automotiveDesign[projectIndex].images.length - 1 
				: prev[projectIndex] - 1
		}));
	};

	const handleNextImage = (projectIndex, e) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentImageIndex(prev => ({
			...prev,
			[projectIndex]: prev[projectIndex] === automotiveDesign[projectIndex].images.length - 1 
				? 0 
				: prev[projectIndex] + 1
		}));
	};

	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Automotive Design</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{automotiveDesign.map((project, index) => (
					<div 
						key={index} 
						className="bg-card overflow-hidden rounded-lg shadow-xs card-hover group"
						onMouseEnter={() => setHoveredCard(index)}
						onMouseLeave={() => setHoveredCard(null)}
					>
						<div 
							className="relative aspect-video bg-muted overflow-hidden"
						>
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
										<ExternalLink className="size-4"/>{link.label}
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
