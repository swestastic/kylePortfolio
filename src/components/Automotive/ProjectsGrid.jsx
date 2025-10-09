import { ProjectCard } from "./ProjectCard";
import { automotiveProjects } from "./projectsData";

export function ProjectsGrid() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{automotiveProjects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	);
}
