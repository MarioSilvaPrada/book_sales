import { AppDispatch, AppThunk } from 'store';
import {
  isLoading,
  getBooksSuccess,
  setErrorMessage,
  setBookDetail,
  setBookCount,
} from './slice';

import { getBooks, getSingleBook } from 'api/library';

export const setBooks =
  (page?: string, search?: string): AppThunk =>
  async (dispatch: AppDispatch, getState) => {
    try {
      dispatch(isLoading(true));
      const res = await getBooks(page, search);
      if (res?.status === 200) {
        const { data } = res;
        dispatch(getBooksSuccess(data));
        if (getState().books.count === 0) {
          dispatch(setBookCount(data.count));
        }
      }
      dispatch(isLoading(false));
    } catch (e) {
      dispatch(setErrorMessage('Something went wrong'));
      dispatch(isLoading(false));
    }
  };

export const getSingleBookDetails =
  (id: string | null): AppThunk =>
  async (dispatch: AppDispatch) => {
    if (id === null) {
      dispatch(setBookDetail(null));
      return;
    }

    dispatch(isLoading(true));
    const res = await getSingleBook(id);

    if (typeof res === 'string') {
      dispatch(setErrorMessage(res));
      dispatch(isLoading(false));
      return;
    }

    if (res?.status === 200) {
      dispatch(setBookDetail(res.data));
    }
    dispatch(isLoading(false));
  };
