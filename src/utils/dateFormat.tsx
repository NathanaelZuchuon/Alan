export const formatTime = (date: Date): string => {
	return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

export const formatDate = (date: Date): string => {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);

	const messageDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate()
	);

	if (messageDate.getTime() === today.getTime()) {
		return "Aujourd'hui";
	} else if (messageDate.getTime() === yesterday.getTime()) {
		return "Hier";
	} else {
		return date.toLocaleDateString("fr-FR", {
			day: "numeric",
			month: "short",
		});
	}
};
