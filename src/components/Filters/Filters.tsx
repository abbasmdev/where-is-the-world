import { SearchIcon } from "@heroicons/react/outline";
import { Option, Select } from "components/Select";

import useFilters, {
  RegionFilter,
  RegionFilterKeys,
  SortByFilter,
  SortByFilterKeys,
} from "./useFilters";
const Filters = () => {
  const {
    countryName,
    setCountryFilter,
    region,
    sortBy,
    setRegionFilter,
    setSortByFilter,
  } = useFilters();

  return (
    <div className="flex justify-between  flex-wrap gap-10">
      <div className="w-full bg-abWhite max-w-sm flex shadow-sm rounded-md  dark:bg-abBlue-100 ">
        <SearchIcon className="w-6 ml-3" />
        <input
          defaultValue={countryName}
          className="w-full p-3 outline-none rounded-md dark:bg-abBlue-100"
          placeholder="Search for a country...."
          type="text"
          onInput={(e) => {
            setCountryFilter(e.currentTarget.value);
          }}
        />
      </div>

      <div className="flex flex-wrap gap-4">
        <Select
          value={region}
          onChange={({ target: { value } }) =>
            setRegionFilter(value as RegionFilterKeys)
          }
        >
          <Option disabled value="" label="Filter by Region" />
          {Object.entries(RegionFilter).map(([key, value]) => (
            <Option key={key} label={value} value={key} title={value} />
          ))}
        </Select>

        <Select
          value={sortBy}
          onChange={({ target: { value } }) =>
            setSortByFilter(value as SortByFilterKeys)
          }
        >
          <Option disabled value="" label="Sort by" />

          {Object.entries(SortByFilter).map(([key, value]) => (
            <Option key={key} label={value} value={key} title={value} />
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Filters;
