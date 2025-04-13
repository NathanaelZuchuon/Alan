"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";

import { useChat } from "@/context/ChatContext";
import { formatTime } from "@/utils/dateFormat";
import { conversations } from "@/datas/mockDatas";
import { Conversation } from "@/types/interfaces";

export default function ConversationList() {
	const [filteredConversations, setFilteredConversations] = useState<Conversation[]>(conversations);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [hoveredId, setHoveredId] = useState<string | null>(null);

	const { setCurrentContactId } = useChat();

	// ---
	const hey = (id: string) => {
		setSelectedId(id);
		setCurrentContactId(id);

		console.log("Zuchuon was here :)");
	};
	// ---

	const handleSearch = (term: string) => {
		if (!term.trim()) {
			setFilteredConversations(conversations);
			return;
		}

		const filtered = conversations.filter((conv) => conv.contact.name.toLowerCase().includes(term.toLowerCase()) || conv.lastMessage.content.toLowerCase().includes(term.toLowerCase()));
		setFilteredConversations(filtered);
	};

	return (
		<aside className="w-[380px] h-screen bg-gray-50 border-r border-gray-200 flex flex-col fixed translate-x-[72px]">
			<div className="p-4 border-b bg-white">
				<div className="flex items-center justify-between mb-4">
					<h1 className="text-2xl font-bold text-snappy-purple">
						YowTalk
					</h1>
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
							key={conv.contact.id}
							onClick={() => hey(conv.contact.id)} // ---
							onMouseEnter={() => setHoveredId(conv.contact.id)}
							onMouseLeave={() => setHoveredId(null)}
							className={`flex items-center p-3 cursor-pointer transition-all duration-200 rounded-lg
								${selectedId === conv.contact.id ? "bg-blue-100 border-l-4 border-blue-500" : "bg-white"}
								${hoveredId === conv.contact.id ? "transform scale-[0.995] shadow-sm" : ""}
								hover:bg-blue-50`}
						>
							<div className="relative flex-shrink-0">
								<div className="w-12 h-12 rounded-full overflow-hidden transition-transform duration-200 transform hover:scale-105 ring-2 ring-gray-100">
									<img
										src={conv.contact.avatar}
										alt={conv.contact.name}
										className="w-full h-full object-cover"
									/>
								</div>
								{conv.contact.isOnline && (
									<div className="absolute bottom-0 right-0 w-3 h-3 bg-snappy-purple rounded-full border-2 border-white"></div>
								)}
							</div>
							<div className="flex-1 min-w-0 ml-3">
								<div className="flex justify-between items-start">
									<h3 className="font-semibold text-gray-900 truncate">
										{conv.contact.name}
									</h3>
									<span className="text-xs text-gray-600 flex-shrink-0 ml-2">
										{formatTime(conv.lastMessage.timestamp)}
									</span>
								</div>
								<p className="text-sm text-gray-700 truncate">
									{conv.lastMessage.content}
								</p>
								{/* conv.lastMessage.hasBeenRead */}
							</div>
						</div>
					))}
				</div>
			</div>
		</aside>
	);
}
