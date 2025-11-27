import { Github, ExternalLink } from "lucide-react";
import IsingMagnetizationImage from "@/assets/Simulations/IsingMagnetizationPredictor.png";

const machineLearningProjects = [
	{
		title: "Magnetization Predictor",
		description: "A machine learning model that predicts magnetization in spin systems based on input parameters. Utilizes regression techniques to estimate magnetization values from various spin configurations.",
		image: IsingMagnetizationImage,
		tags: ["Python", "Machine Learning", "Regression", "Neural Networks"],
		links: [
			{ label: "GitHub Repository", url: "https://github.com/swestastic/Ising_Magnetization_Predictor" },
		],
	},
];

export function MachineLearning() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Machine Learning</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{machineLearningProjects.map((project, index) => (
					<div key={index} className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover">
						<div>
							<img 
								src={project.image} 
								alt={project.title} 
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
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
