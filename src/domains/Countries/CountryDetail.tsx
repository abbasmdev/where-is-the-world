import { ArrowLeftIcon } from "@heroicons/react/solid";

import Button from "components/Button";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import { Country } from "types";
import { CountryBorders } from "./components";

const CountryDetail: FC<{ country: Country; borderCountries: Country[] }> = ({
  country,
  borderCountries,
}) => {
  const router = useRouter();

  const pageTitle = `Alibaba Countries List - ${country?.name}`;
  const handleBackClick = () => {
    if (window.history.length > 2) router.back();
    else router.push("/");
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="w-full mx-auto  max-w-screen-abDesktop p-10 overflow-hidden text-lg">
        <nav>
          <Button
            onClick={handleBackClick}
            className="flex gap-2 items-center hover:scale-105 duration-100"
          >
            <ArrowLeftIcon width={20} />
            Back
          </Button>
        </nav>

        {
          <div className="pt-20 flex flex-col abDesktop:flex-row gap-10">
            {country?.flags?.svg && (
              <div className=" abDesktop:w-1/2">
                <Image
                  alt={`${country?.name} flag`}
                  src={country.flags.svg}
                  layout="responsive"
                  width={"100%"}
                  height="60%"
                  loading="lazy"
                />
              </div>
            )}

            <div className="flex flex-col gap-10 justify-center">
              <h3 className="font-extrabold">{country?.name}</h3>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col abDesktop:flex-row gap-10">
                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-semibold">Native Name:</span>{" "}
                      {country?.nativeName}
                    </p>
                    <p>
                      <span className="font-semibold">Population:</span>{" "}
                      {Intl.NumberFormat().format(country?.population || 0)}
                    </p>
                    <p>
                      <span className="font-semibold">Region:</span>{" "}
                      {country?.region}
                    </p>
                    <p>
                      <span className="font-semibold">Sub Region:</span>{" "}
                      {country?.subregion}
                    </p>
                    <p>
                      <span className="font-semibold">Capital:</span>{" "}
                      {country?.capital}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p>
                      <span className="font-semibold">Top Level Domain:</span>{" "}
                      {country?.topLevelDomain?.join(", ")}
                    </p>
                    <p>
                      <span className="font-semibold">Currencies:</span>{" "}
                      {country?.currencies
                        ?.map((item) => item.name)
                        ?.join(", ")}
                    </p>
                    <p>
                      <span className="font-semibold">Languages:</span>{" "}
                      {country?.languages?.map((item) => item.name)?.join(", ")}
                    </p>
                  </div>
                </div>
                {country && (
                  <div className="flex flex-col gap-4 abDesktop:flex-row">
                    <h3 className="whitespace-nowrap font-extrabold">
                      Border Countries:
                    </h3>
                    <CountryBorders countryBorders={borderCountries} />
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      </main>
    </>
  );
};

export default CountryDetail;
