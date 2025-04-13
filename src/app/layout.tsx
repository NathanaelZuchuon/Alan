import type { Metadata } from "next";

import "./globals.css";
import { Itim } from "next/font/google";

export const metadata: Metadata = {
	title: "Alan Chat",
	description: "Alan Chat Application",
	icons: {
		icon: "/pic5.jpg", // Nous utiliserons notre propre favicon
	},
};

const itim = Itim({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-itim",
});

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
		<html lang="fr">
			<body className={`${itim.variable} antialiased`}>{children}</body>
		</html>
	);
}
