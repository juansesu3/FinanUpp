import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpisQuery } = api;
