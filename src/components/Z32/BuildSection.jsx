import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function BuildSection() {
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
