import { useState, useEffect, useRef } from "react";

export function OptimizedImage({ src, alt, className, ...props }) {
	const [isVisible, setIsVisible] = useState(false);
	const [hasLoaded, setHasLoaded] = useState(false);
	const imgRef = useRef(null);
	const observerRef = useRef(null);

	useEffect(() => {
		// Create intersection observer to detect when image is in viewport
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setIsVisible(entry.isIntersecting);
				});
			},
			{
				rootMargin: "50px", // Start loading 50px before entering viewport
				threshold: 0.01,
			}
		);

		if (imgRef.current) {
			observerRef.current.observe(imgRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	// For GIFs, we reload the src to restart animation when visible
	const imgSrc = isVisible || hasLoaded ? src : null;

	return (
		<img
			ref={imgRef}
			src={imgSrc}
			alt={alt}
			className={className}
			loading="lazy"
			decoding="async"
			onLoad={() => setHasLoaded(true)}
			style={{
				opacity: imgSrc ? 1 : 0,
				transition: "opacity 0.3s ease-in-out",
			}}
			{...props}
		/>
	);
}
