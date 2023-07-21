"use client";

import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion";
import Link from "next/link";

export default function AnimationMain() {
	const words = ["We", "are", "Magnate", "Core"];

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
		<div className="flex w-full items-center justify-center flex-col  mt-4 md:mt-0  text-center">
			<h1 className="font-Poppins  text-8xl md:text-9xl lg:text-10xl ">
				{words.map((word, index) => (
					<>
						<motion.span
							key={word}
							className={`inline-block`}
							initial="hidden"
							animate="visible"
							variants={fadeInVariants(index * 0.5)}
						>
							{word}
						</motion.span>{" "}
						<span></span>
					</>
				))}
			</h1>
			<motion.h2
				className="font-Poppins md:text-2xl text-lg font-thin mt-5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 2 }}
			>
				Merging AI automation with compelling web design and storytelling
			</motion.h2>
			<br />
			<br />
			<Link href="#contact">
				<motion.button
					initial="hidden"
					animate="visible"
					transition={{ delay: 2.5 }}
					variants={slideInFromTop}
					className="bg-black shadow  mx-auto text-white p-2 rounded"
				>
					Contact Us
				</motion.button>
			</Link>
		</div>
	);
}
