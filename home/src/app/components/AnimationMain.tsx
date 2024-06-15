"use client";

// import { motion } from "framer-motion";
// import { slideInFromTop } from "../utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimationMain() {
	return (
		<section className="flex  flex-col text-center  max-w-[1440px] items-center gap-y-12 mx-auto  py-10 px-10 md:px-24 ">
			<div className="flex h-screen min-h-[950px] w-full items-center flex-col  justify-center   ">
				<div className="flex flex-col ">
					<div className="flex items-center md:space-x-8 ">
						<h1 className="hidden md:flex font-Poppins font-semibold  xs:text-8xl   text-6xl  ">
							Magnate
						</h1>
						<div className="hidden md:flex border-y-[20px] border-l-[20px] rounded-l-full border-black py-2 pl-4">
							<h1 className=" font-Poppins font-semibold  xs:text-8xl   text-6xl  ">
								ore
							</h1>
						</div>
						<h1 className="flex md:hidden font-Poppins font-semibold  xs:text-8xl   text-6xl  ">
							Magnate Core
						</h1>
					</div>
				</div>

				<div className="flex flex-col mt-10 mx-auto items-center text-center w-full   ">
					<div className="  max-w-[900px] font-Poppins  flex justify-center items-center flex-col group rounded-lg border border-transparent p-5 transition-colors border-gray-300 bg-gray-100 ">
						<h2 className={`text-3xl md:text-4xl font-bold `}>
							MORE ATTRACTION, MORE GROWTH, MORE WEALTH. <br />
							<br />{" "}
							<span className="text-red-500 animate-pulse ">GUARANTEED.</span>
						</h2>

						<Link
							href="#contact"
							className="justify-start w-full transition duration-300 ease-in-out  transform hover:scale-110"
						>
							<button className="mt-10 shadow  mx-auto bg-black text-white p-3 rounded-full">
								<div className="flex flex-col items-center px-5">
									<p className="text-lg md:text-2xl font-semibold">
										I WANT TO GROW!
									</p>
									<p className="font-light text-2xsm md:text-xsm opacity-75">
										Be More with Magnate Core
									</p>
								</div>
							</button>
						</Link>
					</div>
				</div>

				<h2 className="font-Poppins text-3xl md:text-4xl font-bold opacity-75  mt-10">
					<motion.span
						initial={{ opacity: 0, y: -500 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
					>
						Marketing is crucial...
					</motion.span>
					<br />
					<span className="text-2xl md:text-3xl font-light">
						...but with a never-ending to-do list,
						<br /> it can feel overwhelmingly impossible.
					</span>
					<br />
				</h2>
			</div>
		</section>
	);
}
