import Nav from "../common/Nav";
import MobileNav from "../common/MobileNav";
import { FC, ReactNode } from "react";
import Footer from "../common/Footer";
// import { useWindowDim } from "../../hooks/useWindowDim";

interface Props {
	children: ReactNode;
}

const AppWrapper: FC<Props> = ({ children }: Props) => {
	// const { width } = useWindowDim();
	return (
		<main>
			{typeof window !== "undefined" && window.innerWidth < 500 ? (
				<MobileNav />
			) : (
				<Nav />
			)}
			{children}
			<Footer />
		</main>
	);
};

export default AppWrapper;
