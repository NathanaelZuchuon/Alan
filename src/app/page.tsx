"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [newMessage, setNewMessage] = useState("");
	const [selectedChat, setSelectedChat] = useState(0);

	// Données fictives pour les contacts et les messages
	const contacts = [
		{
			id: 0,
			name: "Alice Martin",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Bonjour, comment vas-tu ?",
			time: "10:42",
			unread: 3,
		},
		{
			id: 1,
			name: "Thomas Dubois",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Tu as vu le dernier film ?",
			time: "09:15",
			unread: 0,
		},
		{
			id: 2,
			name: "Marie Dupont",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Rendez-vous demain à 14h",
			time: "Hier",
			unread: 0,
		},
		{
			id: 3,
			name: "Groupe Famille",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Papa: On se voit ce weekend ?",
			time: "Hier",
			unread: 5,
		},
		{
			id: 4,
			name: "Lucas Bernard",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Merci pour l'info !",
			time: "13/03",
			unread: 0,
		},
		{
			id: 5,
			name: "Julie Leroy",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Tu peux m'envoyer le document ?",
			time: "12/03",
			unread: 0,
		},
		{
			id: 6,
			name: "Équipe Projet",
			avatar: `https://ui-avatars.com/api/?name=Alice+Martin&background=random`,
			lastMessage: "Sophie: J'ai terminé ma partie",
			time: "11/03",
			unread: 0,
		},
	];

	const conversations = [
		{
			contactId: 0,
			messages: [
				{
					id: 1,
					sender: "other",
					text: "Salut ! Comment ça va aujourd'hui ?",
					time: "10:30",
				},
				{
					id: 2,
					sender: "me",
					text: "Très bien merci, et toi ?",
					time: "10:35",
				},
				{
					id: 3,
					sender: "other",
					text: "Ça va bien ! Tu as des plans pour le weekend ?",
					time: "10:37",
				},
				{
					id: 4,
					sender: "me",
					text: "Je pense aller voir un film, tu veux venir ?",
					time: "10:40",
				},
				{
					id: 5,
					sender: "other",
					text: "Bonjour, comment vas-tu ?",
					time: "10:42",
				},
			],
		},
		{
			contactId: 1,
			messages: [
				{
					id: 1,
					sender: "other",
					text: "Tu as vu le dernier film ?",
					time: "09:15",
				},
			],
		},
		{
			contactId: 2,
			messages: [
				{
					id: 1,
					sender: "other",
					text: "Rendez-vous demain à 14h",
					time: "Hier 19:22",
				},
			],
		},
	];

	const handleSendMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (newMessage.trim()) {
			// Ici vous ajouteriez normalement le message à votre état
			setNewMessage("");
		}
	};

	return (
		<div className="flex flex-col h-screen bg-gray-100">
			{/* Barre d'en-tête */}
			<div className="bg-teal-700 h-28 w-full absolute top-0 left-0 z-0"></div>

			{/* Interface principale */}
			<div className="flex flex-row h-full w-full max-w-7xl mx-auto my-5 z-10 relative">
				{/* Panneau gauche - liste de contacts */}
				<div className="w-1/3 flex flex-col bg-white shadow-md">
					{/* En-tête utilisateur */}
					<div className="flex justify-between items-center p-3 bg-gray-200">
						<div className="flex items-center">
							<div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
								<Image
									src={"https://ui-avatars.com/api/?name=Alice+Martin&background=random"}
									alt="Profile"
									width={40}
									height={40}
								/>
							</div>
						</div>
						<div className="flex gap-4 text-gray-600">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M12 20.664a8.665 8.665 0 0 1-8.665-8.665A8.665 8.665 0 0 1 12 3.334a8.665 8.665 0 0 1 8.665 8.665A8.665 8.665 0 0 1 12 20.664zm0-7.302a1.363 1.363 0 1 0 0-2.727 1.363 1.363 0 0 0 0 2.727zm-4.09 0a1.363 1.363 0 1 0 0-2.727 1.363 1.363 0 0 0 0 2.727zm8.18 0a1.363 1.363 0 1 0 0-2.727 1.363 1.363 0 0 0 0 2.727z"
								></path>
							</svg>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
								></path>
							</svg>
						</div>
					</div>

					{/* Barre de recherche */}
					<div className="p-2 bg-white">
						<div className="bg-gray-200 flex items-center rounded-lg px-3 py-1">
							<svg
								viewBox="0 0 24 24"
								width="16"
								height="16"
								className="text-gray-500 mr-4"
							>
								<path
									fill="currentColor"
									d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
								></path>
							</svg>
							<input
								type="text"
								placeholder="Rechercher ou démarrer une nouvelle discussion"
								className="bg-transparent border-none w-full text-sm focus:outline-none"
							/>
						</div>
					</div>

					{/* Liste de contacts */}
					<div className="overflow-y-auto flex-1">
						{contacts.map((contact) => (
							<div
								key={contact.id}
								className={`flex p-3 border-b hover:bg-gray-100 cursor-pointer ${selectedChat === contact.id ? "bg-gray-200" : ""}`}
								onClick={() => setSelectedChat(contact.id)}
							>
								<div className="relative mr-3">
									<div className="h-12 w-12 rounded-full overflow-hidden">
										<Image
											src={contact.avatar}
											alt={contact.name}
											width={48}
											height={48}
										/>
									</div>
									{contact.unread > 0 && (
										<div className="absolute -top-1 -right-1 bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
											{contact.unread}
										</div>
									)}
								</div>
								<div className="flex-1">
									<div className="flex justify-between">
										<h2 className="font-medium">
											{contact.name}
										</h2>
										<span className="text-xs text-gray-500">
											{contact.time}
										</span>
									</div>
									<p className="text-sm text-gray-500 truncate">
										{contact.lastMessage}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Panneau droit - conversation */}
				<div className="w-2/3 flex flex-col bg-gray-100">
					{/* En-tête conversation */}
					<div className="flex items-center p-3 bg-gray-200 border-l border-gray-300">
						<div className="h-10 w-10 rounded-full overflow-hidden mr-3">
							<Image
								src={
									contacts[selectedChat]?.avatar ||
									`https://ui-avatars.com/api/?name=Alice+Martin&background=random`
								}
								alt="Contact"
								width={40}
								height={40}
							/>
						</div>
						<div className="flex-1">
							<h2 className="font-medium">
								{contacts[selectedChat]?.name ||
									"Sélectionnez un contact"}
							</h2>
							<p className="text-xs text-gray-500">En ligne</p>
						</div>
						<div className="flex gap-4 text-gray-600">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
								></path>
							</svg>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
								></path>
							</svg>
						</div>
					</div>

					{/* Messages */}
					<div
						className="flex-1 overflow-y-auto p-5"
						style={{
							backgroundImage:
								"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGaSURBVDhPtZJNKMNhGMd/V9MkjrUEoSjChaRIlpMDchKTs1BKDq6cHFxcpJwcHJQTB0nlIEfk4CRHSYlycFA45+v5vVLW2Lab/fvUU/t9n/d5nud5n5fgP8hIDrGjhYVFgDK+yxGnd4p9qR5rKIEH8AY+Yqj8VUBFHleYZSDCuIpTwVOUE8xBNfSBEzgAVVAFD/g+CrKgW74DiJPJKxKMB6bQYQ+84QZzPIdnEMGn5PgBrEMX+NLW6gFxpKwHDWCqBE3o4l9xLnQDc08OBL9y2VCPxhbUgPxhCj3gFdzR44lqCJosCfEAnmkN10A91NJnbugPpwL4UAReYwqNsAfVtoXaAgq/MqGWNxEuFnDPWcLVPEAblIFdTDOsw6/PhFQo4RqP4BQaIQm0Qwbsg3vCOlRCHVRBDdSChV+hxvCMM8kVehUywxcVJ9JRMAB+0gbLUAFN0AJlqj1UwG9Ua4AfGjbgKTzDKszDCFQYuqAaYhSTJBIxS3AQrqCTs8kN2AcnyQWYhQrDAXiFM/iKFbgCtyT3N1oa/gL0Y+YKlmp7GQAAAABJRU5ErkJggg==')",
							backgroundRepeat: "repeat",
							backgroundSize: "auto",
						}}
					>
						{conversations
							.find((c) => c.contactId === selectedChat)
							?.messages.map((message) => (
								<div
									key={message.id}
									className={`max-w-md rounded-lg p-3 mb-2 ${
										message.sender === "me"
											? "bg-green-100 ml-auto"
											: "bg-white mr-auto"
									}`}
								>
									<p>{message.text}</p>
									<p className="text-xs text-gray-500 text-right mt-1">
										{message.time}
									</p>
								</div>
							))}
					</div>

					{/* Barre de saisie de message */}
					<div className="p-3 bg-gray-200 flex items-center">
						<div className="flex gap-4 text-gray-600 mr-2">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011c-5.819 0-10.229 4.524-10.229 10.229 0 5.704 4.41 10.229 10.229 10.229s10.229-4.524 10.229-10.229c0-5.705-4.41-10.229-10.229-10.229zm0 19.009c-4.833 0-8.781-3.949-8.781-8.78 0-4.833 3.948-8.781 8.781-8.781s8.78 3.948 8.78 8.781c0 4.831-3.947 8.78-8.78 8.78z"
								></path>
							</svg>
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
								></path>
							</svg>
						</div>

						<form
							className="flex-1 flex"
							onSubmit={handleSendMessage}
						>
							<input
								type="text"
								placeholder="Tapez un message"
								className="flex-1 border-none rounded-full py-2 px-4 focus:outline-none"
								value={newMessage}
								onChange={(e) => setNewMessage(e.target.value)}
							/>
						</form>

						<div className="flex gap-4 text-gray-600 ml-2">
							<svg
								viewBox="0 0 24 24"
								width="24"
								height="24"
								className="cursor-pointer"
							>
								<path
									fill="currentColor"
									d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"
								></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
