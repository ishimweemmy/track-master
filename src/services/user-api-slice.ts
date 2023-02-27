import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserSubmitData } from "../@types/UserState";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://trackmaster.onrender.com",
  }),
  endpoints: (builder) => {
    return {
      loginUser: builder.mutation({
        query: (body: UserSubmitData) => {
          return {
            url: "/api/users/login",
            method: "POST",
            body,
          };
        },
      }),
      signupUser: builder.mutation({
        query: (body: UserSubmitData) => {
          return {
            url: "/api/users/signup",
            method: "POST",
            body,
          };
        },
      }),
      updateUser: builder.mutation({
        query: (body: UserSubmitData) => {
          const { userId, password, email } = body;
          return {
            url: `/api/users/${userId}`,
            method: "PATCH",
            body: password,
          };
        },
      }),
    };
  },
});

export const {
  useLoginUserMutation,
  useSignupUserMutation,
  useUpdateUserMutation,
} = userApiSlice;
