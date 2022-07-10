import { useState } from "react";

const MONTHS: string[] = [
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

interface NowObject {
	date: string;
	time: string;
}

export const useNow = (): NowObject => {
	const [now, setNow] = useState<Date>(new Date());

	const handleTick = (): void => {
		setNow(new Date());
	};

	setInterval(handleTick, 1000);

	return {
		time: `${now.getHours()}:${now.getMinutes()}`,
		date: `${MONTHS[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`,
	};
};
