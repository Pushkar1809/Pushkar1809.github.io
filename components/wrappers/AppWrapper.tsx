import Nav from "../common/Nav";
import { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const AppWrapper: FC<Props> = ({ children }: Props) => {
	return (
		<main>
			<Nav />
			{children}
		</main>
	);
};

export default AppWrapper;
