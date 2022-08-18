import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alibaba Countries</title>
        <meta name="description" content="Alibaba Countries code challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          {" "}
          <span className="text-3xl font-bold underline text-red-400">
            Hi
          </span>{" "}
          😎🧑‍💻💻
        </p>
      </main>
    </div>
  );
};

export default Home;
