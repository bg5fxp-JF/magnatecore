"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimateBlock from "../AnimateBlock";
import ImgText from "../ImgText";
import { ctaData2 } from "@/app/constants/constatnts";

export default function HScroll1() {
	const sectionRef = useRef(null);
	const triggerRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-300vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			}
		);

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<section className="overflow-hidden">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="min-h-screen flex flex-row relative w-[400vw]"
				>
					{ctaData2.map(({ oreintation, title, desc, img }: any) => {
						return (
							<AnimateBlock>
								<div className="flex items-center justify-center h-screen w-screen">
									<ImgText
										oreintation={oreintation}
										img={img}
										title={title}
										desc={desc}
									/>
								</div>
							</AnimateBlock>
						);
					})}
				</div>
			</div>
		</section>
	);
}
