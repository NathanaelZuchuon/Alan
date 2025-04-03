import type { Metadata } from "next";
import "./globals.css";
import SidebarLeft from "../components/SidebarLeft";
import ConversationList from "../components/ConversationList";
import { Itim } from "next/font/google";

import Conversation from "../components/Conversation";

/**
 * Layout principal de l'application
 * Structure en 3 colonnes:
 * 1. Barre latérale gauche (72px) - Navigation principale
 * 2. Liste des conversations (30%) - Conversations récentes
 * 3. Zone principale (flex-1) - Espace de chat
 *
 * Intégration:
 * - Font Itim pour le style des labels
 * - Métadonnées pour SEO et favicon
 */

export const metadata: Metadata = {
	title: "Alan Chat",
	description: "Alan Chat Application",
	icons: {
		icon: "/pic1.jpg", // nous utiliserons notre propre favicon
	},
};

const itim = Itim({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-itim",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${itim.variable} antialiased`}>
				<div className="flex h-screen overflow-hidden bg-gray-50">
					<SidebarLeft />
					<ConversationList isOpen={false} />
					<main className="w-[calc(100vw-452px)] ml-auto overflow-y-auto relative">
						<Conversation />
					</main>
				</div>
			</body>
		</html>
	);
}
