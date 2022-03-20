import { AppDispatch, AppThunk } from 'store';
import { isLoading, getBooksSuccess } from './slice';

import { getBooks } from 'api/library';

export const setBooks = (): AppThunk => async (dispatch) => {
  try {
    dispatch(isLoading(true));
    const res = await getBooks();
    if (res?.status === 200) {
      dispatch(getBooksSuccess(res.data.results));
    }
    dispatch(isLoading(false));
  } catch (e) {
    console.log({ e });
    dispatch(isLoading(false));
  }
};
