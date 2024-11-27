import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseURL = false
  ? "http://localhost:8000/"
  : "https://homeserver.marioprada.me/";

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  paramsSerializer: (params) => {
    const entries = Object.entries(params);
    const finalString = [];
    for (const [key, value] of entries) {
      // In case we have multiple values for the same key (e.g. ?makeId=2&makeId=3)
      if (typeof value === "object" && Boolean(value)) {
        for (const item of value) {
          finalString.push(`${key}=${item}`);
        }
      } else {
        if (value) {
          finalString.push(`${key}=${value}`);
        }
      }
    }
    return finalString.join("&");
  },
});
