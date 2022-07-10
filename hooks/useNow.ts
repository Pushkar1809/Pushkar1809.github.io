import { useState } from "react";

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const useNow = () => {
	const [now, setNow] = useState(new Date());

	const handleTick = () => {
		setNow(new Date());
	};

	setInterval(handleTick, 1000);

	return {
		time: `${now.getHours()}:${now.getMinutes()}`,
		date: `${MONTHS[now.getMonth()]}${now.getDate()}, ${now.getFullYear()}`,
	};
};
