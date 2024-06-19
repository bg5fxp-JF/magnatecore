import Link from "next/link";
import { splitLinesForParagraphs } from "../utils";

export default function ImgText({
	side,
	title,
	desc,
	img,
	btn,
	btnTitle,
	btnSub,
}: any) {
	return (
		<div className="relative">
			{/* <img
				src={img}
				alt="background"
				className="rounded-lg h-[350px] md:h-[400px] lg:[500px]"
			/> */}
			<div className={` text-center mt-4 p-7 bg-gray-100  rounded-lg`}>
				<h2 className={`mb-3 text-4xl font-semibold`}>{title}</h2>
				{splitLinesForParagraphs(desc)}

				{btn ? (
					<Link
						href="#contact"
						className="justify-start w-full transition duration-300 ease-in-out  transform hover:scale-110"
					>
						<button className="mt-10 shadow  mx-auto bg-black text-white p-3 rounded-full">
							<div className="flex flex-col items-center px-5">
								<p className="text-lg md:text-2xl font-semibold">{btnTitle}</p>
								<p className="font-light text-2xsm md:text-xsm opacity-75">
									{btnSub}
								</p>
							</div>
						</button>
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
}
