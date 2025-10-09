export function Specs() {
	return (
		<aside className="space-y-6 md:col-span-1">
			{/* Specifications Card */}
			<div className="bg-card border border-border rounded-lg p-6 sticky top-24">
				<h3 className="text-xl font-semibold mb-4">Quick Specs</h3>
				<ul className="space-y-2 text-foreground/70">
					<li>
						<span className="font-medium">Year:</span> 1990
					</li>
					<li>
						<span className="font-medium">Make:</span> Nissan
					</li>
					<li>
						<span className="font-medium">Model:</span> 300ZX 2+2
					</li>
					<li>
						<span className="font-medium">Platform:</span> Z32
					</li>
					<li>
						<span className="font-medium">Engine:</span> VG30DE 3.0L V6
					</li>
					<li>
						<span className="font-medium">Power:</span> ~222 hp (stock)
					</li>
					<li>
						<span className="font-medium">Torque:</span> ~198 lb-ft (stock)
					</li>
					<li>
						<span className="font-medium">Drive:</span> Rear-Wheel Drive
					</li>
					<li>
						<span className="font-medium">Transmission:</span> 5-Speed Manual
					</li>
				</ul>

				{/* Project Timeline */}
				<h3 className="text-xl font-semibold mt-6 mb-4">Project Timeline</h3>
				<ul className="space-y-3 text-foreground/70">
					<li>
						<span className="font-medium">January 2020:</span> Purchased as a 
						damaged parts car candidate
					</li>
					<li>
						<span className="font-medium">2020-2021:</span> Complete restoration - 
						chassis straightening, bodywork, mechanical rebuild
					</li>
					<li>
						<span className="font-medium">2021-Present:</span> Ongoing improvements, 
						daily driving, and drift event participation
					</li>
				</ul>

				{/* Back to Automotive Button */}
				<a
					href="#/automotive"
					className="mt-6 block w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition"
				>
					← Back to Automotive
				</a>
			</div>
		</aside>
	);
}
