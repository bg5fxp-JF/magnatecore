"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion";
import Link from "next/link";

export default function AnimationMain() {
	const words = ["Magnate", "Core"];

	const fadeInVariants = (delay: any) => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: delay,
			},
		},
	});

	return (
		<div className="flex w-full items-center justify-center flex-col   text-center">
			<h1 className=" font-Poppins font-semibold  xs:text-8xl md:text-9xl lg:text-10xl text-6xl  ">
				Magnate Core
			</h1>
			<h2 className="font-Poppins md:text-2xl md:w-[50%] text-lg font-thin mt-5">
				Merging AI automation with compelling storytelling
			</h2>
			<br />
			<br />
			<Link href="#contact">
				<motion.button
					initial="hidden"
					animate="visible"
					transition={{ delay: 1 }}
					variants={slideInFromTop}
					className="bg-black shadow w-40 mx-auto text-white p-2 rounded animate-bounce"
				>
					Contact Us
				</motion.button>
			</Link>
		</div>
	);
}
