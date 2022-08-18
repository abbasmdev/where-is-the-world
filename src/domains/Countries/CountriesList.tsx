import { getCountries } from "core/api";
import { useAsync } from "react-async-hook";
import React, { useEffect } from "react";
import CountryCard from "components/CountryCard";
import Link from "next/link";

const CountriesList = () => {
  const { loading, result, execute, error } = useAsync(getCountries, []);
  console.log("result>>", result);

  const isSuccess = !loading && !error;
  return (
    <main className="w-full mx-auto  max-w-screen-abDesktop">
      <div className="mt-10"></div>
      {loading && (
        <>
          <span>Loading</span>
        </>
      )}
      {isSuccess && (
        <div className="flex flex-wrap items-center justify-center gap-9">
          {result?.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))}
        </div>
      )}
    </main>
  );
};

export default CountriesList;
