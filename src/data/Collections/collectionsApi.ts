import { api } from "api/api";
import { CollectionResponse, CollectionType } from "./types";

export const COLLECTIONS_TAG = "Collections";
export const COLLECTION_DETAIL_TAG = "CollectionDetails";

export const collectionsApi = api
  .enhanceEndpoints({ addTagTypes: [COLLECTIONS_TAG, COLLECTION_DETAIL_TAG] })
  .injectEndpoints({
    endpoints: (build) => ({
      getCollections: build.query<CollectionResponse, void>({
        query: () => ({
          method: "GET",
          url: "library/collections/",
        }),
        providesTags: [COLLECTIONS_TAG],
      }),
      getCollectionById: build.query<CollectionType, { id: string }>({
        query: ({ id }) => ({
          method: "GET",
          url: "library/collections/" + id,
        }),
        providesTags: [COLLECTIONS_TAG, COLLECTION_DETAIL_TAG],
      }),
    }),
  });

export const { useGetCollectionsQuery, useGetCollectionByIdQuery } =
  collectionsApi;
