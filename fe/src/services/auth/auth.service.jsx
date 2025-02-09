import { fetchBaseUrl } from "../../auth/auth.service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: fetchBaseUrl }),
  endpoints: (builder) => ({
    // Đăng ký
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      transformResponse: (response) => {
        if (response.token) {
          localStorage.setItem("token", response.token); // Lưu token
        }
        return response;
      },
    }),

    // Đăng nhập
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Lấy thông tin user
    getUserInfo: builder.query({
      query: () => {
        const token = localStorage.getItem("token");
        return {
          url: "/auth/me",
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        };
      },
    }),
    
  }),
});

// Export hooks
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserInfoQuery,
} = authApi;
