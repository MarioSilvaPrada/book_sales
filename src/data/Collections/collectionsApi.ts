import { api } from "api/api";
import { CategoryResponse, CollectionResponse, CollectionType } from "./types";

export const COLLECTIONS_TAG = "Collections";
export const COLLECTION_DETAIL_TAG = "CollectionDetails";
export const CATEGORY_TAG = "Categories";

export const collectionsApi = api
  .enhanceEndpoints({
    addTagTypes: [COLLECTIONS_TAG, COLLECTION_DETAIL_TAG, CATEGORY_TAG],
  })
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
      getCategories: build.query<CategoryResponse, void>({
        query: () => ({
          method: "GET",
          url: "library/categories/",
        }),
        providesTags: [CATEGORY_TAG],
      }),
    }),
  });

export const {
  useGetCollectionsQuery,
  useGetCollectionByIdQuery,
  useGetCategoriesQuery,
} = collectionsApi;
