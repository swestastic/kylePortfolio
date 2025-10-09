const btn = "inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted transition-colors";

export function Tools() {
	return (
		<>
			<h2 className="text-2xl font-bold mt-16 mb-4">Tools</h2>
			<div className="grid gap-6 md:grid-cols-2">
				<section className="border rounded-lg p-6">
					<h2 className="text-xl font-semibold mb-2">SmoQyDQMC.jl LessIO</h2>
					<p className="text-foreground/70 mb-4">
						Modified version of the SmoQyDQMC.jl package with reduced input/output overhead.
						Ideal for running large parameter sweeps or long simulations where frequent disk writes are unnecessary.
					</p>
					<div className="flex flex-wrap gap-2">
						<a href="https://github.com/swestastic/SmoQyDQMC.jl" className={btn} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
					</div>
				</section>

				{/* New: SmoQySaver */}
				<section className="border rounded-lg p-6">
					<h2 className="text-xl font-semibold mb-2">SmoQySaver</h2>
					<p className="text-foreground/70 mb-4">
						A lightweight Python utility for managing SmoQyDQMC outputs. 
						Calculate the binned average and standard error of the mean for observables over multiple runs,
						and save finalized results for easy lookup and plotting.
					</p>
					<div className="flex flex-wrap gap-2">
						<a href="https://github.com/swestastic/SmoQy_Saver" className={btn} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
					</div>
				</section>
			</div>
		</>
	);
}
