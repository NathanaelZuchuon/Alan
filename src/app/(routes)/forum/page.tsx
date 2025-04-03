"use client";

import { useState } from "react";

interface NewContact {
	name: string;
	email: string;
	phone?: string;
	group?: string;
}

export default function AddContactPage() {
	const [newContact, setNewContact] = useState<NewContact>({
		name: "",
		email: "",
		phone: "",
		group: "friends",
	});

	const [contacts, setContacts] = useState<NewContact[]>([]);
	const [isAdding, setIsAdding] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setContacts([...contacts, newContact]);
		setNewContact({ name: "", email: "", phone: "", group: "friends" });
		setIsAdding(false);
	};

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold">Ajouter un contact</h1>
				<button
					onClick={() => setIsAdding(true)}
					className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
				>
					Nouveau contact
				</button>
			</div>

			{isAdding && (
				<div className="bg-white rounded-lg shadow-lg p-6 mb-6">
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Nom complet
							</label>
							<input
								type="text"
								required
								value={newContact.name}
								onChange={(e) =>
									setNewContact({ ...newContact, name: e.target.value })
								}
								className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
								placeholder="John Doe"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								required
								value={newContact.email}
								onChange={(e) =>
									setNewContact({ ...newContact, email: e.target.value })
								}
								className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
								placeholder="john@example.com"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Téléphone
							</label>
							<input
								type="tel"
								value={newContact.phone}
								onChange={(e) =>
									setNewContact({ ...newContact, phone: e.target.value })
								}
								className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
								placeholder="+33 6 12 34 56 78"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Groupe
							</label>
							<select
								value={newContact.group}
								onChange={(e) =>
									setNewContact({ ...newContact, group: e.target.value })
								}
								className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
							>
								<option value="friends">Amis</option>
								<option value="family">Famille</option>
								<option value="work">Travail</option>
								<option value="other">Autre</option>
							</select>
						</div>

						<div className="flex justify-end space-x-2">
							<button
								type="button"
								onClick={() => setIsAdding(false)}
								className="px-4 py-2 text-gray-600 hover:text-gray-800"
							>
								Annuler
							</button>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
							>
								Ajouter
							</button>
						</div>
					</form>
				</div>
			)}

			<div className="bg-white rounded-lg shadow">
				<div className="p-4 border-b">
					<h2 className="text-lg font-semibold">Contacts récents</h2>
				</div>
				<div className="divide-y">
					{contacts.map((contact, index) => (
						<div key={index} className="p-4 hover:bg-gray-50">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-medium">{contact.name}</h3>
									<p className="text-sm text-gray-600">{contact.email}</p>
									{contact.phone && (
										<p className="text-sm text-gray-500">{contact.phone}</p>
									)}
								</div>
								<span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600">
									{contact.group}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
