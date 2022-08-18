import axios from "axios";
import { Country, Flag } from "../types";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

const getCountries = async (): Promise<Country[]> => {
  const res = await httpClient.get("/all");
  const data: object[] = res.data || [];
  const countriesList: Country[] =
    data?.map((item) => Country.fromJSON(item)) || [];

  return countriesList;
};

export { httpClient, getCountries };
