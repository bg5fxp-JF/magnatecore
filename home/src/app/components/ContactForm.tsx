"use client";
import Link from "next/link";
import { useState } from "react";

export const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch("/api/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				email,
				service,
				message,
			}),
		});

		if (response.ok) {
			alert("Message sent!");
			setName("");
			setEmail("");
			setService("");
			setMessage("");
		} else {
			alert("There was an error, please try again");
		}
	};

	return (
		<section
			id="contact"
			className="flex min-h-screen  flex-col items-center  py-14 px-10 md:px-24 bg-black"
		>
			<div className="flex flex-col sm:flex-row items-start justify-center gap-5">
				<div className="flex flex-col gap-3 text-white">
					<h1 className="font-Poppins text-4xl md:text-6xl font-bold ">
						Get in touch with us
					</h1>
					<h1 className="font-Poppins text-sm font-light  ">
						Have questions, ideas, or feedback? We'd love to hear from you!
						Reach out to us anytime and we'll get back to you as soon as
						possible.
					</h1>
					<h1 className="font-Poppins text-sm font-light  ">
						Fill in the form or{" "}
						<Link
							className=" transition-all hover:underline hover:font-bold "
							href="mailto:denis@magnatecore.com"
						>
							Send us an email!
						</Link>
					</h1>
				</div>
				<div className="flex flex-col mx-auto items-center justify-center text-center font-Poppins w-full">
					<form
						className="flex w-full md:w-[500px] rounded-lg    flex-col space-y-10  bg-gray-100  p-5"
						onSubmit={handleSubmit}
					>
						<h1 className="font-Poppins text-4xl md:text-6xl font-bold ">
							Contact Us
						</h1>

						<input
							type="text"
							className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<div className="relative">
							<select
								value={service}
								onChange={(e) => setService(e.target.value)}
								className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
								required
							>
								<option value="" disabled selected>
									Select a service
								</option>
								<option value="Ai Automation">AI Automation</option>
								<option value="Copywriting">Copywriting</option>
							</select>
							<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg
									className="w-4 h-4 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
								</svg>
							</div>
						</div>

						<input
							type="email"
							className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<textarea
							className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
							placeholder="Message"
							rows={5}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						/>

						<button
							type="submit"
							className="bg-black shadow w-full md:w-[30%] mx-auto text-white p-2 rounded-full"
						>
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};
