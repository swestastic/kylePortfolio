import { Navbar } from "../components/Home/Navbar";
import { MainContent } from "../components/Z32/MainContent";
import { Specs } from "../components/Z32/Specs";

export default function Z32() {
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
						<MainContent />
						<Specs />
					</section>
				</div>
			</main>
		</div>
	);
}

