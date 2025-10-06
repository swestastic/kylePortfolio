import { useState } from "react";
import { cn } from "../lib/utils";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
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

function Z32BuildSection() {
	const [openSections, setOpenSections] = useState({
		suspension: false,
		engine: false,
		interior: false,
		exterior: false,
		maintenance: false
	});

	const toggleSection = (section) => {
		setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
	};

	return (
		<div className="mt-3 text-foreground/70 space-y-3">
			{/* Suspension & Handling */}
			<div className="border border-border rounded-lg overflow-hidden">
				<button
					onClick={() => toggleSection('suspension')}
					className="w-full flex items-center justify-between p-3 bg-card hover:bg-card/80 transition-colors"
				>
					<h4 className="font-semibold text-foreground">Suspension & Handling</h4>
					<ChevronDown className={`size-5 transition-transform ${openSections.suspension ? 'rotate-180' : ''}`} />
				</button>
				{openSections.suspension && (
					<ul className="list-disc list-inside space-y-1 ml-2 p-3 pt-0">
						<li>Tein Flex Z coilovers</li>
						<li>Powertrix RUCA & Traction rods</li>
						<li>Welded 4.083 differential</li>
					</ul>
				)}
			</div>

			{/* Engine & Drivetrain */}
			<div className="border border-border rounded-lg overflow-hidden">
				<button
					onClick={() => toggleSection('engine')}
					className="w-full flex items-center justify-between p-3 bg-card hover:bg-card/80 transition-colors"
				>
					<h4 className="font-semibold text-foreground">Engine & Drivetrain</h4>
					<ChevronDown className={`size-5 transition-transform ${openSections.engine ? 'rotate-180' : ''}`} />
				</button>
				{openSections.engine && (
					<ul className="list-disc list-inside space-y-1 ml-2 p-3 pt-0">
						<li>CZP ECU ROM tune</li>
						<li>GReddy SP2 catback exhaust</li>
						<li>Z1 aluminum driveshaft</li>
						<li>Z1 short shifter</li>
						<li>Z1 pop charger</li>
						<li>Koyorad radiator</li>
					</ul>
				)}
			</div>

			{/* Interior */}
			<div className="border border-border rounded-lg overflow-hidden">
				<button
					onClick={() => toggleSection('interior')}
					className="w-full flex items-center justify-between p-3 bg-card hover:bg-card/80 transition-colors"
				>
					<h4 className="font-semibold text-foreground">Interior</h4>
					<ChevronDown className={`size-5 transition-transform ${openSections.interior ? 'rotate-180' : ''}`} />
				</button>
				{openSections.interior && (
					<ul className="list-disc list-inside space-y-1 ml-2 p-3 pt-0">
						<li>Recaro SR3, confetti pattern</li>
						<li>Nardi Deep Corn 330mm</li>
						<li>Flock, Defi, and Yay Racing gauges</li>
						<li>Custom weld-in roll cage</li>
						<li>'92+ cruise control retrofit</li>
					</ul>
				)}
			</div>

			{/* Exterior */}
			<div className="border border-border rounded-lg overflow-hidden">
				<button
					onClick={() => toggleSection('exterior')}
					className="w-full flex items-center justify-between p-3 bg-card hover:bg-card/80 transition-colors"
				>
					<h4 className="font-semibold text-foreground">Exterior</h4>
					<ChevronDown className={`size-5 transition-transform ${openSections.exterior ? 'rotate-180' : ''}`} />
				</button>
				{openSections.exterior && (
					<ul className="list-disc list-inside space-y-1 ml-2 p-3 pt-0">
						<li>OEM twin turbo front bumper</li>
						<li>Stillen type 3 side skirts & front lip</li>
						<li>Mission-Z rear valence</li>
						<li>326Power Manriki wing</li>
						<li>Yay Racing roof spoiler</li>
						<li>Work Emotion XT7, WMB 18x8.5j+38 (w/ 25mm spacer)</li>
						<li>Custom white-on-white taillights</li>
						<li>JDM front turn signals</li>
						<li>Ganador Super Mirrors</li>
						<li>'98+ style headlights</li>
					</ul>
				)}
			</div>

			{/* Maintenance & Repairs */}
			<div className="border border-border rounded-lg overflow-hidden">
				<button
					onClick={() => toggleSection('maintenance')}
					className="w-full flex items-center justify-between p-3 bg-card hover:bg-card/80 transition-colors"
				>
					<h4 className="font-semibold text-foreground">Maintenance & Repairs</h4>
					<ChevronDown className={`size-5 transition-transform ${openSections.maintenance ? 'rotate-180' : ''}`} />
				</button>
				{openSections.maintenance && (
					<ul className="list-disc list-inside space-y-1 ml-2 p-3 pt-0">
						<li>Front end crash repair</li>
						<li>Timing belt, water pump, thermostat replacement</li>
						<li>'94+ cylinder head, fuel injector, PTU upgrades</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export function Z32() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navbar />

			<main className="container py-12">
				<div className="mx-auto max-w-4xl">
					{/* Header */}
					<header className="mb-8">
						<h1 className="text-3xl md:text-4xl font-bold">1990 Nissan 300ZX 2+2 (Z32)</h1>
						<p className="mt-2 text-foreground/70">
							A restoration project that transformed a crashed parts car into a reliable daily driver and drift machine.
						</p>
					</header>

					{/* Main Content Grid */}
					<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Left Column - Main Content */}
						<div className="md:col-span-2">
							{/* Hero Image */}
							<img
								src={Z32Pic}
								alt="1990 Nissan 300ZX 2+2 Z32"
								className="w-full rounded-lg shadow-md object-cover h-80"
							/>

							{/* Overview */}
							<h2 className="text-2xl font-semibold mt-6">Overview</h2>
							<p className="mt-3 text-foreground/70 leading-relaxed">
								I purchased this 1990 Nissan 300ZX 2+2 in January 2020. It was heavily damaged 
								by the previous owner and was destined to become a parts car for my 1996 300ZX. 
								However, I decided to restore it instead. The car is powered by a naturally aspirated 
								VG30DE 3.0L V6 engine. Over the years, it has served multiple roles: daily driver, 
								drift car, and ongoing project vehicle.
							</p>

							{/* The Journey */}
							{/* <h3 className="text-xl font-semibold mt-6">The Journey</h3> */}
							{/* <p className="mt-3 text-foreground/70 leading-relaxed">
								When I first got the car, the front end was significantly damaged from a collision. 
								The restoration involved extensive bodywork, chassis straightening, and replacing 
								damaged components. What started as a parts car project turned into a full restoration 
								that taught me invaluable lessons about automotive repair, fabrication, and the 
								Z32 platform.
							</p> */}

			{/* Modifications */}
			<h3 className="text-xl font-semibold mt-6">Build List & Modifications</h3>
			
			<Z32BuildSection />

			{/* Current Status */}
			{/* <h3 className="text-xl font-semibold mt-6">Current Status</h3> */}
							{/* <p className="mt-3 text-foreground/70 leading-relaxed">
								The car is currently roadworthy and serves as a reliable daily driver. It's also 
								used for occasional drift events and track days. The project continues as I make 
								ongoing improvements to performance, handling, and reliability. The Z32 has proven 
								to be an excellent platform for learning both mechanical skills and driving techniques.
							</p> */}

							{/* Lessons Learned */}
							{/* <h3 className="text-xl font-semibold mt-6">Lessons Learned</h3> */}
							{/* <p className="mt-3 text-foreground/70 leading-relaxed">
								This project taught me the importance of patience, proper documentation, and having 
								the right tools for the job. Working on the Z32 platform—known for its tight engine 
								bay—has significantly improved my problem-solving skills and mechanical aptitude. 
								The experience gained from this restoration has been invaluable for all my subsequent 
								automotive projects.
							</p> */}
						</div>

						{/* Right Column - Specs & Info */}
						<aside className="md:col-span-1">
							<div className="bg-card border border-border rounded-lg p-6 sticky top-24">
								<h4 className="text-lg font-semibold mb-4">Quick Specs</h4>
								<ul className="text-foreground/70 space-y-2 text-sm">
									<li className="flex justify-between">
										<strong>Year:</strong>
										<span>1990</span>
									</li>
									<li className="flex justify-between">
										<strong>Model:</strong>
										<span>300ZX 2+2</span>
									</li>
									<li className="flex justify-between">
										<strong>Platform:</strong>
										<span>Z32</span>
									</li>
									<li className="flex justify-between">
										<strong>Engine:</strong>
										<span>VG30DE</span>
									</li>
									<li className="flex justify-between">
										<strong>Displacement:</strong>
										<span>3.0L V6</span>
									</li>
									<li className="flex justify-between">
										<strong>Aspiration:</strong>
										<span>N/A</span>
									</li>
									<li className="flex justify-between">
										<strong>Power:</strong>
										<span>~222 HP</span>
									</li>
									<li className="flex justify-between">
										<strong>Drivetrain:</strong>
										<span>RWD</span>
									</li>
									<li className="flex justify-between">
										<strong>Transmission:</strong>
										<span>5-Speed Manual</span>
									</li>
								</ul>

								<div className="mt-6 pt-6 border-t border-border">
									<h4 className="text-lg font-semibold mb-3">Project Timeline</h4>
									<ul className="text-foreground/70 space-y-2 text-sm">
										<li>
											<strong>Jan 2020:</strong> Acquired
										</li>
										<li>
											<strong>2020-2021:</strong> Body repair & restoration
										</li>
										<li>
											<strong>2021-Present:</strong> Daily driver, Drift/track car
										</li>
									</ul>
								</div>

								<div className="mt-6">
									<a
										href="#/automotive"
										className="inline-block w-full text-center rounded-lg bg-primary text-primary-foreground px-4 py-2 hover:opacity-90 transition-opacity"
									>
										Back to Automotive
									</a>
								</div>
							</div>
						</aside>
					</section>
				</div>
			</main>
		</div>
	);
}
