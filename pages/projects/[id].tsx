import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

const AboutMe: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div className={styles.container}>
			<Head>
				<title>Project - {id}</title>
				<meta name="description" content="Pushkar's Project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Project No. {id}</h1>
			</main>
		</div>
	);
};

export default AboutMe;
