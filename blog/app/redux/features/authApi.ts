/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.googleapis.com", // API Google
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (accessToken) => ({
        url: "/oauth2/v3/userinfo",
        method: "GET",
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    }),
    getBlogs: builder.query({
      query: () => ({
        url: "/blogger/v3/users/self/blogs",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetBlogsQuery } = authApi;
