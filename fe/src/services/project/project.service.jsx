import { fetchBaseUrl } from "../../auth/auth.service";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery: fetchBaseQuery({ baseUrl: fetchBaseUrl }),
  endpoints: (builder) => ({
    // Lấy danh sách dự án
    getProjects: builder.query({
      query: () => "/projects",
    }),
    // Lấy chi tiết dự án theo ID
    getProjectById: builder.query({
      query: (id) => `/projects/${id}`,
    }),
  }),
});

// Export hooks
export const { useGetProjectsQuery, useGetProjectByIdQuery } = projectApi;
