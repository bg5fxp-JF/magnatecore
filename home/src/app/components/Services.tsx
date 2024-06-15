import { motion } from "framer-motion";
import { servicesData } from "../constants/constatnts";
import AnimateBlock from "./AnimateBlock";
import ServiceCards from "./ServiceCards";

export default function Services() {
	return (
		<section
			id="services"
			className=" flex   flex-col items-center justify-center min-h-[80dvh]  py-14 px-10 md:px-24 "
		>
			<div className="flex flex-col items-center justify-center gap-y-10 text-center">
				<div className="flex flex-col gap-y-2">
					<motion.h1
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="font-Poppins text-reg font-light"
					>
						Our Services
					</motion.h1>
					<motion.h1
						initial={{ y: -100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.6 }}
						className="font-Poppins text-4xl md:text-6xl font-bold "
					>
						"OK... So What Makes You So Different?"
					</motion.h1>
				</div>
				{/* <div className="w-[30%] h-1  bg-black mt-1  shadow-sm"></div> */}
				{/* <div className=" container mx-auto p-6 grid grid-cols-1 md:grid-cols-2  lg:mt-10  gap-5  justify-center items-center  "> */}
				<div className=" flex flex-wrap container mx-auto p-6  gap-5 justify-center  items-start  ">
					{servicesData.map(({ link, name, desc, icon }: any) => {
						return (
							<AnimateBlock>
								<ServiceCards link={link} name={name} desc={desc} icon={icon} />
							</AnimateBlock>
						);
					})}
				</div>
			</div>
		</section>
	);
}
