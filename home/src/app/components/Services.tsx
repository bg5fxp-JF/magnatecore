import { servicesData } from "../constants/constatnts";
import AnimateBlock from "./AnimateBlock";
import ServiceCards from "./ServiceCards";

export default function Services() {
	return (
		<div className="flex flex-col items-center gap-y-16 justify-center text-center">
			<h1 className="font-Poppins text-6xl xs:text-8xl ">Our Services</h1>
			{/* <div className="w-[30%] h-1  bg-black mt-1  shadow-sm"></div> */}
			<div className=" container mx-auto p-6 grid grid-cols-1 md:grid-cols-2  lg:mt-10  gap-5  justify-center items-center  ">
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
