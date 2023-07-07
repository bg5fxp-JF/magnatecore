export default function AnimationMain() {
	const words = ["We", "are", "Magnate", "Core"];

	return (
		<div className="flex flex-col items-center mt-10 justify-center w-[70%] text-center">
			<h1 className="text-8xl md:text-10xl ">
				<span className={`inline-block fade-in fade-in-1`}>We</span>{" "}
				<span className={`inline-block fade-in fade-in-2`}>Are</span>{" "}
				<span className={`inline-block fade-in fade-in-3`}>Magnate</span>{" "}
				<span className={`inline-block fade-in fade-in-4`}>Core</span>{" "}
			</h1>
			<h2 className="text-2xl font-thin mt-5 fade-in fade-in-5 animate-pulse">
				Your Subheading Here
			</h2>
		</div>
	);
}
