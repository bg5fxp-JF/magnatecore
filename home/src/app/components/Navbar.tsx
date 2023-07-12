"use client";

import Link from "next/link";

export default function Navbar() {
	function handleMenuClick() {
		const btn = document.getElementById("menu-btn");
		const nav = document.getElementById("menu");
		if (btn) btn.classList.toggle("open");
		if (nav) nav.classList.toggle("flex");
		if (nav) nav.classList.toggle("hidden");
	}

	return (
		<nav className="relative w-full mx-auto ">
			<div className="flex items-center justify-between  text-shadow shadow-black">
				<Link href="/">
					<img src="images/icon2.png" className="w-40" alt="" />
				</Link>

				<div className="hidden space-x-12 md:flex">
					<div className="flex space-x-6">
						<p
							onClick={() => {
								const element = document.getElementById("services");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="font-Fredoka transition duration-300 ease-in-out  rounded-full  transform hover:scale-125 cursor-pointer"
						>
							Our Services
						</p>
						<p
							onClick={() => {
								const element = document.getElementById("contact");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="font-Fredoka transition duration-300 ease-in-out  rounded-full  transform hover:scale-125 cursor-pointer"
						>
							Contact Us
						</p>
					</div>
				</div>

				<button
					id="menu-btn"
					className="flex hamburger md:hidden focus:outline-none "
					onClick={handleMenuClick}
				>
					<span className="hamburger-top rounded"></span>
					<span className="hamburger-middle rounded"></span>
					<span className="hamburger-bottom rounded"></span>
				</button>
			</div>
			<div className=" items-center justify-between md:hidden">
				<div
					id="menu"
					className="absolute border rounded flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md z-40"
				>
					<p
						onClick={() => {
							const element = document.getElementById("services");
							if (element) {
								element.scrollIntoView({ behavior: "smooth" });
								handleMenuClick();
							}
						}}
						className="font-Fredoka transition duration-300 ease-in-out  rounded-full  transform hover:scale-125 cursor-pointer"
					>
						Our Services
					</p>
					<p
						onClick={() => {
							const element = document.getElementById("contact");
							if (element) {
								element.scrollIntoView({ behavior: "smooth" });
								handleMenuClick();
							}
						}}
						className="font-Fredoka transition duration-300 ease-in-out rounded-full  transform hover:scale-125 cursor-pointer"
					>
						Contact Us
					</p>
				</div>
			</div>
		</nav>
	);
}
