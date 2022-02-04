import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Search from "../Components/Search/Search";
import Result from "../Components/Result/Result";
import MatchHistory from "../Components/MatchHistory/MatchHistory";
import React, { useState } from "react";

export default function Home() {
  const [result, setResult] = useState({});

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="./">League App!</a>
        </h1>

        <p className={styles.description}>
          Get started by searching a summoner:{" "}
        </p>

        <div className={styles.grid}>
          <Search result={result} setResult={setResult}></Search>
          <Result result={result}></Result>
          <MatchHistory matchIDs={result.matchIDs}></MatchHistory>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
