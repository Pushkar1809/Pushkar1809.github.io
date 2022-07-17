import { FC } from "react";
import Styles from "../../styles/Common.module.scss";

interface Props {
	text: string;
}

const Badge: FC<Props> = ({ text }) => {
	return (
		<div className={Styles.badge}>
			<span>{text}</span>
		</div>
	);
};

export default Badge;
