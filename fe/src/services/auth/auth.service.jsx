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
      // Xử lý phản hồi thành công nếu cần
      transformResponse: (response) => response,
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
      query: () => ({
        url: "/auth/me",
        method: "GET",
        headers: (headers) => {
          const token = localStorage.getItem("token");
          if (token) {
            headers.set("Authorization", `Bearer ${token}`);
          }
          return headers;
        },
      }),
    }),
  }),
});

// Export hooks
export const {
  useRegisterMutation,
  useLoginMutation,
  useGetUserInfoQuery,
} = authApi;
