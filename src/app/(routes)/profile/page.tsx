"use client";

import { useState } from "react";

interface ProfileData {
	name: string;
	email: string;
	avatar: string;
	status: string;
	bio: string;
	joinDate: string;
	lastActive: string;
	stats: {
		messages: number;
		groups: number;
		sharedFiles: number;
	};
}

export default function ProfilePage() {
	const [profile, setProfile] = useState<ProfileData>({
		name: "John Doe",
		email: "john.doe@example.com",
		avatar: "/pic5.jpg",
		status: "online",
		bio: "Software Developer | React & TypeScript Enthusiast",
		joinDate: "Mars 2024",
		lastActive: "2 heures",
		stats: {
			messages: 152,
			groups: 8,
			sharedFiles: 24,
		},
	});

	const [isEditing, setIsEditing] = useState(false);
	const [editedProfile, setEditedProfile] = useState<ProfileData>(profile);

	const handleSave = () => {
		setProfile(editedProfile);
		setIsEditing(false);
	};

	const handleCancel = () => {
		setEditedProfile(profile);
		setIsEditing(false);
	};

	return (
		<div className="max-w-4xl mx-auto p-6">
			<div className="bg-white rounded-lg shadow-lg overflow-hidden">
				{/* Cover Image */}
				<div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800"></div>

				<div className="relative px-6 py-8">
					{/* Avatar */}
					<div className="absolute -top-16 left-6">
						<div className="relative">
							<img
								src={profile.avatar}
								alt={profile.name}
								className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
							/>
							<div
								className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white
                ${profile.status === "online" ? "bg-green-500" : "bg-gray-400"}`}
							></div>
						</div>
					</div>

					{/* Profile Info */}
					<div className="ml-36 flex justify-between items-start">
						{isEditing ? (
							<div className="space-y-4 flex-1 mr-4">
								<input
									type="text"
									value={editedProfile.name}
									onChange={(e) =>
										setEditedProfile({
											...editedProfile,
											name: e.target.value,
										})
									}
									className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<input
									type="email"
									value={editedProfile.email}
									onChange={(e) =>
										setEditedProfile({
											...editedProfile,
											email: e.target.value,
										})
									}
									className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								/>
								<textarea
									value={editedProfile.bio}
									onChange={(e) =>
										setEditedProfile({
											...editedProfile,
											bio: e.target.value,
										})
									}
									className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									rows={3}
								/>
							</div>
						) : (
							<div>
								<h1 className="text-2xl font-bold text-gray-900">
									{profile.name}
								</h1>
								<p className="text-gray-600">{profile.email}</p>
								<p className="mt-2 text-gray-700">
									{profile.bio}
								</p>
							</div>
						)}
						<div className="flex space-x-2">
							{isEditing ? (
								<>
									<button
										onClick={handleSave}
										className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
									>
										Enregistrer
									</button>
									<button
										onClick={handleCancel}
										className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
									>
										Annuler
									</button>
								</>
							) : (
								<button
									onClick={() => setIsEditing(true)}
									className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
								>
									Modifier le profil
								</button>
							)}
						</div>
					</div>

					{/* Stats */}
					<div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6">
						<div className="text-center">
							<span className="block text-2xl font-bold text-gray-900">
								{profile.stats.messages}
							</span>
							<span className="text-gray-600">Messages</span>
						</div>
						<div className="text-center">
							<span className="block text-2xl font-bold text-gray-900">
								{profile.stats.groups}
							</span>
							<span className="text-gray-600">Groupes</span>
						</div>
						<div className="text-center">
							<span className="block text-2xl font-bold text-gray-900">
								{profile.stats.sharedFiles}
							</span>
							<span className="text-gray-600">
								Fichiers partagés
							</span>
						</div>
					</div>

					{/* Additional Info */}
					<div className="mt-8 border-t pt-6">
						<h2 className="text-lg font-semibold text-gray-900 mb-4">
							Informations supplémentaires
						</h2>
						<div className="space-y-4">
							<div className="flex items-center space-x-2">
								<svg
									className="w-5 h-5 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								<span className="text-gray-600">
									Membre depuis {profile.joinDate}
								</span>
							</div>
							<div className="flex items-center space-x-2">
								<svg
									className="w-5 h-5 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span className="text-gray-600">
									Dernière activité : il y a{" "}
									{profile.lastActive}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
