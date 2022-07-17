import Link from "next/link";
import { FC } from "react";
import { Project } from "../types/Project";
import Badge from "./common/Badge";
import { BsArrowRightShort as Arrow } from "react-icons/bs";
import Styles from "../styles/Content.module.scss";

interface Props {
	project: Project;
}

const ProjectTile: FC<Props> = ({ project }) => {
	const { name, tags, startedAt, key, inProgress } = project;
	return (
		<div className={Styles.project}>
			<div className={Styles.name}>
				<h3>{name}</h3>
				{inProgress && <div className={Styles.ip}>Currently Working</div>}
			</div>
			<div className={Styles.tags}>
				{tags.map((tag: string, index: number) => (
					<Badge key={index} text={tag} />
				))}
			</div>
			<div className={Styles.more}>
				<Link href={`/projects/${key}`}>
					<span className={Styles.link}>
						<span>More Info</span>
						<Arrow size={25} />
					</span>
				</Link>
			</div>
			<div className={Styles.date}>{startedAt}</div>
		</div>
	);
};

export default ProjectTile;
