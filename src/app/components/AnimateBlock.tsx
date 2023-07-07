"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState, ReactNode } from "react";

interface AnimateBlockProps {
	children: ReactNode;
}

export default function AnimateBlock({ children }: AnimateBlockProps) {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0.5,
	});

	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (inView) {
			setIsVisible(true);
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className={`transition duration-500 ${
				isVisible ? "opacity-100" : "opacity-0"
			}`}
		>
			{children}
		</div>
	);
}
