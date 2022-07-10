import Image from "next/image";
import { FC } from "react";
import Styles from "../styles/Home.module.scss";
import ArrowDown from "./common/ArrowDown";

const Hero: FC = () => {
	return (
		<section className={Styles.hero}>
			<div className={Styles.left}>
				<div className={Styles.intro}>
					Hello 👋 I am <span>Pushkar</span>
				</div>
				<h1>
					I develop Asthetic <span>Web Experience</span>
				</h1>
			</div>
			<div className={Styles.me}>
				<Image
					src="/assets/img/myplace.png"
					alt="me"
					width={500}
					height={504}
				/>
			</div>
			<div className={Styles.bottom}>
				<ArrowDown size={50} />
			</div>
		</section>
	);
};

export default Hero;
