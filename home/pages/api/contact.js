import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
	const { name, email, service, message } = req.body;

	const user = "jacob@magnatecore.com";
	const data = {
		name,
		email,
		service,
		message,
	};

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: user,
			pass: "pkrykcmztbygbdxu",
		},
	});

	try {
		const mail = await transporter.sendMail({
			from: user,
			to: "jacob@magnatecore.com",
			replyTo: email,
			subject: `Contact from submission from ${name}`,
			html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Service: ${service}</p>
            <p>Message: ${message}</p>
            `,
		});

		console.log("Message sent:", mail.messageId);
		return res.status(200).json({ message: "success" });
	} catch (error) {
		console.log(error);
		res.status(500);
	}
}
