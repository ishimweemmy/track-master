import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataApiSlice = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trackmaster.onrender.com",
  }),
  endpoints: (builder) => {
    return {
      fetchAllCountries: builder.query({
        query() {
          return `https://restcountries.com/v3.1/all?fields=flag,name`;
        },
      }),
      fetchAllVisitorsData: builder.query<any, number | string | void>({
        query(page: number | string) {
          if (page != undefined) {
            return `/api/data?page=${page}`;
          }
          return `/api/data`;
        },
      }),
    };
  },
});

export const { useFetchAllCountriesQuery, useFetchAllVisitorsDataQuery } =
  dataApiSlice;
