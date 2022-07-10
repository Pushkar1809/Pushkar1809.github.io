import { FC } from "react";
import data from "../content/socialContact.json";
import { Social } from "../types/Social";
import { useNow } from "../hooks/useNow";
import Styles from "../styles/Basic.module.scss";

const Contact: FC = () => {
	const socials = data as Social[];
	const { time, date } = useNow();
	return (
		<section className={Styles.contact}>
			<div className={Styles.mail}>
				<div className={Styles.intro}>
					It&apos;s{" "}
					<span>
						{time}, {date}
					</span>{" "}
					for me
				</div>
				<div className={Styles.tagline}>Let&apos;s have a chat</div>
				<div className="mail">
					<a
						href={`mailto:pushkarborkar1809@gmail.com`}
						target="_blank"
						rel="nopennner noreferrer">
						pushkarborkar1809@gmail.com
					</a>
				</div>
			</div>
			<div className={Styles.socials}>
				<a
					href="/assets/pdf/resume.pdf"
					target="_blank"
					rel="noopenner noreferrer">
					Resume
				</a>
				{socials.map(({ name, url }: Social, index: number) => (
					<a key={index} href={url} target="_blank" rel="noopenner noreferrer">
						{name}
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;
