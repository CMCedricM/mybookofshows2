import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Book Of Shows 2</title>
        <meta name="description" content="A Website to create watchlists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full"></main>
    </>
  );
};

export default Home;
