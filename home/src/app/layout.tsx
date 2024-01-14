import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
	title: "Magnate Core",
	description:
		"Harnessing AI automation, Magnate Core transforms business operations with precision. We craft resonant brand stories, and shape captivating digital experiences. Dive into a world where technology meets creativity with Magnate Core.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
				<script
					src="https://mediafiles.botpress.cloud/fb3dd301-596d-4403-8522-6aa896d55f92/webchat/config.js"
					defer
				></script>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
