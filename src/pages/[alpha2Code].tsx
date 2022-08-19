import {
  fetchCountriesByAlpha2Codes,
  fetchCountryByAlpha2Code,
} from "core/api";
import { CountryDetail } from "domains/Countries";
import { GetStaticProps } from "next";
import { FC } from "react";
import { Country } from "types";

type Props = { country: Country; borderCountries: [] };

const CountryDetailPage: FC<Props> = ({ country, borderCountries }) => {
  return <CountryDetail country={country} borderCountries={borderCountries} />;
};

export default CountryDetailPage;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const alpha2Code = context?.params?.alpha2Code as string;

  if (!alpha2Code)
    return {
      notFound: true,
    };
  let country: Country;
  let borderCountries: Country[] = [];
  try {
    country = await fetchCountryByAlpha2Code(alpha2Code);
    const borders = country.borders;

    borderCountries = borders.length
      ? await fetchCountriesByAlpha2Codes(borders)
      : [];
  } catch (error) {
    console.log(error);

    return {
      notFound: true,
    };
  }

  return {
    revalidate: 60 * 60 * 24, //update country detail once a day
    props: {
      country: JSON.parse(JSON.stringify(country)),
      borderCountries: JSON.parse(JSON.stringify(borderCountries)),
    },
  };
};
