import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Projects: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Projects</title>
				<meta name="description" content="Pushkar's Projects Complete" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Wow Projects</h1>
			</main>
		</div>
	);
};

export default Projects;
