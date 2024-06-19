"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimateBlock from "../AnimateBlock";
import ImgText from "../ImgText";
import { ctaData } from "@/app/constants/constants";

export default function HScrollMobile() {
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
				translateX: "-200vw",
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
					className="min-h-screen flex flex-row relative w-[300vw]  md:px-20"
				>
					{ctaData.map(
						({ side, title, desc, img, bg, btn, btnTitle, btnSub }: any) => {
							return (
								<div
									className="flex items-center justify-center h-screen w-screen px-5"
									style={{
										backgroundImage: `url(${bg})`,
										backgroundSize: "cover",
										boxShadow: "inset 0 0 175px 75px black",
									}}
								>
									<AnimateBlock>
										<ImgText
											side={side}
											img={img}
											title={title}
											desc={desc}
											btn={btn}
											btnTitle={btnTitle}
											btnSub={btnSub}
										/>
									</AnimateBlock>
								</div>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
}
