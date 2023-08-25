import React from "react";
import { motion } from "framer-motion";
import { slideDiagonal, fadeInOut } from "../../utils/motion";

export default function Preloader() {
	return (
		<>
			<motion.div
				variants={slideDiagonal}
				initial="initial"
				exit="exit"
				className="h-[100vh] w-[100vw] fixed top-0 left-0 z-50 text-white flex items-center justify-center bg-black"
			>
				<motion.div
					variants={fadeInOut}
					initial="hidden"
					animate="visible"
					exit="exit"
					className="flex items-center "
				>
					<img src="images/icon4_w.png" className=" w-11 " alt="" />
					<img src="images/icon5_w.png" className=" w-10  " alt="" />
				</motion.div>
			</motion.div>
		</>
	);
}
