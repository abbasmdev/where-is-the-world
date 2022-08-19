import { useRouter } from "next/router";

const useFilters = () => {
  const router = useRouter();
  const { query } = router;

  const countryName = (query.countryName as string) || "";

  const setCountryFilter = (cName: string) => {
    router.query.countryName = cName;
    if (!cName) delete router.query.countryName;
    router.push(router);
  };

  return { countryName, setCountryFilter };
};

export default useFilters;
