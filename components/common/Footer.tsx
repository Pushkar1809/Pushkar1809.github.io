import { FC } from "react";
import Styles from "../../styles/Common.module.scss";

const Footer: FC = () => {
	return (
		<section className={Styles.footer}>
			Made with <span className={Styles.heart}>&hearts;</span> by
			<span>Pushkar</span>
		</section>
	);
};

export default Footer;
