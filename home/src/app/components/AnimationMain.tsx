// "use client";

// import { motion } from "framer-motion";
// import { slideInFromTop } from "../utils/motion";
import Link from "next/link";

export default function AnimationMain() {
	return (
		<div className="flex w-full items-center flex-col  xls:flex-row   ">
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
				<h2 className="font-Poppins opacity-50 text-lg font-light mt-10">
					Pioneering the Future of Digital Excellence
				</h2>
			</div>

			<div className="flex flex-col mt-10 mx-auto items-center text-center w-full xls:ml-40 xls:mt-0  ">
				<div className=" xls:min-h-[500px] font-Poppins  flex justify-center items-center flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 ">
					<p className={`text-sm lg:text-reg opacity-50`}>
						In the intricate tapestry of the digital landscape, brands compete
						for a moment in the spotlight. Yet, many remain obscured, their
						potential stifled. Confront the chilling reality of unmet metrics,
						the stark contrast of stagnant sales against the morning's first
						brew, and the persistent weight of unrealised aspirations. <br />
						<br /> Unveil the AI-powered strategy propelling businesses to
						unparalleled digital prominence.
					</p>

					<Link
						href="#contact"
						className="justify-start w-full transition duration-300 ease-in-out  transform hover:scale-110"
					>
						<button className="mt-10 shadow  mx-auto bg-black text-white p-3 rounded-full">
							<div className="flex flex-col items-center px-5">
								<p className="text-sm md:text-reg font-semibold">
									Prepared for Evolution?
								</p>
								<p className="font-light text-2xsm md:text-xsm opacity-75">
									Engage with Magnate Core
								</p>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
