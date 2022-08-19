import Image from "next/image";
import React, { FC } from "react";
import { Country } from "types";

const CountryCard: FC<{
  country: Country;
}> = ({ country }) => {
  const { population, region, capital, name, flags } = country;
  return (
    <div className="shadow-md rounded-md max-w-xs w-full dark:bg-abBlue-100 pb-12 hover:scale-105  duration-200">
      {country?.flags?.svg && (
        <Image
          alt={`${country?.name} flag`}
          src={country.flags.png}
          layout="responsive"
          width={"100%"}
          height="60%"
          loading="lazy"
        />
      )}

      <h3 className="font-bold p-6">{name}</h3>
      <div className="px-6 flex flex-col gap-1 ">
        <p>
          <span className="font-semibold">Population:</span>{" "}
          {Intl.NumberFormat().format(population)}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
