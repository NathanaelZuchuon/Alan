import { Contact, Conversation } from "@/types/interfaces";

export var contacts: Contact[] = [
	{
		id: "1",
		name: "Balbino Tchoutzine",
		avatar: "/pic1.jpg",
		isOnline: true,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T09:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T09:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T09:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T09:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "2",
		name: "Kamga Michel",
		avatar: "/pic9.jpeg",
		isOnline: false,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T08:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T08:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T08:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T08:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "3",
		name: "Fotso Daniel",
		avatar: "/pic3.jpeg",
		isOnline: true,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T07:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T07:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T07:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T07:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "4",
		name: "Nganso Kevin",
		avatar: "/pic4.jpg",
		isOnline: false,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T06:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T06:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T06:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T06:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "5",
		name: "Tchamba Jordan",
		avatar: "/pic8.jpg",
		isOnline: true,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T05:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T05:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T05:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T05:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "6",
		name: "Nguimfack Sarah",
		avatar: "/pic6.jpg",
		isOnline: false,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T04:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T04:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T04:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T04:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "7",
		name: "Dongmo Patrick",
		avatar: "/pic7.png",
		isOnline: true,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T03:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T03:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T03:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T03:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "8",
		name: "Tcheutchoua Jean",
		avatar: "/pic1.jpg",
		isOnline: false,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T02:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T02:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T02:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T02:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "9",
		name: "Kuate Emmanuel",
		avatar: "/pic5.jpg",
		isOnline: true,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T01:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T01:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T01:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T01:55:00"),
				hasBeenRead: false,
			},
		],
	},
	{
		id: "10",
		name: "Sokeng Marie",
		avatar: "/pic8.jpg",
		isOnline: true,
		messages: [
			{
				id: "1",
				content: "Bonjour, comment ça va aujourd'hui ?",
				isSended: true,
				sender: "me",
				timestamp: new Date("2025-04-10T00:45:00"),
				hasBeenRead: true,
			},
			{
				id: "2",
				content:
					"Je vais bien, merci ! Je travaille sur le projet Alan Chat. Et toi ?",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T00:47:00"),
				hasBeenRead: true,
			},
			{
				id: "3",
				content:
					"Super ! J'avance bien sur l'interface. Est-ce que tu as eu le temps de regarder les maquettes que j'ai envoyées hier ?",
				isSended: true,
				sender: "alan",
				timestamp: new Date("2025-04-10T00:50:00"),
				hasBeenRead: true,
			},
			{
				id: "4",
				content:
					"Oui, j'ai vu les maquettes. Je trouve que le design est vraiment élégant et intuitif. J'ai quelques suggestions à te faire pour améliorer l'expérience utilisateur.",
				isSended: false,
				sender: "me",
				timestamp: new Date("2025-04-10T00:55:00"),
				hasBeenRead: false,
			},
		],
	},
];

var conversationsList: Conversation[] = [];
contacts.forEach((contact) => {
	conversationsList.push({
		contact: contact,
		lastMessage: contact.messages[contact.messages.length - 1], // On récupère le dernier message
	});
});

export var conversations: Conversation[] = conversationsList;
