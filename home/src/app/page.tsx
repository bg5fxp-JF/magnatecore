"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AnimationMain from "./components/AnimationMain";
import Services from "./components/Services";
import { ContactForm } from "./components/ContactForm";
import Preloader from "./components/preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import HScroll from "./components/hscroll/HScroll";
import HScroll1 from "./components/hscroll/HScroll1";
import HScrollMobile from "./components/hscroll/HScrollMobile";
import HScroll1Mobile from "./components/hscroll/HScroll1Mobile";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isBelow768, setIsBelow768] = useState(
		typeof window !== "undefined" ? window.innerWidth < 768 : false
	);

	useEffect(() => {
		const updateScreenSize = () => {
			setIsBelow768(window.innerWidth < 768);
		};

		window.addEventListener("resize", updateScreenSize);
		updateScreenSize();

		return () => {
			window.removeEventListener("resize", updateScreenSize);
		};
	}, []);

	useEffect(() => {
		(async () => {
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 2000);
		})();
	}, []);
	return (
		<main className=" font-Poppins h-screen ">
			<AnimatePresence mode="wait">
				{isLoading && <Preloader />}
			</AnimatePresence>
			<section className="flex min-h-screen flex-col text-center xls:text-left items-center gap-y-12  py-10 px-10 md:px-24 ">
				<AnimationMain />
			</section>
			{isBelow768 ? <HScrollMobile /> : <HScroll />}

			<Services />

			{isBelow768 ? <HScroll1Mobile /> : <HScroll1 />}

			<ContactForm />
		</main>
	);
}
