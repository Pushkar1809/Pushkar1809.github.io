import { FC } from "react";
import ProjectTile from "./ProjectTile";
import data from "../content/projects.json";
import { Project } from "../types/Project";
import Styles from "../styles/Content.module.scss";

const Work: FC = () => {
	const projects = data as Project[];
	return (
		<section className={Styles.work}>
			<div className={Styles.title}>
				<h2>My Projects</h2>
			</div>
			<div className={Styles.projects}>
				{projects.map((project: Project, index: number) => (
					<ProjectTile key={index} project={project} />
				))}
			</div>
		</section>
	);
};

export default Work;
