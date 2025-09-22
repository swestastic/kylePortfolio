import { cn } from "../lib/utils";
import { Github, ExternalLink } from "lucide-react";
import Z32Pic from "@/assets/300zx.jpg";
import AE86Pic from "@/assets/AE86.jpg";
import YayRacingPic from "@/assets/YayRacing.jpg";
import { Navbar } from "../components/Navbar";

const automotiveProjects = [
	{
		title: "Yay Racing",
		description:
			"Former webstore for automotive parts developed by myself and my friend, Roman. Now it serves as my automotive website where I share my car projects and parts that I have made in SolidWorks.",
		tags: [],
		learnMoreUrl: "https://yayracing.com",
		image: YayRacingPic, // Add your Yay Racing image here
	},
	{
		title: "1990 Nissan 300ZX 2+2 Z32",
		description:
			"I purchased this 1990 Nissan 300ZX 2+2 in January of 2020. It was crashed badly by the previous owner, and destined as a parts car for my other 1996 300ZX, but I decided to restore it. Powered by a naturally aspirated VG30DE engine, this car has served me well as a daily driver, drift car, and project car.",
		tags: [],
		// learnMoreUrl: "#", // Add your 300ZX project URL here
		image: Z32Pic, // Add your 300ZX image here
		// githubUrl: "https://github.com/swestastic/PiConsult",
		// Add more automotive projects here
	},
	{
		title: "1986 Toyota Corolla AE86",
		description:
			"I traded my 1996 300ZX for this 1986 Toyota Corolla AE86 in August of 2021. When I got this car it was in rough shape and powered by a 4AC engine. Later it received a 16v 4AGE engine swap, and now it has a notchtop SR20DE engine swap from a Nissan Silvia S15.",
		tags: [],
		// learnMoreUrl: "#", // Add your AE86 project URL here
		image: AE86Pic, // Add your AE86 image here
		// Add githubUrl if you have related projects
		// githubUrl: "https://github.com/swestastic/ae86-project",
	},
];

export default function AutomotiveSection() {
	return (
		<section
			className={cn(
				"relative py-16 md:py-24 bg-background text-foreground"
			)}
		>
			<div className="container">
				{/* Header */}
				<div className="mx-auto max-w-3xl text-center mb-16">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tight">
						Automotive Projects
					</h1>
					<p className="mt-4 text-lg text-foreground/70">
						My experience and projects related to cars. Rebuilding cars from the
						ground up for performance, reliability, and fun.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{automotiveProjects.map((project, index) => (
						<div
							key={index}
							className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
						>
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
											target="_blank"
											rel="noreferrer"
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
					))}
				</div>

				{/* Additional content section */}
				{/* <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold mb-4">More Coming Soon</h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        I'm continuously working on new automotive-related projects. Check
                        back for updates on ECU tuning tools, diagnostic software, and other
                        car enthusiast projects.
                    </p>
                </div> */}
			</div>
		</section>
	);
}

export function Automotive() {
	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<AutomotiveSection />
		</div>
	);
}
