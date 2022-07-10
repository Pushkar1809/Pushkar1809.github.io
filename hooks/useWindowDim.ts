import { useState } from "react";

export const useWindowDim = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = () => {
		setWindowDimensions({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	window.addEventListener("resize", handleResize);

	return windowDimensions;
};
