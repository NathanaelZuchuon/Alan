"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { Bot, Mic, Send, Check, CheckCheck, PaperclipIcon } from "lucide-react";

import { Message } from "@/types/interfaces";
import { formatTime } from "@/utils/dateFormat";
import { useChat } from "@/context/ChatContext";

export const Conversation: React.FC = () => {
	const [message, setMessage] = useState("");
	const [sliderPosition, setSliderPosition] = useState(1); // 0: rouge, 1: orange, 2: vert

	// Messages d'exemple
	const { currentConversation, setCurrentConversation } = useChat();

	const handleSendMessage = () => {
		if (message.trim() && currentConversation) {
			// Logique pour envoyer le message
			const newMessage: Message = {
				id: uuidv4(),
				content: message,
				isSended: true,
				sender: sliderPosition === 2 ? "alan" : "me",
				timestamp: new Date(),
				hasBeenRead: false,
			};

			const newMessages = [...currentConversation.contact.messages, newMessage];
			currentConversation.contact.messages = newMessages;

			const updatedConversation = {
				contact: currentConversation.contact,
				lastMessage: newMessage,
			};

			setCurrentConversation(updatedConversation);
			setMessage("");
		}
	};

	const sendFile = () => {
		console.log("Envoie de fichier.");
	};

	const getSliderColor = () => {
		switch (sliderPosition) {
			case 0:
				return "bg-red-500";

			case 1:
				return "bg-orange-500";

			case 2:
				return "bg-green-500";

			default:
				return "bg-orange-500";
		}
	};

	const moveSlider = () => {
		setSliderPosition((prev) => (prev + 1) % 3);
	};

	if (currentConversation === null) {
		return (
			<div className="flex flex-col items-center justify-center h-full text-center p-6">
				<div className="animate-pulse">
					<h1 className="text-4xl font-bold text-purple-600 mb-4">
						Bienvenue à YowTalk
					</h1>
					<p className="text-gray-600 max-w-md mx-auto">
						Sélectionnez une conversation pour commencer à discuter avec
						vos contacts.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col h-screen bg-gray-50">
			{/* Conteneur principal divisé en 3 parties verticales */}

			{/* 1. En-tête avec profil */}
			<div
				className="flex items-center p-4 bg-white shadow-sm"
				style={{ borderBottom: "1px solid rgba(123, 82, 171, 0.1)" }}
			>
				<div className="flex items-center flex-1">
					<div className="relative">
						<div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
							{/* <User size={32} className="text-gray-500" /> */}
							<img
								src={currentConversation.contact.avatar}
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</div>
						<div
							className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white bg-${true ? "snappy-purple" : "snappy-gray"}`}
						></div>
					</div>
					<div className="ml-3">
						<h3 className="font-medium text-gray-800">
							{currentConversation.contact.name}
						</h3>
						<p className="text-sm text-gray-500">
							{currentConversation.contact.isOnline.toString()}
						</p>
					</div>
				</div>
				<div className="flex items-center">
					<div
						className="w-[72px] h-8 rounded-full bg-gray-200 p-1 cursor-pointer relative"
						onClick={moveSlider}
					>
						<div
							className={`absolute w-6 h-6 rounded-full shadow ${getSliderColor()} transition-all duration-300 flex items-center justify-center`}
							style={{
								left:
									sliderPosition === 0
										? "3px"
										: sliderPosition === 1
											? "calc(50% - 12px)"
											: "calc(100% - 27px)",
							}}
						>
							<Bot size={14} color="white" />
						</div>
					</div>
				</div>
			</div>

			{/* 2. Zone de messages */}
			<div className="flex-1 flex-col overflow-y-auto p-4 bg-snappy-gray">
				{currentConversation.contact.messages.map((msg) => (
					<div
						key={msg.id}
						className={`mb-4 w-full flex ${msg.isSended ? "justify-end" : "justify-start"}`}
					>
						<div
							className={`p-3 rounded-lg relative max-w-[45%] ${
							msg.isSended
								? "bg-snappy-purple text-white rounded-br-none"
								: "bg-white text-gray-800 rounded-bl-none shadow-sm"
							}`}
						>
							<div className="break-words">{msg.content}</div>
							<div
								className={`flex items-center text-xs mt-1 ${
									msg.isSended
									? "text-white"
									: "text-gray-800"
								}`}
							>
								<span>
									{msg.hasBeenRead ? (<CheckCheck size={14} />) : (<Check size={14} />)}
								</span>
								<span className="ml-1">{formatTime(msg.timestamp)}</span>
								{msg.sender === "alan" && (<span className="ml-1"><Bot size={14} /></span>)}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* 3. Zone de saisie */}
			<div
				className="p-4 bg-white"
				style={{ borderTop: "1px solid rgba(123, 82, 171, 0.1)" }}
			>
				<div className="flex items-end">
					<button
						className="p-2 text-snappy-purple hover:bg-purple-50 rounded-full"
						onClick={sendFile}
					>
						<PaperclipIcon size={22} />
					</button>
					<div
						className="flex-1 mx-2 border rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-purple-300"
						style={{ borderColor: "rgba(123, 82, 171, 0.3)" }}
					>
						<textarea
							className="w-full p-3 outline-none resize-none bg-white text-gray-800 min-h-[44px] max-h-32"
							placeholder="Écrivez un message..."
							value={message}
							disabled={sliderPosition === 2}
							onChange={(e) => setMessage(e.target.value)}
							rows={Math.min(
								4,
								Math.max(1, message.split("\n").length)
							)}
							style={{ lineHeight: "1.1" }}
							onKeyDown={(e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									handleSendMessage();
								}
							}}
						/>
					</div>
					<button className="p-2 text-snappy-purple hover:bg-purple-50 rounded-full mr-1">
						<Mic size={22} />
					</button>
					<button
						className={`p-2 rounded-full flex items-center justify-center ${message.trim() ? "bg-snappy-purple text-white" : "bg-gray-200 text-gray-400"}`}
						onClick={handleSendMessage}
						disabled={!message.trim()}
					>
						<Send size={20} />
					</button>
				</div>
			</div>
		</div>
	);
};
