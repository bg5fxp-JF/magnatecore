"use client";
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
		<div className="flex flex-col items-center justify-center text-center">
			<h1 className="font-Poppins text-8xl md:text-9xl lg:text-10xl ">
				Contact Us
			</h1>

			<form className="flex mt-10 flex-col space-y-10" onSubmit={handleSubmit}>
				<input
					type="text"
					className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input
					type="email"
					className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<div className="flex space-x-5">
					<ul className="grid w-full grid-cols-3 gap-6">
						<li>
							<input
								type="radio"
								id="ai-automation"
								value="Ai Automation"
								checked={service === "Ai Automation"}
								onChange={(e) => setService(e.target.value)}
								className="hidden peer"
								required
							/>
							<label
								htmlFor="ai-automation"
								className="relative inline-flex items-center justify-between w-full  text-gray-500 cursor-pointer hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 peer-checked:text-black dark:peer-checked:text-black"
							>
								<div className="block mx-auto">
									<div className="w-full text-xsm md:text-lg font-semibold">
										AI Automation
									</div>
								</div>
							</label>
						</li>
						<li>
							<input
								type="radio"
								id="copywriting"
								value="Copywriting"
								checked={service === "Copywriting"}
								onChange={(e) => setService(e.target.value)}
								className="hidden peer"
								required
							/>
							<label
								htmlFor="copywriting"
								className="relative inline-flex items-center justify-between w-full  text-gray-500 cursor-pointer hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 peer-checked:text-black dark:peer-checked:text-black"
							>
								<div className="block mx-auto">
									<div className="w-full text-xsm md:text-lg font-semibold">
										Copywriting
									</div>
								</div>
								<div className="absolute inset-x-0 bottom-0 h-1 bg-transparent transform scale-x-0 origin-center border-b-2 border-transparent peer-checked:border-black dark:peer-checked:border-black transition-transform"></div>
							</label>
						</li>

						<li>
							<input
								type="radio"
								id="website-design"
								value="Website Design"
								checked={service === "Website Design"}
								onChange={(e) => setService(e.target.value)}
								className="hidden peer"
								required
							/>
							<label
								htmlFor="website-design"
								className="relative inline-flex items-center justify-between w-full  text-gray-500 cursor-pointer hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 peer-checked:text-black dark:peer-checked:text-black"
							>
								<div className="block mx-auto">
									<div className="w-full text-xsm md:text-lg font-semibold">
										Website Design
									</div>
								</div>
							</label>
						</li>
					</ul>
				</div>
				<textarea
					className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required
				/>

				<button
					type="submit"
					className="bg-black shadow w-[30%] mx-auto text-white p-2 rounded"
				>
					Send
				</button>
			</form>
		</div>
	);
};
