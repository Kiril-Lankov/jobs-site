import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAuthData, resetAuth } from "./authSlice";

const apiUrl = "http://localhost:3000/api/auth";

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  prepareHeaders: (headers) => {
    return headers;
  },
});

const customBaseQuery = async (args, api, extraOptions) => {
  // Determine if the request is for a registration endpoint
  const isRegistrationRequest = args.url.includes("/register/");
  // Set credentials based on the request type
  const result = await baseQuery(args, api, {
    ...extraOptions,
    credentials: isRegistrationRequest ? "omit" : "include",
  });

  // save to locale storage
  localStorage.setItem("token", JSON.stringify(result.data));
  return result;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    // Employee Login
    loginEmployee: builder.mutation({
      query: (credentials) => ({
        url: "/login/employee",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;

          // dispatch(setAuthData({ userInfo: data.payload }));
          dispatch(setAuthData({ userInfo: data }));
        } catch (error) {
          console.error("Employee login failed:", error);
        }
      },
    }),

    // Company Login
    loginCompany: builder.mutation({
      query: (credentials) => ({
        url: "/login/company",
        method: "POST",
        body: credentials,
      }),
      onQueryStarted: async (credentials, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthData({ userInfo: data.payload }));
        } catch (error) {
          console.error("Company login failed:", error);
        }
      },
    }),

    // Employee Registration
    registerEmployee: builder.mutation({
      query: (userData) => ({
        url: "/register/employee",
        method: "POST",
        body: userData,
      }),
    }),

    // Company Registration
    registerCompany: builder.mutation({
      query: (userData) => ({
        url: "/register/company",
        method: "POST",
        body: userData,
      }),
    }),

    // Token Refresh
    refreshToken: builder.mutation({
      query: () => ({
        url: "/token",
        method: "POST",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuthData({ userInfo: data.payload }));
        } catch (error) {
          console.error("Token refresh failed:", error);
          dispatch(resetAuth());
        }
      },
    }),

    // Logout
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(resetAuth());
        } catch (error) {
          console.error("Logout request failed:", error);
          dispatch(resetAuth());
        }
      },
    }),
  }),
});

export const {
  useLoginEmployeeMutation,
  useLoginCompanyMutation,
  useRegisterEmployeeMutation,
  useRegisterCompanyMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
} = authApi;
