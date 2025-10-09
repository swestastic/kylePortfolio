import { Navbar } from "../components/Home/Navbar";
import { Header } from "../components/Automotive/Header";
import { ProjectsGrid } from "../components/Automotive/ProjectsGrid";

export function Automotive() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<section className="relative py-16 md:py-24 bg-background text-foreground">
				<div className="container">
					<Header />
					<ProjectsGrid />
				</div>
			</section>
		</div>
	);
}

