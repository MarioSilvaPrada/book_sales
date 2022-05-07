import { isLoading, setCollections, setCollectionsFilter } from './slice';
import { getAllCollections, getSingleCollection } from 'api/library';
import { AppDispatch, AppThunk } from 'store';

export const getCollections = (): AppThunk => async (dispatch: AppDispatch) => {
  try {
    dispatch(isLoading(true));
    const res = await getAllCollections();
    if (res?.status === 200) {
      dispatch(setCollections(res.data));
    }
    dispatch(isLoading(false));
  } catch (e) {
    dispatch(isLoading(false));
  }
};

export const getBooksFromCollection =
  (id: string): AppThunk =>
  async (dispatch: AppDispatch, getState) => {
    const collectionFilterObject = getState().collections.collectionsFilter;

    if (!(id in collectionFilterObject)) {
      try {
        dispatch(isLoading(true));
        const res = await getSingleCollection(id);

        if (res?.status === 200) {
          const results = res.data.books_collection;
          const newObj = { ...collectionFilterObject, [id]: results };
          dispatch(setCollectionsFilter(newObj));
        }
        dispatch(isLoading(false));
      } catch (e) {
        dispatch(isLoading(false));
      }
    }
  };
