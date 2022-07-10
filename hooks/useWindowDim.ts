import { useState } from "react";

interface WinDim {
	width: number;
	height: number;
}

export const useWindowDim = (): WinDim => {
	const [windowDimensions, setWindowDimensions] = useState<WinDim>({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	if (typeof window !== undefined) {
		const handleResize = (): void => {
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", handleResize);
	}
	return windowDimensions;
};
