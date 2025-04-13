"use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

import SidebarLeft from "../components/SidebarLeft";
import { ChatProvider } from "@/context/ChatContext";
import { Conversation } from "../components/Conversation";
import ConversationList from "../components/ConversationList";

export default function Home() {
	// const router = useRouter();

	// Redirection automatique vers la page profil
	// useEffect(() => {
	// 	router.push("/profile");
	// }, [router]);

	// Page d'accueil (optionnelle car redirection)
	// return (
	// 	<div className="flex flex-col items-center justify-center min-h-screen p-8">
	// 		<div className="text-center">
	// 			<h1 className="text-4xl font-bold text-gray-900 mb-4">
	// 				Bienvenue sur YowTalk
	// 			</h1>
	// 			<p className="text-gray-600 mb-8">
	// 				Chargement de votre espace...
	// 			</p>
	// 			<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
	// 		</div>
	// 	</div>
	// );

	return (
		<div className="flex h-screen overflow-hidden bg-gray-50">
			<ChatProvider>
				<SidebarLeft />
				<ConversationList />
				<main className="w-[calc(100vw-452px)] ml-auto overflow-y-auto relative">
					<Conversation />
				</main>
			</ChatProvider>
		</div>
	);
}
