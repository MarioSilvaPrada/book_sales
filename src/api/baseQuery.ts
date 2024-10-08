import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "https://homeserver.marioprada.me/";

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
});
