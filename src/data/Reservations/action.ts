import { isLoading, setReservationError, setReservationHasDone } from './slice';

import { reserveBook, ReservationsParams } from 'api/library';
import { AppDispatch, AppThunk } from 'store';
import axios from 'axios';

export const sendReservation =
  (params: ReservationsParams): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(isLoading(true));
    console.log({ params });
    const res = await reserveBook(params);
    console.log({ here: res });

    if (axios.isAxiosError(res)) {
      if (res?.response) {
        dispatch(setReservationError(res.response));
      } else {
        dispatch(res?.message);
      }
      dispatch(isLoading(false));
      return;
    }
    if (typeof res === 'string') {
      dispatch(setReservationError(res));
      dispatch(isLoading(false));
      return;
    }

    dispatch(setReservationHasDone());
    dispatch(isLoading(false));
  };
