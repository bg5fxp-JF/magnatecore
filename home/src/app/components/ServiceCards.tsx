import {
	PiStrategy,
	PiCalculatorFill,
	PiRobotFill,
	PiTrendUp,
	PiFootprintsFill,
} from "react-icons/pi";
import { splitLinesForParagraphs } from "../utils";

export default function ServiceCards({ link, name, desc, icon }: any) {
	const iconMapping: any = {
		strategy: PiStrategy,
		calculator: PiCalculatorFill,
		robot: PiRobotFill,
		trend: PiTrendUp,
		footprint: PiFootprintsFill,
	};

	const Icon = iconMapping[icon];

	return (
		<div className="cursor-default col-span-1 flex flex-col justify-center items-center max-w-[300px]  rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100">
			<div className="flex items-center justify-center p-2 mb-5 bg-black rounded-md ">
				{iconMapping[icon] && <Icon fill="white" size={30} />}
			</div>
			<h2 className="mb-3 w-full text-3xl md:text-4xl font-semibold text-center">
				{name}
			</h2>
			{splitLinesForParagraphs(desc)}
		</div>
	);
}
