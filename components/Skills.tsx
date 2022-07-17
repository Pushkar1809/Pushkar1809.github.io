import { FC } from "react";
import data from "../content/skills.json";
import { Skill } from "../types/Skill";
import Styles from "../styles/Skills.module.scss";
import { skillsText } from "../content/skills";

const Skills: FC = () => {
	const skills = data as unknown as Skill[];
	return (
		<div className={Styles.skills}>
			<div className={Styles.left}>
				<div className={Styles.title}>Skills and Purpose</div>
			</div>
			<div className={Styles.right}>
				<div className={Styles.list}>
					{skills
						.filter((skill: Skill) => skill.confidence === 3)
						.map((skill, index) => (
							<div key={index} className={Styles.item}>
								<span className={Styles.high}>{skill.name}</span>
							</div>
						))}
				</div>
				<div className={Styles.list}>
					{skills
						.filter((skill: Skill) => skill.confidence === 2)
						.map((skill, index) => (
							<div key={index} className={Styles.item}>
								<span className={Styles.med}>{skill.name}</span>
							</div>
						))}
				</div>
				<div className={Styles.list}>
					{skills
						.filter((skill: Skill) => skill.confidence === 1)
						.map((skill, index) => (
							<div key={index} className={Styles.item}>
								<span className={Styles.low}>{skill.name}</span>
							</div>
						))}
				</div>
				<div className={Styles.text}>
					{skillsText.split("\n\n").map((text, index) => (
						<p key={index}>{text}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
