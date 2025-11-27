import { Github, ExternalLink } from "lucide-react";
import SmoQyLessIOImage from "@/assets/Tools/SmoQyDQMC.png";
import SmoQySaverImage from "@/assets/Tools/SmoQySaver.png";
import LatticeBuilderImage from "@/assets/Tools/LatticeBuilder.png";

const tools = [
	{
		title: "SmoQyDQMC.jl LessIO",
		description: "Modified version of the SmoQyDQMC.jl package with reduced input/output overhead. Ideal for running large parameter sweeps or long simulations where frequent disk writes are unnecessary.",
		image: SmoQyLessIOImage,
		tags: ["Julia", "DQMC", "File I/O", "Performance"],
		links: [
			{ label: "GitHub Repo", url: "https://github.com/swestastic/SmoQyDQMC.jl" },
		],
	},
	{
		title: "SmoQySaver",
		description: "A lightweight Python utility for managing SmoQyDQMC outputs. Calculate the binned average and standard error of the mean for observables over multiple runs, and save finalized results for easy lookup and plotting.",
		image: SmoQySaverImage,
		tags: ["Python", "Data Analysis", "Statistics"],
		links: [
			{ label: "GitHub Repo", url: "https://github.com/swestastic/SmoQy_Saver" },
		],
	},
	{
		title: "LatticeBuilder",
		description: "A Rust WASM app for building and visualizing 2D lattices. Create various lattice structures and export them for use in simulations or educational purposes.",
		image: LatticeBuilderImage,
		tags: ["Rust", "WebAssembly", "Visualization"],
		links: [
			{ label: "Rust WASM App", url: "https://swestastic.github.io/LatticeBuilder" },
		],
	},
];

export function Tools() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Tools</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{tools.map((tool, index) => (
					<div key={index} className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover">
						<div>
							<img 
								src={tool.image} 
								alt={tool.title} 
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
						</div>

						<div className="p-6">
							<div className="flex flex-wrap gap-2 mb-4">
								{tool.tags.map((tag, tagIndex) => (
									<span 
										key={tagIndex}
										className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground"
									>
										{tag}
									</span>
								))}
							</div>

							<h3 className="text-xl font-semibold mb-1">{tool.title}</h3>
							<p className="text-sm mb-4">{tool.description}</p>
							<div className="flex flex-col space-y-2">
								{tool.links.map((link, linkIndex) => (
									<a
										key={linkIndex}
										href={link.url}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 hover:bg-background/80"
									>
										{link.label.includes('WASM') ? <ExternalLink className="size-4"/> : <Github className="size-4"/>}{link.label}
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
