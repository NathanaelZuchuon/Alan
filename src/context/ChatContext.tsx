"use client";

import { createContext, ReactNode, useContext, useState } from "react";

import { conversations } from "@/datas/mockDatas";
import { Conversation } from "@/types/interfaces";

interface ChatContextType {
	currentConversation: Conversation | null;
	setCurrentContactId: (contactId: string) => void;
	setCurrentConversation: (newConversation: Conversation) => void;
}

// 1. Création du contexte
const ChatContext = createContext<ChatContextType | undefined>(undefined);

// 2. Création d'un Provider
export const ChatProvider: React.FC<{ children: ReactNode }> = ({children}) => {
	const [contactId, setContactId] = useState<string | null>(null);

	var currentConversation = conversations.find(conversation => conversation.contact.id === contactId) || null;

	const setCurrentContactId = (contactId: string) => {
		setContactId(contactId);
	};

	const setCurrentConversation = (newConversation: Conversation) => {
		// Find the index of the conversation to replace
		const index = conversations.findIndex(conversation => conversation.contact.id === newConversation.contact.id);
		
		// If the conversation exists, replace it
		if (index !== -1) {
			conversations[index] = newConversation;
		} else {
			// Optionally, you can add the new conversation if it doesn't exist
			conversations.push(newConversation);
		}

		currentConversation = conversations.find(conversation => conversation.contact.id === newConversation.contact.id) || null;
	};

	return (
		<ChatContext.Provider value={{ currentConversation, setCurrentContactId, setCurrentConversation }}>
			{children}
		</ChatContext.Provider>
	);
};

// 3.
export const useChat = (): ChatContextType => {
	const context = useContext(ChatContext);
	
	if (context === undefined) {
		throw new Error("useChat must be used within a ChatProvider!");
	}
	
	return context;
};
