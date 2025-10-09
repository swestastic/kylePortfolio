import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function BuildSection() {
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
