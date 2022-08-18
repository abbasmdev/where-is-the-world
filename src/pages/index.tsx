import { CountriesList } from "domains/Countries";
import type { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <CountriesList />
    </>
  );
};

export default HomePage;
