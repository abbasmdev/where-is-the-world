import Button from "components/Button";

import Link from "next/link";
import { FC } from "react";
import { Country } from "types";

const CountryBorders: FC<{ countryBorders: Country[] }> = ({
  countryBorders,
}) => {
  if (!countryBorders?.length) return <span>No boundary with any country</span>;

  return (
    <ul className="flex gap-3 flex-wrap">
      {countryBorders?.map((c) => (
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
