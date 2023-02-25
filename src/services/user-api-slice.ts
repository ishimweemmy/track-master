import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User, UserState } from "../@types/UserState";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => {
    return {
      loginUser: builder.mutation<UserState, User>({
        query: (body: User) => {
          return {
            url: "",
            method: "POST",
            body,
          };
        },
      }),
    };
  },
});

export const { useLoginUserMutation } = userApiSlice;
