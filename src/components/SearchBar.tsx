"use client";

import { useState, useEffect, useRef } from "react";

interface SearchProps {
	onSearch: (term: string) => void;
	suggestions?: string[]; // Suggestions de recherches
	placeholder?: string;
}

export const SearchBar: React.FC<SearchProps> = ({ onSearch, suggestions = [], placeholder = "Rechercher des messages ou contacts..."}: SearchProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
	const searchingTimerRef = useRef<NodeJS.Timeout | null>(null);
	

	// Gestion de la recherche avec debounce
	useEffect(() => {
		// Nettoyage des timers existants
		if (debounceTimerRef.current) {
			clearTimeout(debounceTimerRef.current);
		}
		if (searchingTimerRef.current) {
			clearTimeout(searchingTimerRef.current);
		}

		// Mettre en place un nouveau timer pour la recherche
		if (searchTerm) {
			debounceTimerRef.current = setTimeout(() => {
				// Commencer à chercher
				setIsSearching(true);
				onSearch(searchTerm);
				
				// Configurer le timer pour arrêter l'animation après 300ms
				searchingTimerRef.current = setTimeout(() => {
					setIsSearching(false);
				}, 300);
			}, 200);
		} else {
			// Si le terme de recherche est vide, réinitialiser
			setIsSearching(false);
			onSearch("");
		}

		// Nettoyage lors du démontage
		return () => {
			if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
			if (searchingTimerRef.current) clearTimeout(searchingTimerRef.current);
		};
	}, [searchTerm, onSearch]);

	const clearSearch = () => {
		// Nettoyage des timers existants
		if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
		if (searchingTimerRef.current) clearTimeout(searchingTimerRef.current);
		
		setSearchTerm("");
		setIsSearching(false);
		onSearch(""); // Réinitialise la recherche
		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div className="relative">
			<div className="relative">
				<input
					ref={inputRef}
					type="text"
					value={searchTerm}
					onChange={handleChange}
					placeholder={placeholder}
					className="w-full p-2 pl-10 pr-10 text-gray-900 placeholder-gray-500 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white"
				/>

				{/* Icône de recherche ou loader - avec conteneur fixe pour éviter les sauts */}
				<div className="absolute left-3 top-2.5 h-5 w-5 flex items-center justify-center">
					{isSearching ? (
						<svg
							className="animate-spin h-5 w-5 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								className="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								strokeWidth="4"
							/>
							<path
								className="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
							/>
						</svg>
					) : (
						<svg
							className="h-5 w-5 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					)}
				</div>

				{/* Bouton pour effacer */}
				{searchTerm && (
					<button
						onClick={clearSearch}
						className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
						aria-label="Effacer la recherche"
					>
						<svg
							className="h-5 w-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
}
