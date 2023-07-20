import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
