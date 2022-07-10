import { FC } from "react";

interface ArrowDownProps {
	size: number;
}

const ArrowDown: FC<ArrowDownProps> = ({ size }) => (
	<svg
		width={size * 0.7}
		height={size}
		viewBox="0 0 70 100"
		fill="none"
		xmlns="http://www.w3.org/2000/svg">
		<path
			d="M38.5 5C38.5 2.51472 36.4853 0.5 34 0.5C31.5147 0.5 29.5 2.51472 29.5 5H38.5ZM30.818 98.182C32.5754 99.9393 35.4246 99.9393 37.182 98.182L65.8198 69.5442C67.5772 67.7868 67.5772 64.9376 65.8198 63.1802C64.0624 61.4228 61.2132 61.4228 59.4558 63.1802L34 88.636L8.54416 63.1802C6.7868 61.4228 3.93755 61.4228 2.18019 63.1802C0.422836 64.9376 0.422836 67.7868 2.18019 69.5442L30.818 98.182ZM29.5 5L29.5 95H38.5L38.5 5H29.5Z"
			fill="url(#paint0_linear_301_15)"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_301_15"
				x1="49.9999"
				y1="87"
				x2="25.9998"
				y2="15"
				gradientUnits="userSpaceOnUse">
				<stop stopColor="#FD76CB" />
				<stop offset="1" stopColor="#FFAC30" />
			</linearGradient>
		</defs>
	</svg>
);

export default ArrowDown;
