import { SearchIcon } from "@heroicons/react/outline";
import useFilters from "./useFilters";
const Filters = () => {
  const { countryName, setCountryFilter } = useFilters();

  return (
    <div className="flex justify-between  flex-wrap gap-10">
      <div className="w-full bg-abWhite max-w-sm flex shadow-md rounded-md  dark:bg-abBlue-100 ">
        <SearchIcon className="w-6 ml-3" />
        <input
          defaultValue={countryName}
          className="w-full p-3 outline-none rounded-md dark:bg-abBlue-100"
          placeholder="Search for a country...."
          type="text"
          onChange={(e) => setCountryFilter(e.target.value)}
        />
      </div>

      {/* <div className="w-[180px] bg-red-400">Filter by Region</div> */}
    </div>
  );
};

export default Filters;
