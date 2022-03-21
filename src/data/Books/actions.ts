import { AppDispatch, AppThunk } from 'store';
import { isLoading, getBooksSuccess, setErrorMessage } from './slice';

import { getBooks } from 'api/library';

export const setBooks =
  (page?: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const res = await getBooks(page);
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
