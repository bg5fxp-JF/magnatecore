import Link from "next/link";

export default function ImgText({ oreintation, title, desc, img }: any) {
	return (
		<div className="relative">
			<img
				src={img}
				alt="background"
				className="rounded-lg h-[350px] md:h-[400px] lg:[500px]"
			/>
			<div
				className={`absolute md:top-0   ${
					oreintation === "left"
						? "-top-40 left-2 md:left-0 md:ml-[-150px]"
						: "top-40 right-2  md:right-0  md:mr-[-150px]"
				} text-center mt-4 p-7 bg-gray-100  rounded-lg`}
			>
				<h2 className={`mb-3 text-2xl font-semibold`}>{title}</h2>
				<p className={`m-0 max-w-[40ch] text-sm opacity-50`}>{desc}</p>

				{oreintation === "left" ? (
					<></>
				) : (
					<Link
						href="#contact"
						className="justify-start w-full transition duration-300 ease-in-out  transform hover:scale-110"
					>
						<button className="mt-10 shadow  mx-auto bg-black text-white p-3 rounded-full">
							<div className="flex flex-col items-center px-5">
								<p className="text-sm md:text-reg font-semibold">
									Chart Your Path Forward
								</p>
								<p className="font-light text-2xsm md:text-xsm opacity-75">
									Explore with Magnate Core
								</p>
							</div>
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}
