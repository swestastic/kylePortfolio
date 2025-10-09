import Z32Pic from "@/assets/automotive/300zx.jpg";
import { BuildSection } from "./BuildSection";

export function MainContent() {
	return (
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
			
			<BuildSection />

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
	);
}
