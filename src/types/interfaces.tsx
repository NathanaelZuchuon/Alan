// Un Message
export interface Message {
	id: string;
	content: string;
	isSended: boolean; // Pour savoir si le message est envoyé ou bien reçu
	sender: "me" | "alan";
	timestamp: Date;
	hasBeenRead: boolean;
}

// Un contact
export interface Contact {
	id: string;
	name: string;
	avatar: string;
	isOnline: boolean;
	messages: Message[];
}

// Pour chaque bouton de la listes des discussions
export interface Conversation {
	contact: Contact;
	lastMessage: Message;
}
