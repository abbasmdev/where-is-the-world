import Button from "components/Button";
import { fetchCountriesByByAlpha2Codes } from "core/api";
import Link from "next/link";
import React, { FC, useMemo } from "react";
import { useAsync } from "react-async-hook";
import { Country } from "types";

const CountryBorders: FC<{ country: Country }> = ({ country }) => {
  const params: string[] = useMemo(() => country.borders || [], [country]);
  const { loading, result, error } = useAsync(
    fetchCountriesByByAlpha2Codes,
    [params],
    { executeOnMount: params.length > 0 }
  );

  if (loading) return <span>loading....</span>;
  if (error) return <span>error:{error.message}</span>;
  if (!result?.length) return <span>No boundary with any country</span>;

  return (
    <ul className="flex gap-3 flex-wrap">
      {result?.map((c) => (
        <Link href={`/${c.alpha2Code}`} type="li" key={c.name}>
          <a>
            <Button className="w-[140px]  !py-1  text-center !px-3 overflow-hidden text-ellipsis whitespace-pre">
              {c.name}
            </Button>
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default CountryBorders;
