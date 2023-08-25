export default function ServiceCards({ link, name, desc }: any) {
	return (
		<a
			href={link}
			className=" cursor-default h-52 flex justify-center items-center flex-col group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 bg-opacity-50  dark:border-neutral-700 dark:bg-neutral-800/30"
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className={`mb-3 text-2xl font-semibold`}>{name}</h2>
			<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{desc}</p>
		</a>
	);
}
