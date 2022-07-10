import Nav from "../common/Nav";
import { FC, ReactNode } from "react";
import Footer from "../common/Footer";

interface Props {
	children: ReactNode;
}

const AppWrapper: FC<Props> = ({ children }: Props) => {
	return (
		<main>
			<Nav />
			{children}
			<Footer />
		</main>
	);
};

export default AppWrapper;
