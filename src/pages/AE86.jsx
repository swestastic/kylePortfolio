import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { ChevronDown } from "lucide-react";
import AE86Pic from "@/assets/AE86.jpg";

function BuildSection() {
	const [openSections, setOpenSections] = useState({
		engine: false,
		suspension: false,
		interior: false,
		exterior: false
	});

	const toggleSection = (section) => {
		setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
	};

	return (
		<div className="mt-3 text-foreground/70 space-y-3">
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
						<li>S15 SR20DE</li>
						<li>Custom 1 piece steel driveshaft</li>
						<li>GT-S live axle, 4.3 LSD</li>
						<li>Modified HKS 4-2-1 exhaust manifold</li>
						<li>HKS Hi-Power catback exhaust</li>
						<li>Circuit Sports oil filter relocation</li>
						<li>Yay Racing throttle cable bracket</li>
						<li>Yay Racing short ram air intake</li>
						<li>Yay Racing velocity stack</li>
					</ul>
				)}
			</div>

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
						<li>Annex Suspension coilovers</li>
						<li>AW11 manual steering rack</li>
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
						<li>Bride Basis Sport seats</li>
						<li>Cusco 6-point roll cage</li>
						<li>Nardi Classic 350mm</li>
						<li>Flock and Yay Racing gauges</li>
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
						<li>Vertex style body kit (w/ Yay Racing mounts)</li>
						<li>FC3S Ganador Super Mirrors (w/ Yay Racing mounts)</li>
						<li>Enkei Apache V 14x6.5j+0</li>
						<li>Seibon carbon fiber hatch lid</li>
						<li>Yay Racing front grille</li>
						<li>Yay Racing antenna blockoff</li>
					</ul>
				)}
			</div>
		</div>
	);
}

export function AE86() {
	return (
		<div className="min-h-screen bg-background text-foreground">
			<Navbar />

			<main className="container py-12">
				<div className="mx-auto max-w-4xl">
					{/* Header */}
					<header className="mb-8">
						<h1 className="text-3xl md:text-4xl font-bold">1986 Toyota Corolla AE86</h1>
						<p className="mt-2 text-foreground/70">
							A legendary chassis that evolved from a rough 4AC-powered project to a SR20DE-swapped drift machine.
						</p>
					</header>

					{/* Main Content Grid */}
					<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Left Column - Main Content */}
						<div className="md:col-span-2">
							{/* Hero Image */}
							<img
								src={AE86Pic}
								alt="1986 Toyota Corolla AE86"
								className="w-full rounded-lg shadow-md object-cover h-80"
							/>

							{/* Overview */}
							<h2 className="text-2xl font-semibold mt-6">Overview</h2>
							<p className="mt-3 text-foreground/70 leading-relaxed">
								I traded my 1996 300ZX for this 1986 Toyota Corolla AE86 in August 2021. 
								When I acquired the car, it was in rough condition and powered by a basic 4AC engine. 
								The AE86 has since undergone multiple engine swaps and extensive modifications, 
								transforming it into a capable drift car and track machine.
							</p>

							{/* The Journey */}
							{/* <h3 className="text-xl font-semibold mt-6">The Evolution</h3>
							<p className="mt-3 text-foreground/70 leading-relaxed">
								The AE86's journey has been one of continuous evolution. It started with the original 
								4AC engine, which was later replaced with a 16-valve 4AGE engine for improved performance. 
								The most recent transformation involved a notchtop SR20DE engine swap from a Nissan Silvia S15, 
								significantly increasing power and modernizing the drivetrain. Each iteration taught me 
								more about engine swaps, fabrication, and the iconic AE86 platform.
							</p> */}

			{/* Modifications */}
			<h3 className="text-xl font-semibold mt-6">Build List & Modifications</h3>
			
			<BuildSection />

			{/* Current Status */}
			{/* <h3 className="text-xl font-semibold mt-6">Current Status</h3> */}
							{/* <p className="mt-3 text-foreground/70 leading-relaxed">
								The AE86 is currently set up as a dedicated drift and track car. With the SR20DE swap, 
								it produces significantly more power than the original 4AC or even the 4AGE setup. 
								The car continues to evolve as I refine the setup and learn more about chassis dynamics 
								and drift techniques. The AE86 platform's legendary handling characteristics combined 
								with modern power make it an incredible driving experience.
							</p> */}

							{/* Lessons Learned */}
							{/* <h3 className="text-xl font-semibold mt-6">Lessons Learned</h3>
							<p className="mt-3 text-foreground/70 leading-relaxed">
								This project has been a masterclass in engine swaps and fabrication. Working with 
								multiple different powerplants taught me about engine management, custom wiring, 
								and the complexities of mixing parts from different manufacturers. The AE86's 
								simple design makes it an excellent platform for learning, while its driving 
								dynamics continue to impress even after decades on the road.
							</p> */}
						</div>

						{/* Right Column - Specs & Info */}
						<aside className="md:col-span-1">
							<div className="bg-card border border-border rounded-lg p-6 sticky top-24">
								<h4 className="text-lg font-semibold mb-4">Quick Specs</h4>
								<ul className="text-foreground/70 space-y-2 text-sm">
									<li className="flex justify-between">
										<strong>Year:</strong>
										<span>1986</span>
									</li>
									<li className="flex justify-between">
										<strong>Model:</strong>
										<span>Corolla Sport SR5</span>
									</li>
									<li className="flex justify-between">
										<strong>Platform:</strong>
										<span>AE86</span>
									</li>
									<li className="flex justify-between">
										<strong>Engine:</strong>
										<span>SR20DE (Current)</span>
									</li>
									<li className="flex justify-between">
										<strong>Previous:</strong>
										<span>4AGE, 4AC</span>
									</li>
									<li className="flex justify-between">
										<strong>Displacement:</strong>
										<span>2.0L I4</span>
									</li>
									<li className="flex justify-between">
										<strong>Aspiration:</strong>
										<span>N/A</span>
									</li>
									<li className="flex justify-between">
										<strong>Power:</strong>
										<span>~165 HP</span>
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
											<strong>Aug 2021:</strong> Acquired (4AC)
										</li>
										<li>
											<strong>2022:</strong> 4AGE swap
										</li>
										<li>
											<strong>2022-2024:</strong> Fun weekend car
										</li>
										<li>
											<strong>2025:</strong> SR20DE swap
										</li>
                                        <li>
											<strong>2025-Present:</strong> Dedicated drift car
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
