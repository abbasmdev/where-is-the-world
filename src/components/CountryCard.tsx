import Image from "next/image";
import React, { FC } from "react";
import { Country } from "types";
import clx from "classnames";

const CountryCard: FC<{
  country: Country;
  className?: string;
}> = ({ country, className }) => {
  const { population, region, capital, name, flags } = country;
  return (
    <div
      className={clx(
        "shadow-md rounded-md max-w-xs w-full dark:bg-abBlue-100 pb-12",
        className
      )}
    >
      <img
        alt={`${name} flag`}
        src={flags?.png}
        className="h-[190px] w-full  rounded-tr-md rounded-tl-md"
      />

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
