export function Specs() {
	return (
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

				<div className="mt-3">
					<a
						href="#/ae86/writeups"
						className="inline-block w-full text-center rounded-lg border border-border text-foreground px-4 py-2 hover:bg-background/80 transition-opacity"
					>
						AE86 Writeups
					</a>
				</div>
			</div>
		</aside>
	);
}
