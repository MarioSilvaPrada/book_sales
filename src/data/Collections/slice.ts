import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../';
import {
  CollectionState,
  CollectionsFilterType,
  CollectionResponse,
} from './types';
export const initialState: CollectionState = {
  loading: false,
  collections: null,
  collectionsFilter: {},
};

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCollections: (state, action: PayloadAction<CollectionResponse>) => {
      state.collections = action.payload;
    },
    setCollectionsFilter: (
      state,
      action: PayloadAction<CollectionsFilterType>
    ) => {
      state.collectionsFilter = action.payload;
    },
  },
});

export const { isLoading, setCollections, setCollectionsFilter } =
  collectionsSlice.actions;

export const collectionSelector = (state: RootState) => state.collections;

const collectionReducer = collectionsSlice.reducer;
export default collectionReducer;
