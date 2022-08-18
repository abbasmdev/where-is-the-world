import CountryCard from "components/CountryCard";
import { fetchCountries } from "core/api";
import Link from "next/link";
import { useAsync } from "react-async-hook";
import { Country } from "types";

const CountriesList = () => {
  const { loading, result, error } = useAsync(fetchCountries, []);

  const isSuccess = !loading && !error;

  return (
    <main className="w-full mx-auto  max-w-screen-abDesktop text-sm">
      <div className="mt-10"></div>
      {loading && <span>Loading</span>}
      {isSuccess && (
        <div className="flex flex-wrap items-center justify-center gap-9">
          {result?.map((country) => (
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
