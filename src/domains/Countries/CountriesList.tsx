import { Filters } from "components";
import CountryCard from "components/CountryCard";
import useFilters, { SortByFilter } from "components/Filters/useFilters";
import { fetchCountries } from "core/api";
import Link from "next/link";
import { useMemo } from "react";
import { useAsync } from "react-async-hook";
import { Country } from "types";

const CountriesList = () => {
  const {
    countryName: qCountryName,
    region: qRegion,
    sortBy: qSortBy,
  } = useFilters();

  const { loading, result, error } = useAsync(fetchCountries, []);

  const countriesList: Country[] = useMemo(() => {
    if (!result) return [];
    return (
      result
        .filter((c) =>
          qCountryName
            ? c.name.toLowerCase().includes(qCountryName.toLowerCase())
            : true
        )
        .filter((c) => (qRegion ? c.region === qRegion : true))
        .sort((a, b) => {
          if (qSortBy === "Population") return a.population - b.population;
          if (qSortBy === "CountryName") return a.name.localeCompare(b.name);
          return 0;
        }) || []
    );
  }, [qCountryName, qRegion, qSortBy, result]);

  const isSuccess = !loading && !error;
  const isResultEmpty = isSuccess && !countriesList.length;

  return (
    <main className="flex flex-col w-full gap-10 px-5  max-w-screen-abDesktop text-sm pt-10 mx-auto">
      <Filters />

      {loading && <span>Loading</span>}
      {isResultEmpty && <span>No result found</span>}
      {isSuccess && (
        <div className="flex flex-wrap items-center justify-center gap-9">
          {countriesList.map((country) => (
            <Link href={`/${country?.alpha2Code}`} key={country.name} passHref>
              <a className="max-w-xs w-full">
                <CountryCard
                  country={country}
                  className="hover:scale-105  duration-200"
                />
              </a>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
};

export default CountriesList;
