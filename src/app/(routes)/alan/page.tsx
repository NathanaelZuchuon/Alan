"use client";

import { useState, useRef } from "react";

type Mode = "listen" | "pause" | "write";
type Message = {
	id: string;
	text: string;
	sender: "user" | "alan";
	timestamp: Date;
};

export default function AlanPage() {
	const [mode, setMode] = useState<Mode>("pause");
	const [messages, setMessages] = useState<Message[]>([]);
	const [inputText, setInputText] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleModeChange = (newMode: Mode) => {
		setMode(newMode);
		if (newMode === "write" && inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleSendMessage = (text: string) => {
		if (!text.trim()) return;

		const newMessage: Message = {
			id: Date.now().toString(),
			text,
			sender: "user",
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, newMessage]);
		setInputText("");

		// Simulate Alan's response
		setTimeout(() => {
			const response: Message = {
				id: (Date.now() + 1).toString(),
				text: "Je suis Alan, je traite votre message...",
				sender: "alan",
				timestamp: new Date(),
			};
			setMessages((prev) => [...prev, response]);
		}, 1000);
	};

	return (
		<div className="flex flex-col h-full bg-gray-50">
			{/* Mode Controls */}
			<div className="bg-white border-b p-4 flex justify-center space-x-4">
				<button
					onClick={() => handleModeChange("listen")}
					className={`p-3 rounded-full ${
						mode === "listen"
							? "bg-green-500 text-white"
							: "bg-gray-100"
					}`}
					title="Mode écoute"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
						/>
					</svg>
				</button>

				<button
					onClick={() => handleModeChange("pause")}
					className={`p-3 rounded-full ${
						mode === "pause"
							? "bg-yellow-500 text-white"
							: "bg-gray-100"
					}`}
					title="Mode pause"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</button>

				<button
					onClick={() => handleModeChange("write")}
					className={`p-3 rounded-full ${
						mode === "write"
							? "bg-blue-500 text-white"
							: "bg-gray-100"
					}`}
					title="Mode écriture"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
						/>
					</svg>
				</button>
			</div>

			{/* Messages Area */}
			<div className="flex-1 p-6 overflow-y-auto">
				<div className="max-w-3xl mx-auto space-y-4">
					{messages.map((message) => (
						<div
							key={message.id}
							className={`flex ${
								message.sender === "user"
									? "justify-end"
									: "justify-start"
							}`}
						>
							<div
								className={`max-w-sm p-4 rounded-lg ${
									message.sender === "user"
										? "bg-blue-500 text-white"
										: "bg-white border"
								}`}
							>
								<p>{message.text}</p>
								<span className="text-xs opacity-75 mt-1 block">
									{message.timestamp.toLocaleTimeString()}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Input Area */}
			<div className="p-4 bg-white border-t">
				<div className="max-w-3xl mx-auto flex space-x-4">
					<input
						ref={inputRef}
						type="text"
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
						onKeyDown={(e) =>
							e.key === "Enter" && handleSendMessage(inputText)
						}
						placeholder={
							mode === "listen"
								? "Je vous écoute..."
								: mode === "pause"
									? "En pause"
									: "Écrivez votre message..."
						}
						disabled={mode !== "write"}
						className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
					<button
						onClick={() => handleSendMessage(inputText)}
						disabled={mode !== "write" || !inputText.trim()}
						className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
					>
						Envoyer
					</button>
				</div>
			</div>
		</div>
	);
}
