export default function ServiceCards({ link, name, desc }: any) {
	return (
		<div className="font-Poppins  cursor-default col-span-1 flex flex-col  justify-center items-center  rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100">
			<h2 className="mb-3 w-full text-2xl font-semibold text-center">{name}</h2>
			<p className="m-0 w-full text-sm  text-center">{desc}</p>
		</div>
	);
}
