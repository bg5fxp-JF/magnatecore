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
		<header className="w-full absolute z-10">
			<nav className=" w-full pt-4 px-10 md:px-24  max-w-[1440px] mx-auto">
				<div className="flex items-center justify-center  text-shadow shadow-black">
					<Link href="/">
						<div className="flex items-center">
							<img src="images/icon4.png" className=" w-11" alt="" />
							{/* <h1 className=" font-Montserrat font-bold text-4xl ">
							M
							<span className="font-Poppins font-normal text-reg ">agnate</span>
						</h1>
						<h1 className=" font-Montserrat font-bold text-4xl ml-1 ">
							C<span className="font-Poppins font-normal text-reg ">ore</span>
						</h1> */}
							{/* <p className="font-Poppins font-normal text-reg ml-1 ">agnate</p> */}
							<img src="images/icon5.png" className=" w-10  " alt="" />
							{/* <p className="font-Poppins  font-normal text-reg  ">ore</p> */}
						</div>
					</Link>
					{/* <div className="flex items-center gap-x-10">
						<p
							onClick={() => {
								const element = document.getElementById("services");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="hidden md:flex font-normal text-reg font-Poppins transition duration-300 ease-in-out  rounded-full  transform hover:scale-110 cursor-pointer"
						>
							Our Services
						</p>
						<p
							onClick={() => {
								const element = document.getElementById("contact");
								if (element) element.scrollIntoView({ behavior: "smooth" });
							}}
							className="hidden md:flex  font-normal text-reg font-Poppins transition duration-300 ease-in-out  rounded-full  transform hover:scale-110 cursor-pointer"
						>
							Contact Us
						</p>
					</div>

					<button
						id="menu-btn"
						className="flex hamburger md:hidden focus:outline-none "
						onClick={handleMenuClick}
					>
						<span className="hamburger-top rounded"></span>
						<span className="hamburger-middle rounded"></span>
						<span className="hamburger-bottom rounded"></span>
					</button> */}
				</div>
				{/* <div className=" items-center justify-between md:hidden">
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
				</div> */}
			</nav>
		</header>
	);
}
