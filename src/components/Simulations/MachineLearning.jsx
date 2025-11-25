const btn = "inline-flex items-items rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

// Import images here when you add them
import IsingMagnetizationImage from "@/assets/Simulations/IsingMagnetizationPredictor.png";

const machineLearningProjects = [
	{
		title: "Magnetization Predictor",
		description: "A machine learning model that predicts magnetization in spin systems based on input parameters. Utilizes regression techniques to estimate magnetization values from various spin configurations.",
		image: IsingMagnetizationImage,
		links: [
			{ label: "GitHub Repository", url: "https://github.com/swestastic/Ising_Magnetization_Predictor" },
		],
	},
];

export function MachineLearning() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Machine Learning</h2>
			<div className="grid gap-6 md:grid-cols-2">
				{machineLearningProjects.map((project, index) => (
					<section key={index} className="border rounded-lg overflow-hidden">
						{/* Optional Image */}
						{project.image && (
							<div className="relative h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover"
								/>
							</div>
						)}
						
						<div className="p-6">
							<h2 className="text-xl font-semibold mb-2">{project.title}</h2>
							<p className="text-foreground/70 mb-4">
								{project.description}
							</p>
							<div className="flex flex-wrap gap-2">
								{project.links.map((link, linkIndex) => (
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
