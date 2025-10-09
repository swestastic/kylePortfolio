import { Navbar } from "../components/Home/Navbar";
import { MainContent } from "../components/AE86/MainContent";
import { Specs } from "../components/AE86/Specs";

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
						<MainContent />
						<Specs />
					</section>
				</div>
			</main>
		</div>
	);
}
