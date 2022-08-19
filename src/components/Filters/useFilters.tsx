import { useRouter } from "next/router";
type RegionFilterKeys = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
type SortByFilterKeys = "CountryName" | "Population";

const RegionFilter: Record<RegionFilterKeys, string> = {
  Africa: "Africa",
  Americas: "America",
  Asia: "Asia",
  Europe: "Europe",
  Oceania: "Oceania",
};

const SortByFilter: Record<SortByFilterKeys, string> = {
  CountryName: "Country name",
  Population: "Population",
};

const useFilters = () => {
  const router = useRouter();
  const { query } = router;

  const sortBy = (query.sortBy as SortByFilterKeys) || "";
  const region = (query.region as RegionFilterKeys) || "";

  const countryName = (query.countryName as string) || "";

  const setCountryFilter = (cName: string) => {
    router.query.countryName = cName;
    if (!cName) delete router.query.countryName;
    router.push(router);
  };

  const setSortByFilter = (val: SortByFilterKeys) => {
    router.query.sortBy = val;
    router.push(router);
  };

  const setRegionFilter = (val: RegionFilterKeys) => {
    router.query.region = val;
    router.push(router);
  };

  return {
    countryName,
    setCountryFilter,
    sortBy,
    region,
    setSortByFilter,
    setRegionFilter,
  };
};

export default useFilters;

export { RegionFilter, SortByFilter };
export type { RegionFilterKeys, SortByFilterKeys };
