import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApiSlice = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8090",
  }),
  endpoints: (builder) => {
    return {
      fetchAllCountries: builder.query({
        query() {
          return `https://restcountries.com/v3.1/all?fields=flag,name,latlng`;
        },
      }),
      fetchAllVisitorsData: builder.query<any, number | void>({
        query(page: number) {
          return `/api/data?page=${page}`;
        },
      }),
    };
  },
});

export const { useFetchAllCountriesQuery, useFetchAllVisitorsDataQuery } =
  dataApiSlice;
