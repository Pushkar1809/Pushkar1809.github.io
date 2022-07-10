import { FC } from "react";
import Styles from "../../styles/Common.module.scss";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
	name: string;
	url: string;
}

const Nav: FC = () => {
	const navlinks: NavLink[] = [
		{
			name: "Intro",
			url: "",
		},
		{
			name: "Projects",
			url: "#projects",
		},
		{
			name: "Skills",
			url: "#skills",
		},
		{
			name: "Contact",
			url: "#contact",
		},
	];
	return (
		<nav className={Styles.nav}>
			<Image src="/logo/logo-dark.png" alt="logo" width={112} height={32} />
			<div className={Styles.quicklinks}>
				<a href="assets/pdf/resume.pdf" target="_blank">
					Resume
				</a>
				<a
					href="https://github.com/Pushkar1809"
					target="_blank"
					rel="noopenner noreferrer">
					GitHub
				</a>
			</div>
			<ul className={Styles.navlinks}>
				{navlinks.map((link: NavLink, index: number) => (
					<li key={index}>
						<Link href={link.url}>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Nav;
