import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/common/Footer";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Pushkar Borkar</title>
				<meta name="description" content="Pushkar's Developer Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Hero />
				<Work />
				<Skills />
				<Contact />
				<Footer />
			</main>
		</div>
	);
};

export default Home;
