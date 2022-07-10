import { FC, useState } from "react";
import Styles from "../../styles/Common.module.scss";
import Image from "next/image";
import Link from "next/link";
import data from "../../content/navlinks.json";
import { NavLink } from "../../types/Nav";
import { BiMenuAltRight as MenuIcon } from "react-icons/bi";
import { IoMdClose as CloseIcon } from "react-icons/io";

const MobileNav: FC = () => {
	const [isOpen, setIsOpen] = useState<Boolean>(false);
	return (
		<>
			{isOpen && <Drawer close={() => setIsOpen(false)} />}
			<nav className={Styles.nav}>
				<Image src="/logo/logo-dark.png" alt="logo" width={98} height={28} />
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
				<button className={Styles.icon} onClick={() => setIsOpen(true)}>
					<MenuIcon />
				</button>
			</nav>
		</>
	);
};

interface DrawerProps {
	close: () => void;
}

const Drawer: FC<DrawerProps> = ({ close }) => {
	const navlinks = data as NavLink[];
	return (
		<>
			<section className={Styles.drawerBG}></section>
			<div className={Styles.drawer}>
				<div className={Styles.drawerHeader}>
					<button className={Styles.icon} onClick={close}>
						<CloseIcon />
					</button>
				</div>

				<ul className={Styles.navlinks}>
					{navlinks.map((link: NavLink, index: number) => (
						<li key={index}>
							<Link href={link.url}>{link.name}</Link>
						</li>
					))}
				</ul>
				<div className={Styles.foot}>
					<Image src="/logo/logo-dark.png" alt="logo" width={91} height={26} />
				</div>
			</div>
		</>
	);
};

export default MobileNav;
