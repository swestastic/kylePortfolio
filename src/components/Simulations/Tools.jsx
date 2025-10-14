const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

// Import images here when you add them
import SmoQyLessIOImage from "@/assets/Tools/SmoQyDQMC.png";
import SmoQySaverImage from "@/assets/Tools/SmoQySaver.png";
import LatticeBuilderImage from "@/assets/Tools/LatticeBuilder.png";

const tools = [
	{
		title: "SmoQyDQMC.jl LessIO",
		description: "Modified version of the SmoQyDQMC.jl package with reduced input/output overhead. Ideal for running large parameter sweeps or long simulations where frequent disk writes are unnecessary.",
		image: SmoQyLessIOImage,
		links: [
			{ label: "GitHub Repo", url: "https://github.com/swestastic/SmoQyDQMC.jl" },
		],
	},
	{
		title: "SmoQySaver",
		description: "A lightweight Python utility for managing SmoQyDQMC outputs. Calculate the binned average and standard error of the mean for observables over multiple runs, and save finalized results for easy lookup and plotting.",
		image: SmoQySaverImage,
		links: [
			{ label: "GitHub Repo", url: "https://github.com/swestastic/SmoQy_Saver" },
		],
	},
	{
		title: "LatticeBuilder",
		description: "A Rust WASM app for building and visualizing 2D lattices. Create various lattice structures and export them for use in simulations or educational purposes.",
		image: LatticeBuilderImage,
		links: [
			{ label: "Rust WASM App", url: "https://swestastic.github.io/LatticeBuilder" },
		],
	},
];

export function Tools() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Tools</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{tools.map((tool, index) => (
					<section key={index} className="border rounded-lg overflow-hidden">
						{/* Optional Image */}
						{tool.image && (
							<div className="relative h-48 overflow-hidden">
								<img
									src={tool.image}
									alt={tool.title}
									className="w-full h-full object-cover"
								/>
							</div>
						)}
						
						<div className="p-6">
							<h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
							<p className="text-foreground/70 mb-4">
								{tool.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{tool.links.map((link, linkIndex) => (
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
