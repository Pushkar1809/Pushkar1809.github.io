import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../../content/projects.json";
import { Project } from "../../types/Project";
import Badge from "../../components/common/Badge";
import Styles from "../../styles/Projects.module.scss";
import ArrowDown from "../../components/common/ArrowDown";
import Link from "next/link";

const ProjectInfo: NextPage = () => {
	const projects = data as Project[];
	const router = useRouter();
	const { id } = router.query;
	const {
		key,
		name,
		shortDescription,
		tags,
		isHackathonRelated,
		hackathonName,
		startedAt,
		endedAt,
		description,
		inProgress,
		links,
		images,
	} = projects[Number(id)];

	return (
		<div>
			<Head>
				<title>
					{key}: {name}
				</title>
				<meta name="description" content={name} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={Styles.main}>
				<Link href="/" className={Styles.back}>
					<ArrowDown size={40} />
				</Link>

				<div className={Styles.top}>
					<div className={Styles.info}>
						<div className={Styles.title}>
							<h1>{name}</h1>
							<p>{shortDescription}</p>
							{inProgress && <div className={Styles.ip}>Currently Working</div>}
						</div>
						<div className={Styles.date}>
							{startedAt} {endedAt !== "*" ? `- ${endedAt}` : "*"}
						</div>
						{isHackathonRelated && (
							<div className={Styles.hack}>{hackathonName}</div>
						)}
					</div>
					<div className={Styles.links}>
						{links.map((link, index: number) => (
							<a key={index} href={link.link}>
								{link.where}
							</a>
						))}
					</div>
				</div>
				<div className={Styles.content}>
					<div className={Styles.images}>
						{images.map((image, index: number) => (
							<Image
								key={index}
								className={Styles.image}
								src={image.src}
								alt={image.alt}
								width={500}
								height={280}
							/>
						))}
					</div>
					<div className={Styles.text}>
						<div className={Styles.tags}>
							{tags.map((tag: string, index: number) => (
								<Badge key={index} text={tag} />
							))}
						</div>
						<div className={Styles.description}>
							{description.split("\n\n").map((line: string, index: number) => (
								<p key={index}>{line}</p>
							))}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default ProjectInfo;
