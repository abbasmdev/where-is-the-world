import axios from "axios";
import { Country, Flag } from "../types";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const fetchCountries = async (): Promise<Country[]> => {
  const res = await httpClient.get("/all");
  const data: object[] = res.data || [];

  const countriesList: Country[] =
    data?.map((item) => Country.fromJSON(item)) || [];

  return countriesList;
};

const fetchCountryByAlpha2Code = async (
  alpha2Code: string
): Promise<Country> => {
  const res = await httpClient.get(`/alpha/${alpha2Code}`);
  const data: object = res.data;
  if (!data) throw new Error("Country not found");
  return Country.fromJSON(data);
};

const fetchCountriesByByAlpha2Codes = async (
  alpha2Codes: string[]
): Promise<Country[]> => {
  const formatted = alpha2Codes?.reduce(
    (pre, current, index) => `${pre}${index > 0 ? "," : ""}${current}`,
    ""
  );

  const res = await httpClient.get(`/alpha/?codes=${formatted}`);
  const data: object[] = res.data || [];
  const countriesList: Country[] =
    data?.map((item) => Country.fromJSON(item)) || [];

  return countriesList;
};
export {
  httpClient,
  fetchCountries,
  fetchCountryByAlpha2Code,
  fetchCountriesByByAlpha2Codes,
};
