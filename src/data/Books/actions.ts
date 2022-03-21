import { AppDispatch, AppThunk } from 'store';
import { isLoading, getBooksSuccess, setLinks, setErrorMessage } from './slice';

import { getBooks } from 'api/library';

export const setBooks = (): AppThunk => async (dispatch) => {
  try {
    dispatch(isLoading(true));
    const res = await getBooks();
    if (res?.status === 200) {
      const { data } = res;
      dispatch(getBooksSuccess(data.results));
      dispatch(setLinks({ next: data.next, previous: data.previous }));
    }
    dispatch(isLoading(false));
  } catch (e) {
    dispatch(setErrorMessage('Something went wrong'));
    dispatch(isLoading(false));
  }
};
