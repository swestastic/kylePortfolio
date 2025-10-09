import { Github, ExternalLink } from "lucide-react";

export function ProjectCard({ project }) {
	return (
		<div className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
			{/* Image */}
			{project.image && (
				<div className="relative h-48 overflow-hidden">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
				</div>
			)}

			<div className="p-6">
				{/* Tags */}
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

				{/* Title and Description */}
				<h3 className="text-xl font-semibold mb-3">
					{project.title}
				</h3>
				<p className="text-sm text-foreground/70 mb-6 leading-relaxed">
					{project.description}
				</p>

				{/* Links */}
				<div className="flex gap-3">
					{project.learnMoreUrl && (
						<a
							href={project.learnMoreUrl}
							{...(project.learnMoreUrl.startsWith('#') ? {} : { target: '_blank', rel: 'noreferrer' })}
							className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 transition-transform duration-200 hover:scale-[1.02]"
						>
							<ExternalLink className="size-4" />
							Learn More
						</a>
					)}
					{project.githubUrl && (
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 hover:bg-background/80 transition-colors"
						>
							<Github className="size-4" />
							GitHub
						</a>
					)}
					{project.demoUrl && (
						<a
							href={project.demoUrl}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground px-4 py-2 transition-transform duration-200 hover:scale-[1.02]"
						>
							<ExternalLink className="size-4" />
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
