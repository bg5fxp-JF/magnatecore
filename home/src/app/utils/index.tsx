export function splitLinesForParagraphs(text: string) {
	return text.split("\n\n").map((paragraph, index, array) => (
		<div key={index}>
			<p className={`m-0 max-w-[40ch] text-lg opacity-75`}>{paragraph}</p>
			{index !== array.length - 1 && <br />}
		</div>
	));
}
