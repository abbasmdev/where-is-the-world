import CountryCard from "components/CountryCard";
import { Filters } from "components";
import { fetchCountries } from "core/api";
import Link from "next/link";
import { useAsync } from "react-async-hook";
import useFilters from "components/Filters/useFilters";
import { Country } from "types";

const CountriesList = () => {
  const { countryName } = useFilters();

  const { loading, result, error } = useAsync(fetchCountries, []);

  const filterAndSortCountriesList = (
    countriesList: Country[],
    countryNameFilter: string = ""
  ): Country[] => {
    return countriesList.filter((c) => {
      let isFiltered = true;
      if (countryNameFilter)
        isFiltered = c.name
          .toLocaleLowerCase()
          .includes(countryNameFilter.toLocaleLowerCase());

      return isFiltered;
    });
  };

  const countriesList = filterAndSortCountriesList(result || [], countryName);

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
