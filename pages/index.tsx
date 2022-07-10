import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pushkar Borkar</title>
				<meta name="description" content="Pushkar's Developer Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Wow Portfolio</h1>
			</main>
		</div>
	);
};

export default Home;
