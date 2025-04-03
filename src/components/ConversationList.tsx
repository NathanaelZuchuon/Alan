"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";

interface Conversation {
	id: string;
	name: string;
	message: string;
	time: string;
	avatar: string;
	isOnline: boolean;
	messageStatus: "sent" | "delivered" | "read";
}

/**
 * Liste des conversations récentes
 *
 * Fonctionnalités:
 * - Affichage des conversations récentes
 * - Barre de recherche
 * - Photos de profil des contacts
 * - Horodatage des messages
 * - Aperçu du dernier message
 *
 * Intégration backend nécessaire:
 * - Récupération des conversations en temps réel
 * - Statut en ligne des contacts
 * - Système de recherche
 * - Stockage et récupération des images
 * - Gestion des timestamps
 *
 * Format des données attendu:
 * {
 *   id: string,
 *   name: string,
 *   message: string,
 *   time: string,
 *   avatar: string,
 *   isOnline?: boolean,
 *   unreadCount?: number
 * }
 */

const conversations: Conversation[] = [
	{
		id: "1",
		name: "Balbino Tchoutzine",
		message: "On se voit au campus demain ?",
		time: "10:30",
		avatar: "/pic1.jpg",
		isOnline: true,
		messageStatus: "read",
	},
	{
		id: "2",
		name: "Kamga Michel",
		message: "Le projet avance bien, merci",
		time: "10:25",
		avatar: "/pic9.jpeg",
		isOnline: false,
		messageStatus: "delivered",
	},
	// Ajout de plus de contacts camerounais
	{
		id: "3",
		name: "Fotso Daniel",
		message: "J'ai terminé la partie backend",
		time: "10:20",
		avatar: "/pic3.jpeg",
		isOnline: true,
		messageStatus: "sent",
	},
	{
		id: "4",
		name: "Nganso Kevin",
		message: "Tu peux m'aider avec React ?",
		time: "10:15",
		avatar: "/pic4.jpg",
		isOnline: false,
		messageStatus: "read",
	},
	{
		id: "5",
		name: "Tchamba Jordan",
		message: "La réunion est à quelle heure ?",
		time: "10:10",
		avatar: "/pic8.jpg",
		isOnline: true,
		messageStatus: "delivered",
	},
	{
		id: "6",
		name: "Nguimfack Sarah",
		message: "Je viens de push les changements",
		time: "10:05",
		avatar: "/pic6.jpg",
		isOnline: false,
		messageStatus: "sent",
	},
	// Nouveaux contacts ajoutés
	{
		id: "7",
		name: "Dongmo Patrick",
		message: "Les maquettes sont prêtes",
		time: "09:55",
		avatar: "/pic7.png",
		isOnline: true,
		messageStatus: "read",
	},
	{
		id: "8",
		name: "Tcheutchoua Jean",
		message: "Réunion à 14h",
		time: "09:45",
		avatar: "/pic1.jpg",
		isOnline: false,
		messageStatus: "delivered",
	},
	{
		id: "9",
		name: "Kuate Emmanuel",
		message: "Je propose qu'on utilise Firebase",
		time: "09:30",
		avatar: "/pic5.jpg",
		isOnline: true,
		messageStatus: "sent",
	},
	{
		id: "10",
		name: "Sokeng Marie",
		message: "Le design est validé",
		time: "09:15",
		avatar: "/pic8.jpg",
		isOnline: true,
		messageStatus: "read",
	},
];

const MessageStatus = ({ status }: { status: string }) => {
	switch (status) {
		case "sent":
			return (
				<div className="flex justify-end mt-0.5">
					<svg className="w-3 h-3 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
						<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
					</svg>
				</div>
			);
		case "delivered":
			return (
				<div className="flex justify-end mt-0.5">
					<div className="relative flex">
						<svg
							className="w-3 h-3 text-gray-400"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
						<svg
							className="w-3 h-3 text-gray-400 -ml-1"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
					</div>
				</div>
			);
		case "read":
			return (
				<div className="flex justify-end mt-0.5">
					<div className="relative flex">
						<svg
							className="w-3 h-3 text-snappy-first-blue"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
						<svg
							className="w-3 h-3 text-snappy-first-blue -ml-1"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
						</svg>
					</div>
				</div>
			);
		default:
			return null;
	}
};

export default function ConversationList({ isOpen }: { isOpen: boolean }) {
	const [filteredConversations, setFilteredConversations] =
		useState<Conversation[]>(conversations);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	// ---
	const hey = (id: string) => {
		setSelectedId(id);
		console.log("Hey");
	};
	// ---

	const handleSearch = (term: string) => {
		if (!term.trim()) {
			setFilteredConversations(conversations);
			return;
		}

		const filtered = conversations.filter(
			(conv) =>
				conv.name.toLowerCase().includes(term.toLowerCase()) ||
				conv.message.toLowerCase().includes(term.toLowerCase())
		);
		setFilteredConversations(filtered);
	};

	return (
		<aside
			className={`w-[320px] min-w-[320px] lg:w-[380px] h-screen bg-gray-50 border-r border-gray-200
				flex flex-col fixed transition-transform duration-300 ease-in-out
				${isOpen ? "translate-x-[72px]" : "-translate-x-full"}
				md:translate-x-[72px] z-40`}
		>
			<div className="p-4 border-b bg-white">
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-2xl font-bold text-gray-900">YowTalk</h1>
					<span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
						Beta
					</span>
				</div>
				<SearchBar onSearch={handleSearch} />
			</div>

			<div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
				<div className="space-y-1 p-2">
					{filteredConversations.map((conv) => (
						<div
							key={conv.id}
							onClick={() => hey(conv.id)} // ---
							onMouseEnter={() => setHoveredId(conv.id)}
							onMouseLeave={() => setHoveredId(null)}
							className={`flex items-center p-3 cursor-pointer transition-all duration-200 rounded-lg
								${selectedId === conv.id ? "bg-blue-100 border-l-4 border-blue-500" : "bg-white"}
								${hoveredId === conv.id ? "transform scale-[0.995] shadow-sm" : ""}
								hover:bg-blue-50`}
						>
							<div className="relative flex-shrink-0">
								<div className="w-12 h-12 rounded-full overflow-hidden transition-transform duration-200 transform hover:scale-105 ring-2 ring-gray-100">
									<img
										src={conv.avatar}
										alt={conv.name}
										className="w-full h-full object-cover"
									/>
								</div>
								{conv.isOnline && (
									<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
								)}
							</div>
							<div className="flex-1 min-w-0 ml-3">
								<div className="flex justify-between items-start">
									<h3 className="font-semibold text-gray-900 truncate">
										{conv.name}
									</h3>
									<span className="text-xs text-gray-600 flex-shrink-0 ml-2">
										{conv.time}
									</span>
								</div>
								<p className="text-sm text-gray-700 truncate">{conv.message}</p>
								<MessageStatus status={conv.messageStatus} />
							</div>
						</div>
					))}
				</div>
			</div>
		</aside>
	);
}
