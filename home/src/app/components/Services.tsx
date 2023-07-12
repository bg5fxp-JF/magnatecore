import { servicesData } from "../constants/constatnts";
import AnimateBlock from "./AnimateBlock";
import ServiceCards from "./ServiceCards";

export default function Services() {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="text-8xl md:text-10xl ">Our Services</h1>
			{/* <div className="w-[30%] h-1  bg-black mt-1  shadow-sm"></div> */}
			<div className="mt-10 flex gap-5 flex-wrap justify-center items-center  ">
				{servicesData.map(({ link, name, desc }: any) => {
					return (
						<AnimateBlock>
							<ServiceCards link={link} name={name} desc={desc} />
						</AnimateBlock>
					);
				})}
			</div>
		</div>
	);
}
