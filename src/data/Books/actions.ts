import { AppDispatch, AppThunk } from 'store';
import { isLoading, getBooksSuccess, setErrorMessage } from './slice';

import { getBooks } from 'api/library';

export const setBooks =
  (page?: string, search?: string): AppThunk =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(isLoading(true));
      const res = await getBooks(page, search);
      if (res?.status === 200) {
        const { data } = res;
        dispatch(getBooksSuccess(data));
      }
      dispatch(isLoading(false));
    } catch (e) {
      dispatch(setErrorMessage('Something went wrong'));
      dispatch(isLoading(false));
    }
  };
