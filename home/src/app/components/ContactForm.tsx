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
			<h1 className="font-Roboto text-8xl md:text-10xl ">Contact Us</h1>

			<form className="flex mt-10 flex-col space-y-10" onSubmit={handleSubmit}>
				<input
					type="text"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<input
					type="email"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
								className="shadow inline-flex items-center justify-between w-full  p-1  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
								className="shadow inline-flex items-center justify-between w-full  p-1  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
							>
								<div className="block mx-auto">
									<div className="w-full text-xsm md:text-lg font-semibold">
										Copywriting
									</div>
								</div>
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
								className="shadow inline-flex items-center justify-between w-full p-1  text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-black peer-checked:border-black peer-checked:text-black hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
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
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
