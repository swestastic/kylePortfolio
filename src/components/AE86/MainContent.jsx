import AE86Pic from "@/assets/automotive/AE86.jpg";
import { BuildSection } from "./BuildSection";

export function MainContent() {
	return (
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
	);
}
