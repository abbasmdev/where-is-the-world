import { fetchCountries } from "core/api";
import { CountriesList } from "domains/Countries";
import type { GetStaticProps, NextPage } from "next";
import { Country } from "types";

const HomePage: NextPage<{ countriesList: Country[] }> = ({
  countriesList,
}) => {
  return (
    <>
      <CountriesList countriesList={countriesList} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps<{
  countriesList: Country[];
}> = async (context) => {
  const countries = await fetchCountries();

  return {
    revalidate: 60 * 60 * 24, //update countries list once a day
    props: {
      countriesList: JSON.parse(JSON.stringify(countries)),
    },
  };
};
