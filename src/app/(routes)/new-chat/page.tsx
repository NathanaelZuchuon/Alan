"use client";

import { useState } from "react";

interface Contact {
	id: string;
	name: string;
	avatar: string;
	status: "online" | "offline";
}

export default function NewChatPage() {
	const [searchQuery, setSearchQuery] = useState("");

	const contacts: Contact[] = [
		{ id: "1", name: "Alice Smith", avatar: "/pic1.jpg", status: "online" },
		{
			id: "2",
			name: "Bob Johnson",
			avatar: "/pic3.jpeg",
			status: "offline",
		},
		{
			id: "3",
			name: "Carol Williams",
			avatar: "/pic4.jpg",
			status: "online",
		},
	];

	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">New Chat</h1>
			<div className="bg-white rounded-lg shadow p-6">
				<input
					type="text"
					placeholder="Search contacts..."
					className="w-full p-2 border rounded-lg mb-4"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
				<div className="space-y-2">
					{filteredContacts.map((contact) => (
						<div
							key={contact.id}
							className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
						>
							<img
								src={contact.avatar}
								alt={contact.name}
								className="w-12 h-12 rounded-full object-cover"
							/>
							<div className="ml-4 flex-1">
								<h3 className="font-medium">{contact.name}</h3>
								<span
									className={`text-sm ${
										contact.status === "online"
											? "text-green-500"
											: "text-gray-500"
									}`}
								>
									{contact.status}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
