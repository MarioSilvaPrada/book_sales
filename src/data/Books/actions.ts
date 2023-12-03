import { AppDispatch, AppThunk } from "store";
import { isLoading, setErrorMessage, setBookDetail } from "./slice";

import { getSingleBook } from "api/library";

export const getSingleBookDetails =
  (id: string | null): AppThunk =>
  async (dispatch: AppDispatch) => {
    if (id === null) {
      dispatch(setBookDetail(null));
      return;
    }

    dispatch(isLoading(true));
    const res = await getSingleBook(id);

    if (typeof res === "string") {
      dispatch(setErrorMessage(res));
      dispatch(isLoading(false));
      return;
    }

    if (res?.status === 200) {
      dispatch(setBookDetail(res.data));
    }
    dispatch(isLoading(false));
  };
