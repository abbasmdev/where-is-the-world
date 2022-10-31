import { areLettersInTextWithOrder } from "core/utils";
import Head from "next/head";
import Link from "next/link";
import { FC, useMemo } from "react";
import { Country } from "types";
import { CountryCard, Filters } from "./components";
import useFilters from "./components/Filters/useFilters";

const CountriesList: FC<{ countriesList: Country[] }> = ({
  countriesList: originalCountriesList,
}) => {
  const {
    countryName: qCountryName,
    region: qRegion,
    sortBy: qSortBy,
  } = useFilters();

  const countriesList: Country[] = useMemo(() => {
    if (!originalCountriesList) return [];
    return (
      originalCountriesList
        .filter((c) =>
          qCountryName
            ? areLettersInTextWithOrder(
                c.name.toLowerCase(),
                qCountryName.toLowerCase()
              )
            : true
        )
        .filter((c) => (qRegion ? c.region === qRegion : true))
        .sort((a, b) => {
          if (qSortBy === "Population") return a.population - b.population;
          if (qSortBy === "CountryName") return a.name.localeCompare(b.name);
          return 0;
        }) || []
    );
  }, [qCountryName, qRegion, qSortBy, originalCountriesList]);

  const isResultEmpty = !countriesList.length;

  return (
    <>
      <Head>
        <title>Countries List - Home</title>
      </Head>
      <main className="flex flex-col w-full gap-10 px-5  max-w-screen-abDesktop text-sm pt-10 mx-auto">
        <Filters />

        {isResultEmpty && <span>No result found</span>}
        {
          <div className="flex flex-wrap items-center justify-center gap-9">
            {countriesList.map((country) => (
              <Link
                href={`/${country?.alpha2Code.toLowerCase()}`}
                key={country.name}
                passHref
              >
                <a className="max-w-xs w-full">
                  <CountryCard country={country} />
                </a>
              </Link>
            ))}
          </div>
        }
      </main>
    </>
  );
};

export default CountriesList;
