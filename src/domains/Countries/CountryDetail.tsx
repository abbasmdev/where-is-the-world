import { ArrowLeftIcon } from "@heroicons/react/solid";
import Button from "components/Button";
import CountryBorders from "Containers/CountryBorders";
import { fetchCountryByAlpha2Code } from "core/api";
import { useRouter } from "next/router";
import { useAsync } from "react-async-hook";

const CountryDetail = () => {
  const router = useRouter();
  const alpha2Code = router.query.alpha2Code as string;
  const {
    loading: loading,
    result: country,
    error: error,
  } = useAsync(fetchCountryByAlpha2Code, [alpha2Code]);

  const isSuccess = !loading && !error;

  const handleBackClick = () => {
    if (window.history.length > 2) router.back();
    else router.push("/");
  };
  return (
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
      {error && (
        <div className="w-full text-center text-xl font-extrabold">
          ⚠️ Country not found! 🤷‍♂️
        </div>
      )}
      {loading && <span>Loading</span>}
      {isSuccess && (
        <div className="pt-20 flex flex-col abDesktop:flex-row gap-10">
          <img
            alt={`${country?.name} flag`}
            src={country?.flags?.svg}
            className="h-3/4 w-full abDesktop:w-1/2 "
          />
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
              </div>
              {country && (
                <div className="flex flex-col gap-4 abDesktop:flex-row">
                  <h3 className="whitespace-nowrap font-extrabold">
                    Border Countries:
                  </h3>
                  <CountryBorders country={country} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CountryDetail;
