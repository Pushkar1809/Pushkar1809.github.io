import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const AboutMe: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Story</title>
				<meta name="description" content="Pushkar's Developer Story" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>It is me</h1>
			</main>
		</div>
	);
};

export default AboutMe;
