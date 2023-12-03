import { api } from "api/api";
import { CollectionResponse } from "./types";

export const COLLECTIONS_TAG = "Collections";

export const collectionsApi = api
  .enhanceEndpoints({ addTagTypes: [COLLECTIONS_TAG] })
  .injectEndpoints({
    endpoints: (build) => ({
      getCollections: build.query<CollectionResponse, void>({
        query: () => ({
          method: "GET",
          url: "library/collections/",
        }),
        providesTags: [COLLECTIONS_TAG],
      }),
    }),
  });

export const { useGetCollectionsQuery } = collectionsApi;
