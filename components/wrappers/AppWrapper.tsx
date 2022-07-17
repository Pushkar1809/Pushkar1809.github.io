import Nav from "../common/Nav";
import MobileNav from "../common/MobileNav";
import { FC, ReactNode } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useRouter } from "next/router";

interface Props {
	children: ReactNode;
}

const AppWrapper: FC<Props> = ({ children }: Props) => {
	const { width } = useWindowSize();
	const { pathname} = useRouter();
	return (
		<main>
			{pathname === "/" && (
				<>
					{typeof width !== undefined && Number(width) < 500 ? (
						<MobileNav />
					) : (
						<Nav />
					)}
				</>
			)}

			{children}
		</main>
	);
};

export default AppWrapper;
