import { FC } from "react";
import Styles from "../styles/Home.module.scss";
import ArrowDown from "./common/ArrowDown";

const Hero: FC = () => {
	return (
		<>
			<section className={Styles.hero}>
				<div className={Styles.intro}>
					Hello 👋 I am <span>Pushkar</span>
				</div>
				<h1>
					I develop Asthetic <span>Web Experience</span>
				</h1>
				<div className={Styles.bottom}>
					<ArrowDown size={50} />
					<span className="stroyBtn">jj</span>
				</div>
			</section>
		</>
	);
};

export default Hero;
