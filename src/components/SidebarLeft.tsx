"use client";

import { useRouter } from "next/navigation";
import { JSX, useState } from "react";

interface NavItem {
	path: string;
	label: string;
	icon: JSX.Element;
	hasNotification?: boolean;
	onClick?: () => void;
}

export default function SidebarLeft() {
	const router = useRouter();
	const [activeItem, setActiveItem] = useState<string>("/profile");
	const [isConversationListOpen, setIsConversationListOpen] = useState(false);

	const handleNavigation = (path: string, callback?: () => void) => {
		setActiveItem(path);
		if (callback) {
			callback();
		} else {
			setIsConversationListOpen(false);
			router.push(path);
		}
	};

	const toggleConversationList = () => {
		setIsConversationListOpen(!isConversationListOpen);
	};

	// Icônes personnalisées SVG
	const Icons = {
		Profile: () => (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
				/>
			</svg>
		),
		Forum: () => (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M17 8a3 3 0 110-6 3 3 0 010 6zM7 8a3 3 0 110-6 3 3 0 010 6z"
				/>
			</svg>
		),
		Alan: () => (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
				/>
			</svg>
		),
		Settings: () => (
			<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
	};

	const navItems: NavItem[] = [
		{
			path: "/profile",
			label: "Profil",
			icon: (
				<div className="relative w-10 h-10">
					<img
						src="/pic5.jpg"
						alt="Profile"
						className="w-full h-full rounded-full object-cover transition-shadow duration-200 hover:shadow-[0_0_8px_rgba(59,130,246,0.4)]"
					/>
					<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
				</div>
			),
		},
		{
			path: "/new-chat",
			label: "Nouvelle discussion",
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			),
			onClick: toggleConversationList,
		},
		{
			path: "/forum",
			label: "Ajouter Contact",
			icon: <Icons.Forum />,
		},
		{
			path: "/alan",
			label: "Alan AI",
			icon: <Icons.Alan />,
		},
	];

	return (
		<div className="w-[72px] h-screen bg-gray-900 flex flex-col items-center justify-between py-4 fixed left-0 top-0 z-50">
			<div className="flex flex-col items-center space-y-8">
				{navItems.map((item) => (
					<button
						key={item.path}
						onClick={() => handleNavigation(item.path, item.onClick)}
						className={`relative ${
							item.path === "/profile"
								? "p-0 hover:bg-transparent"
								: `p-3 rounded-lg transition-all duration-200 ${
										activeItem === item.path
											? "bg-gray-800 text-white scale-110"
											: "text-gray-400 hover:text-white hover:bg-gray-800/50"
									}`
						}`}
						title={item.label}
					>
						{item.icon}
					</button>
				))}
			</div>

			<button
				onClick={() => handleNavigation("/settings")}
				className={`p-3 rounded-lg transition-all duration-200 ${
					activeItem === "/settings"
						? "bg-gray-800 text-white scale-110"
						: "text-gray-400 hover:text-white hover:bg-gray-800/50"
				}`}
				title="Paramètres"
			>
				<Icons.Settings />
			</button>
		</div>
	);
}
