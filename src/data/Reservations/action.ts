import {
  isLoading,
  setReservationError,
  setReservationHasDone,
  resetErrors,
} from './slice';

import { reserveBook, ReservationsParams } from 'api/library';
import { AppDispatch, AppThunk } from 'store';
import axios from 'axios';

export const sendReservation =
  (params: ReservationsParams): AppThunk =>
  async (dispatch: AppDispatch) => {
    dispatch(isLoading(true));
    const res = await reserveBook(params);

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

    dispatch(resetErrors());
    dispatch(setReservationHasDone());
    dispatch(isLoading(false));
  };
